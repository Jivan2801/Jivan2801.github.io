import { useEffect, useRef } from 'react';
import { FileText, Lightbulb, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const patents = [
  {
    title: 'D Ein Blockchain-basiertes Medizinlogistiksystem',
    description: 'A blockchain-based medical logistics system for secure and transparent pharmaceutical supply chain management.',
    link: '#',
    year: '2023',
  },
];

const publications = [
  {
    title: 'Construction Estimation Project',
    description: 'Research on automated construction cost estimation using machine learning algorithms and data analytics.',
    link: '#',
    year: '2023',
  },
  {
    title: 'Pulse Detection Through Webcam',
    description: 'Non-invasive pulse rate detection system using computer vision and signal processing techniques.',
    link: '#',
    year: '2022',
  },
];

const PatentsPublications = () => {
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
      id="patents-publications"
      className="relative py-24 lg:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4A4E69]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-[#4A4E69] text-sm font-medium tracking-wider uppercase mb-4">
            Research & Innovation
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#22223B]" style={{ animationDelay: '0.1s' }}>
            Patents &{' '}
            <span className="text-gradient">Publications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Patents */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#4A4E69]/10">
                <Lightbulb className="w-6 h-6 text-[#4A4E69]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#22223B]">Patents</h3>
            </div>
            
            <div className="space-y-6">
              {patents.map((patent, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-[#9A8C98]/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-[#4A4E69] font-medium">{patent.year}</span>
                    <Lightbulb className="w-5 h-5 text-[#9A8C98]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#22223B]">{patent.title}</h4>
                  <p className="text-sm text-[#4A4E69]/70 mb-4">{patent.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#C9ADA7] hover:bg-[#C9ADA7]/20 text-[#4A4E69]"
                    onClick={() => window.open(patent.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Patent
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="reveal opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#4A4E69]/10">
                <FileText className="w-6 h-6 text-[#4A4E69]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#22223B]">Publications</h3>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-[#9A8C98]/50 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm text-[#4A4E69] font-medium">{pub.year}</span>
                    <FileText className="w-5 h-5 text-[#9A8C98]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#22223B]">{pub.title}</h4>
                  <p className="text-sm text-[#4A4E69]/70 mb-4">{pub.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-[#C9ADA7] hover:bg-[#C9ADA7]/20 text-[#4A4E69]"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentsPublications;
