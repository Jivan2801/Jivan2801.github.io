import { useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Development Intern',
    company: 'PARI Technologies (M) SDN BHD',
    location: 'Chicago, IL',
    period: 'October 2025 - December 2025',
    description: 'Tech Stack: Python, Git, ReactJS, FastAPI, TypeScript, Selenium, BeautifulSoup, WebDriver, Pandas',
    achievements: [
      'Developed a full-stack AI learning platform using React and FastAPI with a dynamic user interface and asynchronous backend APIs',
      'Designed an AI-powered chatbot using Google Gemini and a RAG pipeline',
      'Implemented retrieval-augmented generation workflows using ChromaDB and MongoDB',
      'Automated data extraction with Python scripts using Selenium and BeautifulSoup',
      'Processed datasets with 20,000+ columns, improving data accuracy'
    ],
  },
  {
    type: 'work',
    title: 'Build Student Consultant',
    company: 'The Build Fellowship by Open Avenues',
    location: 'Chicago, IL',
    period: 'July 2025 – September 2025',
    description:
      'Tech Stack: Python, Prometheus, PromQL, Grafana, Alertmanager, YAML, Git',
    achievements: [
      'Worked on the “Synthetic Monitoring Platform” project under mentorship, designing and implementing a production-style monitoring and observability system',
      'Designed a synthetic monitoring solution to track server uptime, latency, and packet loss across services',
      'Built a custom Python exporter to expose network and availability metrics in Prometheus format',
      'Created Grafana dashboards with real-time visualizations for latency trends and overall system health',
      'Implemented automated alerting workflows using Prometheus rules and Alertmanager'
    ],
  },
  {
    type: 'work',
    title: 'Software Developer',
    company: 'Crayon Infotech Pvt. Ltd.',
    location: 'Mumbai, Maharashtra, India',
    period: 'August 2023 – July 2024',
    description:
      'Tech Stack: PHP, Laravel, CodeIgniter, Python, Flask, REST APIs, PostgreSQL, SQL/NoSQL, Git',
    achievements: [
      'Delivered 5+ production-ready applications supporting over 2,000 active users with 99.9% uptime',
      'Built and deployed REST and Flask APIs, reducing client onboarding time from 2 weeks to 3 days',
      'Collaborated with cross-functional teams to improve code quality and reduce bugs by 20%',
      'Optimized SQL queries and backend workflows, increasing data retrieval performance by 25%',
      'Ensured applications were scalable and highly available in production environments'
    ],
  },
    {
    type: 'work',
    title: 'Software Developer Intern',
    company: 'Lab Systems (I) Pvt. Ltd.',
    location: 'Mumbai, Maharashtra, India',
    period: 'July 2022 – May 2023',
    description:
      'Tech Stack: Python, Blockchain Architecture, Solidity, Smart Contracts, IPFS, Blockchain Nodes, Hashing',
    achievements: [
      'Automated cryptocurrency transaction analysis using Python to support forensic investigations',
      'Processed and indexed 20+ TB of blockchain data to enable faster and more reliable research',
      'Set up and maintained multiple cryptocurrency nodes for secure, on-premises investigations',
      'Streamlined OSINT workflows, significantly reducing manual analysis effort',
      'Mentored and collaborated with a 12-member team, strengthening blockchain investigation capabilities'
    ],
  },
  {
    type: 'work',
    title: 'Cloud Intern',
    company: 'Shree L. R. Tiwari College of Engineering',
    location: 'Mumbai, Maharashtra, India',
    period: 'June 2022 – July 2022',
    description:
      'Tech Stack: AWS (EC2, RDS, S3), Cloud Architecture, Deployment & Configuration, Cloud Security',
    achievements: [
      'Designed and implemented a three-tier cloud architecture on AWS',
      'Deployed a single-page application using EC2, RDS, and S3 with focus on scalability and reliability',
      'Configured, troubleshot, and optimized AWS resources to ensure smooth deployment',
      'Applied cloud security best practices and performance optimization techniques'
    ],
  },
  {
    type: 'work',
    title: 'Python Intern',
    company: 'Jeet Techno Solutions LLP',
    location: 'Mumbai, Maharashtra, India',
    period: 'May 2019 - June 2019',
    description: 'Built and deployed Python desktop applications with Tkinter.',
    achievements: [
      'Applied modular programming and GUI design principles',
      'Collaborated on embedded software projects with real-time sensor feedback',
      'Gained experience across full SDLC phases'
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
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    company: 'AWS Academy',
    period: '2024',
    description: 'Cloud foundations certification from AWS Academy.',
  },
  {
    type: 'cert',
    title: 'AI Agents in LangGraph',
    company: 'LangChain',
    period: '2024',
    description: 'Certification in building AI agents using LangGraph.',
  },
  {
    type: 'cert',
    title: 'AI Agentic Design Patterns with AutoGen',
    company: 'Microsoft',
    period: '2024',
    description: 'Certification in AI agentic design patterns using AutoGen.',
  },
  {
    type: 'cert',
    title: 'Walmart USA - Advanced Software Engineering Job Simulation',
    company: 'Walmart',
    period: '2024',
    description: 'Advanced software engineering job simulation program.',
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
            {certifications.map((cert, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
