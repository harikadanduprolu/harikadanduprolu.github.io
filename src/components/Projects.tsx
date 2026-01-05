
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
      title: 'Distributed Task Processing System',
      description: 'Asynchronous job processing system with Redis-backed queue for background tasks. Implemented retry logic with exponential backoff, idempotent execution to prevent state inconsistencies, and containerized workers for horizontal scaling.',
      category: 'backend',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
      technologies: ['Node.js', 'Redis', 'Docker', 'Bull Queue'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 2,
      title: 'Load-Balanced URL Shortener',
      description: 'Horizontally scalable URL shortening service optimized for read-heavy traffic. Nginx load balancing across stateless instances, Redis caching to reduce database reads, and evaluated consistency-performance tradeoffs.',
      category: 'backend',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      technologies: ['Node.js', 'Redis', 'Nginx', 'Docker', 'MongoDB'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 3,
      title: 'ProCollab – Real-Time Collaboration Platform',
      description: 'Real-time document collaboration with WebSocket-based conflict resolution, supporting 20+ concurrent users with <100ms latency. Built operational transformation for simultaneous edits and Redis-based session management.',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      technologies: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'Redis'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 4,
      title: 'Wellness AI – Mental Health Assistant',
      description: 'NLP-powered wellness platform using BERT for emotion detection (87% accuracy). Privacy-first architecture with AES-256 encryption, confidence-based fallbacks, and crisis detection system.',
      category: 'ai',
      image: 'https://images.pexels.com/photos/3771082/pexels-photo-3771082.jpeg',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'React'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 5,
      title: 'Explainable AI for Medical Diagnosis',
      description: 'Interpretable ML pipeline achieving 0.89 AUC-ROC with SHAP/LIME explanations. Addressed class imbalance and built model monitoring dashboard to detect prediction drift.',
      category: 'ai',
      image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg',
      technologies: ['Python', 'Scikit-learn', 'SHAP', 'LIME', 'Flask'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 6,
      title: 'Rural Aid – Community Development Platform',
      description: 'Full-stack MERN platform connecting 500+ rural users with government schemes. Offline-first architecture with IndexedDB sync, optimized queries (800ms → 120ms), and multilingual support.',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/305965/pexels-photo-305965.jpeg',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 7,
      title: 'BioBlock – Blockchain Bio-Economy',
      description: 'Ethereum smart contracts for transparent bio-waste tracking and carbon credits. Gas-optimized contracts (40% cost reduction), Chainlink oracles for off-chain verification, multi-sig governance.',
      category: 'blockchain',
      image: 'https://images.pexels.com/photos/5775853/pexels-photo-5775853.jpeg',
      technologies: ['Solidity', 'Ethereum', 'React', 'Web3.js', 'Firebase'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    },
    {
      id: 8,
      title: 'Smackle – E-Commerce Platform',
      description: 'Server-side rendered e-commerce with complete purchase flow. Normalized database schema, transaction-based inventory management, SQL injection prevention, and stateful order processing.',
      category: 'backend',
      image: 'https://images.pexels.com/photos/3945042/pexels-photo-3945042.jpeg',
      technologies: ['Java', 'JSP', 'Servlets', 'MySQL', 'Tomcat'],
      demoLink: '#',
      codeLink: 'https://github.com/harikadanduprolu'
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fullstack':
        return <Globe className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'ai':
        return <Code className="w-4 h-4" />;
      case 'blockchain':
        return <Laptop className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="inline-block relative mb-4">
            <span className="text-gradient">My Projects</span>
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
            variant={activeFilter === 'fullstack' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('fullstack')}
          >
            <Globe className="w-4 h-4 mr-2" />
            Full-Stack
          </Button>
          <Button
            variant={activeFilter === 'ai' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('ai')}
          >
            <Code className="w-4 h-4 mr-2" />
            AI/ML
          </Button>
          <Button
            variant={activeFilter === 'backend' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('backend')}
          >
            <Server className="w-4 h-4 mr-2" />
            Backend
          </Button>
          <Button
            variant={activeFilter === 'blockchain' ? 'default' : 'outline'}
            className="rounded-full"
            onClick={() => setActiveFilter('blockchain')}
          >
            <Laptop className="w-4 h-4 mr-2" />
            Blockchain
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
