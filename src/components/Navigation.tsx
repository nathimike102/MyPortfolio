import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { AnimatePresence, motion} from 'framer-motion';
import { Menu, X , Home, Briefcase, Code, Mail} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'home', icon : Home},
    { name: 'Projects', to: 'projects', icon : Briefcase},
    { name: 'Skills', to: 'skills', icon : Code},
    { name: 'Contact', to: 'contact', icon : Mail}
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/0.5 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className=" max-w-12xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          >
            NMS
          </motion.div>

          <div className="hidden md:flex items-baseline space-x-8 ">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer card-hover flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.to
                      ? 'bg-indigo-600 text-white'
                      : 'glass-effect text-gray-400 hover:bg-indigo-100'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              ))}
          </div>          

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-indigo-100 focus:outline-none"
            >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
        <motion.div 
          initial="closed"
          animate="open"
          exit="closed"
          className="bg-transparent block fixed inset-y-12 right-0 w-64 bg-white/0.5 shadow-lg md:hidden"
          >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{x: 10}}
                >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}   
                  className={`cursor-pointer card-hover flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.to
                      ? 'bg-indigo-600 text-white'
                      : 'glass-effect text-gray-400 hover:bg-indigo-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navigation;