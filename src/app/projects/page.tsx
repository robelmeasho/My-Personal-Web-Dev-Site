"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Music, Brain, Heart } from "lucide-react";

// Logo Component
const TuneInLogo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative">
        {/* Sound waves on left */}
        <div className="absolute left-[-60px] top-1/2 transform -translate-y-1/2">
          <div className="flex items-end space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={`left-${i}`}
                className="w-1 bg-cyan-300 rounded-full"
                style={{
                  height: `${12 + (i % 3) * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                  animation: "pulse 1.5s infinite ease-in-out",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Spiral in center */}
        <div className="w-32 h-32 rounded-full border-4 border-cyan-300 relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-cyan-300 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-300 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-cyan-300"></div>
            </div>
          </div>

          {/* Dashed circle overlay */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-500 opacity-60"></div>

          {/* Spiral curve accent */}
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-cyan-300 rounded-br-full"></div>
        </div>

        {/* Sound waves on right */}
        <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2">
          <div className="flex items-end space-x-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={`right-${i}`}
                className="w-1 bg-cyan-300 rounded-full"
                style={{
                  height: `${12 + (i % 3) * 8}px`,
                  animationDelay: `${i * 0.1}s`,
                  animation: "pulse 1.5s infinite ease-in-out",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo text */}
      <div className="mt-4 text-4xl font-bold tracking-wider text-cyan-300">
        TUNE IN
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatCoordinates = (): string => {
    return `40.7440° N 73.8873° W`;
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(79, 209, 197, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(79, 209, 197, 0.2) 0%, transparent 50%)",
          }}
        ></div>

        {/* Flowing Lines */}
        <div className="absolute inset-0 z-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 w-full"
              style={{
                top: `${20 + i * 15}%`,
                transform: `translateY(${
                  scrollPosition * 0.1 * (i % 2 === 0 ? 1 : -1)
                }px) rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                width: "120%",
                left: "-10%",
              }}
            ></div>
          ))}
        </div>

        {/* Main Title Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Logo Added Here */}
          <TuneInLogo className="mx-auto mb-8" />

          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500">
              TUNE IN
            </h1>
            <div className="text-cyan-100 font-light text-xl md:text-2xl italic mb-12">
              `Let the music ease your mind.`
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/vibing"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-indigo-950 font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Start Your Journey <ArrowRight size={18} />
          </a>
        </div>

        {/* Digital coordinates at bottom */}
        <div className="absolute bottom-8 w-full text-center text-cyan-400/70 font-mono text-sm">
          {formatCoordinates()} •{" "}
          {currentTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </section>
      <section className="py-20 relative bg-indigo-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-300">
            A GENTLE START • PEACE OF MIND BEGINS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Music size={32} className="text-cyan-400" />,
                title: "Therapeutic Melodies",
                description:
                  "Curated audio experiences designed to reduce anxiety, improve focus, and promote restful sleep.",
              },
              {
                icon: <Brain size={32} className="text-cyan-400" />,
                title: "Mental Wellness",
                description:
                  "Science-backed approaches to managing stress and building resilience through the power of sound.",
              },
              {
                icon: <Heart size={32} className="text-cyan-400" />,
                title: "Self-Care Rituals",
                description:
                  "Transform daily moments into opportunities for mindfulness with guided audio journeys.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-indigo-950/70 p-6 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-200">
                  {feature.title}
                </h3>
                <p className="text-cyan-50/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-20 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-40 bg-gradient-to-l from-red-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-40 bg-gradient-to-r from-cyan-500/10 to-transparent"></div>

        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-16 text-cyan-300">
            FEEL GROUNDED AGAIN WITH SUPPORT THAT UNDERSTANDS YOU
          </h2>

          <div className="relative mb-12 p-8 bg-indigo-900/30 rounded-lg border-l-4 border-cyan-500">
            <p className="italic text-xl mb-4 text-cyan-50">
              `The guided meditations on Tune In helped me through one of the
              most challenging periods of my life. I now start and end each day
              with these sessions.`
            </p>
            <p className="text-cyan-300 font-medium">— Alex M.</p>
          </div>

          <a
            href="/vibing"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-indigo-950 font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Experience It Yourself <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-indigo-900/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-cyan-300">
                A SAFE SPACE
              </h2>
              <p className="text-cyan-50 mb-4 leading-relaxed">
                We believe mental wellness requires regular access to effective
                tools for managing anxiety, depression, and everyday stress.
              </p>
              <p className="text-cyan-50 leading-relaxed">
                You`re not alone in your journey. We`re here to remind you that
                healing begins with connection. We offer support tailored to
                your unique needs, building resilience one step at a time.
              </p>
            </div>

            <div className="bg-indigo-950/70 p-6 rounded-lg border border-cyan-500/30">
              <div className="text-5xl mb-6 text-center">🎧</div>
              <h3 className="text-xl font-semibold mb-3 text-cyan-200 text-center">
                Why Music Therapy Works
              </h3>
              <p className="text-cyan-50/80 mb-4">
                Music engages multiple areas of the brain simultaneously,
                creating neural pathways that can bypass traditional cognitive
                blocks that contribute to mental health challenges.
              </p>
              <p className="text-cyan-50/80">
                Our carefully designed audio experiences leverage these pathways
                to promote calm, focus, and emotional regulation without
                medication or intensive therapy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-indigo-950 border-t border-indigo-800 py-6 text-cyan-300/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              {/* Added small logo to footer */}
              <div className="flex items-center mb-3">
                <TuneInLogo className="transform scale-50 origin-left" />
              </div>
              <p className="text-sm">
                Mental wellness through the power of sound. Est. 2025.
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-3">Navigate</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Vibing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Support Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Anxiety Relief
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Sleep Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Focus Enhancement
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Emotional Balance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-cyan-400 font-bold mb-3">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2025 Tune In | Mental HEALTH Through Music | BASED IN London
            </div>
            <div className="text-sm font-mono">
              ( №001 ) • {formatCoordinates()}
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Animation for the logo sound waves */}
      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
