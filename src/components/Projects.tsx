import { Card } from './ui/Card';
import { Section } from './ui/Section';
import { Github, ExternalLink } from 'lucide-react';
import skillcon from './images/skillcon_pic.jpeg';
import finance from './images/finance_pic.jpg';

const projects = [
  {
    title: 'SkillCon AI-Powered Volunteer Matching Platform.',
    description: 'An intelligent platform that connects volunteers with organizations based on their skills and interests.',
    image: skillcon,
    tech: ['React', 'Node.js', 'Tailwind CSS/HTML5', 'Firebase'],
    github: 'https://github.com/nathimike102/SkillCon',    
    demo: 'https://skillcon.vercel.app'
  },
  {
    title: 'Finance Portfolio Management System',
    description: 'A system to track, buy, and sell stocks by integrating real-time stock price data through API calls.',
    image: finance,
    tech: ['Python', 'SQL', 'Flask', 'HTML/CSS'],
    github: 'https://github.com/nathimike102/CS50-Harvard/tree/main/finance', 
    demo: 'https://study-assistant-demo.netlify.app'
  },
  {
    title: 'Student Collaboration Platform',
    description: 'A real-time collaboration tool for students to work on group projects and share resources.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com/nathimike102/collab-platform',
    demo: 'https://collab-platform-demo.netlify.app'
  }
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full glass-effect text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5 mr-1" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-text-secondary hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-1" />
                  Demo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;