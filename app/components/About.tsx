"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-10 bg-gray-50 dark:bg-[#01070e] overflow-hidden">
      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side (Intro) */}
        <motion.div
          className="md:w-[90%] text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Introduction */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 dark:text-white">
              👋 Hi, I&apos;m Rakesh
            </h2>
          </motion.div>

          {/* AI Introduction - Minimalist Executive Summary Style */}
          <motion.div
            className="mt-[3rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative max-w-3xl">
              {/* Subtle accent element */}
              <div className="absolute -left-3 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500/40 to-purple-500/40 rounded-full"></div>
              
              {/* Main content with ample whitespace */}
              <div className="pl-8 space-y-12">
                {/* Mission Statement */}
                <p className="text-[1.65rem] md:text-[1.85rem] font-light text-gray-900 dark:text-white leading-[1.4] tracking-normal">
                  Bay Area-based AI Engineer with proven track record for transforming challenges into 
                  <span className="font-medium text-blue-600 dark:text-blue-400"> impactful solutions</span>.
                </p>
                
                {/* Expertise highlight with improved typography */}
                <div className="space-y-6">
                  <p className="text-[1.05rem] md:text-[1.15rem] text-gray-700 dark:text-gray-300 leading-[1.8] tracking-wide">
                    My extensive expertise spans <span className="font-medium text-blue-600/80 dark:text-blue-400/90">Computer Vision</span> and <span className="font-medium text-purple-600/80 dark:text-purple-400/90">Large Language Models (LLMs)</span>, developing production-ready AI systems that transform cutting-edge research into scalable applications.
                  </p>
                  
                  {/* Value proposition with improved typography */}
                  <p className="text-[1.05rem] md:text-[1.15rem] text-gray-700 dark:text-gray-300 leading-[1.8] tracking-wide">
                    I specialize in building intelligent systems that not only solve complex challenges but deliver measurable business value with optimized performance and seamless integration.
                  </p>
                </div>
                
                {/* Publication highlight - updated to reflect actual research */}
                <div className="flex items-center gap-4 pl-1 py-2 border-l-2 border-blue-500/30">
                <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500/70 dark:text-blue-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <div>
                    <a href="https://arxiv.org/abs/2107.01620" target="_blank" rel="noopener noreferrer" title="Read the full paper on arXiv" className=" hover:text-blue-600 dark:hover:text-blue-300">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Academic Publication</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 italic">
                        Published on <span className="underline">arXiv: </span> </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 non-italic">&quot;Generating Fake Malware Using Auxiliary-Classifier GAN for Malware Analysis&quot; (2021)</p>
                    </a>
                </div>
                </div>

                
                {/* Subtle expertise indicator */}
                <div className="flex items-center pt-4">
                <span className="text-xs uppercase tracking-widest font-medium text-gray-500 dark:text-gray-400 leading-loose">
                    AI Engineering • Computer Vision • Large Language Models • MLOps • Backend
                </span>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
  className="relative flex justify-center" // ✅ Added `relative` here
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {/* Ambient Blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/15 rounded-full blur-3xl z-0"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] z-0"></div>

  {/* Image Container */}
  <div className="flex items-center justify-center h-full z-10">
    <div className="relative w-[500px] h-auto group flex items-center justify-center">
      {/* Enhanced Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/15 to-blue-400/20 dark:from-blue-600/20 dark:via-purple-500/15 dark:to-blue-600/20 rounded-xl blur-3xl group-hover:blur-4xl transition-all duration-500"></div>
      
      {/* Secondary Glow for Added Depth */}
      <div className="absolute inset-0 scale-90 bg-gradient-to-br from-[#abdae1]/10 via-transparent to-[#d8b4fe]/10 dark:from-[#93c5fd]/10 dark:via-transparent dark:to-[#d8b4fe]/15 rounded-xl blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-500"></div>

      {/* Image */}
      <Image
        src="/images/profile_pic_2.jpeg"
        alt="My profile picture"
        title="My profile picture"
        width={500}
        height={700}
        className="w-[70%] h-auto object-cover rounded-xl relative z-10 transition-all duration-500 group-hover:scale-105 shadow-xl
             border border-white/15 dark:border-blue-500/20 dark:shadow-blue-900/10
             dark:brightness-[0.75] dark:contrast-[1.05] dark:saturate-[0.95]
             ring-1 ring-blue-100/20 dark:ring-blue-500/10"
        priority
      />
    </div>
  </div>
</motion.div>

      </div>

      {/* Professional Cards Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* What I Do Card */}
        <div className="group p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent tracking-wide">
              What I Do
            </h3>
          </div>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400 leading-loose tracking-normal font-sans">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span>AI system design & deployment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span>Computer Vision & LLM solutions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 dark:text-blue-400 mt-1">•</span>
              <span>MLOps pipeline optimization</span>
            </li>
          </ul>
        </div>

        {/* Why AI Card */}
        <div className="group p-10 rounded-2xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent tracking-wide">
              Why AI?
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-loose tracking-normal font-sans">
            AI isn&rsquo;t just my job&mdash;it&rsquo;s my passion. Teaching machines to see, understand, and solve real-world problems feels like shaping the future 🌍.
          </p>

        </div>

        {/* Beyond Code Card */}
        <div className="group p-10 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900 dark:to-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-pink-500/10 dark:bg-pink-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
              <span className="text-3xl">🎮</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent tracking-wide">
              Beyond Code
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-loose tracking-normal font-sans">
            Avid learner exploring new technologies.
            Enjoy hiking, music, and gaming.
            Connect and share ideas with tech enthusiasts.
          </p>
        </div>
      </motion.div>

      {/* Core Values Section - Modern Design */}
      <motion.div
        className="max-w-6xl mx-auto mt-40 px-6" // Increased vertical spacing
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="relative">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Section Title with Line Design */}
          <div className="relative flex items-center gap-4 justify-center mb-20">
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent px-4">
              Core Values
            </h3>
            <div className="h-[1px] flex-grow max-w-[100px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          </div>

          {/* Values Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            {/* Innovation First */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                  <span className="relative text-5xl transform transition-transform duration-300 hover:scale-110 cursor-default inline-block">🎨</span>
                </div>
                <h4 className="text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                  Innovation First
                </h4>
                <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Constantly exploring new approaches and technologies to push the boundaries of what&rsquo;s possible in AI development.
                </p>
              </div>
            </motion.div>

            {/* Performance Driven */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                  <span className="relative text-5xl transform transition-transform duration-300 hover:scale-110 cursor-default inline-block">⚡</span>
                </div>
                <h4 className="text-xl font-medium bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
                  Performance Driven
                </h4>
                <div className="h-[2px] w-12 bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Committed to delivering high-performance AI solutions that scale efficiently and exceed expectations.
                </p>
              </div>
            </motion.div>

            {/* Impact Focused */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl"></div>
                  <span className="relative text-5xl transform transition-transform duration-300 hover:scale-110 cursor-default inline-block">🌟</span>
                </div>
                <h4 className="text-xl font-medium bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400 bg-clip-text text-transparent mb-4">
                  Impact Focused
                </h4>
                <div className="h-[2px] w-12 bg-gradient-to-r from-pink-500 to-orange-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Dedicated to creating AI solutions that drive meaningful change and deliver tangible value to users and businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}