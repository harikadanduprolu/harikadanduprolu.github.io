
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 transition-all duration-300 ease-in-out"
    >
      {theme === 'light' && <Sun className="h-5 w-5 animate-fade-in" />}
      {theme === 'dark' && <Moon className="h-5 w-5 animate-fade-in" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
