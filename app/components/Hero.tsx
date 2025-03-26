"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { SiHuggingface } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";


// ===============
// MAIN COMPONENT
// ===============
export default function Hero() {

  return (
    <section id="hero" className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#01070e] dark:to-[#020c16] overflow-x-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full h-screen max-w-7xl mx-auto px-8">
        {/* Left Column - Content */}
        <div className="w-1/2 flex flex-col justify-center pl-4 md:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.span 
              className="inline-flex items-center bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full px-4 py-1.5 border border-blue-100/50 dark:border-blue-800/50"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI Design Engineer
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Rakesh Nagaraju
            </motion.h1>

            <motion.div
              className="font-mono text-sm md:text-base text-gray-600 dark:text-gray-400 bg-transparent py-2 px-4 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50/50 to-transparent dark:from-blue-950/30 dark:via-purple-900/20 dark:to-transparent opacity-60"></div>
              <div className="relative z-10">
                <Typewriter
                  options={{
                    strings: [
                      "Computer Vision • Deep Learning",
                      "Natural Language Processing • LLMs",
                      "MLOps • AI Infrastructure",
                      "Neural Networks • Machine Learning"
                    ],
                    autoStart: true,
                    delay: 50,
                    deleteSpeed: 30,
                    cursor: "▋",
                    loop: true,
                    skipAddStyles: true,
                    wrapperClassName: "typewriter-wrapper",
                    cursorClassName: "typewriter-cursor",
                  }}
                />
              </div>
            </motion.div>

            <motion.p 
              className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Crafting intelligent solutions for complex challenges, with 
              <span className="text-gray-900 dark:text-gray-200"> 5+ years</span> of expertise in 
              <span className="text-gray-900 dark:text-gray-200"> AI Engineering</span> and 
              <span className="text-gray-900 dark:text-gray-200"> Deep Learning</span>.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#footer-contact"
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  bg-gradient-to-r from-purple-600 to-pink-500
                  dark:from-purple-500 dark:to-pink-400
                  text-white
                  text-base font-medium rounded-2xl
                  hover:shadow-lg hover:shadow-pink-500/30
                  dark:hover:shadow-pink-600/20
                  transform hover:-translate-y-1
                  transition-all duration-300
                  relative overflow-hidden
                  before:absolute before:inset-0
                  before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                  before:translate-x-[-200%] hover:before:translate-x-[200%]
                  before:transition-transform before:duration-700
                "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              
              <motion.a
                href="/files/Rakesh_Resume_October_2024.pdf"
                download
                title="Download my CV"
                className="
                  inline-flex items-center justify-center gap-2 px-8 py-4
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  dark:from-blue-500 dark:to-cyan-400
                  text-white
                  text-base font-medium rounded-2xl
                  hover:shadow-lg hover:shadow-blue-500/30
                  dark:hover:shadow-blue-600/20
                  transform hover:-translate-y-1
                  transition-all duration-300
                  relative overflow-hidden
                  before:absolute before:inset-0
                  before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
                  before:translate-x-[-200%] hover:before:translate-x-[200%]
                  before:transition-transform before:duration-700
                "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFileDownload className="w-4 h-4" />
                Download CV
              </motion.a>
              
              <motion.a
                href="#experience"
                title="View my professional experience"
                className="
                  inline-flex items-center gap-2 px-8 py-4
                  bg-transparent
                  border-2 border-gray-900 dark:border-white
                  text-gray-900 dark:text-white
                  text-base font-medium rounded-2xl
                  hover:bg-gray-900 hover:text-white
                  dark:hover:bg-white dark:hover:text-gray-900
                  transform hover:-translate-y-1
                  transition-all duration-300
                  relative overflow-hidden
                  before:absolute before:inset-0
                  before:bg-gradient-to-r before:from-gray-900/0 before:via-gray-900/10 before:to-gray-900/0
                  before:translate-x-[-200%] hover:before:translate-x-[200%]
                  before:transition-transform before:duration-700
                "
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Experience
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex items-center gap-4 md:gap-6 mt-8 md:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a
                href="https://www.linkedin.com/in/rakesh-nagaraju/"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect with me on LinkedIn"
                className="text-gray-400 hover:text-[#0077b5] transition-all duration-300 transform hover:scale-110 p-2.5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
              >
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://github.com/Rakesh-Nagaraju"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow me on GitHub"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110 p-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
              >
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://huggingface.co/Rakesh2205"
                target="_blank"
                rel="noopener noreferrer"
                title="Check out my models on Hugging Face"
                className="text-gray-400 hover:text-[#ffb013] transition-all duration-300 transform hover:scale-110 p-2.5 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-lg"
              >
                <SiHuggingface className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.instagram.com/rakesh_nagaraju"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow me on Instagram"
                className="text-gray-400 hover:text-[#E4405F] transition-all duration-300 transform hover:scale-110 p-2.5 hover:bg-pink-50 dark:hover:bg-pink-900/20 rounded-lg"
              >
                <FiInstagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="w-1/2 relative flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[300px] h-[300px] flex items-center justify-center group"
            whileHover={{ scale: 1.02 }}
          >
            {/* Enhanced multi-layered gradient for more sophisticated effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-blue-500/40 dark:from-blue-600/30 dark:via-purple-600/25 dark:to-blue-600/30 rounded-2xl blur-3xl group-hover:blur-4xl transition-all duration-500"></div>
            <div className="absolute inset-0 scale-75 bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 dark:from-blue-400/15 dark:to-purple-400/15 rounded-full blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500"></div>

            <Image 
              src="/images/bg_removed_1_copy.png"
              alt="My profile picture"
              width={250}
              height={250}
              className="object-cover rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 
                shadow-xl 
                border-[4px] border-white/40 dark:border-blue-500/30
                dark:shadow-blue-900/20
                dark:brightness-[0.75] dark:contrast-[1.05]
                ring-1 ring-purple-200/30 dark:ring-purple-500/20"
              priority
              quality={85}
              sizes="(max-width: 768px) 150px, 250px"
            />
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-screen px-4 py-16 md:py-20 max-w-xl mx-auto">
        {/* Add Rakesh Head Image at Top */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[150px] h-[150px] mx-auto mb-6 flex items-center justify-center group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Simplified gradient for better performance */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-2xl"></div>
          
          <Image
            src="/images/bg_removed_1_copy.png"
            alt="My profile picture"
            width={150}
            height={150}
            className="mt-[48px] w-full h-full object-contain rounded-full relative z-10 transition-transform duration-300 group-hover:scale-105 
              shadow-lg 
              border-[3px] border-white/40 dark:border-blue-500/30 
              dark:shadow-blue-900/20
              dark:brightness-[0.75] dark:contrast-[1.05]
              ring-1 ring-purple-200/30 dark:ring-purple-500/20"
            priority
            quality={85}
            sizes="150px"
          />
        </motion.div>

        <motion.span 
          className="mt-[14px] inline-flex items-center bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full px-4 py-1.5 border border-blue-100/50 dark:border-blue-800/50"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          AI Engineer
        </motion.span>
        
        <motion.h1
          className="text-4xl p-[10px] font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Rakesh Nagaraju
        </motion.h1>

        <motion.div
          className="font-mono text-sm text-gray-700 dark:text-gray-300 p-4 rounded-lg relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50/50 to-transparent dark:from-blue-950/30 dark:via-purple-900/20 dark:to-transparent opacity-60"></div>
          <div className="relative z-10">
            <Typewriter
              options={{
                strings: [
                  "Computer Vision • Deep Learning",
                  "Natural Language Processing • LLMs",
                  "MLOps • AI Infrastructure",
                  "Neural Networks • Machine Learning"
                ],
                autoStart: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: "▋",
                loop: true,
                skipAddStyles: true,
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor",
              }}
            />
          </div>
        </motion.div>

        <motion.p 
          className="text-base text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          AI engineer with 5+ years of experience in computer vision, 
          generative AI, NLP, and LLMs.
        </motion.p>

        {/* Mobile Layout Buttons */}
        <motion.div
          className="flex flex-col gap-4 pt-6 w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#footer-contact"
            title="Get in touch with me"
            className="
              inline-flex items-center justify-center gap-2 px-6 py-3
              bg-gradient-to-r from-purple-600 to-pink-500
              dark:from-purple-500 dark:to-pink-400
              text-white
              text-base font-medium rounded-2xl
              hover:shadow-lg hover:shadow-pink-500/30
              dark:hover:shadow-pink-600/20
              transform active:scale-95
              transition-all duration-300
              relative overflow-hidden
              before:absolute before:inset-0
              before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
              before:translate-x-[-200%] hover:before:translate-x-[200%]
              before:transition-transform before:duration-700
              w-full
            "
            whileTap={{ scale: 0.98 }}
          >
            Contact Me
          </motion.a>
          
          <motion.a
            href="/files/Rakesh_Resume_October_2024.pdf"
            download
            title="Download my CV"
            className="
              inline-flex items-center justify-center gap-2 px-6 py-3
              bg-gradient-to-r from-blue-600 to-cyan-500
              dark:from-blue-500 dark:to-cyan-400
              text-white
              text-base font-medium rounded-2xl
              hover:shadow-lg hover:shadow-blue-500/30
              dark:hover:shadow-blue-600/20
              transform active:scale-95
              transition-all duration-300
              relative overflow-hidden
              before:absolute before:inset-0
              before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
              before:translate-x-[-200%] hover:before:translate-x-[200%]
              before:transition-transform before:duration-700
              w-full
            "
            whileTap={{ scale: 0.98 }}
          >
            <FaFileDownload className="w-4 h-4 mr-2" />
            Download CV
          </motion.a>
          
          <motion.a
            href="#experience"
            title="View my professional experience"
            className="
              inline-flex items-center justify-center gap-2 px-6 py-3
              bg-transparent
              border-2 border-gray-900 dark:border-white
              text-gray-900 dark:text-white
              text-base font-medium rounded-2xl
              hover:bg-gray-900 hover:text-white
              dark:hover:bg-white dark:hover:text-gray-900
              transform active:scale-95
              transition-all duration-300
              w-full
            "
            whileTap={{ scale: 0.98 }}
          >
            View Experience
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

