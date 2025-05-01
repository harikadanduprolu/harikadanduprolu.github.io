
import React from 'react';
import { Brain, Code, Database, Globe, Server, Terminal, Palette, Layout, Figma } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function About() {
  const { theme } = useTheme();

  const skills = [
    { name: 'Python', icon: <Terminal className="w-5 h-5" />, level: 90 },
    { name: 'JavaScript', icon: <Code className="w-5 h-5" />, level: 85 },
    { name: 'React', icon: <Globe className="w-5 h-5" />, level: 80 },
    { name: 'UI/UX Design', icon: <Palette className="w-5 h-5" />, level: 85 },
    { name: 'Figma', icon: <Figma className="w-5 h-5" />, level: 80 },
    { name: 'Node.js', icon: <Server className="w-5 h-5" />, level: 75 },
    { name: 'SQL', icon: <Database className="w-5 h-5" />, level: 70 },
    { name: 'Machine Learning', icon: <Brain className="w-5 h-5" />, level: 65 },
  ];
  
  return (
    <section id="about" className="py-20 relative">
      {theme === 'cosmic' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/5 w-32 h-32 rounded-full bg-primary/10 blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-accent/10 blur-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Solar System Animation */}
          <div className="absolute left-1/4 top-1/2 w-[300px] h-[300px] opacity-20 pointer-events-none">
            {/* Sun */}
            <div className="absolute left-1/2 top-1/2 w-12 h-12 rounded-full bg-yellow-500 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow glow"></div>
            
            {/* Planet Orbits */}
            <div className="orbit absolute left-1/2 top-1/2 w-[120px] h-[120px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '12s' }}></div>
            <div className="planet absolute left-[calc(50%-60px)] top-1/2 w-3 h-3 rounded-full bg-blue-400" style={{ animationDuration: '12s' }}></div>
            
            <div className="orbit absolute left-1/2 top-1/2 w-[180px] h-[180px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '18s' }}></div>
            <div className="planet absolute left-[calc(50%-90px)] top-1/2 w-5 h-5 rounded-full bg-red-500" style={{ animationDuration: '18s' }}></div>
            
            <div className="orbit absolute left-1/2 top-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '25s' }}></div>
            <div className="planet absolute left-[calc(50%-125px)] top-1/2 w-6 h-6 rounded-full bg-green-500" style={{ animationDuration: '25s' }}></div>
            
            {/* Random stars */}
            {Array.from({ length: 15 }).map((_, index) => (
              <div 
                key={index}
                className="star"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="inline-block relative mb-4">
            <span className={theme === 'cosmic' ? 'text-gradient-cosmic animate-pulse-slow' : 'text-gradient animate-pulse-slow'}>About Me</span>
            {theme === 'cosmic' && (
              <span className="absolute -top-3 -right-5 w-3 h-3 rounded-full bg-accent animate-pulse-slow"></span>
            )}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full animate-width"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80 animate-typing">
            I'm a Computer Science student with a passion for building innovative digital solutions
            and creating beautiful, intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 animate-slide-in">My Journey</h3>

            <div className="space-y-4">
              <p className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                I’m currently pursuing my B.Tech in Computer Science and Engineering at VNR VJIET, Hyderabad,
                with interests spanning full-stack development, artificial intelligence, and problem-solving through design thinking.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '400ms' }}>
                My journey began with a love for logic and creativity, which led me to competitive programming and building real-world applications
                through hackathons and projects like BioBlock and Flashcard Learning Tool.
              </p>
              <p className="animate-fade-in" style={{ animationDelay: '600ms' }}>
                When I’m not coding, I lead initiatives at Google Developer Groups, explore design via Figma,
                and contribute to community-based tech solutions that empower rural and underserved areas.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex items-center animate-slide-in" style={{ animationDelay: '200ms' }}>
                <span className="font-medium">Name:</span>
                <span className="ml-2">Harika Danduprolu</span>
              </div>
              <div className="flex items-center animate-slide-in" style={{ animationDelay: '300ms' }}>
                <span className="font-medium">Email:</span>
                <span className="ml-2">harikadanduprolu740@gmail.com</span>
              </div>
              <div className="flex items-center animate-slide-in" style={{ animationDelay: '400ms' }}>
                <span className="font-medium">Education:</span>
                <span className="ml-2">B.Tech in Computer Science (2022–2026)</span>
              </div>
              <div className="flex items-center animate-slide-in" style={{ animationDelay: '500ms' }}>
                <span className="font-medium">Location:</span>
                <span className="ml-2">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-2xl font-semibold mb-6 animate-slide-in">Skills & Expertise</h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2 animate-slide-in" style={{ animationDelay: `${200 + index * 100}ms` }}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="mr-2 text-primary animate-pulse-slow">{skill.icon}</div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>

                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform transition-all duration-1000 animate-width"
                      style={{ width: `${skill.level}%`, animationDelay: `${400 + index * 100}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
