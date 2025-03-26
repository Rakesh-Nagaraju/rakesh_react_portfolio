"use client";
import Image from 'next/image';
import { useState, useMemo, useEffect} from "react";
import { motion } from "framer-motion";
import SkillsSection from "@/app/components/SkillsSection";
import ExperienceModal, { useExperienceModal, experiences } from "@/app/components/ExperienceModal";

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

import { FaLinkedin} from 'react-icons/fa';
import { SiHuggingface } from "react-icons/si";

import { FaGithub, FaBolt } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
import { AnimatePresence } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";




// types.ts (or at top of page.tsx, but a separate file is cleaner)



export interface Project {
  title: string;
  shortDescription: string[];
  longDescription?: string[];
  image?: string;
  demoLink?: string;
  githubLink?: string;
  technologies?: string[];
  role?: string;
}




/* --------------------- */
/*   EXPERIENCE MODAL    */
/* --------------------- */










interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project | null; // or replace 'any' with a specific type if you have one
}

/* --------------------- */
/*    PROJECTS MODAL     */
/* --------------------- */
function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm overflow-auto p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="
          relative
          bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)]
          dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)]
          rounded-2xl
          max-w-3xl w-full
          shadow-2xl
          dark:shadow-gray-950/50
          backdrop-blur-md
          overflow-hidden
        "
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {/* Decorative accent - matching project cards */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4 z-10
            p-2 rounded-full
            bg-gray-900/10 dark:bg-gray-100/10
            hover:bg-gray-900/20 dark:hover:bg-gray-100/20
            transition-colors duration-200
          "
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image */}
        {project.image && (
          <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl">
          <Image
            src={project.image}
              alt={`${project.title} preview`}
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
            {/* Enhanced gradient overlay for better text readability - matching project cards */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80" />
            
            {/* Project Title Overlay - Enhanced visibility */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                {project.title}
              </h3>
              {project.role && (
                <p className="text-gray-100 text-sm font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                  Role: {project.role}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="p-6 space-y-6">
        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
              <span
                key={index}
                  className="
                    px-2.5 py-1
                    text-xs font-medium
                    bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                    dark:from-blue-600/20 dark:to-purple-600/20 
                    text-blue-700 dark:text-blue-300
                    rounded-full
                    border border-blue-200/50 dark:border-purple-700/50
                    shadow-sm
                  "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

          {/* Long Description */}
          {project.longDescription && project.longDescription.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Project Details
              </h4>
              <ul className="space-y-3">
                {project.longDescription.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-600 dark:text-gray-400 text-sm relative pl-1 group/item overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Subtle left indicator instead of gradient - matching project cards */}
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-300 dark:bg-gray-700 group-hover/item:bg-blue-400 dark:group-hover/item:bg-blue-500 transition-colors duration-300"></div>
                    
                    {/* Subtle background highlight on hover */}
                    <div className="absolute left-0 top-0 w-0 h-full bg-gray-100 dark:bg-gray-800/50 group-hover/item:w-full transition-all duration-500 rounded-r-md"></div>
                    
                    {/* Text content with reduced padding */}
                    <p className="relative py-1.5 pl-2 pr-1 leading-relaxed group-hover/item:translate-x-1 transition-transform duration-300">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
        {(project.demoLink || project.githubLink) && (
            <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
            {project.demoLink && (
              <a
                href={project.demoLink}
                  className="
                      relative group/link flex items-center gap-1
                      text-xs text-orange-600 dark:text-orange-400
                      hover:text-orange-700 dark:hover:text-orange-300
                      font-medium bg-gradient-to-r from-orange-400/10 to-pink-400/10
                      dark:from-orange-600/20 dark:to-pink-600/20
                      px-3 py-2 rounded-full
                      hover:shadow-md hover:-translate-y-0.5
                      transition-all duration-300
                  "
                target="_blank"
                rel="noopener noreferrer"
                title={`View live demo of ${project.title}`}
                onClick={(e) => e.stopPropagation()}
              >
                    <FaBolt className="w-3 h-3" />
                    <span>Live Demo</span>
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                  className="
                      relative group/link flex items-center gap-1
                      text-xs text-gray-700 dark:text-gray-300
                      hover:text-gray-900 dark:hover:text-white
                      font-medium bg-gradient-to-r from-gray-200/70 to-gray-100/70
                      dark:from-gray-700/70 dark:to-gray-800/70
                      px-3 py-2 rounded-full
                      hover:shadow-md hover:-translate-y-0.5
                      transition-all duration-300
                  "
                target="_blank"
                rel="noopener noreferrer"
                title={`View source code for ${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
              >
                    <FaGithub className="w-3 h-3" />
                    <span>Source Code</span>
              </a>
            )}
              </div>
          </div>
        )}
      </div>
      </motion.div>
    </motion.div>
  );
}

function CopyrightYear() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return year;
}

export default function Home() {
  /* Dark Mode */
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    // Get stored preference or system preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  // Scroll to top on page refresh/load
  useEffect(() => {
    // Check if this is a page refresh by looking at the navigation type
    if (window.performance) {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0 && (navEntries[0] as PerformanceNavigationTiming).type === 'reload') {
        // This is a refresh, scroll to top
        window.scrollTo(0, 0);
      } else {
        // Alternative method for browsers that don't support the above
        window.scrollTo(0, 0);
      }
    } else {
      // Fallback for browsers without the Performance API
      window.scrollTo(0, 0);
    }

    // Also handle hash in URL (e.g., example.com/#experience)
    if (window.location.hash) {
      // If there's a hash, we'll need to scroll to that element after a small delay
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  /* Mobile Nav */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Experience Section
  const { 
    selectedExperience, 
    isExperienceModalOpen, 
    openExperienceModal, 
    closeExperienceModal 
  } = useExperienceModal();

  // ==============================
  // ADDED: handleNavClick FUNCTION
  // ==============================
  function handleNavClick(secId: string) {
    // 1) Close the mobile menu
    setIsMenuOpen(false);
    // 2) Force the nav highlight to update right away
    setActiveSection(secId);
    // 3) Smooth scroll to the target section
    document.getElementById(secId)?.scrollIntoView({ behavior: "smooth" });
  }

  /* Scroll Spy Setup */
  const sections = useMemo(() => ["hero", "about", "experience", "projects", "footer-contact"], []);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Helper function to debounce scroll updates for performance
    const debounce = <Args extends unknown[]>(
      func: (...args: Args) => void,
      delay: number
    ): ((...args: Args) => void) => {
      let timeoutId: ReturnType<typeof setTimeout> | undefined;
    
      return (...args: Args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };
    
    

    const updateActiveSectionOnLoad = () => {
      const currentScrollY = window.scrollY;
      const sectionOffsets = sections.map(secId => {
      const secEl = document.getElementById(secId);
        return secEl ? secEl.offsetTop : 0;
      });

      // Find the section that is currently in view
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (currentScrollY < sectionOffsets[i + 1] || i === sectionOffsets.length - 1) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const updateExperienceScroll = () => {
      const experienceContainer = document.querySelector('.overflow-x-auto');
      const progressBar = document.getElementById('experienceScrollProgress');
      
      if (experienceContainer && progressBar) {
        const scrollLeft = experienceContainer.scrollLeft;
        const scrollWidth = experienceContainer.scrollWidth;
        const containerWidth = experienceContainer.clientWidth;
        const scrollPercent = scrollLeft / (scrollWidth - containerWidth);
        progressBar.style.width = `${Math.min(100, scrollPercent * 100)}%`;
      }
    };

    // New function to update projects scroll progress with better handling
    const updateProjectsScroll = () => {
      const projectContainer = document.getElementById('project-scroll-container');
      const progressBar = document.getElementById('projectsScrollProgress');
      
      if (projectContainer && progressBar) {
        const scrollLeft = projectContainer.scrollLeft;
        const scrollWidth = projectContainer.scrollWidth;
        const containerWidth = projectContainer.clientWidth;
        
        // Ensure we're not dividing by zero and have actual scroll space
        if (scrollWidth > containerWidth) {
          const maxScroll = scrollWidth - containerWidth;
          const scrollPercent = scrollLeft / maxScroll;
          
          // Ensure the width is properly set with a percentage value
          progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent * 100))}%`;
          
          // Add a CSS class to indicate scrollability for visual feedback
          if (scrollLeft <= 5) {
            projectContainer.classList.add('at-start');
            projectContainer.classList.remove('at-end');
          } else if (scrollLeft >= maxScroll - 5) {
            projectContainer.classList.add('at-end');
            projectContainer.classList.remove('at-start');
          } else {
            projectContainer.classList.remove('at-start', 'at-end');
          }
        } else {
          // If no scrolling is possible, set progress to 0
          progressBar.style.width = '0%';
        }
      }
    };

    // Debounced versions for better performance
    const debouncedProjectScroll = debounce(updateProjectsScroll, 10);
    const debouncedSectionUpdate = debounce(updateActiveSectionOnLoad, 100);

    // Update active section on load
    updateActiveSectionOnLoad();

    // Initial call for scroll progress
    updateExperienceScroll();
    updateProjectsScroll();

    // Add event listeners with debounced functions
    window.addEventListener('scroll', debouncedSectionUpdate);

    const experienceContainer = document.querySelector('.overflow-x-auto');
    if (experienceContainer) {
      experienceContainer.addEventListener('scroll', updateExperienceScroll);
    }
    
    // Improved project container event handling
    setTimeout(() => {
      const projectContainer = document.getElementById('project-scroll-container');
      if (projectContainer) {
        // Remove previous listener if any (cleanup)
        projectContainer.removeEventListener('scroll', debouncedProjectScroll);
        
        // Add fresh listener
        projectContainer.addEventListener('scroll', debouncedProjectScroll);
        
        // Also add touch events for mobile
        projectContainer.addEventListener('touchmove', debouncedProjectScroll);
        
        // Manually trigger initial update
        updateProjectsScroll();
        
        console.log('Project scroll listeners attached');
      } else {
        console.warn('Project container not found for attaching listeners');
      }
    }, 500); // Short delay to ensure DOM is ready

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('scroll', debouncedSectionUpdate);
      if (experienceContainer) {
        experienceContainer.removeEventListener('scroll', updateExperienceScroll);
      }
      
      const projectContainer = document.getElementById('project-scroll-container');
      if (projectContainer) {
        projectContainer.removeEventListener('scroll', debouncedProjectScroll);
        projectContainer.removeEventListener('touchmove', debouncedProjectScroll);
      }
    };
  }, [sections]); 

  useEffect(() => {
    // Insert a style element to hide scrollbars
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }

      /* Add styles for horizontal scroll containers with visual feedback */
      .horizontal-scroll-container {
        cursor: grab;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        /* Prevent touch action conflicts */
        touch-action: auto;
      }
      
      .horizontal-scroll-container:active {
        cursor: grabbing;
      }
      
      /* When actively scrolling horizontally */
      .horizontal-scroll-container.scrolling-x {
        /* Prevent any vertical scrolling during horizontal swipes */
        touch-action: pan-x;
        overscroll-behavior: contain;
      }

      /* Visual indicator for scrollable areas */
      .scrollable-x::after {
        content: "";
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 40px;
        height: 4px;
        background: rgba(100, 100, 255, 0.3);
        border-radius: 2px;
        animation: pulseScroll 1.5s infinite;
      }

      @keyframes pulseScroll {
        0% { opacity: 0.3; width: 20px; }
        50% { opacity: 0.7; width: 40px; }
        100% { opacity: 0.3; width: 20px; }
      }

      /* Enhanced snap points for better scrolling experience */
      .horizontal-scroll-container > * {
        scroll-snap-align: start;
        scroll-snap-stop: always;
      }

      /* Mobile optimizations - replace horizontal scroll with grid layout */
      @media (max-width: 767px) {
        .mobile-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          overflow-x: visible;
          touch-action: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: default;
        }

        .mobile-grid-layout > * {
          width: 100% !important;
          scroll-snap-align: none;
          scroll-snap-stop: none;
        }

        .mobile-grid-layout::after,
        .mobile-grid-layout::before {
          display: none !important;
        }

        .scroll-indicator-container {
          display: none !important;
        }

        /* Hide gradient indicators on mobile */
        .scroll-gradient-indicators {
          display: none !important;
        }
        
        /* Fix project tabs on mobile */
        .mobile-tabs-container {
          padding: 0.25rem !important;
          border-radius: 0.5rem !important;
          gap: 0.25rem !important;
        }
        
        .mobile-tab-button {
          border-radius: 0.5rem !important;
          font-size: 0.75rem !important;
          padding: 0.5rem 0.75rem !important;
        }
        
        /* Collapsible sections for mobile */
        .mobile-collapsible-container {
          position: relative;
          overflow: hidden;
        }
        
        .mobile-collapsible-container.collapsed {
          max-height: 410px; /* Show only first card */
        }
        
        .mobile-show-more-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.75rem;
          margin-top: 0.5rem;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 30%, white);
          dark:background: linear-gradient(to bottom, transparent, rgba(2,11,20,0.9) 30%, #020b14);
          border-radius: 0 0 0.5rem 0.5rem;
          text-align: center;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .mobile-show-more-button:hover {
          background-color: rgba(255,255,255,0.1);
        }
      }

      /* DISABLE HOVER EFFECTS FOR TOUCH DEVICES */
      
      /* Media query targeting touch devices */
      @media (hover: none) {
        /* Disable all hover transitions and animations */
        * {
          transition: none !important;
          animation: none !important;
        }
        
        /* Remove hover:* Tailwind classes effects for touch devices */
        .hover\\:scale-\\[1\\.1\\]:hover,
        .hover\\:scale-\\[1\\.05\\]:hover,
        .hover\\:scale-110:hover,
        .hover\\:scale-105:hover,
        .hover\\:-translate-y-0\\.5:hover,
        .hover\\:-translate-y-\\[3px\\]:hover,
        .hover\\:-translate-y-\\[5px\\]:hover,
        .hover\\:translate-y-\\[-3px\\]:hover,
        .hover\\:translate-y-\\[-5px\\]:hover,
        .hover\\:shadow-lg:hover,
        .hover\\:shadow-md:hover,
        .hover\\:shadow-xl:hover,
        .hover\\:opacity-100:hover,
        .hover\\:bg-gray-100:hover,
        .hover\\:bg-gray-50:hover,
        .hover\\:bg-gray-800:hover,
        .hover\\:bg-blue-100\\/80:hover,
        .hover\\:bg-blue-900\\/30:hover,
        .hover\\:border-transparent:hover,
        .hover\\:border-blue-200\\/50:hover,
        .hover\\:text-gray-900:hover,
        .hover\\:text-white:hover,
        .hover\\:text-orange-700:hover,
        .hover\\:text-orange-300:hover,
        .hover\\:text-gray-700:hover,
        .hover\\:text-gray-200:hover,
        .hover\\:brightness-\\[0\\.8\\]:hover {
          transform: none !important;
          box-shadow: inherit !important;
          opacity: inherit !important;
          background-color: inherit !important;
          border-color: inherit !important;
          color: inherit !important;
          filter: none !important;
        }
        
        /* Disable any group-hover effects */
        .group:hover .group-hover\\:opacity-0,
        .group:hover .group-hover\\:opacity-100,
        .group:hover .group-hover\\:translate-x-1,
        .group:hover .group-hover\\:w-full,
        .group:hover .group-hover\\:bg-blue-400,
        .group:hover .group-hover\\:bg-blue-500,
        .group\\/item:hover .group-hover\\/item\\:translate-x-1,
        .group\\/item:hover .group-hover\\/item\\:w-full,
        .group\\/item:hover .group-hover\\/item\\:bg-blue-400,
        .group\\/item:hover .group-hover\\/item\\:bg-blue-500,
        .group\\/link:hover .group-hover\\/link\\:translate-x-1 {
          opacity: inherit !important;
          transform: none !important;
          width: auto !important;
          background-color: inherit !important;
        }
        
        /* Disable all :after and :before hover animations */
        *:hover::after,
        *:hover::before {
          transform: none !important;
          width: inherit !important;
          opacity: inherit !important;
        }
        
        /* Remove cursor changes on touch devices */
        .cursor-pointer,
        .cursor-grab,
        .cursor-grabbing {
          cursor: default !important;
        }
        
        /* Ensure links still look tappable */
        a, button {
          -webkit-tap-highlight-color: rgba(0,0,0,0.1);
        }
        
        /* Disable image hover effects */
        img:hover, 
        .group:hover img,
        .group-hover\\:scale-110 {
          transform: none !important;
        }
        
        /* Remove before/after hover effects for navigation */
        nav a:hover::before,
        nav a.active::before {
          width: inherit !important;
        }
        
        /* Remove scrollable-x indicators that rely on hover */
        .scrollable-x::after {
          display: none !important;
        }
        
        /* Disable Framer Motion animations on mobile devices */
        .mobile-grid-layout motion-div,
        .mobile-grid-layout .motion-div,
        .mobile-grid-layout [data-framer-component-type] {
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }
      }
      
      /* Specific media query for mobile and small screens */
      @media (max-width: 767px) {
        /* Disable Framer Motion hover/tap animations */
        [style*="transform"] {
          transform: none !important;
          transition: none !important;
        }
        
        /* Disable hover effects on Framer Motion components */
        [data-framer-component-type="hover"],
        [data-framer-component-type="tap"] {
          transform: none !important;
          transition: none !important;
        }
        
        /* Disable animations for motion components in our sections */
        motion\.a, motion\.div, motion\.button,
        .motion-a, .motion-div, .motion-button {
          transform: none !important;
          transition: none !important;
          animation: none !important;
        }
        
        /* Disable scroll animations for experience and project cards */
        #experience motion.div,
        #projects motion.div,
        .mobile-collapsible-container motion.div,
        .mobile-collapsible-container .motion-div,
        .mobile-collapsible-container [data-framer-component-type] {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
          transition: none !important;
        }
        
        /* Target our custom data attribute */
        [data-disable-animation-mobile="true"] {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
          transition: max-height 0.3s ease-out !important; /* Keep only height transition */
          will-change: max-height; /* Optimize the only transition we keep */
        }
        
        /* Keep animations disabled after expand button is pressed */
        .mobile-collapsible-container:not(.collapsed) * {
          animation: none !important;
          transition: none !important;
          transform: none !important;
          opacity: 1 !important;
        }
        
        /* Force immediate visibility for expanded content */
        #experience:not(.collapsed) motion.div,
        #projects:not(.collapsed) motion.div {
          opacity: 1 !important;
          transform: none !important;
          animation: none !important;
        }
        
        /* Disable any whileInView animations */
        [data-framer-component-type="whileInView"],
        [data-motion="whileInView"] {
          opacity: 1 !important;
          transform: none !important;
        }
        
        /* Make sure expanded content is immediately visible */
        .mobile-collapsible-container:not(.collapsed) {
          transition: max-height 0.3s ease-out !important;
        }
      }
    `;
    document.head.appendChild(styleElement);

    // Check project scroll container on initial render
    setTimeout(() => {
      const projectContainer = document.getElementById('project-scroll-container');
      const progressBar = document.getElementById('projectsScrollProgress');
      
      if (projectContainer && progressBar) {
        console.log('Project container found on mount:', {
          scrollWidth: projectContainer.scrollWidth,
          clientWidth: projectContainer.clientWidth,
          hasScroll: projectContainer.scrollWidth > projectContainer.clientWidth
        });
        
        // Manually trigger scroll update once
        const scrollEvent = new Event('scroll');
        projectContainer.dispatchEvent(scrollEvent);
      } else {
        console.warn('Project container or progress bar not found on mount');
      }
      
      // Enhance horizontal scrolling for mobile
      const enhanceHorizontalScrolling = (selector: string) => {
        const containers = document.querySelectorAll(selector);
        
        containers.forEach(container => {
          let isScrollingHorizontally = false;
          let startX = 0;
          let startY = 0;
          let startScrollLeft = 0;
          
          // Apply mobile grid layout if needed
          const handleResize = () => {
            if (window.innerWidth < 768) { // Mobile view
              container.classList.add('mobile-grid-layout');
              container.classList.remove('horizontal-scroll-container');
            } else { // Desktop view
              container.classList.remove('mobile-grid-layout');
              container.classList.add('horizontal-scroll-container');
            }
          };
          
          // Initial check
          handleResize();
          
          // Listen for resize events
          window.addEventListener('resize', handleResize);
          
          // Add touch event handlers for desktop only
          container.addEventListener('touchstart', ((e: Event) => {
            // Skip for mobile grid layout
            if (window.innerWidth < 768) return;
            
            const touchEvent = e as TouchEvent;
            const touch = touchEvent.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            startScrollLeft = (container as HTMLElement).scrollLeft;
            isScrollingHorizontally = false; // Reset the flag on new touch
            (container as HTMLElement).classList.remove('scrolling-x');
          }) as EventListener);
          
          container.addEventListener('touchmove', ((e: Event) => {
            // Skip for mobile grid layout
            if (window.innerWidth < 768) return;
            
            const touchEvent = e as TouchEvent;
            if (touchEvent.touches.length > 1) return; // Ignore multi-touch
            
            const touch = touchEvent.touches[0];
            const deltaX = startX - touch.clientX;
            const deltaY = Math.abs(startY - touch.clientY);
            
            // If clear horizontal movement and minimal vertical movement or already in horizontal scrolling mode
            if ((Math.abs(deltaX) > 10 && deltaY < Math.abs(deltaX) * 0.7) || isScrollingHorizontally) {
              isScrollingHorizontally = true;
              (container as HTMLElement).classList.add('scrolling-x');
              
              // Scroll the container horizontally
              (container as HTMLElement).scrollLeft = startScrollLeft + deltaX;
              
              // Prevent default only when we're sure it's horizontal scrolling
              if (isScrollingHorizontally) {
                e.preventDefault();
                e.stopPropagation();
              }
            }
          }) as EventListener, { passive: false }); // Important: passive: false allows preventDefault to work
          
          container.addEventListener('touchend', (() => {
            // Skip for mobile grid layout
            if (window.innerWidth < 768) return;
            
            // Keep the flag and class for a short period to prevent immediate vertical scrolling
            setTimeout(() => {
              isScrollingHorizontally = false;
              (container as HTMLElement).classList.remove('scrolling-x');
            }, 50);
          }) as EventListener);
          
          // Add visual indicators for scrollable areas
          container.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 768 && (container as HTMLElement).scrollWidth > (container as HTMLElement).clientWidth) {
              document.body.style.cursor = 'grab';
              (container as HTMLElement).classList.add('scrollable-x');
            }
          });
          
          container.addEventListener('mouseleave', () => {
            document.body.style.cursor = '';
            (container as HTMLElement).classList.remove('scrollable-x');
          });
        });
      };
      
      // Apply enhanced scrolling
      enhanceHorizontalScrolling('#projects .overflow-x-auto, #experience .overflow-x-auto, .horizontal-scroll-container');
      
    }, 1000); // Check after 1 second to ensure DOM is fully rendered

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  /* Projects (Tabs) 
     Now each project has:
     - shortDescription (shown on the card)
     - longDescription (array of bullet points shown in the modal)
  */
  const [activeTab, setActiveTab] = useState("NLP/LLM");
  
  // Effect to reinitialize the progress bar when the tab changes
  useEffect(() => {
    // Need to wait for the DOM to update after tab change
    setTimeout(() => {
      const progressBar = document.getElementById('projectsScrollProgress');
      const projectContainer = document.getElementById('project-scroll-container');
      
      if (progressBar && projectContainer) {
        // Reset progress bar to 0 when tab changes
        progressBar.style.width = '0%';
        
        // Manually trigger the scroll event to update the progress
        const scrollEvent = new Event('scroll');
        projectContainer.dispatchEvent(scrollEvent);
        
        console.log('Tab changed, progress bar reset');
      }
    }, 200);
  }, [activeTab]);

  const projectTabs = [
    {
      name: "CV",
      color: "bg-[linear-gradient(332deg,_#60a5fa2b_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#1d242d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          title: "Object Detection Pipeline #9",
          shortDescription: [
            "YOLO-based real-time detection",
            "Optimized for speed on edge devices"
          ],
          longDescription: [
            "Used YOLOv5 to identify and classify objects in real time.",
            "Integrated with OpenCV for real-time video processing.",
            "Achieved 95% accuracy on custom dataset."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "/images/ai-side-robot.jpg",
          technologies: ["YOLOv5", "Python", "OpenCV"],
          role: "Lead Developer",
        },
      ],
    },
    {
      name: "NLP/LLM",
      color: "bg-[linear-gradient(332deg,_#f0f0ff_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#23232f_0%,_#ffffff00_48%)]",
      projects: [
        {
          title: "RAG System",
          shortDescription: [
            "Retrieval-augmented generation for enterprise knowledge."
          ],
          longDescription: [
            "Implemented Elasticsearch for context retrieval.",
            "Used Hugging Face Transformers for generative responses.",
            "Improved response accuracy by 20% after fine-tuning."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "/images/placeholder.jpg",
          technologies: ["Python", "Transformers", "Elasticsearch"],
          role: "AI Engineer",
        },
        {
          title: "AI News Bot",
          shortDescription: [
            "NLP-driven aggregator for personalized headlines."
          ],
          longDescription: [
            "Scraped multiple news APIs for real-time updates.",
            "Used NLTK for text processing and classification.",
            "Front-end built with React for subscription-based channels."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "/images/placeholder.jpg",
          technologies: ["Python", "NLTK", "React"],
          role: "Full Stack Developer",
        },
      ],
    },
    {
      name: "Multimodal",
      color: "bg-[linear-gradient(332deg,_#fff0f0_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#49202d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          title: "Vision + Language Model",
          shortDescription: [
            "CLIP + GPT for image captioning & Q&A."
          ],
          longDescription: [
            "Combined CLIP embeddings with GPT-3 for advanced image Q&A.",
            "Deployed on AWS with GPU instances for real-time inference.",
            "Conducted user tests yielding 85% success in open-ended Q&A."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "/images/placeholder.jpg",
          technologies: ["Python", "PyTorch", "GPT-3", "CLIP"],
          role: "AI Researcher",
        },
      ],
    },
    {
      name: "ML",
      color: "bg-[linear-gradient(332deg,_#f0fffb_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#12252094_0%,_#ffffff00_48%)]",
      projects: [
        {
          title: "Recommendation Engine",
          shortDescription: [
            "Collaborative filtering for personalization."
          ],
          longDescription: [
            "Implemented matrix factorization for product recommendations.",
            "Optimized model with hyperparameter tuning, leading to 10% lift in CTR.",
            "Integrated solution into client's microservice architecture."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "/images/placeholder.jpg",
          technologies: ["Scikit-learn", "Python", "Pandas"],
          role: "Machine Learning Engineer",
        },
        {
          title: "Time Series Forecasting",
          shortDescription: [
            "Predictive models using ARIMA, LSTM, Prophet."
          ],
          longDescription: [
            "Benchmarked ARIMA vs. LSTM for stock price predictions.",
            "Built an automated pipeline for daily training & inference.",
            "Reduced MSE by 12% using Prophet's advanced seasonality."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "/images/placeholder.jpg",
          technologies: ["Python", "TensorFlow", "Prophet"],
          role: "Data Scientist",
        },
      ],
    },
  ];

  

  // For Project Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState<boolean>(false);

  const openProjectModal = (proj: Project) => {
    setSelectedProject(proj);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  // Parallax
  // const { scrollY } = useScroll();
  // const rawY = useTransform(scrollY, [0, 300], [0, -150]);
  // const backgroundY = useSpring(rawY, { stiffness: 100, damping: 20 });

  // const [bgImage, setBgImage] = useState("");

  // useEffect(() => {
  //   const updateBgImage = () => {
  //     const width = window.innerWidth;
  //     if (width < 768) {
  //       setBgImage("/images/final-bg-1080p.jpg");
  //     } else if (width < 1024) {
  //       setBgImage("/images/final-bg-1080p.jpg");
  //     } else {
  //       setBgImage("/images/final-bg-1080p.jpg");
  //     }
  //   };
  //   updateBgImage();
  //   window.addEventListener("resize", updateBgImage);
  //   return () => window.removeEventListener("resize", updateBgImage);
  // }, [darkMode]);

  const currentTabObj = projectTabs.find((t) => t.name === activeTab);
  const currentProjects = currentTabObj ? currentTabObj.projects : [];

  // Only render dark mode toggle after mounting
  const renderDarkModeButton = () => {
    if (!mounted) return null;
    
    return (
      <button
        onClick={toggleDarkMode}
        className="
          w-9 h-9
          flex items-center justify-center
          rounded-full
          border border-transparent
          hover:brightness-[0.8]
          bg-transparent
          ml-3
          focus:outline-none
        "
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <HiOutlineSun className="h-5 w-5" />
        ) : (
          <HiOutlineMoon className="h-5 w-5" />
        )}
      </button>
    );
  };

  // Add state for managing collapsed sections on mobile
  const [experienceCollapsed, setExperienceCollapsed] = useState(true);
  const [projectsCollapsed, setProjectsCollapsed] = useState(true);
  
  // Reset collapse state when changing tabs
  useEffect(() => {
    setProjectsCollapsed(true);
  }, [activeTab]);
  
  // Function to toggle collapsed state
  const toggleExperienceCollapse = () => {
    const section = document.getElementById('experience');
  
    if (!experienceCollapsed && section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
      // Optional: add a short delay before collapsing for smoother UX
      setTimeout(() => {
        setExperienceCollapsed(true);
      }, 300); // You can tweak this delay
      return;
    }
  
    setExperienceCollapsed(false);
  };
  
  
  const toggleProjectsCollapse = () => {
    const section = document.getElementById('projects');
  
    // If collapsing, scroll the user to the top of the Projects section smoothly
    if (!projectsCollapsed && section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  
    // Now toggle the collapse state
    setProjectsCollapsed(!projectsCollapsed);
  };

  
  
  

  return (
    <main
      className={`
        min-h-screen
        transition-colors duration-500
        font-sans
        text-gray-900 dark:text-white
      `}
      suppressHydrationWarning
    >
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={closeMenu}
        />
      )}

      {/* NAVBAR */}
      <header
        className={`
          fixed w-full top-0 z-50
          backdrop-blur-md
          ${darkMode ? "text-white" : "40 text-gray-900"}
        `}
      >
        <div className=" mx-auto flex items-center justify-between py-3 px-4 md:px-8 bg-[#ffffff66] dark:bg-[#02020266]">
          {/* Logo */}
          <div className="text-xl font-bold group relative">
            <a href="#hero" onClick={closeMenu} className="block" title="Back to top">
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  align-middle
                  w-10 h-10
                  p-2
                  border-2 border-gray-500
                  rounded-full
                  transition-all duration-300
                  text-lg font-semibold
                  bg-gradient-to-r from-blue-500 to-purple-500
                  text-white
                  shadow-md
                  hover:shadow-lg
                  hover:scale-110
                  md:w-10 md:h-10
                  md:group-hover:w-auto md:group-hover:px-4
                  md:group-hover:border-transparent
                  md:group-hover:bg-gradient-to-r md:group-hover:from-blue-500 md:group-hover:to-purple-500
                  md:group-hover:text-white
                  md:group-hover:shadow-lg
                  md:group-hover:scale-110
                "
              >
                <span className="block md:group-hover:hidden">RN</span>
                <span className="hidden md:group-hover:block">Rakesh Nagaraju</span>
              </span>
            </a>
          </div>

          {/* Dark Mode Toggle */}
          {renderDarkModeButton()}
        </div>
      </header>

      {/* Rest of the component content */}
      {/* ... (existing content) */}
    </main>
  );
}

