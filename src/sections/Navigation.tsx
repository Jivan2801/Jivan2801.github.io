import { useState, useEffect } from 'react';
import { FileText, Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Patents & Publications', href: '#patents-publications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const resumeHref = '/Jivan-Resume.pdf';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2E9E4]/80 backdrop-blur-xl border-b border-[#C9ADA7]/30 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="p-2 rounded-lg bg-[#4A4E69]/10 group-hover:bg-[#4A4E69]/20 transition-colors">
                <Code2 className="w-5 h-5 text-[#4A4E69]" />
              </div>
              <span className="font-bold text-lg text-[#22223B]">Jivan.dev</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#4A4E69] bg-[#4A4E69]/10'
                      : 'text-[#4A4E69]/70 hover:text-[#22223B] hover:bg-[#C9ADA7]/20'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              </div>

              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-[#4A4E69] hover:bg-[#22223B] text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#C9ADA7]/20 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#4A4E69]" />
              ) : (
                <Menu className="w-6 h-6 text-[#4A4E69]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[#F2E9E4]/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-medium transition-all ${
                activeSection === link.href.slice(1)
                  ? 'text-[#4A4E69]'
                  : 'text-[#4A4E69]/70 hover:text-[#22223B]'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isMobileMenuOpen ? 'slide-up 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold bg-[#4A4E69] hover:bg-[#22223B] text-white transition-colors"
            style={{
              animationDelay: `${navLinks.length * 0.1}s`,
              animation: isMobileMenuOpen ? 'slide-up 0.3s ease-out forwards' : 'none',
            }}
          >
            <FileText className="w-5 h-5" />
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
