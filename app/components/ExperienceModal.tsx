"use client";
import React, { useState, memo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiLink, FiGithub, FiExternalLink } from "react-icons/fi";

export interface Experience {
    title: string;
    company?: string;
    companyUrl?: string;
    logo?: string;
    timeframe?: string;
    shortDescription: string[];
    description?: {
      [section: string]: string | string[] | undefined;
      // e.g. { "Neural Networks": ["...", "..."], "Other": "..." }
    };
    technologies?: string[];
    links?: {
      label: string;
      url: string;
      icon: 'link' | 'github' | 'external';
    }[];
  }
  
interface ExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
    experience?: Experience | null; // or replace 'any' with a specific type if you have one
}

/* Experience Data */
export const experiences = [
    {
      title: "AI Engineer",
      company: "Uniquify AI",
      companyUrl: "https://www.uniquifyai.com/",
      logo: "/images/uniquify.png",
      timeframe: "2021 - Present",
      shortDescription: [
        "3+ years in Computer Vision, NLP, and MLOps, designing and deploying AI at scale.",
        "Expertise in training, optimizing, and deploying deep learning models for production.",
        "Developed high-speed AI pipelines, improving model inference time by 40%.",
      ],
      description: {
        "RAG-Based AI Chatbot Development": [
          "Developed an enterprise-grade RAG system for SOC document retrieval.",
          "Integrated MinIO, Milvus & LlamaIndex to enhance AI-driven search accuracy.",
          "Reduced response latency by 35%, improving knowledge access efficiency."
        ],
        "Neural Network Team Leadership": [
          "Led a team to develop advanced face recognition & human classification models.",
          "Fine-tuned RetinaFace, DeepFace, and VGGFace, improving accuracy by 15%.",
          "Optimized model inference from 2 images/sec to 5 images/sec for real-time applications."
        ],
        "Object Detection & AI Systems": [
          "Designed and deployed YOLOv3 & YOLOv8-based object/person detection pipelines.",
          "Migrated detection system to YOLOv8, increasing processing speed by 40%.",
          "Optimized AI models for embedded devices, enabling real-time edge AI processing."
        ],
        "Defect Detection for Semiconductor Chips": [
          "Fine-tuned YOLOv4_Tiny, achieving 98% defect detection accuracy in chip manufacturing.",
          "Automated quality control workflows, reducing defect rates and operational costs by 50%.",
          "Implemented GitLab CI/CD pipelines, cutting model deployment time by 30%."
        ],
        "AI Research & Internal Training": [
          "Created 70+ Jupyter notebooks covering Computer Vision, NLP, and MLOps best practices.",
          "Mentored junior engineers, providing guidance on AI model deployment and performance tuning.",
          "Developed internal AI workshops, accelerating team adoption of deep learning techniques."
        ]
      },
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "MLflow", "MinIO", "Milvus", "LlamaIndex", "Docker"],
    },
    {
      title: "Masters in Computer Science",
      company: "San Jose State University",
      companyUrl: "https://www.sjsu.edu/",
      logo: "/images/sjsu.png",
      timeframe: "2019 - 2021",
      shortDescription: [
        "Specialized in Machine Learning and AI.",
        "Published a research paper on GAN-based malware generation for adversarial security.",
        "Additional coursework includes Distributed computing, Cybersecurity, IoS app development.",
      ],
      description: {
        "Research & Publications": [
          `Published "Generating Fake Malware Using Auxiliary-Classifier GAN for Malware Analysis" in arXiv (2021).`,
          "Researched how AC-GANs can generate synthetic malware samples to improve cybersecurity defenses.",
          "https://arxiv.org/abs/2107.01620"
        ],
        "Projects & Technical Work": [
          "Developed an AI-powered fake news detection system using BERT and LSTMs.",
          "Developed iOS applications integrating AI-driven security features.",
          "Worked on distributed computing models to optimize deep learning workloads."
        ],
        "Academic & Technical Contributions": [
          "Applied deep learning techniques (CNNs, GANs, Transformers) for cybersecurity and NLP tasks.",
          "Explored secure AI pipelines and privacy-preserving machine learning."
        ]

      },
      technologies: ["Python", "Transformers", "BERT", "GPT-3", "PyTorch", "GANs", "Deep Learning"],
    },
    {
      title: "Senior Software Engineer",
      company: "Capgemini",
      companyUrl: "https://www.capgemini.com/in-en/",
      logo: "/images/Capgemini.png",
      timeframe: "2016 - 2019",
      shortDescription: [
        "Developed backend python systems for enterprise applications, focusing on performance, and security.",
        "Worked on data pipelines and ML models for an internal customer analytics project at RBC.",
        "Optimized regression-based models to derive financial insights.",
      ],
      description: {
        "Backend Development & API Engineering": [
          "Developed and maintained Python-based backend services for enterprise applications.",
          "Built scalable RESTful APIs using Flask and FastAPI, integrating with databases like PostgreSQL and MongoDB.",
          "Implemented authentication and authorization mechanisms (OAuth2, JWT) to ensure secure access control.",
          "Designed asynchronous job processing using Celery & RabbitMQ, optimizing background task execution."
        ],
        "Software Engineering & System Optimization": [
          "Designed modular and reusable code components, improving code maintainability across projects.",
          "Worked on unit and integration testing frameworks (pytest, unittest) to ensure reliable software deployment.",
          "Optimized database queries and indexing strategies, reducing query execution times by 40%.",
          "Enhanced logging and monitoring using ELK Stack (Elasticsearch, Logstash, Kibana), improving system observability."
        ],
        "Internal Customer Project – RBC (Royal Bank of Canada)": [
          "Built a data processing pipeline for financial data analysis, enabling real-time insights into customer behaviors.",
          "Developed regression-based predictive models to assess loan approvals and risk factors, increasing prediction accuracy.",
          "Implemented data cleaning and feature engineering pipelines to improve model performance and data integrity.",
          "Automated model training and evaluation workflows, reducing manual intervention and streamlining updates."
        ]
      },
      technologies: ["Python", "Scikit-learn", "AWS SageMaker", "Docker", "Kubernetes", "TensorFlow", "BERT", "MLflow"],
    },
    {
      title: "Bachelor in Computer Science",
      company: "NMIT",
      companyUrl: "https://nitte.edu.in/nmit/",
      logo: "/images/nmit.png",
      timeframe: "2012 - 2016",
      shortDescription: [
        "Gained a strong foundation in computer science principles, covering algorithms, data structures, databases, and system design.",
        "Led a capstone project on time-series forecasting, applying machine learning techniques for predictive analysis."
      ],
      description: {
        "Software Engineering & Backend Development": [
          "Built multiple web and mobile applications, primarily focusing on backend systems using Python, Django, and Flask.",
          "Designed and optimized relational database models using MySQL and PostgreSQL, improving query performance and data retrieval.",
          "Developed a mini ERP system as part of a course project, integrating user authentication, inventory management, and reporting features.",
          "Created RESTful APIs for real-time data exchange in web and mobile applications, enhancing user experience and system performance."
        ],
        "Leadership & Extracurriculars": [
          "Led university hackathon teams, winning multiple innovation awards.",
          "Conducted workshops on Python and ML for undergraduate students.",
          "Collaborated with research groups on AI applications in healthcare."
        ]
      },
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Django", "Flask", "CNNs", "Machine Learning"],
    },
  ];

