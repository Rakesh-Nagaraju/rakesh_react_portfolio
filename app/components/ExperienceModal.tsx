"use client";
import React, { useState } from "react";
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
export default function ExperienceModal({ isOpen, onClose, experience }: ExperienceModalProps) {
    if (!experience) return null;
  
    // Handle keyboard events
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
  
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex={-1}
          >
            <motion.div
              className="relative bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)] dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)] rounded-xl shadow-2xl max-w-3xl w-full mx-4 overflow-hidden"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative accent - matching experience cards */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50 z-10"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
  
              {/* Header Section - Refined with balanced text size and spacing */}
              <div className="flex flex-col md:flex-row items-center border-b border-gray-200 dark:border-gray-700 p-6 gap-5">
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
                      className="rounded-lg object-contain"
                    />
                  </motion.div>
                )}
                <div className="flex-1 text-center md:text-left space-y-2">
                  <motion.h3
                    id="modal-title"
                    className="text-lg font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
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
                        className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                        title={`Visit my previous employer: ${experience.company}`}
                      >
                        {experience.company}
                      </a>
                      {experience.timeframe && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
                          {experience.timeframe}
                    </p>
                  )}
                    </motion.div>
                  )}
                </div>
              </div>
  
              {/* Content Section - Refined with balanced text sizes and spacing */}
              <div className="p-6 space-y-7 max-h-[60vh] overflow-y-auto 
                [&::-webkit-scrollbar]:w-1.5
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-track]:dark:bg-gray-800
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                [&::-webkit-scrollbar-thumb]:dark:bg-gray-600
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:border-1
                [&::-webkit-scrollbar-thumb]:border-gray-100
                [&::-webkit-scrollbar-thumb]:dark:border-gray-800
                hover:[&::-webkit-scrollbar-thumb]:bg-gray-400
                hover:[&::-webkit-scrollbar-thumb]:dark:bg-gray-500
              ">
                {/* Overview Section */}
                {experience.shortDescription && experience.shortDescription.length > 0 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-3">
                      Overview
                    </h4>
                    <ul className="space-y-2.5 text-gray-700 dark:text-gray-300">
                      {experience.shortDescription.map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="relative pl-1 group/item overflow-hidden"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                        >
                          {/* Subtle left indicator with overview color */}
                          <div className="absolute left-0 top-0 w-[1px] h-full bg-blue-300 dark:bg-purple-700 group-hover/item:bg-blue-500 dark:group-hover/item:bg-purple-500 transition-colors duration-300"></div>
                          
                          {/* Subtle background highlight on hover with overview color */}
                          <div className="absolute left-0 top-0 w-0 h-full bg-blue-50 dark:bg-purple-900/20 group-hover/item:w-full transition-all duration-500 rounded-r-md"></div>
                          
                          {/* Text content with balanced sizing and spacing */}
                          <div className="relative py-1.5 pl-3 pr-2 text-sm text-gray-600 dark:text-gray-400 group-hover/item:translate-x-1 transition-transform duration-300">
                            <span>{point}</span>
                          </div>
                        </motion.li>
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
                      className="space-y-3"
                    >
                      <h4 className="text-base font-medium bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-3">
                        {section}
                      </h4>
                      {Array.isArray(points) ? (
                        <ul className="space-y-2.5 text-gray-700 dark:text-gray-300">
                          {points.map((point, idx) => {
                            const isLink =
                              typeof point === "string" &&
                              (point.startsWith("http://") || point.startsWith("https://"));
                            return (
                              <motion.li
                                key={idx}
                                className="relative pl-1 group/item overflow-hidden"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                              >
                                {/* Subtle left indicator instead of bullet */}
                                <div className="absolute left-0 top-0 w-[1px] h-full bg-gray-300 dark:bg-gray-700 group-hover/item:bg-blue-400 dark:group-hover/item:bg-blue-500 transition-colors duration-300"></div>
                                
                                {/* Subtle background highlight on hover */}
                                <div className="absolute left-0 top-0 w-0 h-full bg-gray-100 dark:bg-gray-800/50 group-hover/item:w-full transition-all duration-500 rounded-r-md"></div>
                                
                                {/* Text content with balanced sizing and spacing */}
                                <div className="relative py-1.5 pl-3 pr-2 text-sm text-gray-600 dark:text-gray-400 group-hover/item:translate-x-1 transition-transform duration-300">
                                {isLink ? (
                                  <a
                                    href={point}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                      className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
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
  
                {/* Technologies Section - Balanced text size and spacing */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <motion.div
                    className="pt-4 mt-1 border-t border-gray-200 dark:border-gray-700"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                      Technologies & Tools
                    </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                        <motion.span
                        key={index}
                          className="px-2.5 py-1 text-xs font-medium bg-blue-50/70 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100/50 dark:border-blue-800/50"
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

                {/* Links Section - Balanced text size and spacing */}
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
                          flex items-center gap-1.5
                          px-3 py-1.5 rounded-lg
                          bg-blue-50 dark:bg-blue-900/30
                          text-blue-700 dark:text-blue-300
                          text-xs font-medium
                          hover:bg-blue-100 dark:hover:bg-blue-800/30
                          transition-colors duration-200
                          border border-blue-200/50 dark:border-blue-700/50
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

// Hook for using the experience modal
export function useExperienceModal() {
const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
const [isExperienceModalOpen, setIsExperienceModalOpen] = useState<boolean>(false);

const openExperienceModal = (exp: Experience) => {
  setSelectedExperience(exp);
  setIsExperienceModalOpen(true);
};

const closeExperienceModal = () => {
  setIsExperienceModalOpen(false);
    // We'll keep the experience data until the animation completes
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return {
    selectedExperience,
    isExperienceModalOpen,
    openExperienceModal,
    closeExperienceModal
  };
  }
