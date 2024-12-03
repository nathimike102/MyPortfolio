import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from './SocialLinks';
import profileImage from './images/nms_pic.jpeg'

const Home = () => {
  return (
    <div id='home' className="min-h-screen flex items-center justify-center overflow-hidden py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-3xl md:text-5xl font-bold text-gray-300 text-center">
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

        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            
            <motion.div 
              className="flex flex-col items-center space-y-4 space-x-4 p-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div 
                className="relative w-48 h-48"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImage}
                  alt="NKosinathi Michael Sibanda"
                  className="rounded-full w-full h-full object-cover border-4 border-indigo-500 shadow-lg"
                />
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                </motion.div>
              </motion.div>
              <motion.h2
                className="text-center text-2xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                >
                Nkosinathi Michael Sibanda 
              </motion.h2>
              <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <SocialLinks />
                  </motion.div>
            </motion.div>


          </motion.div>
          <div className="hidden md:block w-1 h-64 bg-gray-600 relative p-2 py-48">
            <svg className="glass-effect animate-bounce absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M50 0 C50 25, 50 25, 50 50" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 50 C50 75, 50 75, 50 100" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 25 C45 30, 45 30, 40 35" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 25 C55 30, 55 30, 60 35" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 75 C45 80, 45 80, 40 85" stroke="black" strokeWidth="2" fill="none" />
              <path d="M50 75 C55 80, 55 80, 60 85" stroke="black" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center md:text-left">
              <motion.p
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto p-8 md:p-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                - Trainee at Technical Hub, providing IT solutions and training. <br />
                - Joined in October 2023 after completing the Shasha Network program. <br />
                - Pursuing B.Tech in Computer Science Engineering at Aditya University. <br />
                - Keen interest in programming and creating efficient software solutions. <br />
                - Passionate about community outreach and volunteering. <br />
                - Aspiring to contribute to IT industry development and societal innovation.
              </motion.p>
            </div>
          </motion.div>
        </div>
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
      </div>
    </div>
  );
};

export default Home;