"use client";
import Image from 'next/image';
import { useState, useEffect, SetStateAction} from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SkillsSection from "./SkillsSection"; // Adjust the path as necessary
import Typewriter from "typewriter-effect";



/* ----- Icons (Phone, Location, Social, Sun/Moon) ----- */
function PhoneIcon() {
  return <span>📞</span>;
}
function LocationIcon() {
  return <span>📍</span>;
}
function LinkedInIcon() {
  return <span>LinkedIn</span>;
}

function GitHubIcon() {
  return <span>GitHub</span>;
}
function SunIcon() {
  return <span>☀️</span>;
}
function MoonIcon() {
  return <span>🌙</span>;
}
// types.ts (or at top of page.tsx, but a separate file is cleaner)

export interface Experience {
  title: string;
  company?: string;
  logo?: string;
  timeframe?: string;
  shortDescription: string[];
  description?: {
    [section: string]: string[] | string; 
    // e.g. { "Neural Networks": ["...", "..."], "Other": "..." }
  };
  technologies?: string[];
}

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


interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience?: Experience; // or replace 'any' with a specific type if you have one
}

/* --------------------- */
/*   EXPERIENCE MODAL    */
/* --------------------- */
function ExperienceModal({ isOpen, onClose, experience }: ExperienceModalProps) {
  if (!isOpen || !experience) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#0000002b] backdrop-blur-sm bg-opacity-50 overflow-auto"
      onClick={onClose}
    >
      <div
        className="bg-[linear-gradient(210deg,_#b8c2d1_0%,_#fff_48%)] dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)] rounded-lg max-w-2xl w-full shadow-xl relative backdrop-blur-md p-6 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 px-[3px]"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex items-center gap-4 mb-4">
          {experience.logo && (
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-12 h-12 object-cover rounded-full"
            />
          )}
          <div>
            <h3 className="text-2xl font-bold mb-1">{experience.title}</h3>
            {experience.company && (
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {experience.company}
              </h4>
            )}
          </div>
        </div>

        {/* Experience description (object with sections) */}
        {experience.description &&
        typeof experience.description === "object" &&
        Object.keys(experience.description).length > 0 ? (
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4 mb-4">
            {Object.entries(experience.description).map(([section, points], index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {section}
                </h4>
                {Array.isArray(points) ? (
                  <ul className="list-disc list-inside space-y-2">
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{points}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            No details available.
          </p>
        )}

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project; // or replace 'any' with a specific type if you have one
}

/* --------------------- */
/*    PROJECTS MODAL     */
/* --------------------- */
function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#0000002b] backdrop-blur-sm bg-opacity-50 overflow-auto"
      onClick={onClose}
    >
      <div
        className="bg-[linear-gradient(210deg,_#b8c2d1_0%,_#fff_48%)] dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)] rounded-lg max-w-2xl w-full shadow-xl relative backdrop-blur-md p-6 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 px-[3px]"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Project Image */}
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} image`}
            className="w-full h-48 object-cover rounded mb-4"
          />
        )}

        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

        {/* Long description as bullet points */}
        {project.longDescription && project.longDescription.length > 0 ? (
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4 mb-4">
            <ul className="list-disc list-inside space-y-2">
              {project.longDescription.map((point: string, idx: number) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            No details available.
          </p>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* GitHub and Demo Links */}
        {(project.demoLink || project.githubLink) && (
          <div className="mt-4 flex space-x-4">
            {project.demoLink && (
              <a
                href={project.demoLink}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}



export default function Home() {
  
  /* Dark Mode */
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* Mobile Nav */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  /* Scroll Spy Setup */
  const sections = ["hero", "about", "experience", "projects", "footer-contact"];
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    sections.forEach((secId) => {
      const secEl = document.getElementById(secId);
      if (secEl) observer.observe(secEl);
    });
    return () => {
      sections.forEach((secId) => {
        const secEl = document.getElementById(secId);
        if (secEl) observer.unobserve(secEl);
      });
    };
  }, []);

  /* Experience Data */
  const experiences = [
    {
      title: "AI Engineer",
      company: "Uniquify AI",
      logo: "/images/ai-startup-logo.png",
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
      logo: "/images/research-lab-logo.png",
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
          "Analyzed adversarial machine learning threats and model robustness for malware detection."
        ],
        "Projects & Technical Work": [
          "Developed an AI-powered fake news detection system using BERT and LSTMs.",
          "Developed iOS applications integrating AI-driven security features.",
          "Worked on distributed computing models to optimize deep learning workloads.",
          "Built an automated AI paper summarization tool, improving information retrieval efficiency."
        ],
        "Academic & Technical Contributions": [
          "Applied deep learning techniques (CNNs, GANs, Transformers) for cybersecurity and NLP tasks.",
          "Explored secure AI pipelines and privacy-preserving machine learning.",
          "Designed scalable solutions for real-time security threat detection."
        ]

      },
      technologies: ["Python", "Transformers", "BERT", "GPT-3", "PyTorch", "GANs", "Deep Learning"],
    },
    {
      title: "Senior Software Engineer",
      company: "Capgemini",
      logo: "/images/consulting-logo.png",
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
      logo: "/images/university-logo.png",
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
  

  /* Projects (Tabs) 
     Now each project has:
     - shortDescription (shown on the card)
     - longDescription (array of bullet points shown in the modal)
  */
  const [activeTab, setActiveTab] = useState("NLP/LLM");
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
      color: "bg-[linear-gradient(332deg,_#fff0f7_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#49202d94_0%,_#ffffff00_48%)]",
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
          image: "https://via.placeholder.com/300x200?text=NLP+Project+1",
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
          image: "https://via.placeholder.com/300x200?text=NLP+Project+2",
          technologies: ["Python", "NLTK", "React"],
          role: "Full Stack Developer",
        },
      ],
    },
    {
      name: "Multimodal",
      color: "bg-[linear-gradient(332deg,_#fffef0_0%,_#ffffff00_48%)] dark:bg-[linear-gradient(332deg,_#32301894_0%,_#ffffff00_48%)]",
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
          image: "https://via.placeholder.com/300x200?text=Multimodal+Project",
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
            "Integrated solution into client’s microservice architecture."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "https://via.placeholder.com/300x200?text=ML+Project+1",
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
            "Reduced MSE by 12% using Prophet’s advanced seasonality."
          ],
          demoLink: "#",
          githubLink: "#",
          image: "https://via.placeholder.com/300x200?text=ML+Project+2",
          technologies: ["Python", "TensorFlow", "Prophet"],
          role: "Data Scientist",
        },
      ],
    },
  ];

  // For Experience Modal
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState<boolean>(false);

  const openExperienceModal = (exp: Experience) => {
    setSelectedExperience(exp);
    setIsExperienceModalOpen(true);
  };

  const closeExperienceModal = () => {
    setSelectedExperience(null);
    setIsExperienceModalOpen(false);
  };

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
  const { scrollY } = useScroll();
  //const rawY = useTransform(scrollY, [0, 300], [0, -150]);
  // const backgroundY = useSpring(rawY, { stiffness: 100, damping: 20 });

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBgImage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBgImage("/images/final-bg-1080p.jpg");
      } else if (width < 1024) {
        setBgImage("/images/final-bg-1080p.jpg");
      } else {
        setBgImage("/images/final-bg-1080p.jpg");
      }
    };
    updateBgImage();
    window.addEventListener("resize", updateBgImage);
    return () => window.removeEventListener("resize", updateBgImage);
  }, [darkMode]);

  const currentTabObj = projectTabs.find((t) => t.name === activeTab);
  const currentProjects = currentTabObj ? currentTabObj.projects : [];


  
  // Once loaded, render your actual site
  
  return (
    <main
      className={`
        min-h-screen
        transition-colors duration-500
        font-sans
        text-gray-900 dark:text-white
      `}
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
            <a href="#hero" onClick={closeMenu} className="block">
              <span className="transition-opacity duration-300 group-hover:opacity-0">RN</span>
              <span className="absolute w-[max-content] left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Rakesh Nagaraju
              </span>
            </a>
          </div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((secId) => {
              const label =
                secId === "footer-contact"
                  ? "Contact"
                  : secId.charAt(0).toUpperCase() + secId.slice(1);
              const isActive = activeSection === secId;
              return (
                <a
                  key={secId}
                  href={`#${secId}`}
                  onClick={closeMenu}
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
              onClick={() => setDarkMode(!darkMode)}
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
              {darkMode ? <SunIcon /> : <MoonIcon />}
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
              md:hidden flex flex-col gap-4 py-4 px-8
              backdrop-blur-md z-50
              ${darkMode ? "bg-black/40 text-white" : "bg-white/40 text-gray-900"}
            `}
          >
            {sections.map((secId) => {
              const label =
                secId === "footer-contact"
                  ? "Contact"
                  : secId.charAt(0).toUpperCase() + secId.slice(1);
              const isActive = activeSection === secId;

              return (
                <a
                  key={secId}
                  href={`#${secId}`}
                  onClick={closeMenu}
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

            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-full
                border border-transparent
                hover:brightness-[0.8]
                bg-transparent
                focus:outline-none
              "
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </nav>
        )}
      </header>

      {/* HERO (1) */}
      <section
        id="hero"
        className={`
          relative h-screen flex flex-col justify-center  
          text-center items-center
          px-4 pt-6 overflow-hidden bg-white dark:bg-black
        `}
      >
        {/* Background Image Animation with Parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%)" }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            backdropFilter: "blur(5px)",
            scale: useSpring(useTransform(scrollY, [0, 300], [1, 1.05]), {
              stiffness: 100,
              damping: 20,
            }),
            y: useSpring(useTransform(scrollY, [0, 300], [0, -50]), {
              stiffness: 100,
              damping: 20,
            }),
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 dark:brightness-50"
        ></motion.div>

        <motion.div
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "40vh",
            width: "100vw",
            top: "0px",
            left: "0",
            position: "absolute",
            y: useSpring(useTransform(scrollY, [0, 300], [0, -50]), {
              stiffness: 100,
              damping: 20,
            }),
          }}
          className="absolute inset-0 z-10 dark:brightness-[0.7]"
        />

        {/* Hero Image */}
        <motion.img
          src="/images/rakesh_head.png"
          alt="Hero placeholder"
          loading="lazy"
          className="animated-gradient-border mt-[42px] mb-6 w-[100%] max-w-[200px] rounded-full shadow relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            backdropFilter: "blur(5px)",
            scale: useSpring(useTransform(scrollY, [0, 300], [1, 1.05]), {
              stiffness: 100,
              damping: 20,
            }),
          }}
        />

        {/* Title */}
        <motion.h1
          className="backdrop-blur-[5px] text-5xl md:text-6xl font-semibold mb-6 tracking-tight relative z-10"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            scale: useSpring(useTransform(scrollY, [0, 300], [1, 1.05]), {
              stiffness: 100,
              damping: 20,
            }),
          }}
        >
          RAKESH NAGARAJU
        </motion.h1>

        {/* Subtitle (Typing Effect) */}
        <motion.div
          className="backdrop-blur-[5px] text-[1.1rem] max-w-2xl mb-8 text-gray-400 opacity-90 relative z-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            lineHeight: "35px",
            letterSpacing: "0.8px",
            fontFamily: "Helvetica, San Francisco, New York",
            scale: useSpring(useTransform(scrollY, [0, 300], [1, 1.05]), {
              stiffness: 100,
              damping: 20,
            }),
          }}
        >
          <span>
            Engineer with{" "}
            <span className="text-[#ff6a13]  font-bold">6+ years</span>{" "}
            experience in software development and{" "}
            <span className="text-[#ff6a13] font-bold ">3+ years</span> in
            building end-to-end AI solutions.
          </span>{" "}
          Specializing in
          <span className=" text-black dark:text-white text-[1.2rem]  ">
            <Typewriter
              options={{
                strings: [
                  "Computer Vision",
                  "NLP / LLM",
                  "Machine Learning",
                  "MLOps",
                  "Software Development",
                ],
                autoStart: true,
                delay: 60,
                deleteSpeed: 30,
                cursor: "|",
                loop: true,
              }}
            />
          </span>
        </motion.div>

        {/* Call to Action Button */}
        <motion.a
          href="#footer-contact"
          className="
            inline-block px-4 py-2 rounded-full text-sm font-normal
            text-white transition-all bg-gradient-to-r from-pink-500 to-blue-500
            hover:brightness-110 relative z-10 max-w-max
          "
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: 1 }}
          style={{
            scale: useSpring(useTransform(scrollY, [0, 300], [1, 1.05]), {
              stiffness: 100,
              damping: 20,
            }),
          }}
        >
          Get in Touch
        </motion.a>
      </section>

      {/* ABOUT (2) */}
      {/* ABOUT (2) */}
