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
  FileCode
} from 'lucide-react';

const skills = [
  { name: 'FastAPI', icon: Server },
  { name: 'TypeScript', icon: Terminal },
  { name: 'ChromaDB', icon: Database },
  { name: 'Python', icon: Code2 },
  { name: 'ReactJS', icon: Layout },
  { name: 'Solidity', icon: Blocks },
  { name: 'AWS Cloud', icon: Cloud },
  { name: 'Blockchain', icon: Layers },
  { name: 'Flask API', icon: FileCode },
  { name: 'MongoDB', icon: Database },
  { name: 'PostgreSQL', icon: Database },
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
              Hi, I'm Jivan Singh — a passionate software developer and tech enthusiast currently pursuing my Master's in Computer Science at the Illinois Institute of Technology.
            </p>
            <p className="text-lg text-[#4A4E69]/80 leading-relaxed">
              My journey in tech has been all about transforming ideas into impactful solutions — whether it's building scalable applications, creating seamless APIs, or exploring the cutting edge of blockchain technology.
            </p>
            <p className="text-lg text-[#4A4E69]/80 leading-relaxed">
              From designing a blockchain-powered pharmaceutical supply chain to developing cloud-based architectures and real-time data visualization tools, I thrive at the intersection of innovation and problem-solving.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-4 rounded-2xl glass">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">5+</div>
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
