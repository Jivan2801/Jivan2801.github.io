import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Synthetic Monitoring Platform',
    description:
      'Production-style synthetic monitoring platform using a custom Python exporter, Prometheus, Grafana dashboards, and Alertmanager to track latency, packet loss, and availability.',
    image: '/project-1.png',
    tags: ['Python', 'Prometheus', 'Grafana', 'Alertmanager', 'Monitoring','YAML'],
    githubUrl: 'https://github.com/Jivan2801/Synthetic-Monitoring-Platform',
    featured: true,
  },
  {
    id: 2,
    title: 'Graph-Based Song & Artist Recommendation',
    description:
      'Graph-based music recommendation pipeline using the Million Song Dataset + Spotify + Last.fm (~9.7M interactions). Modeled users, songs, artists, and genres in a Neo4j property graph; ran PySpark ETL for profiling and node/edge tables. Used Neo4j GDS for song–song similarity and Spark GraphFrames for PageRank on the user–song bipartite graph. Hybrid Top-K recommendations combine similarity and popularity scores; compared Neo4j, GraphFrames, AWS Neptune, and Azure Cosmos DB for graph recommender workloads. CSP 554 Big Data Technologies, IIT.',
    image: '/project-2.png',
    tags: ['Neo4j', 'PySpark', 'Spark GraphFrames', 'Graph Data Science', 'Cypher', 'Recommendation'],
    githubUrl: 'https://github.com/Jivan2801/GraphX-Powered-Music-Recommender-Using-Neo4j',
    featured: true,
  },
  {
    id: 3,
    title: 'Time-Series Forecasting',
    description:
      'End-to-end pipeline ingesting two years of GitHub issue, PR, commit, branch, contributor, and release data via the GitHub API. Built and compared LSTM (TensorFlow/Keras), Prophet, and Holt–Winters forecasting engines with MAE/RMSE on a 30-day hold-out. Flask microservice and React dashboard with Docker on Google Cloud Run; CI/CD automates retrain and redeploy when new data arrive.',
    image: '/project-3.png',
    tags: ['Python', 'TensorFlow', 'Prophet', 'Flask', 'React', 'Docker', 'Google Cloud Run'],
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="reveal opacity-0 group relative h-full flex flex-col"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden rounded-2xl glass hover:border-[#9A8C98]/50 transition-all duration-500 h-full flex flex-col">
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
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-[#22223B] group-hover:text-[#4A4E69] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#4A4E69]/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
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
            onClick={() => window.open('https://github.com/Jivan2801', '_blank')}
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
