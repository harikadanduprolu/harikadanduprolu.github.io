
import React, { useEffect, useRef } from 'react';
import { Calendar, GraduationCap, Briefcase, Award, Code } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function Timeline() {
  const { theme } = useTheme();
  const timelineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach(item => {
        observer.observe(item);
      });
    }
    
    return () => observer.disconnect();
  }, []);
  
  const timelineItems = [
    {
      id: 1,
      date: '2023 - Present',
      title: 'Computer Science Major',
      location: 'Tech University',
      description: 'Pursuing a Bachelor\'s degree in Computer Science with a focus on Artificial Intelligence and Machine Learning.',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      date: '2022 - 2023',
      title: 'Software Development Intern',
      location: 'InnovateTech Solutions',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to implement new features and fix bugs.',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      date: '2022',
      title: 'UX/UI Design Certificate',
      location: 'Design Academy',
      description: 'Completed comprehensive training in user experience and interface design principles. Created wireframes, prototypes, and conducted usability testing for various applications.',
      icon: <Palette className="w-5 h-5" />,
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 4,
      date: '2021',
      title: 'Web Development Certification',
      location: 'Online Learning Platform',
      description: 'Completed a comprehensive certification in full-stack web development, covering HTML, CSS, JavaScript, React, Node.js, and database management.',
      icon: <Code className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 5,
      date: '2020',
      title: 'High School Graduation',
      location: 'Science Academy',
      description: 'Graduated with honors, focusing on mathematics and computer science courses. Led the school\'s robotics team to regional competitions.',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-purple-500 to-violet-600'
    }
  ];
  
  return (
    <section id="timeline" className="py-20 relative">
      {theme === 'cosmic' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/5 right-1/4 w-32 h-32 rounded-full bg-violet-500/10 blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/5 left-1/5 w-40 h-40 rounded-full bg-indigo-500/10 blur-xl animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Solar System Animation */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none">
            {/* Sun */}
            <div className="absolute left-1/2 top-1/2 w-16 h-16 rounded-full bg-yellow-500 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow glow"></div>
            
            {/* Mercury Orbit */}
            <div className="orbit absolute left-1/2 top-1/2 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '10s' }}></div>
            <div className="planet absolute left-[calc(50%-50px)] top-1/2 w-2 h-2 rounded-full bg-gray-300" style={{ animationDuration: '10s' }}></div>
            
            {/* Venus Orbit */}
            <div className="orbit absolute left-1/2 top-1/2 w-[150px] h-[150px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '15s' }}></div>
            <div className="planet absolute left-[calc(50%-75px)] top-1/2 w-3 h-3 rounded-full bg-amber-400" style={{ animationDuration: '15s' }}></div>
            
            {/* Earth Orbit */}
            <div className="orbit absolute left-1/2 top-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '20s' }}></div>
            <div className="planet absolute left-[calc(50%-100px)] top-1/2 w-4 h-4 rounded-full bg-blue-400" style={{ animationDuration: '20s' }}></div>
            
            {/* Mars Orbit */}
            <div className="orbit absolute left-1/2 top-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '25s' }}></div>
            <div className="planet absolute left-[calc(50%-125px)] top-1/2 w-3 h-3 rounded-full bg-red-500" style={{ animationDuration: '25s' }}></div>
            
            {/* Jupiter Orbit */}
            <div className="orbit absolute left-1/2 top-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '30s' }}></div>
            <div className="planet absolute left-[calc(50%-160px)] top-1/2 w-8 h-8 rounded-full bg-amber-600" style={{ animationDuration: '30s' }}></div>
            
            {/* Saturn Orbit */}
            <div className="orbit absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full" style={{ animationDuration: '35s' }}></div>
            <div className="planet absolute left-[calc(50%-200px)] top-1/2 w-7 h-7 rounded-full bg-yellow-700" style={{ animationDuration: '35s' }}></div>
            
            {/* Random stars */}
            {Array.from({ length: 20 }).map((_, index) => (
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
            <span className={theme === 'cosmic' ? 'text-gradient-cosmic animate-pulse-slow' : 'text-gradient animate-pulse-slow'}>Career Timeline</span>
            {theme === 'cosmic' && (
              <span className="absolute -top-3 -right-5 w-3 h-3 rounded-full bg-accent animate-pulse-slow"></span>
            )}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full animate-width"></div>
          <p className="max-w-2xl mx-auto text-lg opacity-80 animate-fade-in">
            My academic and professional journey in the field of computer science.
          </p>
        </div>
        
        <div ref={timelineRef} className="max-w-4xl mx-auto relative">
          <div className="timeline-line"></div>
          
          {timelineItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item mb-12 opacity-100`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`timeline-dot bg-gradient-to-r ${item.color}`}>
                {theme === 'cosmic' && (
                  <div className="absolute inset-0 bg-accent/50 rounded-full animate-ping"></div>
                )}
              </div>
              
              <div className={`timeline-content glass-card p-6 max-w-lg ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} border-t-4 border-gradient-${index} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="flex items-center mb-2">
                  <Calendar className={`w-4 h-4 mr-2 text-gradient-inline ${item.color} animate-pulse-slow`} />
                  <span className="text-sm text-muted-foreground animate-slide-in" style={{ animationDelay: `${index * 100 + 100}ms` }}>{item.date}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className={`p-2 mr-3 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 animate-float`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold animate-slide-in" style={{ animationDelay: `${index * 100 + 200}ms` }}>{item.title}</h3>
                    <p className="text-sm text-muted-foreground animate-slide-in" style={{ animationDelay: `${index * 100 + 300}ms` }}>{item.location}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: `${index * 100 + 400}ms` }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Palette = ({ className }: { className?: string }) => (
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
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);