<section id="about" className="relative py-24 px-6 bg-gray-50 dark:bg-[#01070e] overflow-hidden">
  {/* Section Title */}
  <div className="relative mb-16 text-center">
    <motion.h2
      className="text-6xl font-extrabold text-gray-300 dark:text-gray-600 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.1 }}
      viewport={{ once: true }}
    >
      ABOUT ME
    </motion.h2>

    <motion.h2
      className="relative text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>
  </div>

  {/* Intro Section */}
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
    <div className="md:w-1/2 text-center md:text-left">
      <motion.p
        className="text-lg md:text-xl text-[#57595d] dark:text-[#b0b3b9] leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="text-4xl font-semibold">Hi👋, I am <span className="text-[#ff6a13]">Rakesh</span>,</span><br />
        <span className="text-xl font-medium leading-[50px]">AI Engineer based in the Bay Area.</span><br />
        <span className="text-[1.1rem] text-[#37415199] dark:text-[#8d8d8d] leading-[30px] tracking-[0.5px]">
          Specializing in <span >Vision AI, Language AI, Multimodal AI, and MLOps</span>,  
          I craft AI systems that <span>see, understand, and generate</span> human-like intelligence.  
          <br></br><span className="text-[#57595d] dark:text-[#b0b3b9] font-semibold">My passion?</span> <span>Building scalable, high-performance AI solutions.</span>
        </span>
      </motion.p>
    </div>
  </div>

  {/* Floating Cards Section */}
  <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-[106px]">
    
    {/* What I Do */}
    <motion.div
      className="p-8 bg-[linear-gradient(135deg,_rgb(255_255_255)_0%,_#dce0e23b_48%)]   
                  dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      
      viewport={{ once: true }}
    >
      <h3 className="text-[#3b82f6] text-2xl text-center font-semibold">🚀 What I Do</h3>
      <ul className="mt-4 space-y-3 text-gray-800 dark:text-gray-300 ">
        <li className="flex items-center">
          <span className="text-2xl text-[#ff6a13]">⚡</span>
          <span className="text-[1.1rem] ml-3">Building AI-powered <span className="font-semibold">scalable</span> systems</span>
        </li>
        <li className="flex items-center">
          <span className="text-2xl text-[#ff6a13]">🔧</span>
          <span className="text-[1.1rem] ml-3"><span className="font-semibold">Fine-tuning & deploying</span> AI models</span>
        </li>
        <li className="flex items-center">
          <span className="text-2xl text-[#ff6a13]">📡</span>
          <span className="tex-[1.1rem]l ml-3">Optimizing models for <span className="font-semibold">real-time</span> performance</span>
        </li>
        <li className="flex items-center">
          <span className="text-2xl text-[#ff6a13]">🔍</span>
          <span className="text-[1.1rem] ml-3"><span className="font-semibold">MLOps</span> & AI deployment strategies</span>
        </li>
      </ul>
    </motion.div>

    {/* Why AI? */}
    <motion.div
      className="p-8 leading-[40px] bg-gradient-to-r from-[#3b82f6] to-[#ec4899] text-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
     
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-center">🎯Why AI?</h3>
      <p className="text-[1.1rem] mt-5 text-center">
        AI isn’t just my job—it’s my <span className="font-bold">passion</span>.  
        The ability to teach machines to <span className="font-bold">see, understand, and create </span>  
        makes me feel like I’m shaping the <span className="font-bold">future</span>. 🌍
      </p>
    </motion.div>

    {/* Beyond Code */}
    <motion.div
      className="p-8 leading-[35px] tracking-[1.0px] bg-[linear-gradient(135deg,_rgb(255_255_255)_0%,_#dce0e23b_48%)]   
                  dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)] rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      
      viewport={{ once: true }}
    >
      <h3 className="text-[#ec4899] text-center text-2xl font-semibold">🎮 Beyond Code</h3>
      <p className="text-[1.1rem] text-[#37415199] dark:text-[#b0b3b9] mt-5 font-[cursive] text-center">
        When I’m not coding, I’m <span className="font-semibold">hiking</span>, gaming on my <span className="font-semibold">PS5</span>,  
        experimenting in the <span className="font-semibold">kitchen</span>, or learning to <span className="font-semibold">play piano</span>.  
        Let’s connect over <span className="font-semibold">tech, gaming, or new ideas!</span> 🚀
      </p>
    </motion.div>

  </div>
