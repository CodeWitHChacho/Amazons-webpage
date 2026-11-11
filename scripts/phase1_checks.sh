#!/usr/bin/env bash
# =====================================================================
# phase1_checks.sh  -  READ-ONLY server checks for Phase 1
# STATUS: DRAFT, syntax-checked only (bash -n), never run on your server.
#
# What it does: prints information. It does not install, edit, restart,
# delete or write anything except the report file it creates in /tmp.
# The only network traffic: HEAD/GET requests to amazons.co.ke and the
# two API hosts (the same requests a browser makes), and DNS lookups.
# It never calls the installation-request POST endpoint.
#
# Run as root on the server:
#   bash phase1_checks.sh
# Output also saved to: /tmp/phase1-report-<date>.txt
#
# BEFORE PASTING THE REPORT BACK: read it. The nginx section prints
# vhost files; remove any password, token or key if you see one.
# =====================================================================

REPORT="/tmp/phase1-report-$(date +%Y%m%d-%H%M%S).txt"
DOMAIN="amazons.co.ke"
WEBROOT="/var/www/html"
LANDING="/var/www/html/webpage"
VHOST="/etc/nginx/sites-enabled/amazonswebpage"

exec > >(tee "$REPORT") 2>&1

section() { printf '\n\n===== %s =====\n' "$1"; }
run() { printf '\n$ %s\n' "$*"; "$@" 2>&1 | head -n "${MAXLINES:-80}"; }
have() { command -v "$1" >/dev/null 2>&1; }

echo "Phase 1 report - $(date -Is) - host: $(hostname)"

section "1. System"
run uname -a
run cat /etc/os-release
run nproc
run free -h
run df -h /
run node --version
run php --version
run composer --version

section "2. nginx: listeners, hosts, roots (no secrets expected)"
run nginx -v
run ls -la /etc/nginx/sites-enabled/
echo; echo '$ grep of listen/server_name/root/alias/autoindex/ssl/proxy_pass/default_server'
grep -RnE '^\s*(listen|server_name|root|alias|autoindex|ssl_certificate|proxy_pass|fastcgi_pass|return|try_files)\b' \
  /etc/nginx/sites-enabled/ /etc/nginx/conf.d/ 2>/dev/null | head -n 200
section "2b. Full landing-page vhost (review for secrets before pasting)"
if [ -f "$VHOST" ]; then cat "$VHOST"; else echo "Not found: $VHOST"; ls /etc/nginx/sites-enabled/; fi

section "3. How HTTPS reaches the site"
echo "Look for: via / cf-ray / server / x-forwarded headers, and whether HTTPS answers at all."
run curl -s -o /dev/null -D - --max-time 10 "http://$DOMAIN/"
run curl -s -o /dev/null -D - --max-time 10 "https://$DOMAIN/"
run curl -s -o /dev/null -D - --max-time 10 "https://www.$DOMAIN/"
if have dig; then
  run dig +short "$DOMAIN"
  run dig +short "www.$DOMAIN"
else echo "dig not installed (apt package: dnsutils) - skipped"; fi
run ip -br addr
section "3b. Tailscale"
if have tailscale; then
  run tailscale status
  run tailscale serve status
  run tailscale funnel status
else echo "tailscale CLI not found"; fi

section "4. PostgreSQL exposure"
run ss -ltnp
if have runuser && have psql; then
  run runuser -u postgres -- psql -Atc "show listen_addresses; show port; show ssl; show password_encryption;"
  run runuser -u postgres -- psql -c '\l'
  run runuser -u postgres -- psql -c '\du'
else echo "runuser or psql not found - skipped"; fi
CONF=$(ls /etc/postgresql/*/main/pg_hba.conf 2>/dev/null | head -n 1)
if [ -n "$CONF" ]; then
  echo; echo "\$ active rules in $CONF"; grep -vE '^\s*(#|$)' "$CONF"
else echo "pg_hba.conf not found at /etc/postgresql/*/main/"; fi

section "5. Firewall (whichever tool exists)"
if have ufw; then run ufw status verbose; fi
if have nft; then MAXLINES=150 run nft list ruleset; fi
if have iptables; then MAXLINES=100 run iptables -S; fi
echo "Also check any firewall at the router/provider level - not visible from here."

section "6. Files in the web root, and are they downloadable?"
run ls -la "$WEBROOT"
echo
echo "Checks against the PUBLIC site (200 = downloadable, 404 = not):"
for p in "/AmazonsSites.zip" "/AmazonsSitesDev.zip" "/AmazonsSitesDev-schema-cleanup.zip" \
         "/images/originals/man-standing.png" "/static/js/main.22c15502.js.map" "/.env" "/.git/config"; do
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 "http://$DOMAIN$p")
  printf '%-48s HTTP %s\n' "$p" "$code"
done

section "7. Landing repo: git state"
if have runuser && id amazons >/dev/null 2>&1; then
  run runuser -u amazons -- git -C "$LANDING" status --short
  run runuser -u amazons -- git -C "$LANDING" log -n 20 --format='%h %an %ad %s' --date=iso
  run runuser -u amazons -- git -C "$LANDING" remote -v
  run runuser -u amazons -- git -C "$LANDING" branch -a
else echo "user 'amazons' or runuser not found - skipped"; fi
run stat -c '%n  modified: %y' "$LANDING/build/index.html"

section "8. The two APIs (GET/HEAD only)"
if have dig; then run dig +short v1.api.amazons.co.ke; run dig +short bit1.amazons.co.ke; fi
run curl -s -o /dev/null -D - --max-time 10 -H "Origin: https://$DOMAIN" \
  "https://v1.api.amazons.co.ke/api/services/home/plans"

section "9. What are AmazonsSites / AmazonsSitesDev?"
for d in AmazonsSites AmazonsSitesDev; do
  echo; echo "--- $WEBROOT/$d (top level) ---"
  ls -la "$WEBROOT/$d" 2>&1 | head -n 40
  for f in artisan composer.json package.json manage.py requirements.txt Dockerfile docker-compose.yml; do
    [ -e "$WEBROOT/$d/$f" ] && echo "FOUND: $f"
  done
done
echo; echo '$ running app processes'
ps aux | grep -E 'php|gunicorn|uwsgi|node|python|java|dotnet' | grep -v grep | head -n 20

section "10. DNS ownership"
if have dig; then run dig NS "$DOMAIN" +short; run dig SOA "$DOMAIN" +short; fi
echo "Registrar login: ask your company who holds it. Not discoverable from here."

section "11. Backups and scheduled jobs"
run systemctl list-timers --all
run crontab -l
run ls -la /etc/cron.d /var/backups
run systemctl list-units --type=service --state=running --no-pager

section "12. What apt would offer (no install)"
run apt-cache policy php8.4-fpm
run apt-cache policy composer
run systemctl is-active unattended-upgrades

echo; echo "===== DONE. Report saved to: $REPORT ====="
echo "Review it for secrets, then paste it back."
