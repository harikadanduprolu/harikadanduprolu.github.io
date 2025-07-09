import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center py-16 overflow-hidden">
      <div ref={containerRef} className="section-container transition-transform duration-300 ease-out z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-primary"></div>
              <p className="text-lg font-medium opacity-80">Hello, I'm</p>
            </div>

            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl relative z-10">
              <span className="inline-block bg-clip-text text-transparent animate-text-glow bg-gradient-to-r from-primary to-accent">
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
              <Button size="lg">
                View Projects
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="group text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-primary/40 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white/10 transition-transform duration-300 hover:scale-105">
                {/* Replace the src with your actual image path */}
                <img 
                  src="/src/images/your-profile-image.jpg" 
                  alt="Harika Danduprolu" 
                  className="w-full h-full object-cover"
                />
                {/* Fallback overlay if image doesn't load */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/70 opacity-20"></div>
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

/* Add to your Tailwind config:
  animation: {
    'pulse-slow': 'pulse 5s infinite',
    'spin-slow': 'spin 20s linear infinite',
    'fade-in': 'fadeIn 1.5s ease-in both',
    'text-glow': 'textGlow 2.5s ease-in-out infinite',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
    textGlow: {
      '0%, 100%': { filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))' },
      '50%': { filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' },
    },
  }
*/
