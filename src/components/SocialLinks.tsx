import { Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    href: "mailto:nathimike102@gmail.com",
    icon: <Mail size={24} />,
    label: "Email",
  },
  {
    href: "https://github.com/nathimike102",
    icon: <Github size={24} />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/nkosinathi-sibanda",
    icon: <Linkedin size={24} />,
    label: "LinkedIn",
  },
  {
    href: "https://instagram.com/nathi_mike",
    icon: <Instagram size={24} />,
    label: "Instagram",
  },
  {
    href: "https://twitter.com/nathi_mike",
    icon: <Twitter size={24} />,
    label: "Twitter",
  }
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          className="text-gray-400 hover:text-primary transition-colors duration-300 glowing-border p-3 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;