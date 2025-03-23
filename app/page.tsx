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
                group-hover:border-transparent
                group-hover:opacity-0
                text-lg font-semibold
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white
                shadow-md
                hover:shadow-lg
                hover:scale-110
              "
            >
              RN
            </span>


              <span className="absolute w-[max-content] left-0 top-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Rakesh Nagaraju
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((secId) => {
              if (secId === "footer-contact") return null;
              const label = secId.charAt(0).toUpperCase() + secId.slice(1);
              const isActive = activeSection === secId;
              return (
                <a
                  key={secId}
                  href={`#${secId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(secId);
                  }}
                  title={`Navigate to ${label.replace("-", " ")} section`}
                  className={`
                    relative cursor-pointer text-base focus:outline-none
                    before:absolute before:left-0 before:-bottom-1 before:h-[2px]
                    before:rounded before:transition-all before:duration-300
                    ${
                      isActive
                        ? "font-semibold scale-105 text-gray-900 dark:text-gray-100 before:w-full before:bg-gradient-to-r before:from-pink-500 before:to-blue-500"
                        : "font-normal text-gray-600 dark:text-gray-300 before:w-0 before:bg-gradient-to-r before:from-pink-500 before:to-blue-500 hover:before:w-full"
                    }
                  `}
                  style={{ lineHeight: "1.5" }}
                >
                  {label.replace("-", " ")}
                </a>
              );
            })}
            {/* Dark Mode Toggle (Desktop) */}
            {renderDarkModeButton()}
          </nav>

          {/* Mobile Nav Toggle (Hamburger) */}
          <button
            className="md:hidden p-2 rounded focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open Menu</span>
            <div
              className={`
                w-6 h-0.5 mb-1 transition-all
                ${darkMode ? "bg-white" : "bg-black"}
                ${isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}
              `}
            />
            <div
              className={`
                w-6 h-0.5 mb-1 transition-all
                ${darkMode ? "bg-white" : "bg-black"}
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            />
            <div
              className={`
                w-6 h-0.5 transition-all
                ${darkMode ? "bg-white" : "bg-black"}
                ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}
              `}
            />
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <nav
            className={`
              md:hidden flex flex-col gap-4 py-6 px-8
              backdrop-blur-md z-50
              bg-white/80 dark:bg-black/80
              border-t border-gray-200 dark:border-gray-800
            `}
          >
            {sections.map((secId) => {
              if (secId === "footer-contact") return null;
              const label = secId.charAt(0).toUpperCase() + secId.slice(1);
              const isActive = activeSection === secId;

              return (
                <a
                  key={secId}
                  href={`#${secId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(secId);
                  }}
                  title={`Navigate to ${label.replace("-", " ")} section`}
                  className={`
                    relative cursor-pointer text-base focus:outline-none
                    py-2 px-3 rounded-lg transition-all duration-300
                    ${
                      isActive
                        ? "font-semibold bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        : "font-normal text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                    }
                  `}
                  style={{ lineHeight: "1.5" }}
                >
                  {label.replace("-", " ")}
                </a>
              );
            })}

            {/* Dark Mode Toggle (Mobile) */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              {renderDarkModeButton()}
            </div>
          </nav>
        )}
      </header>

      {/* HERO (1) */}
      <Hero />
      <About />

      
      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#020b14] dark:to-[#010913]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Watermark Container */}
          <div className="relative mb-16 text-center">
            <motion.h2
              className="text-7xl font-extrabold text-gray-200 dark:text-gray-800 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.1 }}
              viewport={{ once: true }}
            >
              EXPERIENCE
            </motion.h2>

            <motion.div
              className="relative space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Professional Experience
              </h2>
              
            </motion.div>
          </div>

          {/* Horizontal Scrollable Experience Cards */}
          <div className="relative">
            {/* Gradient Indicators for Scrolling - Reduced width and opacity */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent dark:from-[#020b14] dark:to-transparent z-10 pointer-events-none opacity-70"></div>
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent dark:from-[#020b14] dark:to-transparent z-10 pointer-events-none opacity-70"></div>
            
            <div className="
              flex overflow-x-auto pb-8 pt-4 px-6 gap-6 snap-x snap-mandatory
              scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
              scrollbar-track-transparent
              mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);
              hide-scrollbar
            ">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.title}
                  onClick={() => openExperienceModal(exp)}
                  className="
                    group cursor-pointer
                    p-6 rounded-xl
                    bg-gradient-to-br from-white to-gray-100 dark:from-gray-900/80 dark:to-[#090f1a]
                    shadow-md hover:shadow-xl
                    border border-gray-200/70 dark:border-gray-800/70
                    hover:border-blue-200/50 dark:hover:border-blue-900/30
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:translate-y-[-5px]
                    snap-start
                    flex-shrink-0
                    w-[85vw] sm:w-[400px] md:w-[450px]
                    min-h-[300px]
                    flex flex-col
                    relative
                    overflow-hidden
                    mx-1
                  "
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Decorative accent - original size */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  
                  <div className="flex items-center gap-4 mb-5">
                    {exp.logo && (
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-sm flex-shrink-0">
                        <Image 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          width={50} 
                          height={50} 
                          className="rounded object-contain h-[50px] w-[50px]"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">{exp.title}</h3>
                      {exp.company && (
                        <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                      )}
                      {exp.timeframe && (
                        <p className="text-sm text-blue-500 dark:text-blue-400 font-medium">{exp.timeframe}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-5 flex-grow">
                    {exp.shortDescription.map((desc, idx) => (
                      <div 
                        key={idx} 
                        className="text-gray-600 dark:text-gray-400 text-sm relative pl-1 group/item overflow-hidden"
                      >
                        {/* Subtle left indicator instead of gradient */}
                        <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-300 dark:bg-gray-700 group-hover/item:bg-blue-400 dark:group-hover/item:bg-blue-500 transition-colors duration-300"></div>
                        
                        {/* Subtle background highlight on hover */}
                        <div className="absolute left-0 top-0 w-0 h-full bg-gray-100 dark:bg-gray-800/50 group-hover/item:w-full transition-all duration-500 rounded-r-md"></div>
                        
                        {/* Text content with reduced padding */}
                        <p className="relative py-1.5 pl-2 pr-1 leading-relaxed group-hover/item:translate-x-1 transition-transform duration-300">{desc}</p>
                      </div>
                    ))}
                  </div>
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                      {exp.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium bg-blue-50/70 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100/50 dark:border-blue-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-700/80 text-gray-600 dark:text-gray-300 rounded-full shadow-sm">
                          +{exp.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  
                  {/* Compact View Details button */}
                  <div className="mt-4 text-blue-500 dark:text-blue-400 text-xs font-medium absolute bottom-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-1 rounded-full bg-blue-50/50 dark:bg-blue-900/20 group-hover:bg-blue-100/80 dark:group-hover:bg-blue-900/30 transition-colors flex items-center">
                      <span className="hidden sm:inline mr-1">View</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator that responds to scroll */}
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="relative w-32 h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
              {/* Progress Bar that moves based on scroll */}
              <div id="experienceScrollProgress" className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-300 via-blue-400 to-blue-500 dark:from-gray-700 dark:via-blue-600 dark:to-blue-400 w-0 transition-all duration-300"></div>
              
              {/* Left Arrow */}
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-l-2 border-gray-300 dark:border-gray-700 transform -rotate-45"></div>
              
              {/* Right Arrow */}
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-blue-500 dark:border-blue-400 transform rotate-45"></div>
            </div>
            
            {/* Small "Scroll" text */}
            <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-600 mt-1">Scroll</span>
          </div>
        </div>
      </section>
      
      {/* Modal appears at the bottom of the component */}
      <ExperienceModal 
        isOpen={isExperienceModalOpen}
        onClose={closeExperienceModal}
        experience={selectedExperience}
      />

      <SkillsSection />
      

      {/* PROJECTS (4) */}
      <section
        id="projects"
        className="py-20 px-6 min-h-[100vh] bg-gradient-to-b from-gray-50 to-white dark:from-[#01070e] dark:to-[#020b14]"
      >
        {/* Watermark Container */}
        <div className="relative mb-16 text-center">
          <motion.h2
            className="text-7xl font-extrabold text-gray-200 dark:text-gray-800 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
          >
            PROJECTS
          </motion.h2>

          <motion.div
            className="relative space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab buttons container */}
          <div className="mb-12 flex justify-center">
            <div
              className="
                no-scrollbar
                inline-flex gap-6
                px-6 py-2
                overflow-x-auto 
                backdrop-blur-md
                rounded-full
                bg-white/80 dark:bg-gray-900/50
                border border-gray-200/50 dark:border-gray-700/50
                shadow-lg shadow-gray-200/20 dark:shadow-gray-950/20
              "
            >
              {projectTabs.map((tab) => {
                const isActive = activeTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`
                      relative cursor-pointer text-sm font-medium px-4 py-2
                      rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md shadow-purple-500/20"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }
                    `}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Section - Redesigned with horizontal scrolling like experiences */}
          <div className="relative mx-4 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-10 after:bg-gradient-to-l after:from-white after:to-transparent after:dark:from-[#01070e] after:dark:to-transparent after:pointer-events-none
                  before:absolute before:left-0 before:top-0 before:bottom-0 before:w-10 before:bg-gradient-to-r before:from-white before:to-transparent before:dark:from-[#01070e] before:dark:to-transparent before:pointer-events-none
                  ">
            {/* Gradient Indicators for Scrolling */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent dark:from-[#01070e] dark:to-transparent z-10 pointer-events-none opacity-70"></div> */}
            {/* <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent dark:from-[#01070e] dark:to-transparent z-10 pointer-events-none opacity-70"></div> */}
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <div className="
                  projects-scroll-container
                  flex overflow-x-auto pb-10 pt-6 px-6 gap-8 snap-x snap-mandatory
                  scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
                  scrollbar-track-transparent
                  hide-scrollbar
                  relative
                  touch-pan-x
                  cursor-grab active:cursor-grabbing
                  "
                  id="project-scroll-container"
                  
                  onScroll={(e) => {
                    // Ensure the scroll indicator updates on scroll events
                    const progressBar = document.getElementById('projectsScrollProgress');
                    if (progressBar) {
                      const container = e.currentTarget;
                      const scrollLeft = container.scrollLeft;
                      const scrollWidth = container.scrollWidth;
                      const containerWidth = container.clientWidth;
                      
                      if (scrollWidth > containerWidth) {
                        const scrollPercent = scrollLeft / (scrollWidth - containerWidth);
                        progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent * 100))}%`;
                      }
                    }
                  }}
                >
                  {currentProjects.map((proj, index) => (
              <motion.div
                key={proj.title}
                onClick={() => openProjectModal(proj)}
                className={`
                        group cursor-pointer
                        p-0 rounded-2xl
                        bg-gradient-to-br from-white to-gray-100 dark:from-gray-900/80 dark:to-[#090f1a]
                        shadow-sm hover:shadow-md
                        backdrop-blur-sm
                  transition-all duration-300
                        hover:translate-y-[-3px]
                        snap-start
                        flex-shrink-0
                        w-[85vw] sm:w-[280px] md:w-[330px] lg:w-[380px]
                        min-h-[380px]
                  flex flex-col
                  relative
                        overflow-hidden
                        my-6 mx-2 sm:mx-4
                `}
                initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                      {/* Decorative accent - matching experience cards */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                      
                {/* Project Image with Overlay */}
                {proj.image && (
                        <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl">
                    <Image
                      loading="lazy"
                      src={proj.image}
                      alt={`${proj.title} image`}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                          {/* Enhanced gradient overlay for better text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300" />
                          
                          {/* Project Title Overlay - Enhanced visibility */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="relative text-xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {proj.title}
                </h3>
                            {proj.role && (
                              <p className="relative text-gray-100 text-sm font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                                Role: {proj.role}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Content Container */}
                      <div className="flex-1  flex flex-col">
                        {/* Description - Refined styling */}
                        <div className="space-y-3 mb-6 flex-grow px-3 pt-6">
                  {proj.shortDescription.map((desc, idx) => (
                            <div 
                              key={idx} 
                              className="text-gray-600 dark:text-gray-400 text-sm relative pl-1 group/item overflow-hidden"
                            >
                              {/* Subtle left indicator instead of gradient */}
                              <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-300 dark:bg-gray-700 group-hover/item:bg-blue-400 dark:group-hover/item:bg-blue-500 transition-colors duration-300"></div>
                              
                              {/* Subtle background highlight on hover */}
                              <div className="absolute left-0 top-0 w-0 h-full bg-gray-100 dark:bg-gray-800/50 group-hover/item:w-full transition-all duration-500 rounded-r-md"></div>
                              
                              {/* Text content with reduced padding */}
                              <p className="relative py-1.5 pl-2 pr-1 leading-relaxed group-hover/item:translate-x-1 transition-transform duration-300">{desc}</p>
                            </div>
                          ))}
                        </div>

                  {/* Technologies */}
                        {proj.technologies && proj.technologies.length > 0 && (
                          <div className="flex flex-wrap px-6 py-1 pt-4 gap-2 mt-auto border-t border-gray-100 dark:border-gray-800 ">
                      {proj.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                                className="px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-purple-700/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 3 && (
                              <span className="px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/80 dark:to-gray-700/80 text-gray-600 dark:text-gray-300 rounded-full shadow-sm">
                          +{proj.technologies.length - 3}
                        </span>
                      )}
                </div>
                  )}

                        {/* Links & View Details */}
                        <div className="flex items-center justify-between mt-6 px-6 pb-6">
                          <div className="flex gap-2">
                  {proj.demoLink && (
                    <a
                      href={proj.demoLink}
                      onClick={(e) => e.stopPropagation()}
                      title={`View live demo of ${proj.title}`}
                                className="relative group/link flex items-center gap-1
                                text-xs text-orange-600 dark:text-orange-400
                                hover:text-orange-700 dark:hover:text-orange-300
                                font-medium bg-gradient-to-r from-orange-400/10 to-pink-400/10
                                dark:from-orange-600/20 dark:to-pink-600/20
                                px-3 py-2 rounded-full
                                hover:shadow-md hover:-translate-y-0.5
                                transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                                <FaBolt className="w-3 h-3" />
                                <span>Live Demo</span>
                    </a>
                  )}
                  {proj.githubLink && (
                    <a
                      href={proj.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      title={`View source code for ${proj.title} on GitHub`}
                                className="relative group/link flex items-center gap-1
                                text-xs text-gray-700 dark:text-gray-300
                                hover:text-gray-900 dark:hover:text-white
                                font-medium bg-gradient-to-r from-gray-200/70 to-gray-100/70
                                dark:from-gray-700/70 dark:to-gray-800/70
                                px-3 py-2 rounded-full
                                hover:shadow-md hover:-translate-y-0.5
                                transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                                <FaGithub className="w-3 h-3" />
                                <span>Source Code</span>
                    </a>
                  )}
                    </div>
                          
                      {/* Compact View Details button */}
                      <div className="mt-4 text-blue-500 dark:text-blue-400 text-xs font-medium absolute bottom-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
                        <span className="px-2 py-1 rounded-full bg-blue-50/50 dark:bg-blue-900/20 group-hover:bg-blue-100/80 dark:group-hover:bg-blue-900/30 transition-colors flex items-center">
                          <span className="hidden sm:inline mr-1">Details</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                        </span>
                      </div>

                  </div>
                </div>
              </motion.div>
            ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Scroll Indicator that responds to scroll - Similar to experience section */}
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="relative w-36 sm:w-32 h-[4px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-sm">
              {/* Progress Bar that moves based on scroll - Made more vibrant */}
              <div 
                id="projectsScrollProgress" 
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-600 w-0 transition-all duration-200 opacity-90 z-10"
                style={{ width: '0%' }}
              ></div>
              
              {/* Improved arrows with animation */}
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-l-2 border-gray-400 dark:border-gray-500 transform -rotate-45 animate-pulse"></div>
              
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-purple-600 dark:border-purple-500 transform rotate-45 animate-pulse"></div>
            </div>
            
            {/* Enhanced scroll text */}
            <span className="text-[10px] uppercase tracking-wider text-gray-600 dark:text-gray-400 mt-1 group flex items-center">
              <span>Scroll</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/* CONTACT (5) */}
      <footer
        id="footer-contact"
        className="
          relative pt-24 pb-12 px-4 sm:px-6
          bg-gradient-to-b from-gray-100 to-gray-200
          dark:from-black dark:to-gray-900
          overflow-hidden
          text-gray-700 dark:text-gray-300
        "
      >
        
        <div className="relative mb-16 text-center">
          <motion.h2
            className="text-8xl font-extrabold text-gray-200 dark:text-gray-800 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
          >
            CONTACT
          </motion.h2>

          <motion.div
            className="relative space-y-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Let&rsquo;s Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
              Got a cool idea or just want to say hi? I&rsquo;m all ears!
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Contact Info - Simple Layout */}
          <div className="flex flex-col space-y-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-x-8">
            <motion.a
            href="tel:+16692884508"
                className="flex items-center gap-4 group mx-auto"
                title="Call me"
                whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
          >
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-sm text-center text-gray-500 dark:text-gray-400">Phone</div>
                  <div className="text-gray-800 dark:text-gray-200 group-hover:underline">+1 (669) 288-4508</div>
                </div>
            </motion.a>
              
            <motion.a
            href="mailto:rakenju@gmail.com"
                className="flex items-center gap-4 group mx-auto"
                title="Send me an email"
                whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
          >
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="text-sm text-center text-gray-500 dark:text-gray-400">Email</div>
                  <div className="text-gray-800 dark:text-gray-200 group-hover:underline">rakenju@gmail.com</div>
                </div>
            </motion.a>
              
            <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Santa+Clara,+CA"
            target="_blank"
            rel="noopener noreferrer"
                className="flex items-center gap-4 group mx-auto"
                title="View Santa Clara, CA on Google Maps"
                whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
          >
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-sm text-center text-gray-500 dark:text-gray-400">Location</div>
                  <div className="text-gray-800 dark:text-gray-200 group-hover:underline">Santa Clara, CA</div>
                </div>
            </motion.a>
            </div>
        </div>

          {/* Social Links - Simple Layout */}
          <div className="flex justify-center items-center gap-10 mb-16">
            <motion.a
              href="https://www.linkedin.com/in/rakesh-nagaraju/"
              target="_blank"
              rel="noopener noreferrer"
              title="Connect with me on LinkedIn"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://github.com/Rakesh-Nagaraju"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on GitHub"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://huggingface.co/Rakesh2205"
              target="_blank"
              rel="noopener noreferrer"
              title="Check out my models on Hugging Face"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <SiHuggingface className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://www.instagram.com/rakesh_nagaraju"
              target="_blank"
              rel="noopener noreferrer"
              title="Follow me on Instagram"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiInstagram className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © <CopyrightYear /> Rakesh Nagaraju. All rights reserved.
          </p>
        </div>
        </motion.div>
      </footer>

      

      {/* Project Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </main>
  );
}


