import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy border-t border-neon-teal border-opacity-20 py-10 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand/Intro */}
          <div>
            <h3 className="text-neon-teal text-xl mb-4 font-digital">
              LETS CONNECT ☏
            </h3>
            <p className="text-white text-sm opacity-70">
              Feel free to contact anytime
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-white text-lg mb-4">Soical Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    InstaGram
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    FaceBook
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    GitHub
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg mb-4"> Contact</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-neon-teal bg-opacity-20 flex items-center justify-center"
                aria-label="Facebook"
              ></motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-neon-teal bg-opacity-20 flex items-center justify-center"
                aria-label="Twitter"
              ></motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-neon-teal bg-opacity-20 flex items-center justify-center"
                aria-label="Instagram"
              ></motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-white border-opacity-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm opacity-50 mb-4 md:mb-0">
            © {new Date().getFullYear()} ROBEL MEASHO All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link href="/privacy">
              <span className="text-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-white text-sm opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
