import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: <Layout className="h-6 w-6" />,
    items: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: <Server className="h-6 w-6" />,
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'Firebase'],
  },
  {
    category: 'Database',
    icon: <Database className="h-6 w-6" />,
    items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
  },
  {
    category: 'Mobile Development',
    icon: <Smartphone className="h-6 w-6" />,
    items: ['React Native', 'Android', 'iOS', 'Flutter'],
  },
  {
    category: 'Programming Languages',
    icon: <Code2 className="h-6 w-6" />,
    items: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    category: 'Tools & Technologies',
    icon: <Terminal className="h-6 w-6" />,
    items: ['Git', 'VS Code', 'Docker', 'AWS'],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;