
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Solar system planets - COMMENTED OUT
    /*
    class Planet {
      x: number;
      y: number;
      radius: number;
      distance: number;
      color: string;
      speed: number;
      angle: number;
      moons: Moon[];
      
      constructor(distance: number, radius: number, color: string, speed: number) {
        this.distance = distance;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.x = 0;
        this.y = 0;
        this.moons = [];
      }
      
      update(centerX: number, centerY: number) {
        this.angle += this.speed;
        this.x = centerX + Math.cos(this.angle) * this.distance;
        this.y = centerY + Math.sin(this.angle) * this.distance;
        
        // Update moons
        this.moons.forEach(moon => moon.update(this.x, this.y));
      }
      
      draw(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
        // Orbit drawing removed for cleaner appearance
        
        // Draw planet
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw shadow
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw moons
        this.moons.forEach(moon => moon.draw(ctx));
      }
      
      addMoon(distance: number, radius: number, color: string, speed: number) {
        const moon = new Moon(distance, radius, color, speed);
        this.moons.push(moon);
        return moon;
      }
    }
    */
    
    // Moon class - COMMENTED OUT
    /*
    class Moon {
      distance: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
      x: number;
      y: number;
      
      constructor(distance: number, radius: number, color: string, speed: number) {
        this.distance = distance;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.angle = Math.random() * Math.PI * 2;
        this.x = 0;
        this.y = 0;
      }
      
      update(planetX: number, planetY: number) {
        this.angle += this.speed;
        this.x = planetX + Math.cos(this.angle) * this.distance;
        this.y = planetY + Math.sin(this.angle) * this.distance;
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    */
    
    // Particle class for stars
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.color = theme === 'dark' 
            ? 'rgba(255, 255, 255, 0.5)'
            : 'rgba(100, 100, 150, 0.3)';
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) {this.speedX *= -1};
        if (this.y < 0 || this.y > canvas.height) {this.speedY *= -1};
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create stars/particles
    const particleCount = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / 15000));
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Create solar system - COMMENTED OUT
    /*
    const sun = new Planet(0, 25, '#FDB813', 0);
    
    // Create planets
    const planets: Planet[] = [
      sun,
      new Planet(60, 5, '#E27B58', 0.005), // Mercury
      new Planet(90, 8, '#C4A777', 0.004), // Venus
      new Planet(130, 9, '#5D99FF', 0.003), // Earth
      new Planet(180, 7, '#FF6D4A', 0.0025), // Mars
      new Planet(240, 20, '#FFAE42', 0.002), // Jupiter
      new Planet(300, 17, '#F7EABE', 0.0015) // Saturn
    ];
    
    // Add moons
    planets[3].addMoon(20, 2, '#DDDDDD', 0.02); // Earth's moon
    planets[4].addMoon(15, 1, '#DDDDDD', 0.03); // Mars' moon
    planets[5].addMoon(30, 3, '#DDDDDD', 0.01); // Jupiter's moon 1
    planets[5].addMoon(40, 2, '#DDDDDD', 0.015); // Jupiter's moon 2
    */
    
    // Add rings to Saturn - COMMENTED OUT
    /*
    const drawSaturnRings = (planet: Planet, ctx: CanvasRenderingContext2D) => {
      const ringStart = planet.radius + 5;
      const ringEnd = planet.radius + 25;
      const gradient = ctx.createLinearGradient(
        planet.x - ringEnd, planet.y,
        planet.x + ringEnd, planet.y
      );
      gradient.addColorStop(0, 'rgba(247, 234, 190, 0.3)');
      gradient.addColorStop(0.5, 'rgba(247, 234, 190, 0.6)');
      gradient.addColorStop(1, 'rgba(247, 234, 190, 0.3)');
      
      ctx.save();
      ctx.translate(planet.x, planet.y);
      ctx.rotate(0.5); // Tilt the rings
      ctx.scale(1, 0.3); // Flatten to an ellipse
      
      ctx.beginPath();
      ctx.arc(0, 0, ringEnd, 0, Math.PI * 2);
      ctx.arc(0, 0, ringStart, 0, Math.PI * 2, true);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      ctx.restore();
    };
    */
    
    // Animation
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles (stars)
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw solar system (only in dark theme) - COMMENTED OUT
      /*
      if (theme === 'dark') {
        // Calculate position for sun to be below profile image
        // On desktop (lg+): profile image is in right column, so place sun at 3/4 width
        // On mobile: profile image is centered, so place sun at center
        const isDesktop = canvas.width >= 1024; // lg breakpoint
        const sunX = isDesktop ? (canvas.width * 0.75) : (canvas.width / 2);
        
        // Position sun below the center of the image area
        // Profile image area is roughly in the middle third of the screen
        const sunY = canvas.height * 0.65; // Slightly below center to account for image position
        
        // Draw sun
        const sunGlow = ctx.createRadialGradient(
          sunX, sunY, 0,
          sunX, sunY, sun.radius * 2
        );
        sunGlow.addColorStop(0, 'rgba(253, 184, 19, 1)');
        sunGlow.addColorStop(0.5, 'rgba(253, 184, 19, 0.5)');
        sunGlow.addColorStop(1, 'rgba(253, 184, 19, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = sunGlow;
        ctx.arc(sunX, sunY, sun.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.fillStyle = sun.color;
        ctx.arc(sunX, sunY, sun.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Update and draw planets (except sun)
        for (let i = 1; i < planets.length; i++) {
          planets[i].update(sunX, sunY);
          planets[i].draw(ctx, sunX, sunY);
          
          // Draw Saturn's rings
          if (i === 6) { // Saturn
            drawSaturnRings(planets[i], ctx);
          }
        }
      }
      */
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    const connectParticles = () => {
      const maxDistance = 100;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.strokeStyle = `rgba(120, 100, 200, ${opacity * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
}
