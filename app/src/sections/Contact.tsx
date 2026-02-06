import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jivanusingh@gmail.com',
    href: 'mailto:jivanusingh@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (312) 792-7758',
    href: 'tel:+13127927758',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chicago, Illinois',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jivansingh', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4A4E69]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-[#4A4E69] text-sm font-medium tracking-wider uppercase mb-4">
            Contact
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#22223B]" style={{ animationDelay: '0.1s' }}>
            Let's Work{' '}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="reveal opacity-0 text-lg text-[#4A4E69]/70 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
            Have a project in mind? I'd love to hear about it. Send me a message 
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="reveal opacity-0 lg:col-span-2 space-y-8" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl glass hover:border-[#9A8C98]/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-[#4A4E69]/10 group-hover:bg-[#4A4E69]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#4A4E69]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#4A4E69]/70">{item.label}</p>
                    <p className="font-medium text-[#22223B]">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#22223B]">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass hover:bg-[#C9ADA7]/20 hover:border-[#9A8C98]/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-[#4A4E69]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl glass border-[#C9ADA7]/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium text-[#22223B]">Open to Opportunities</span>
              </div>
              <p className="text-sm text-[#4A4E69]/70">
                I'm currently open to new opportunities and interesting projects. 
                Let's discuss how I can help bring your ideas to life.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal opacity-0 lg:col-span-3" style={{ animationDelay: '0.4s' }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#22223B]">Message Sent!</h3>
                  <p className="text-[#4A4E69]/70">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#4A4E69]">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white border-[#C9ADA7]/50 focus:border-[#4A4E69]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#4A4E69]">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white border-[#C9ADA7]/50 focus:border-[#4A4E69]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-[#4A4E69]">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white border-[#C9ADA7]/50 focus:border-[#4A4E69]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#4A4E69]">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white border-[#C9ADA7]/50 focus:border-[#4A4E69] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-[#4A4E69] hover:bg-[#22223B] text-white glow-sm"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