/* --------------------- */
/*   EXPERIENCE MODAL    */
/* --------------------- */

// Memoized Technology Tag Component
const TechnologyTag = memo(({ tech, index }: { tech: string; index: number }) => (
  <motion.span
    className="px-2.5 py-1 text-xs font-medium 
      bg-gradient-to-r from-blue-50 to-blue-100 
      dark:from-blue-900/30 dark:to-blue-800/30 
      text-blue-600 dark:text-blue-400 
      rounded-full
      shadow-sm
      hover:shadow-md
      hover:scale-105
      transition-all duration-200
      border border-blue-100/50 dark:border-blue-800/50"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 0.6 + index * 0.05 }}
  >
    {tech}
  </motion.span>
));

TechnologyTag.displayName = 'TechnologyTag';

// Memoized Overview Item Component
const OverviewItem = memo(({ point, idx }: { point: string; idx: number }) => (
  <motion.li
    className="relative pl-4 overflow-hidden"
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.2 + idx * 0.1 }}
  >
    <div className="absolute left-0 top-0 w-[2px] h-full bg-blue-500 dark:bg-blue-500"></div>
    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-r-md"></div>
    <div className="relative py-2 pl-4 pr-3 text-base text-gray-600 dark:text-gray-400 translate-x-1">
      <span>{point}</span>
    </div>
  </motion.li>
));

OverviewItem.displayName = 'OverviewItem';

