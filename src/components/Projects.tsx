
import React, { useState } from 'react';
import { Code, ExternalLink, Github, Globe, Laptop, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

export function Projects() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Smart Study Planner',
      description: 'AI-powered study schedule generator with task prioritization',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/6C5CE7/FFFFFF',
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Sentiment Analysis Tool',
      description: 'Machine learning model for analyzing text sentiment',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400/FC427B/FFFFFF',
      technologies: ['Python', 'PyTorch', 'Flask', 'NLTK'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Inventory Management System',
      description: 'Full-stack application for tracking inventory levels',
      category: 'software',
      image: 'https://via.placeholder.com/600x400/0652DD/FFFFFF',
      technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Docker'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Cosmic Weather Dashboard',
      description: 'Visualizing weather data with interactive charts',
      category: 'web',
      image: 'https://via.placeholder.com/600x400/9980FA/FFFFFF',
      technologies: ['React', 'D3.js', 'Weather API', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Neural Network Playground',
      description: 'Interactive tool for experimenting with neural networks',
      category: 'ai',
      image: 'https://via.placeholder.com/600x400/1289A7/FFFFFF',
      technologies: ['JavaScript', 'TensorFlow.js', 'Canvas API'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Compiler Design Project',
      description: 'Simple compiler for a custom programming language',
      category: 'software',
      image: 'https://via.placeholder.com/600x400/A3CB38/FFFFFF',
      technologies: ['C++', 'LLVM', 'Flex', 'Bison'],
      demoLink: '#',
      codeLink: '#'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Globe className="w-4 h-4" />;
      case 'ai':
        return <Brain className="w-4 h-4" />;
      case 'software':
        return <Laptop className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };
  
  return (
    <section id="projects" className="py-20 relative">
      {theme === 'cosmic' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-40 h-40 rounded-full bg-violet-500/10 blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/5 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
      )}
      
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="inline-block relative mb-4">
            <span className={theme === 'cosmic' ? 'text-gradient-cosmic' : 'text-gradient'}>My Projects</span>
            {theme === 'cosmic' && (
              <span className="absolute -top-3 -right-5 w-3 h-3 rounded-full bg-accent animate-pulse-slow"></span>
            )}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80">
            A selection of my work showcasing my skills and experience in various domains of computer science.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={activeFilter === 'web' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('web')}
          >
            <Globe className="w-4 h-4 mr-2" />
            Web Development
          </Button>
          <Button
            variant={activeFilter === 'ai' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('ai')}
          >
            <span className="w-4 h-4 mr-2">🧠</span>
            AI & ML
          </Button>
          <Button
            variant={activeFilter === 'software' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('software')}
          >
            <Laptop className="w-4 h-4 mr-2" />
            Software
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoLink} 
                      className="p-2 bg-background rounded-full transition-transform duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="p-2 bg-background rounded-full transition-transform duration-300 hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="mr-2 text-primary">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Brain = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
    <path d="M14.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"></path>
    <path d="M7.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"></path>
    <path d="M16.5 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
    <path d="M9.5 17a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"></path>
    <path d="M14.5 19a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"></path>
  </svg>
);
