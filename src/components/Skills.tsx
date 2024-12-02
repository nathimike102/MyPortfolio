import { Card } from './ui/Card';
import { Section } from './ui/Section';
import { Code2, Database, Layout, Server, Smartphone, Cloud, Brain, GitBranch, Monitor, Tool } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: <Code2 className="h-6 w-6" />,
    items: ['C++/C', 'Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend Development',
    icon: <Layout className="h-6 w-6" />,
    items: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: <Server className="h-6 w-6" />,
    items: ['Node.js', 'Express.js', 'FastAPI', 'Flask'],
  },
  {
    category: 'Database',
    icon: <Database className="h-6 w-6" />,
    items: ['MongoDB', 'MariaDB', 'MySQL'],
  },
  {
    category: 'Cloud Services',
    icon: <Cloud className="h-6 w-6" />,
    items: ['AWS', 'Azure', 'Google Cloud', 'Firebase'],
  },
  {
    category: 'Version Control',
    icon: <GitBranch className="h-6 w-6" />,
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    category: 'Development Tools',
    icon: <Monitor className="h-6 w-6" />,
    items: ['VS Code', 'IntelliJ', 'Linux', 'Docker'],
  },
  {
    category: 'AI & Machine Learning',
    icon: <Brain className="h-6 w-6" />,
    items: ['TensorFlow', 'PyTorch', 'OpenAI'],
  },
  {
    category: 'Mobile Development',
    icon: <Smartphone className="h-6 w-6" />,
    items: ['React Native', 'Android', 'Flutter'],
  },
];

const Skills = () => {
  return (
    <Section id="skills" className="bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key = {index}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="ml-3 text-xl font-semibold text-primary">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 text-sm rounded-full glass-effect text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;