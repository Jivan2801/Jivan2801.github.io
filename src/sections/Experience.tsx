import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Development Intern',
    company: 'PARI Technologies (M) SDN BHD',
    location: 'Remote',
    period: 'October 2025 - December 2025',
    description: 'Python | Git | ReactJS | FastAPI | TypeScript | Selenium | BeautifulSoup | WebDriver | Pandas',
    achievements: [
      'Built features for a full-stack AI learning platform using React and FastAPI, including an AI-powered chatbot built with Google Gemini and RAG.'
    ],
  },
  {
    type: 'work',
    title: 'Build Student Consultant',
    company: 'The Build Fellowship by Open Avenues',
    location: 'Remote',
    period: 'July 2025 – September 2025',
    description:
      'Python | Prometheus | PromQL | Grafana | Alertmanager | YAML | Git',
    achievements: [
      'Developed a synthetic monitoring system with Python, Prometheus, and Grafana to track uptime, latency, and trigger automated alerts.'

    ],
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Crayon Infotech Pvt. Ltd.',
    location: 'Mumbai, Maharashtra, India',
    period: 'August 2023 – July 2024',
    description:
      'PHP | Laravel | CodeIgniter | Python | Flask | REST APIs | PostgreSQL | SQL/NoSQL | Git',
    achievements: [
      'Delivered and scaled multiple production web applications using PHP and Python APIs, supporting 2,000+ users with high availability and improved backend performance.'
    ],
  },
    {
    type: 'work',
    title: 'Software Developer Intern',
    company: 'Lab Systems (I) Pvt. Ltd.',
    location: 'Mumbai, Maharashtra, India',
    period: 'July 2022 – May 2023',
    description:
      'Python | Blockchain Architecture | Solidity | Smart Contracts | IPFS | Blockchain Nodes | Hashing',
    achievements: [
      'Automated blockchain transaction analysis and managed large-scale blockchain data and nodes to support secure forensic investigations.'
    ],
  },
  {
    type: 'work',
    title: 'Cloud Intern',
    company: 'Shree L. R. Tiwari College of Engineering',
    location: 'Mumbai, Maharashtra, India',
    period: 'June 2022 – July 2022',
    description:
      'AWS (EC2, RDS, S3) | Cloud Architecture | Deployment & Configuration | Cloud Security',
    achievements: [
      'Designed and deployed a scalable three-tier cloud architecture on AWS, hosting a single-page application with secure and optimized infrastructure.'
    ],
  },
    {
    type: 'work',
    title: 'Python Intern',
    company: 'Jeet Techno Solutions LLP',
    location: 'Mumbai, Maharashtra, India',
    period: 'May 2019 – June 2019',
    description:
      'Python | Tkinter | GUI Development | Modular Programming | Embedded Systems',
    achievements: [
      'Built Python desktop applications with Tkinter and contributed to embedded software projects involving real-time sensor integration.'
    ],
  },

];

const education = [
  {
    type: 'education',
    title: 'Master of Science - MS, Computer Science',
    company: 'Illinois Institute of Technology',
    location: 'Chicago, IL',
    period: 'August 2024 - May 2026',
    description: 'Pursuing advanced studies in Computer Science with focus on software engineering and cloud technologies.',
    achievements: [],
  },
  {
    type: 'education',
    title: "Bachelor's degree, Computer Engineering",
    company: 'Shree L. R. Tiwari College of Engineering',
    location: 'Mumbai, India',
    period: 'June 2020 - May 2023',
    description: 'Completed undergraduate studies in Computer Engineering.',
    achievements: [],
  },
  {
    type: 'education',
    title: 'Diploma of Education, Computer Engineering',
    company: 'Thakur Polytechnic',
    location: 'Mumbai, India',
    period: 'August 2017 - October 2020',
    description: 'Completed diploma in Computer Engineering.',
    achievements: [],
  },
];

const certifications = [
  {
    type: 'cert',
    title: 'AI Agents in LangGraph',
    company: 'LangChain',
    period: '2025',
    link:'https://learn.deeplearning.ai/accomplishments/2724e667-0026-4960-bab7-ae7b4301c9f0?usp=sharing',
    description: 'Certification in building AI agents using LangGraph.',
  },
  {
    type: 'cert',
    title: 'AI Agentic Design Patterns with AutoGen',
    company: 'Microsoft',
    period: '2025',
    link:'https://learn.deeplearning.ai/accomplishments/21c79eff-a410-4575-b0fa-ff4e21906427?usp=sharing',
    description: 'Certification in AI agentic design patterns using AutoGen.',
  },
  {
    type: 'cert',
    title: 'Walmart USA - Advanced Software Engineering Job Simulation',
    company: 'Walmart',
    period: '2024',
    link:'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_oNExwwXfftei88z9j_1725665555338_completion_certificate.pdf',
    description: 'Advanced software engineering job simulation program.',
  },
  {
    type: 'cert',
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    company: 'AWS Academy',
    period: '2022',
    link:'https://www.credly.com/badges/0b232535-099e-49b4-8e78-c26a6f6b1e46/print',
    description: 'Cloud foundations certification from AWS Academy.',
  },
];

