
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
    <section
    id="about"
    className="py-20 flex justify-center items-center"
  >
    <div className="w-full max-w-6xl px-8 py-12 rounded-2xl border border-white/20 shadow-xl transition-colors duration-1000 bg-[rgba(0, 0, 0, 0.1)] backdrop-blur-md">
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="inline-block relative mb-4">
            <span className="text-gradient animate-pulse-slow">About Me</span>
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
      </div>
    </section>
  );
}
