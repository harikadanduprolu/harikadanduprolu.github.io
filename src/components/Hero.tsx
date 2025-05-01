
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center py-16 overflow-hidden">
      {theme === 'cosmic' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-primary/20 blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-accent/20 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-20 h-20 rounded-full bg-violet-500/20 blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </>
      )}
      
      <div ref={containerRef} className="section-container transition-transform duration-300 ease-out">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-primary"></div>
              <p className="text-lg font-medium opacity-80">Hello, I'm</p>
            </div>
            
            <h1 className="font-bold">
              <span className={theme === 'cosmic' ? 'text-gradient-cosmic' : 'text-gradient'}>
                Harika Danduprolu
              </span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-medium">
              Computer Science Student & Developer
            </h2>
            
            <p className="text-lg opacity-80 max-w-xl">
              Passionate about coding, AI, and solving complex problems. 
              Building innovative solutions for tomorrow's challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="cosmic-glow" size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="cosmic-border animate-fade-in">
            <div className="cosmic-border-content flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/30">
                  <div className="w-full h-full bg-gradient-to-br from-primary/80 to-accent/80 opacity-90"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-background font-bold text-2xl">
                  JD
                </div>
                
                {theme === 'cosmic' && (
                  <>
                    <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-violet-500 blur-sm opacity-60 animate-pulse-slow"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-indigo-500 blur-sm opacity-60 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
