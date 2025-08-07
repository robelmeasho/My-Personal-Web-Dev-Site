import { useState, useEffect } from 'react';
import { ArrowRight, Music, Brain, Heart } from 'lucide-react';

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    const formatCoordinates = () => {
        return `40.7440° N 73.8873° W`;
    };

    return (
        <div className='min-h-screen bg-teal-700 text-white font-sans overf'></div>
        <header className="fixed w-full z-50 top-0 bg-indigo-950/90 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex justify-between items-center">
            <div className="text-cyan-400 text-xl font-bold tracking-wider">TUNE IN</div>
            <div className="flex items-center space-x-1 md:space-x-3">
              <a href="#" className="px-3 py-2 hover:text-cyan-300 transition-colors">HOME</a>
              <span className="text-cyan-500">•</span>
              <a href="#" className="px-3 py-2 hover:text-cyan-300 transition-colors">RESOURCES</a>
              <span className="text-cyan-500">•</span>
              <a href="#" className="px-3 py-2 hover:text-cyan-300 transition-colors">VIBING</a>
              <span className="text-cyan-500">•</span>
              <a href="#" className="px-3 py-2 hover:text-cyan-300 transition-colors">SUPPORT US</a>
            </div>
          </nav>
        </div>
      </header>
    )
}