</section>



      {/* EXPERIENCE (3) + SKILLS combined */}
      <section id="experience" className="py-20 px-4 bg-white dark:bg-black">
        {/* Watermark Container */}
        <div className="relative mb-12 text-center">
          <motion.h2
            className="text-6xl font-extrabold text-gray-300 dark:text-gray-600 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
          >
            EXPERIENCE
          </motion.h2>

          <motion.h2
            className="relative text-3xl md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto ">
          {/* Experience Cards */}
          <div className="flex flex-row gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 py-6 touch-pan-x border-r-4 border-[#dce0e2] dark:border-[#4a4a4a]">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                onClick={() => openExperienceModal(exp)}
                className="
                  w-[320px] flex-shrink-0 snap-center
                  p-6 md:p-8 rounded-[1.5rem] shadow
                  bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)]   
                  dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)]
                  cursor-pointer 
                  relative flex flex-col
                "
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                  )}
                </div>

                {/* Company & Timeframe */}
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {exp.company}
                </h4>
                <p className="text-sm mb-2 italic text-gray-700 dark:text-gray-300">
                  {exp.timeframe}
                </p>

                {/* Short Description */}
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-1">
                  {exp.shortDescription.map((point, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="mr-2 text-lg">•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>


                {/* Read More Link */}
                <div className="mt-4 text-right">
                  <button
                    
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                  >
                    Read more...
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Section */}
          <SkillsSection />
        </div>
      </section>

      {/* PROJECTS (4) */}
      <section
        id="projects"
        className="py-40 px-4 min-h-[110vh] bg-gray-50 dark:bg-[#01070e]"
      >
        {/* Watermark Container */}
        <div className="relative mb-12 text-center">
          <motion.h2
            className="text-6xl font-extrabold text-gray-300 dark:text-gray-600 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
          >
            PROJECTS
          </motion.h2>

          <motion.h2
            className="relative text-3xl md:text-4xl "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab buttons container */}
          <div className="mb-8 flex justify-center">
            <div
              className="
                no-scrollbar
                inline-flex gap-6
                px-4 pb-2 pt-[3px]
                overflow-x-auto touch-pan-x
                backdrop-blur-md
                rounded-[50px]
                bg-[#eef2f6] dark:bg-[#1c242b]
              "
            >
              {projectTabs.map((tab) => {
                const isActive = activeTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`
                      relative cursor-pointer text-base px-4 pt-2 pb-[3px]
                      focus:outline-none
                      before:absolute before:left-0 before:-bottom-1 before:h-[2px]
                      before:rounded before:transition-all before:duration-300
                      ${
                        isActive
                          ? "text-gray-900 dark:text-gray-100 before:w-full before:bg-gradient-to-r before:from-pink-500 before:to-blue-500 scale-105"
                          : "font-normal text-gray-600 dark:text-gray-300 before:w-0 before:bg-gradient-to-r before:from-pink-500 before:to-blue-500 hover:before:w-full"
                      }
                    `}
                    style={{ lineHeight: "1.5" }}
                  >
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2-row layout with horizontal scroll */}
          <div
            className="
              no-scrollbar
              grid grid-flow-col grid-rows-2 gap-6
              overflow-x-auto snap-x snap-mandatory
              px-[25px] py-[25px] touch-pan-x 
              
            "
          >
            {currentProjects.map((proj) => (
             
              <motion.div
                key={proj.title}
                onClick={() => openProjectModal(proj)}
                className={`
                  ${currentTabObj.color}
                  w-[250px] flex-shrink-0 snap-center
                  pb-6 rounded-lg shadow
                  cursor-pointer 
                  relative
                  backdrop-blur-md bg-opacity-30 dark:bg-opacity-40
                `}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
              >
                {/* Project Image */}
                {proj.image && (
                  <div className="w-full h-40 rounded-t-xl overflow-hidden">
                    <Image
                      loading="lazy"
                      src={proj.image}
                      alt={`${proj.title} image`}
                      className="w-full h-full object-cover rounded mb-4"
                    />
                  </div>
                )}
                
                {/* Project Title */}
                <h3 className="text-xl px-3 font-semibold mb-2">{proj.title}</h3>

                {/* Short Description as bullet points */}
                <ul className="list-disc pl-6 text-sm mb-4">
                  {proj.shortDescription.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>

                {/* Read More Button */}
                <div className="px-3 mb-2 text-right">
                  <button
                    onClick={() => openProjectModal(proj)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
                  >
                    Read more...
                  </button>
                </div>

                {/* Demo & GitHub (Optional quick links) */}
                <div className="px-3 flex space-x-4">
                  {proj.demoLink && (
                    <a
                      href={proj.demoLink}
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  )}
                  {proj.githubLink && (
                    <a
                      href={proj.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
              
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (5) */}
      <footer
        id="footer-contact"
        className="
          pt-20 pb-[25px] px-4 min-h-[50vh] text-center
          bg-white dark:bg-black
        "
      >
        {/* Watermark Container */}
        <div className="relative mb-12 text-center">
          <motion.h2
            className="text-6xl font-extrabold text-gray-300 dark:text-gray-600 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.1 }}
            viewport={{ once: true }}
          >
            CONTACT
          </motion.h2>

          <motion.h2
            className="relative text-3xl md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
        </div>

        <div className="max-w-xxl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6 mt-[75px] mb-[45px] sm:flex-row sm:gap-20">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <span>+1 (669) 288-4508</span>
            </div>
            {/* Email */}
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>rakenju@gmail.com</span>
            </div>
            {/* Location */}
            <div className="flex items-center gap-2">
              <LocationIcon />
              <span>Santa Clara, CA</span>
            </div>
          </div>

          {/* Social icons row */}
          <div className="flex justify-center gap-4 mb-[75px]">
            <a
              href="https://www.linkedin.com/in/rakesh-nagaraju/"
              target="_blank"
              className="hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-yellow-500 transition-colors"
              aria-label="HuggingFace"
            >
              HuggingFace
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Rakesh Nagaraju. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={isExperienceModalOpen}
        onClose={closeExperienceModal}
        experience={selectedExperience}
      />

      {/* Project Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </main>
  );
}
