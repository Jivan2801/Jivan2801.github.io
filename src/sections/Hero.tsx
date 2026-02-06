import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const profilePhotoSrc = '/Jivan-profile.png';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2E9E4] via-[#F2E9E4] to-[#C9ADA7]/20" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4A4E69]/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9A8C98]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9ADA7]/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="reveal opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Code2 className="w-4 h-4 text-[#4A4E69]" />
                <span className="text-sm text-[#4A4E69]">Full-Stack Engineer | Software Developer</span>
              </div>
            </div>

            <h1 className="reveal opacity-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6" style={{ animationDelay: '0.2s' }}>
              Hi, I'm{' '}
              <span className="text-gradient">Jivan Singh</span>
            </h1>

            <p
              className="reveal opacity-0 text-lg sm:text-xl text-[#4A4E69]/80 max-w-2xl mx-auto lg:mx-0 mb-8"
              style={{ animationDelay: '0.3s' }}
            >
              Full-Stack Software Engineer
              <br />
              Currently Graduate Student @ Illinois Tech, Chicago
              <br />
              Building scalable APIs, cloud systems, and data-driven applications
            </p>


            <div className="reveal opacity-0 flex flex-wrap gap-4 justify-center lg:justify-start mb-10" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-[#4A4E69] hover:bg-[#22223B] text-white glow-sm"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#C9ADA7] hover:bg-[#C9ADA7]/20 text-[#4A4E69]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>

            <div className="reveal opacity-0 flex gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.5s' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-[#C9ADA7]/20 transition-colors"
              >
                <Github className="w-5 h-5 text-[#4A4E69]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jivansingh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-[#C9ADA7]/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-[#4A4E69]" />
              </a>
              <a 
                href="mailto:jivanusingh@gmail.com"
                className="p-3 rounded-full glass hover:bg-[#C9ADA7]/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-[#4A4E69]" />
              </a>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="reveal opacity-0 relative" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A4E69]/20 to-[#9A8C98]/20 rounded-3xl blur-2xl" />
              <img
                src={profilePhotoSrc}
                alt="Profile photo"
                className="relative w-full max-w-xs lg:max-w-none mx-auto rounded-3xl shadow-2xl animate-float object-cover"
                onError={(e) => {
                  // If profile photo isn't present yet, fall back to the default hero image.
                  e.currentTarget.src = '/hero-dev.jpg';
                  e.currentTarget.alt = 'Developer workspace';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 rounded-full glass hover:bg-[#C9ADA7]/20 transition-colors"
        >
          <ArrowDown className="w-5 h-5 text-[#4A4E69]" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
