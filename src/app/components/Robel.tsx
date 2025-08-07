import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image"; // Optional: Uncomment if you prefer Next.js <Image>

const HeadVisual = () => {
  return (
    <div className="col-span-12 md:col-span-6 flex justify-center py-12 md:py-0">
      <motion.div
        className="head-visual relative w-full max-w-[500px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

        {/* Main image container */}
        <motion.div
          className="relative z-10 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* You can use next/image or native <img> below */}
          {/* Option 1: Using next/image (recommended for optimization) */}
          {/*
          <Image
            src="/profile.png"
            alt="Profile"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full"
            priority={false}
          />
          */}

          {/* Option 2: Native img tag */}
          <img
            src="/profile.png"
            alt="Profile"
            loading="lazy"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-full"
          />

          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
        </motion.div>

        {/* Floating visual elements */}
        <motion.div
          aria-hidden="true"
          className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg"
          animate={{ x: [0, -5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeadVisual;
