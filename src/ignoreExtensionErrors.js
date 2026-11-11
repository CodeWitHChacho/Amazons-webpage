const EXTENSION_PROTOCOL_PATTERN = /^(chrome|moz)-extension:\/\//i;
const EXTENSION_SOURCE_PATTERN = /(inpage\.js|inject\.js|lockdown-install\.js|enkrypt|solana|wallet|phantom|metamask|mfgccjchihfkkindfppnaooecgfneiii)/i;
const EXTENSION_MESSAGE_PATTERN = /(read only property 'solana'|cannot assign to read only property 'solana'|failed to read a named property 'origin' from 'location'|blocked a frame with origin|chainId|only a getter)/i;

const getText = (value) => {
  if (typeof value === 'string') {
    return value;
  }

  if (!value || typeof value !== 'object') {
    return '';
  }

  if (typeof value.message === 'string') {
    return value.message;
  }

  if (typeof value.reason === 'string') {
    return value.reason;
  }

  if (typeof value.stack === 'string') {
    return value.stack;
  }

  return String(value);
};

const isExtensionError = (event) => {
  const sources = [
    event?.filename,
    event?.message,
    event?.error?.stack,
    event?.error?.message,
    event?.reason?.stack,
    event?.reason?.message,
    getText(event?.error),
    getText(event?.reason),
  ].filter(Boolean);

  return sources.some(
    (source) =>
      EXTENSION_PROTOCOL_PATTERN.test(source) ||
      EXTENSION_SOURCE_PATTERN.test(source) ||
      EXTENSION_MESSAGE_PATTERN.test(source)
  );
};

export const ignoreExtensionErrors = () => {
  if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
    return;
  }

  window.addEventListener(
    'error',
    (event) => {
      if (!isExtensionError(event)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
    },
    true
  );

  window.addEventListener(
    'unhandledrejection',
    (event) => {
      if (!isExtensionError(event)) {
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
    },
    true
  );
};