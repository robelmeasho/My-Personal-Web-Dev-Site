"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state for backdrop effect
      setScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down - hide navbar
      } else {
        setIsVisible(true); // Scrolling up - show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "HOME 🧠", href: "/" },
    { name: "CONTACT 📱", href: "/contact" },
  ];

  // Container variants for staggered menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Individual menu item variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Navbar slide variants
  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4,
      },
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        className={`w-full py-6 px-6 sm:px-10 transition-all duration-500 ${
          scrolled
            ? "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg"
            : "bg-transparent"
        } fixed top-0 left-0 right-0 z-50`}
        variants={navVariants}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
            : "transparent",
        }}
      >
        <div className="mx-auto flex justify-between items-center">
          {/* Logo + Title */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white font-bold text-lg tracking-widest cursor-pointer"
            >
              {/* Add your logo content here */}
            </motion.div>
          </motion.div>

          {/* Menu */}
          <motion.div
            className="flex space-x-6 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center"
                variants={itemVariants}
              >
                {index > 0 && (
                  <motion.span
                    className="text-cyan-500 mr-6"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    •
                  </motion.span>
                )}
                <Link href={item.href}>
                  <motion.span
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                      color: "#84cc16", // lime-300
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{
                      scale: 0.95,
                      y: 0,
                    }}
                    className="text-white hover:text-lime-300 transition-all duration-300 text-sm sm:text-base font-medium cursor-pointer relative group"
                  >
                    {item.name}
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-lime-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Optional: Progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-lime-300"
          style={{
            width: `${Math.min(
              scrolled
                ? (window.scrollY /
                    (document.documentElement.scrollHeight -
                      window.innerHeight)) *
                    100
                : 0,
              100
            )}%`,
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>
    </AnimatePresence>
  );
}
