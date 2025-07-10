
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      
   
      {/* Geometric shapes */}
      <div className="absolute top-8 right-1/4 w-4 h-4 border border-primary/30 rotate-45 animate-spin-slow"></div>
      <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/3 right-8 w-2 h-8 bg-gradient-to-b from-primary/30 to-transparent rounded-full animate-pulse-slow"></div>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Enhanced back to top button */}
          <a 
            href="#hero" 
            className="group relative p-4 mb-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
          </a>
          
          {/* Enhanced portfolio branding */}
          <a href="#hero" className="relative group mb-8">
            <span className="text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-text-glow">
              Harika Danduprolu
            </span>
            <span className="text-primary text-3xl font-bold animate-pulse">.</span>
            {/* Underline effect */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500"></div>
          </a>
          
          {/* Enhanced social media icons */}
          <div className="flex space-x-6 mb-8">
            <a href="#" className="group relative p-3 rounded-full bg-gradient-to-r from-white/5 to-gray-100/10 dark:from-gray-800/20 dark:to-gray-700/25 hover:from-primary/20 hover:to-accent/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            </a>
            <a href="#" className="group relative p-3 rounded-full bg-gradient-to-r from-white/5 to-gray-100/10 dark:from-gray-800/20 dark:to-gray-700/25 hover:from-primary/20 hover:to-accent/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            </a>
            <a href="#" className="group relative p-3 rounded-full bg-gradient-to-r from-white/5 to-gray-100/10 dark:from-gray-800/20 dark:to-gray-700/25 hover:from-primary/20 hover:to-accent/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:rotate-6">
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1 15h-2v-6h2v6zm-1-6.7c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zM17 15h-2v-3c0-.77-.22-1.3-.7-1.57-.42-.25-.98-.25-1.41 0-.48.27-.7.8-.7 1.57v3h-2v-6h2v.67c.67-.7 1.44-1.09 2.28-1.09 1.71 0 2.52 1.06 2.52 3.13V15z" clipRule="evenodd" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* Enhanced navigation links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#timeline", label: "Timeline" },
              { href: "#contact", label: "Contact" }
            ].map(({ href, label }) => (
              <a 
                key={label}
                href={href} 
                className="group relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium"
              >
                {label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Enhanced copyright section */}
          <div className="text-center relative">
            <div className="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-white/5 to-gray-100/10 dark:from-gray-800/10 dark:to-gray-700/15 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30">
              <p className="text-muted-foreground font-medium">
                &copy; {year} <span className="text-primary font-semibold">Harika Danduprolu</span>. All rights reserved.
              </p>
              <p className="text-sm mt-2 bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground to-muted-foreground/60">
                Designed and developed with passion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
