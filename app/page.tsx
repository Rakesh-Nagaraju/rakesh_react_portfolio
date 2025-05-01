"use client";
import Image from 'next/image';
import { useState, useMemo, useEffect, useCallback, memo } from "react";
import { motion } from "framer-motion";
import SkillsSection from "@/app/components/SkillsSection";
import ExperienceModal, { useExperienceModal, experiences } from "@/app/components/ExperienceModal";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Hero from "@/app/components/Hero";
import About from "@/app/components/About";

import { FaLinkedin} from 'react-icons/fa';
import { SiHuggingface } from "react-icons/si";

import { FaGithub, FaBolt } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";




// types.ts (or at top of page.tsx, but a separate file is cleaner)



export interface Project {
  id: number;
  title: string;
  shortDescription: string[];
  longDescription: string[];
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  role: string;
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
        {project.imageUrl && (
          <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl">
          <Image
            src={project.imageUrl}
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
              {project.shortDescription && project.shortDescription.length > 0 && (
                <p className="text-gray-100 text-sm font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                  {project.shortDescription[0]}
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
                {project.longDescription.map((point: string, idx: number) => (
                  <motion.li
                    key={idx}
                    className="text-gray-600 dark:text-gray-400 text-sm relative pl-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Simple bullet point */}
                    <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-300 dark:bg-gray-700"></div>
                    
                    {/* Text content */}
                    <p className="relative py-1.5 pl-2 pr-1 leading-relaxed">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
        {(project.liveUrl || project.githubUrl) && (
            <div className="flex items-center justify-between pt-4 mt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
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
            {project.githubUrl && (
              <a
                href={project.githubUrl}
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

// Add proper TypeScript interfaces
interface ProjectTab {
  name: string;
  color: string;
  projects: Project[];
}

interface ProjectTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  projectTabs: ProjectTab[];
}

interface ProjectCardProps {
  proj: Project;
  index: number;
  openProjectModal: (proj: Project) => void;
}

// Memoize the project tabs to prevent unnecessary re-renders
const ProjectTabs = memo(({ activeTab, setActiveTab, projectTabs }: ProjectTabsProps) => {
  return (
    <div className="mb-12 flex justify-center">
      <div className="no-scrollbar inline-flex gap-6 px-6 py-2 overflow-x-auto backdrop-blur-md rounded-full bg-white/80 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-200/20 dark:shadow-gray-950/20 w-full md:w-auto md:mx-auto max-w-[95vw] mobile-tabs-container">
        {projectTabs.map((tab: ProjectTab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                relative cursor-pointer text-sm font-medium px-4 py-2
                rounded-full transition-all duration-300
                mobile-tab-button
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
  );
});

ProjectTabs.displayName = 'ProjectTabs';

// Memoize the project card component
const ProjectCard = memo(({ proj, index, openProjectModal }: ProjectCardProps) => {
  return (
    <motion.div
      key={proj.title}
      onClick={() => openProjectModal(proj)}
      className={`
        group cursor-pointer
        p-0 rounded-2xl
        bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-900/80 dark:to-blue-900/20
        shadow-sm hover:shadow-md
        backdrop-blur-sm
        transition-all duration-300
        hover:translate-y-[-3px]
        w-full
        h-[400px]
        flex flex-col
        relative
        overflow-hidden
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      data-disable-animation-mobile="true"
    >
      {/* Decorative accent - matching experience cards */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
      
      {/* Project Image with Overlay */}
      {proj.imageUrl && (
        <div className="relative h-[220px] w-full overflow-hidden rounded-t-2xl">
          <Image
            loading="lazy"
            src={proj.imageUrl}
            alt={`${proj.title} image`}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300" />
          
          {/* Project Title Overlay - Enhanced visibility */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="relative text-xl font-bold text-white mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              {proj.title}
            </h3>
            {proj.shortDescription && proj.shortDescription.length > 0 && (
              <p className="relative text-gray-100 text-sm font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]">
                {proj.shortDescription[0]}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Content Container */}
      <div className="flex-1 flex flex-col">
        {/* Description - Refined styling */}
        <div className="space-y-3 mb-6 flex-grow px-6 pt-6">
          {proj.shortDescription.map((desc: string, idx: number) => (
            <div 
              key={idx} 
              className="text-gray-600 dark:text-gray-400 text-sm relative pl-1"
            >
              {/* Simple bullet point */}
              <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-300 dark:bg-gray-700"></div>
              
              {/* Text content */}
              <p className="relative py-1.5 pl-2 pr-1 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Links & View Details */}
        <div className="flex items-center justify-between mt-auto px-6 pb-6">
          <div className="flex gap-2">
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
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
            {proj.githubUrl && (
              <a
                href={proj.githubUrl}
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
          <div className="text-blue-500 dark:text-blue-400 text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
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
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function Home() {
  /* Scroll to top on page load */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Dark Mode */
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode, mounted]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /* Experience Modal */
  const { isExperienceModalOpen, openExperienceModal, closeExperienceModal, selectedExperience } = useExperienceModal();

  /* Project Modal */
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  }, []);

  /* Project Tabs */
  const [activeTab, setActiveTab] = useState("CV");

  interface ProjectTab {
    name: string;
    color: string;
    projects: Project[];
  }

  const projectTabs = useMemo<ProjectTab[]>(() => [
    {
      name: "CV",
      color: "bg-[linear-gradient(332deg,_#60a5fa2b_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#1d242d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          id: 1,
          title: "Visual AI Playground",
          shortDescription: ["A powerful computer vision application offering multiple image processing and analysis capabilities through an intuitive interface."],
          longDescription: [
            "Implemented ResNet-50 based image classification system",
            "Developed real-time object detection with YOLOS",
            "Created advanced segmentation using Mask2Former with Swin Transformer",
            "Built face detection system using Haar Cascade Classifier",
            "Integrated image enhancement tools for brightness, contrast, and sharpness adjustment"
          ],
          imageUrl: "/images/CV.jpg",
          technologies: ["OpenCV", "Transformers", "ResNet-50", "YOLOS", "Mask2Former", "PIL", "Gradio"],
          githubUrl: "https://huggingface.co/spaces/Rakesh2205/CV_project_1/tree/main",
          liveUrl: "https://huggingface.co/spaces/Rakesh2205/CV_project_2",
          role: "Computer Vision Engineer"
        }
      ]
    },
    {
      name: "LLM",
      color: "bg-[linear-gradient(332deg,_#60a5fa2b_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#1d242d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          id: 1,
          title: "Language AI Lab",
          shortDescription: ["A comprehensive NLP application showcasing various natural language processing capabilities using state-of-the-art models."],
          longDescription: [
            "Implemented text generation using TinyLlama (1.1B parameters)",
            "Developed BART-based text summarization system",
            "Created DistilBERT-based sentiment analysis pipeline",
            "Built multi-language translation support for Romance languages",
            "Integrated question answering system with high accuracy"
          ],
          imageUrl: "/images/LLM_task.jpg",
          technologies: ["TinyLlama", "BART", "DistilBERT", "Helsinki-NLP", "Gradio"],
          githubUrl: "https://huggingface.co/spaces/Rakesh2205/LLM_Project_1/tree/main",
          liveUrl: "https://huggingface.co/spaces/Rakesh2205/LLM_Project_1",
          role: "NLP Engineer"
        }
      ]
    },
    {
      name: "AI Agents",
      color: "bg-[linear-gradient(332deg,_#60a5fa2b_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#1d242d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          id: 1,
          title: "Interactive Multi-AI Chat Assistant",
          shortDescription: ["A versatile chat interface enabling interaction with multiple AI models through a modern web interface."],
          longDescription: [
            "Implemented support for multiple AI models including GPT-2, DialoGPT, BLOOM, OPT, and T5",
            "Developed a responsive chat UI with real-time model switching capabilities",
            "Integrated performance metrics tracking for response time and token usage",
            "Created a system for quick action prompts and common interactions",
            "Built seamless model switching functionality with state preservation"
          ],
          imageUrl: "/images/chatbot.jpg",
          technologies: ["Gradio", "Transformers", "PyTorch", "Custom CSS"],
          githubUrl: "https://huggingface.co/spaces/Rakesh2205/Chatbot_Multi_LLM/tree/main",
          liveUrl: "https://huggingface.co/spaces/Rakesh2205/Chatbot_Multi_LLM",
          role: "AI Engineer"
        }
      ]
    },
    {
      name: "ML",
      color: "bg-[linear-gradient(332deg,_#60a5fa2b_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#1d242d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          id: 1,
          title: "Machine Learning Projects",
          shortDescription: ["Exciting ML projects coming soon! Stay tuned for innovative solutions in machine learning."],
          longDescription: [
            "Projects under development",
            "Focusing on cutting-edge ML algorithms",
            "Implementing real-world applications",
            "Exploring innovative solutions",
            "Coming Soon!"
          ],
          imageUrl: "/images/placeholder.jpg",
          technologies: ["Coming Soon"],
          githubUrl: "#",
          liveUrl: "#",
          role: "ML Engineer"
        }
      ]
    },
    {
      name: "Other",
      color: "bg-[linear-gradient(332deg,_#60a5fa2b_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#1d242d94_0%,_#ffffff00_48%)]",
      projects: [
        {
          id: 1,
          title: "More Projects Coming Soon",
          shortDescription: ["Additional exciting projects are in development. Check back for updates!"],
          longDescription: [
            "New projects under development",
            "Exploring various technologies",
            "Innovative solutions coming soon",
            "Stay tuned for updates",
            "Coming Soon!"
          ],
          imageUrl: "/images/placeholder.jpg",
          technologies: ["Coming Soon"],
          githubUrl: "#",
          liveUrl: "#",
          role: "Software Engineer"
        }
      ]
    }
  ], []);

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
        /* Add momentum scrolling */
        -webkit-overflow-scrolling: touch;
        /* Smooth scrolling */
        scroll-behavior: smooth;
        /* Hide scrollbar but keep functionality */
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      
      .horizontal-scroll-container::-webkit-scrollbar {
        display: none;
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

      /* Visual indicators for scroll position */
      .horizontal-scroll-container.at-start::before {
        opacity: 0;
      }
      
      .horizontal-scroll-container.at-end::after {
        opacity: 0;
      }

      /* Add momentum scrolling for smoother experience */
      .horizontal-scroll-container {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }

      /* Enhance touch scrolling */
      @media (hover: none) {
        .horizontal-scroll-container {
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          touch-action: pan-x;
        }
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

  /* Menu State */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* Projects State */
  const [currentProjects, setCurrentProjects] = useState<Project[]>([]);

  // Update currentProjects when activeTab changes
  useEffect(() => {
    const activeTabData = projectTabs.find(tab => tab.name === activeTab);
    if (activeTabData) {
      setCurrentProjects(activeTabData.projects);
    }
  }, [activeTab, projectTabs]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleNavClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  }, [closeMenu]);

  useEffect(() => {
    // Initialize projects
    setCurrentProjects([
        {
          id: 1,
          title: "Visual AI Playground",
          shortDescription: ["A powerful computer vision application offering multiple image processing and analysis capabilities through an intuitive interface."],
          longDescription: [
            "Implemented ResNet-50 based image classification system",
            "Developed real-time object detection with YOLOS",
            "Created advanced segmentation using Mask2Former with Swin Transformer",
            "Built face detection system using Haar Cascade Classifier",
            "Integrated image enhancement tools for brightness, contrast, and sharpness adjustment"
          ],
          imageUrl: "/images/CV.jpg",
          technologies: ["OpenCV", "Transformers", "ResNet-50", "YOLOS", "Mask2Former", "PIL", "Gradio"],
          githubUrl: "https://huggingface.co/spaces/Rakesh2205/CV_project_1/tree/main",
          liveUrl: "https://huggingface.co/spaces/Rakesh2205/CV_project_2",
          role: "Computer Vision Engineer"
        }
      ]);
  }, []);

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
      <SpeedInsights />
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
          ${isDarkMode ? "text-white" : "40 text-gray-900"}
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
              {isDarkMode ? (
                <HiOutlineSun className="h-5 w-5" />
              ) : (
                <HiOutlineMoon className="h-5 w-5" />
              )}
            </button>
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
                ${isDarkMode ? "bg-white" : "bg-black"}
                ${isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""}
              `}
            />
            <div
              className={`
                w-6 h-0.5 mb-1 transition-all
                ${isDarkMode ? "bg-white" : "bg-black"}
                ${isMenuOpen ? "opacity-0" : ""}
              `}
            />
            <div
              className={`
                w-6 h-0.5 transition-all
                ${isDarkMode ? "bg-white" : "bg-black"}
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
                {isDarkMode ? (
                  <HiOutlineSun className="h-5 w-5" />
                ) : (
                  <HiOutlineMoon className="h-5 w-5" />
                )}
              </button>
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
          {/* Section Header */}
          <div className="relative mb-16 text-center">
            <motion.div
              className="relative space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              data-disable-animation-mobile="true"
            >
              <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </motion.div>
          </div>

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.title}
                onClick={() => openExperienceModal(exp)}
                className="
                  group cursor-pointer
                  p-5 rounded-lg
                  bg-white dark:bg-gray-900
                  border-2 border-transparent
                  shadow-sm md:hover:shadow-md
                  dark:shadow-gray-800/50 dark:md:hover:shadow-black/50
                  transition-all duration-300
                  md:hover:-translate-y-1
                  relative
                  overflow-hidden
                "
                data-disable-animation-mobile="true"
              >
                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                
                <div className="flex items-center gap-4 mb-4">
                  {exp.logo && (
                    <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded-md">
                      <Image 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        width={40} 
                        height={40} 
                        className="rounded object-contain h-[40px] w-[40px]"
                        quality={75}
                        sizes="40px"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    {exp.company && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
                    )}
                    {exp.timeframe && (
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{exp.timeframe}</p>
                    )}
                  </div>
                </div>

                {/* Key Achievement */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {exp.shortDescription[0]}
                  </p>
                </div>

                {/* Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {exp.technologies.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 2 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        +{exp.technologies.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* View Details Link - Positioned at bottom right */}
                <div className="absolute bottom-4 right-4 text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-1 rounded-full bg-blue-50/50 dark:bg-blue-900/20 group-hover:bg-blue-100/80 dark:group-hover:bg-blue-900/30 transition-colors flex items-center gap-1">
                    View Details
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
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
          

          <motion.div
            className="relative space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            data-disable-animation-mobile="true"
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Replace the project tabs section with the memoized component */}
          <ProjectTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            projectTabs={projectTabs} 
          />

          {/* Replace the project cards with the memoized component */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-6">
            {currentProjects.map((proj, index) => (
              <ProjectCard 
                key={proj.title} 
                proj={proj} 
                index={index} 
                openProjectModal={openProjectModal} 
              />
            ))}
          </div>
          
          {/* Remove scroll indicator since we're using grid layout now */}
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
          

          <motion.div
            className="relative space-y-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            data-disable-animation-mobile="true"
          >
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
              Let&rsquo;s Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
              Got an exciting idea or just want to chat? I&rsquo;m all ears and love connecting!
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-disable-animation-mobile="true"
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



