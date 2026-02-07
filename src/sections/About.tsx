import { useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Terminal,
  Cpu,
  Layers,
  Cloud,
  Blocks,
  FileCode,
  Shield,
  Brain
} from 'lucide-react';

const skills = [
  // Core Languages
  { name: 'Python', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'PHP', icon: Code2 },

  // Frontend
  { name: 'ReactJS', icon: Layout },
  { name: 'NextJS', icon: Layout },
  { name: 'HTML', icon: FileCode },
  { name: 'CSS', icon: FileCode },
  { name: 'SASS', icon: FileCode },
  { name: 'Tailwind CSS', icon: Layout },

  // Backend & APIs
  { name: 'Node.js', icon: Server },
  { name: 'FastAPI', icon: Server },
  { name: 'Flask', icon: Server },
  { name: 'REST APIs', icon: Server },
  { name: 'JWT Authentication', icon: Shield },
  { name: 'Laravel', icon: Server },
  { name: 'CodeIgniter', icon: Server },

  // Databases
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'ChromaDB', icon: Database },

  // AI / LLM
  { name: 'LLM Systems', icon: Brain },
  { name: 'RAG Systems', icon: Brain },

  // Cloud & DevOps
  { name: 'AWS', icon: Cloud },
  { name: 'Docker', icon: Cloud },
  { name: 'GCP', icon: Cloud },

  // Tools
  { name: 'Postman', icon: Terminal },
  { name: 'Git', icon: Cpu },
];


const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="about"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-[#4A4E69] text-sm font-medium tracking-wider uppercase mb-4">
            About Me
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#22223B]" style={{ animationDelay: '0.1s' }}>
            Passionate About Creating
            <span className="text-gradient"> Digital Solutions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className="reveal opacity-0 space-y-6" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-[#4A4E69]/80 leading-relaxed">
              Hi, I’m Jivan Singh, a software developer currently pursuing my Master’s in Computer Science at the Illinois Institute of Technology in Chicago.
            </p>

            <p className="text-lg text-[#4A4E69]/80 leading-relaxed">
              I enjoy building things that actually work in the real world. That includes full-stack applications, cloud-based systems, and clean, reliable APIs that scale well and are easy to maintain.
            </p>

            <p className="text-lg text-[#4A4E69]/80 leading-relaxed">
              I’ve worked on everything from blockchain-powered supply chain systems to monitoring tools and data-driven platforms used in production. I like breaking down complex problems, collaborating with teams, and turning ideas into practical solutions.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-4 rounded-2xl glass">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">2+</div>
                <div className="text-sm text-[#4A4E69]/70">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-2xl glass">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">10+</div>
                <div className="text-sm text-[#4A4E69]/70">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6 text-[#22223B]">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="group flex items-center gap-3 p-3 rounded-xl glass hover:border-[#9A8C98]/50 transition-all"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="p-2 rounded-lg bg-[#4A4E69]/10 group-hover:bg-[#4A4E69]/20 transition-colors">
                    <skill.icon className="w-4 h-4 text-[#4A4E69]" />
                  </div>
                  <span className="font-medium text-[#4A4E69] text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