const Experience = () => {
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

  const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => {
    const isWork = item.type === 'work';
    const isEdu = item.type === 'education';
    
    return (
      <div 
        className="reveal opacity-0 relative pl-8 md:pl-0"
        style={{ animationDelay: `${0.1 + index * 0.1}s` }}
      >
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4A4E69]/50 via-[#9A8C98]/20 to-transparent md:-translate-x-1/2" />
        
        {/* Timeline dot */}
        <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#4A4E69] border-4 border-[#F2E9E4] md:-translate-x-1/2 -translate-x-1/2 shadow-sm" />
        
        {/* Content */}
        <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
          <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
            <div className="glass rounded-2xl p-6 hover:border-[#9A8C98]/50 transition-colors">
              <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                <div className="p-2 rounded-lg bg-[#4A4E69]/10">
                  {isWork ? (
                    <Briefcase className="w-4 h-4 text-[#4A4E69]" />
                  ) : isEdu ? (
                    <GraduationCap className="w-4 h-4 text-[#4A4E69]" />
                  ) : (
                    <Award className="w-4 h-4 text-[#4A4E69]" />
                  )}
                </div>
                <span className="text-sm text-[#4A4E69] font-medium">{item.period}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-1 text-[#22223B]">{item.title}</h3>
              <p className="text-[#4A4E69]/70 mb-3">
                {item.company}{item.location && ` • ${item.location}`}
              </p>
              <p className="text-sm text-[#4A4E69]/70 mb-4">{item.description}</p>
              
              {item.achievements && item.achievements.length > 0 && (
                <ul className={`space-y-1 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-[#4A4E69]/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9A8C98] flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32"
    >
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#9A8C98]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 inline-block text-[#4A4E69] text-sm font-medium tracking-wider uppercase mb-4">
            Experience
          </span>
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#22223B]" style={{ animationDelay: '0.1s' }}>
            My Professional{' '}
            <span className="text-gradient">Journey</span>
          </h2>
        </div>

        {/* Work Experience */}
        <div className="space-y-12 mb-16">
          <h3 className="reveal opacity-0 text-xl font-semibold text-center mb-8 text-[#22223B]" style={{ animationDelay: '0.1s' }}>
            Work Experience
          </h3>
          {experiences.map((exp, index) => (
            <TimelineItem key={index} item={exp} index={index} />
          ))}
        </div>

        {/* Education */}
        <div className="space-y-12 mb-16">
          <h3 className="reveal opacity-0 text-xl font-semibold text-center mb-8 text-[#22223B]">
            Education
          </h3>
          {education.map((edu, index) => (
            <TimelineItem key={index} item={edu} index={index + experiences.length} />
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal opacity-0">
          <h3 className="text-xl font-semibold text-center mb-8 text-[#22223B]">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* {certifications.map((cert, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-6 hover:border-[#9A8C98]/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#4A4E69]/10">
                    <Award className="w-4 h-4 text-[#4A4E69]" />
                  </div>
                  <span className="text-sm text-[#4A4E69] font-medium">{cert.period}</span>
                </div>
                <h4 className="text-lg font-semibold mb-1 text-[#22223B]">{cert.title}</h4>
                <p className="text-sm text-[#4A4E69]/70 mb-2">{cert.company}</p>
                <p className="text-sm text-[#4A4E69]/70">{cert.description}</p>
              </div>
            ))} */}
            {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="glass rounded-2xl p-6 border border-transparent
                              transition-all duration-300
                              hover:border-[#9A8C98]/50
                              hover:-translate-y-1
                              hover:shadow-lg">
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#4A4E69]/10
                                  transition-colors
                                  group-hover:bg-[#4A4E69]/20">
                    <Award className="w-4 h-4 text-[#4A4E69]" />
                  </div>
                  <span className="text-sm text-[#4A4E69] font-medium">
                    {cert.period}
                  </span>
                </div>

                <h4 className="text-lg font-semibold mb-1 text-[#22223B]">
                  {cert.title}
                </h4>

                <p className="text-sm text-[#4A4E69]/70 mb-2">
                  {cert.company}
                </p>

                <p className="text-sm text-[#4A4E69]/70">
                  {cert.description}
                </p>
              </div>
            </a>
          ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
