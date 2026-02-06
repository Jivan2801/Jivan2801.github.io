import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Learning Platform',
    description: 'A full-stack AI learning platform using React and FastAPI with dynamic user interface and asynchronous backend APIs. Features an AI-powered chatbot using Google Gemini and RAG pipeline.',
    image: '/project-1.jpg',
    tags: ['React', 'FastAPI', 'MongoDB', 'ChromaDB', 'Google Gemini'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    'title': 'Synthetic Monitoring Platform',
    description: 'A production-style monitoring system to proactively track system health and reliability. Features custom Python exporter, Prometheus metrics, and Grafana dashboards.',
    image: '/project-2.jpg',
    tags: ['Python', 'Prometheus', 'Grafana', 'YAML', 'Alertmanager'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Blockchain Pharma Supply Chain',
    description: 'A blockchain-powered pharmaceutical supply chain system using Solidity smart contracts for secure and transparent medicine logistics.',
    image: '/project-3.jpg',
    tags: ['Solidity', 'Blockchain', 'Smart Contracts', 'IPFS', 'Ganache'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#4A4E69]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-[#4A4E69] text-sm font-medium tracking-wider uppercase mb-4">
            Portfolio
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#22223B]" style={{ animationDelay: '0.1s' }}>
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="reveal opacity-0 text-lg text-[#4A4E69]/70 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            A selection of my recent work, showcasing my expertise in building 
            scalable and user-friendly applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 group relative"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass hover:border-[#9A8C98]/50 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F2E9E4] via-[#F2E9E4]/50 to-transparent opacity-60" />
                  
                  {/* Hover overlay */}
                  <div 
                    className={`absolute inset-0 bg-[#4A4E69]/20 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-[#4A4E69]" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                    >
                      <Github className="w-5 h-5 text-[#4A4E69]" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-[#22223B] group-hover:text-[#4A4E69] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#9A8C98] group-hover:text-[#4A4E69] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <p className="text-[#4A4E69]/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="bg-[#C9ADA7]/20 hover:bg-[#C9ADA7]/30 text-[#4A4E69] text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="reveal opacity-0 text-center mt-12" style={{ animationDelay: '0.5s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-[#C9ADA7] hover:bg-[#C9ADA7]/20 text-[#4A4E69]"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
