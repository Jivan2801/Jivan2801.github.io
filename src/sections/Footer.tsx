import { Code2, Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Patents & Publications', href: '#patents-publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jivansingh', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
    { name: 'Email', href: 'mailto:jivanusingh@gmail.com', icon: Mail },
  ],
};

const Footer = () => {
  const resumeHref = '/resume.pdf';
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative border-t border-[#C9ADA7]/30">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#C9ADA7]/10 via-[#F2E9E4] to-[#F2E9E4] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-[#4A4E69]/10">
                <Code2 className="w-5 h-5 text-[#4A4E69]" />
              </div>
              <span className="font-bold text-lg text-[#22223B]">Jivan.dev</span>
            </a>
            <p className="text-[#4A4E69]/70 text-sm mb-6">
              Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {footerLinks.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg bg-[#C9ADA7]/20 hover:bg-[#4A4E69]/20 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4 text-[#4A4E69]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-[#22223B]">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#4A4E69]/70 hover:text-[#4A4E69] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume */}
          <div>
            <h3 className="font-semibold mb-4 text-[#22223B]">Resume</h3>
            <p className="text-sm text-[#4A4E69]/70 mb-4">
              Prefer a one-page version? Grab my resume as a PDF.
            </p>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#4A4E69] hover:bg-[#22223B] text-white text-sm font-medium transition-colors"
            >
              View / Download
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-[#C9ADA7]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#4A4E69]/70">
            © {new Date().getFullYear()} - Built by Jivan Singh
          </p>
          <p className="text-sm text-[#4A4E69]/70 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React.js 19
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