// Memoized Section Header Component
const SectionHeader = memo(({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <h4 className="text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent inline-flex items-center gap-2">
    {icon}
    {title}
  </h4>
));

SectionHeader.displayName = 'SectionHeader';

// Main Modal Component
const ExperienceModal = memo(({ isOpen, onClose, experience }: ExperienceModalProps) => {
  // Memoize the close handler
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  }, [onClose]);

  // Memoize the keydown handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  if (!experience) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
        >
          <motion.div
            className="relative bg-[linear-gradient(210deg,_#f0f4ff_0%,_#ffffff_48%)] dark:bg-[linear-gradient(210deg,_#1a2238_0%,_#0a0f1f_48%)] rounded-xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative accent - matching experience cards */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"></div>
            
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 
                bg-white/80 dark:bg-gray-800/80 rounded-full 
                shadow-sm hover:shadow-md 
                transition-all duration-200 
                z-20
                backdrop-blur-sm
                hover:scale-110"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-start justify-between border-b border-gray-200/50 dark:border-gray-700/50 p-8 gap-6">
              {/* Left side - Logo and Title */}
              <div className="flex items-start gap-6">
                {experience.logo && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={70}
                      height={70}
                      className="rounded-xl object-contain shadow-sm"
                    />
                  </motion.div>
                )}
                <div className="space-y-2">
                  <motion.h3
                    id="modal-title"
                    className="text-2xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent tracking-tight"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {experience.title}
                  </motion.h3>
                  {experience.company && (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <a
                        href={experience.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-2 group"
                        title={`Visit ${experience.company}`}
                      >
                        {experience.company}
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Right side - Date */}
              <motion.div 
                className="flex items-center justify-end pr-12"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {experience.timeframe && (
                  <div className="text-base text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                    {experience.timeframe}
                  </div>
                )}
              </motion.div>
            </div>
    
            {/* Content Section */}
            <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto 
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-gray-100/50
              [&::-webkit-scrollbar-track]:dark:bg-gray-800/50
              [&::-webkit-scrollbar-thumb]:bg-gray-300/80
              [&::-webkit-scrollbar-thumb]:dark:bg-gray-600/80
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:border-2
              [&::-webkit-scrollbar-thumb]:border-gray-100/50
              [&::-webkit-scrollbar-thumb]:dark:border-gray-800/50
              hover:[&::-webkit-scrollbar-thumb]:bg-gray-400/80
              hover:[&::-webkit-scrollbar-thumb]:dark:bg-gray-500/80
              scrollbar-gutter: stable
            ">
              {/* Overview Section */}
              {experience.shortDescription && experience.shortDescription.length > 0 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <SectionHeader 
                    title="Overview" 
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    } 
                  />
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {experience.shortDescription.map((point, idx) => (
                      <OverviewItem key={idx} point={point} idx={idx} />
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Detailed Sections */}
              {experience.description &&
              typeof experience.description === "object" &&
              Object.keys(experience.description).length > 0 ? (
                Object.entries(experience.description).map(([section, points], index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <SectionHeader 
                      title={section} 
                      icon={
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      } 
                    />
                    {Array.isArray(points) ? (
                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        {points.map((point, idx) => {
                          const isLink =
                            typeof point === "string" &&
                            (point.startsWith("http://") || point.startsWith("https://"));
                          return (
                            <motion.li
                              key={idx}
                              className="text-sm relative pl-4"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                              {/* Simple left border indicator */}
                              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-500/20 dark:bg-blue-500/30 rounded"></div>
                              
                              {/* Text content */}
                              <div className="py-1">
                                {isLink ? (
                                  <a
                                    href={point}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                    title={`Visit ${point}`}
                                  >
                                    {point}
                                  </a>
                                ) : (
                                  <span>{point}</span>
                                )}
                              </div>
                            </motion.li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-gray-400 pl-3">{String(points)}</p>
                    )}
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">No details available.</p>
              )}
  
              {/* Links Section */}
              {experience.links && experience.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {experience.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${link.label}`}
                      className="
                        inline-flex items-center gap-1.5
                        px-3 py-1.5 rounded-lg
                        bg-blue-50 dark:bg-blue-900/30
                        text-blue-700 dark:text-blue-300
                        text-xs font-medium
                        hover:bg-blue-100 dark:hover:bg-blue-800/30
                        transition-colors duration-200
                      "
                    >
                      {link.icon === 'link' ? (
                        <FiLink className="w-3 h-3" />
                      ) : link.icon === 'github' ? (
                        <FiGithub className="w-3 h-3" />
                      ) : (
                        <FiExternalLink className="w-3 h-3" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Technologies Section */}
              {experience.technologies && experience.technologies.length > 0 && (
                <motion.div
                  className="pt-3 mt-1 border-t border-gray-200/50 dark:border-gray-700/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Technologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium 
                          bg-gradient-to-r from-blue-50 to-blue-100 
                          dark:from-blue-900/30 dark:to-blue-800/30 
                          text-blue-600 dark:text-blue-400 
                          rounded-full
                          shadow-sm
                          hover:shadow-md
                          hover:scale-105
                          transition-all duration-200
                          border border-blue-100/50 dark:border-blue-800/50"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

ExperienceModal.displayName = 'ExperienceModal';

// Hook for using the experience modal
export function useExperienceModal() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState<boolean>(false);

  const openExperienceModal = useCallback((exp: Experience) => {
    setSelectedExperience(exp);
    setIsExperienceModalOpen(true);
  }, []);

  const closeExperienceModal = useCallback(() => {
    setIsExperienceModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  }, []);

  return {
    selectedExperience,
    isExperienceModalOpen,
    openExperienceModal,
    closeExperienceModal
  };
}

export default ExperienceModal;
