// pages/index.tsx
"use client";

import { useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Footer from "./components/Footer";

import Skill from "./components/Skill";

// Main Layout component
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-deep-blue min-h-screen flex flex-col">
      <Head>
        <title>Robel`s Dev Site</title>
        <link
          href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-grow flex flex-col"
      >
        <main className="flex-grow flex flex-col">{children}</main>
        <Skill />
        <Footer />
      </motion.div>
    </div>
  );
};

// Flowing Curves Animation Component
const FlowingCurves: React.FC<{
  color?: string;
  opacity?: number;
  count?: number;
}> = ({ color = "white", opacity = 0.3, count = 5 }) => {
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");

    // Initialize paths
    gsap.set(paths, {
      strokeDasharray: 1500,
      strokeDashoffset: 1500,
    });

    // Animate paths
    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power3.inOut",
      stagger: 0.2,
    });

    // Create continuous flowing effect for each path
    paths.forEach((path, i) => {
      gsap.to(path, {
        attr: {
          d: `M-100,${100 + Math.sin(i) * 50} C300,${
            200 + Math.cos(i) * 40
          } 600,${300 + Math.sin(i) * 30} 1300,${150 + Math.cos(i) * 60}`,
        },
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      });
    });
  }, []);

  // Create array of paths
  const paths = Array.from({ length: count }, (_, i) => {
    const y1 = 100 + i * 50;
    const y2 = 200 - i * 30;
    const y3 = 300 + i * 20;
    const y4 = 150 - i * 40;

    return `M-100,${y1} C300,${y2} 600,${y3} 1300,${y4}`;
  });

  return (
    <div ref={svgRef} className="absolute inset-0 z-10 overflow-hidden">
      {paths.map((path, i) => (
        <svg
          key={i}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 600"
        >
          <path
            d={path}
            stroke={color}
            strokeWidth="2"
            fill="none"
            strokeDasharray="1500"
            strokeDashoffset="1500"
            style={{ opacity }}
          />
        </svg>
      ))}
    </div>
  );
};

// Hero Section Component
const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP plugins
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Animate the text reveal
    const titleText = textRef.current?.querySelectorAll(".title-text");

    if (titleText) {
      gsap.fromTo(
        titleText,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }

    // Create subtle floating animation for the head
    gsap.to(".head-visual", {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-navy" ref={containerRef}>
      {/* Large text in background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <h1 className="text-light-teal text-opacity-20 text-[24vw] font-bold tracking-tighter"></h1>
      </div>

      {/* Flowing curves */}
      <FlowingCurves color="white" opacity={0.3} count={5} />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        <div className="flex-grow grid grid-cols-12 items-center">
          {/* Left Column */}
          <div className="col-span-12 md:col-span-3 pl-8 md:pl-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-white text-5xl uppercase mb-2 underline"></h1>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 10 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-navy p-6">
                <h2 className="text-white text-2xl mb-4">CREATIVE MIND</h2>
                <h2 className="text-neon-teal text-xl mb-2">WEB DEVELOPER</h2>
                <h2 className="text-neon-teal text-xl mb-4">UI/UX DESIGNER</h2>
                <h2 className="text-neon-teal text-xl mb-2">WEB DESIGNER</h2>
                <h2 className="text-neon-teal text-xl mb-4">
                  TEAM-ORIENTED PROFESSIONAL
                </h2>
              </div>

              <div className="mt-12 text-white">
                <p className="uppercase text-sm mb-1">FEEL SUPPORTED</p>
                <p className="uppercase text-sm mb-1"> WITH DEVLOPER </p>
                <p className="uppercase text-sm mb-1">THAT CODES AND CARES </p>
              </div>
            </motion.div>
          </div>

          {/* Center Column - Head Visual */}
          <div className="col-span-12 md:col-span-6 flex justify-center py-12 md:py-0">
            <motion.div
              className="head-visual relative w-full max-w-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <div className="relative">
                {/* X-ray head visualization */}
                <div className="aspect-[4/5] rounded-full bg-blue-900 relative overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    loading="lazy"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute  bg-gradient-to-r from-blue-200 to-teal-300 opacity-25"></div>
                </div>

                <div
                  ref={textRef}
                  className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                >
                  <span className="title-text text-white text-8xl md:text-9xl font-light italic opacity-0"></span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-3 pr-8 md:pr-12">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-right mb-6"
            >
              <h1 className="text-white uppercase mb-2 text-4xl underline">
                My Skills
              </h1>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-right"
            >
              <div className="bg-navy p-6">
                <h2 className="text-white text-2xl mb-2">HTML, CSS,</h2>
                <h2 className="text-neon-teal text-2xl mb-2">JAVASCRIPT</h2>
                <h2 className="text-neon-teal text-2xl mb-2">PYTHON, REACT</h2>
                <h2 className="text-neon-teal text-2xl mb-4">NEXT.JS</h2>
                <h2 className="text-neon-teal text-2xl mb-1">MYSQL</h2>
                <h2 className="text-neon-teal text-2xl mb-1">POSTGRE SQL</h2>
              </div>

              <div className="mt-12 text-white">
                <p className="uppercase text-sm mb-1">FEEL GROUNDED</p>
                <p className="uppercase text-sm mb-1"> WITH CONFIDENCE</p>
                <p className="uppercase text-sm">THAT UNDERSTANDS YOU</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="py-6 px-4 md:px-12 grid grid-cols-3 md:flex md:justify-between items-center text-sm">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center md:text-left"
          >
            <span className="text-neon-teal font-digital">Robel Measho</span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center space-x-2"
          >
            2024
            <span className="text-neon-teal font-digital whitespace-nowrap"></span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="hidden md:block text-neon-teal font-digital whitespace-nowrap"
          >
            Tune IN
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center justify-center space-x-2"
          >
            CANADA
            <span className="text-neon-teal font-digital whitespace-nowrap"></span>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center md:text-right col-span-3 md:col-span-1 mt-4 md:mt-0"
          >
            <span className="text-neon-teal font-digital">
              BASED IN Edmonton Alberta
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Content Section Component
const ContentSection: React.FC= () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP plugins if window is defined
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const textElements = textRef.current?.querySelectorAll(".animate-text");

      if (textElements) {
        textElements.forEach((text, index) => {
          gsap.fromTo(
            text,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: text as Element,
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
              },
              delay: index * 0.2,
            }
          );
        });
      }
    }
  }, []);

  return (
    <div ref={sectionRef} className="bg-navy py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto" ref={textRef}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="animate-text text-white text-2xl md:text-3xl mb-8">
              I HAVE TRANSFORMED MY LIFE THRU CODING AND THE LOVE THAT COMES
              FROM DEVELOPING
            </h2>
            <p className="animate-text text-white text-base md:text-lg mb-6">
              I AM CONFIDENT IN MY SKILL WITH HTML, CSS, JAVASCRIPT, REACT,
              NEXT.JS, AND BOOTSTRAP. Whether you’re launching your first
              business, refreshing your brand, or ready to level up your online
              presence—I’ve got you covered
            </p>
            <p className="animate-text text-white text-base md:text-lg">
              ALWAYS BUILDING AND LEARNING TO BE THE BEST IN CODING WORLD 🧑🏾‍💻
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="animate-text text-white text-2xl md:text-3xl mb-8">
              AND EVERYONE DESERVES SUPPORT NO MATTER WHICH JOURNEY YOU`RE
              NAVIGATING
            </h2>
            <p className="animate-text text-white text-base md:text-lg mb-6">
              I am a Web Developer located in Edmonton, Alberta. I currently am
              in the University of Alberta located in Edmonton becoming a Full
              Stack Devloper.
            </p>
          </div>
        </div>

         <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="https://github.com/robelmeasho" target="_blank" rel="noopener noreferrer">
            <motion.span
              className="inline-block text-neon-teal text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 border-2 border-neon-teal rounded-full hover:bg-neon-teal hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My GitHub Profile
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
<Skill />;

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <ContentSection />
    </Layout>
  );
};

export default Home;

