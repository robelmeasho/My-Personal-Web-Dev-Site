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
            <h3 className="text-white text-lg mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                 
                </Link>
              </li>
              <li></li>
              <li>
                <a 
                  href="https://github.com/robelmeasho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                    GitHub
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg mb-4"> Contact</h3>
            <div className="flex space-x-4">
     
       
       
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
