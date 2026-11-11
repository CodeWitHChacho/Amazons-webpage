// src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'light', icon: Sun },
    { name: 'dark', icon: Moon },
    { name: 'system', icon: Monitor },
  ];

  return (
    <div className="flex items-center space-x-1 p-1 rounded-full bg-slate-200 dark:bg-slate-800">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === t.name
              ? 'bg-white dark:bg-slate-700'
              : 'hover:bg-slate-300/50 dark:hover:bg-slate-700/50'
          }`}
          aria-label={`Switch to ${t.name} theme`}
        >
          <t.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;