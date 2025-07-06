import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
        theme === 'dark' 
          ? 'translate-x-6 bg-gradient-to-r from-purple-500 to-pink-500' 
          : 'translate-x-0 bg-gradient-to-r from-yellow-400 to-orange-400'
      }`}>
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-white" />
        ) : (
          <Sun className="w-3 h-3 text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;