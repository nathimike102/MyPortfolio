import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Campus Management System',
    description: 'A comprehensive platform for managing university resources, student attendance, and course materials.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    tech: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    github: 'https://github.com/your-github/smart-campus',
    demo: 'https://smart-campus-demo.netlify.app'
  },
  {
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent application that helps students organize their study materials and create personalized learning paths.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    tech: ['React', 'Python', 'TensorFlow', 'Flask'],
    github: 'https://github.com/your-github/study-assistant',
    demo: 'https://study-assistant-demo.netlify.app'
  },
  {
    title: 'Student Collaboration Platform',
    description: 'A real-time collaboration tool for students to work on group projects and share resources.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com/your-github/collab-platform',
    demo: 'https://collab-platform-demo.netlify.app'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Featured Projects
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
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
                    className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;