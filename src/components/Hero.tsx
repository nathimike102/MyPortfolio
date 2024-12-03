import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <div id="hero" className="inset-y-6 min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="grid-background absolute inset-0 opacity-20" />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Nkosinathi Michael Sibanda 
          </motion.h1>
          <div className="text-2xl md:text-3xl mb-8 text-gray-300">
            <TypeAnimation
              sequence={[
                'Software Engineering Student',
                2000,
                'Competetive Programmer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I am a trainee at Technical Hub, a company that provides IT solutions and training to various clients and sectors. 
            I joined the company in October 2023, after completing the Shasha Network program, which helped me prepare for university and develop my personal and professional skills. 
            I am currently pursuing a B.Tech degree in Computer Science Engineering at Aditya University, where I am learning the fundamentals of computer engineering and applying them to real-world problems. 
            I have a keen interest in programming, which I use to create efficient and reliable software solutions. 
            I also have a passion for community outreach, which I demonstrate by volunteering for various social and environmental causes. 
            My goal is to become a competent and responsible computer engineer who can contribute to the development and innovation of the IT industry and the society at large.
  
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <SocialLinks />
            <motion.div
              className="relative flex py-6 left-1/2 transform -translate-x-1/2"
              animate={{
                y: [0, 0, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
                <div className="w-1 h-2 bg-primary rounded-full mx-auto" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;