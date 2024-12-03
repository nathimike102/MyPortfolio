import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Background from './components/Background';
import ParticleBackground from './components/ParticleBackground';
import LoadingScreen from './components/LoadingScreen';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative min-h-screen bg-background">
          <Background/>
          <ParticleBackground />
          <Navigation />
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;