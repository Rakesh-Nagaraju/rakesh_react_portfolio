"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiDocker,
  SiFastapi,
  SiApachespark,
  SiOpencv,
  SiApachekafka,
  SiMlflow,
  SiGithub,
  SiDatabricks,
  SiPrometheus,
  SiPostgresql,
  SiAmazon, // placeholder for AWS
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiNvidia,
} from "react-icons/si";

// Define skill interface
interface Skill {
  name: string;
  icon: React.ReactNode;
  message: string;
  color: string;
}

// ===============
// TAB 1: TECH STACK (E2E DEVELOPMENT)
// ===============
const techStack = [
  {
    name: "Training & Fine-Tuning (PyTorch / TensorFlow)",
    icon: <SiPytorch />,
    message: `• Trained deep learning models using PyTorch & TensorFlow/Keras
• Fine-tuned LLMs (BERT, LLaMA, T5) with LoRA & QLoRA
• Used mixed precision training and DeepSpeed for large-scale models`,
    color: "#EE4C2C",
  },
  {
    name: "Python",
    icon: <SiPython />,
    message: `• 6+ years developing AI applications and scalable APIs
• Built automation scripts, ETL pipelines, and backend services
• Used NumPy, Pandas, and SciPy for ML/data engineering`,
    color: "#3776AB",
  },
  {
    name: "Model Optimization & Deployment",
    icon: <SiTensorflow />,
    message: `• Optimized AI models using quantization and pruning techniques
• Deployed models using TensorRT, ONNX, and TFLite for inference acceleration
• Configured multi-GPU setups for high-throughput AI inference`,
    color: "#FF6F00",
  },
  {
    name: "MLflow (MLOps)",
    icon: <SiMlflow />,
    message: `• Centralized experiment tracking, model versioning, and deployment
• Integrated MLflow with CI/CD for automated AI workflows
• Ensured reproducibility in AI experiments across teams`,
    color: "#01579B",
  },
  {
    name: "Docker / Kubernetes",
    icon: <SiDocker />,
    message: `• Deployed AI models with containerization and orchestration
• Created reproducible dev/prod environments with Docker Compose
• Scaled workloads using Kubernetes and Helm charts`,
    color: "#0db7ed",
  },
  {
    name: "FastAPI / Flask",
    icon: <SiFastapi />,
    message: `• Developed high-performance REST APIs for AI model serving
• Built scalable ML inference endpoints with FastAPI & Flask
• Integrated authentication, logging, and async processing`,
    color: "#009688",
  },
  {
    name: "AWS / GCP",
    icon: <SiAmazon />,
    message: `• Deployed AI services on AWS (S3, Lambda, EC2, SageMaker)
• Managed scalable data pipelines using GCP's Vertex AI
• Used Terraform for Infrastructure as Code (IaC) automation`,
    color: "#FF9900",
  },
  {
    name: "MLOps & CI/CD Pipelines",
    icon: <SiGithub />,
    message: `• Built automated pipelines for AI model retraining and deployment
• Integrated MLflow with GitHub Actions for continuous AI releases
• Ensured model reproducibility across environments`,
    color: "#6e5494",
  },
  {
    name: "Airflow / Spark",
    icon: <SiApachespark />,
    message: `• Orchestrated AI data pipelines using Apache Airflow DAGs
• Used Apache Spark for distributed data processing at scale
• Handled real-time streaming & batch processing workloads`,
    color: "#ed5338",
  },
  {
    name: "Kafka / RabbitMQ",
    icon: <SiApachekafka />,
    message: `• Implemented event-driven architectures for real-time AI pipelines
• Used Kafka and RabbitMQ for fault-tolerant message streaming
• Managed consumer groups for distributed processing`,
    color: "#d9768a",
  },
  {
    name: "PostgreSQL / MongoDB",
    icon: <SiPostgresql />,
    message: `• Designed relational and NoSQL database schemas for AI applications
• Optimized queries and indexing strategies for high-speed retrieval
• Ensured scalability and availability with replication & sharding`,
    color: "#336791",
  },
  {
    name: "Prometheus / Grafana",
    icon: <SiPrometheus />,
    message: `• Built monitoring dashboards for AI performance tracking
• Set up real-time alerting on inference latency and resource usage
• Integrated with Kubernetes for cluster-wide observability`,
    color: "#E6522C",
  },
];

// ===============
// TAB 2: AI & LLM EXPERTISE
// ===============
const aiExpertise = [
  {
    name: "Computer Vision",
    icon: <SiOpencv />,
    message: `• Developed object detection & face recognition models with YOLO, RetinaFace
• Used OpenCV for real-time image processing in AI applications
• Fine-tuned deep learning architectures for high-accuracy vision tasks`,
    color: "#5A5AFF",
  },
  {
    name: "LLMs & Transformer Models",
    icon: <SiPytorch />,
    message: `• Fine-tuned BERT, GPT, LLaMA for QA, summarization, and chatbots
• Optimized LLM inference with quantization & distillation techniques
• Deployed retrieval-augmented generation (RAG) systems for AI assistants`,
    color: "#EE4C2C",
  },
  {
    name: "NLP & RAG Systems",
    icon: <SiPytorch />,
    message: `• Built NLP pipelines for text classification, named entity recognition (NER)
• Integrated LlamaIndex & FAISS for semantic search in RAG architectures
• Tuned prompts and embeddings for domain-specific chatbots`,
    color: "#F44747",
  },
  {
    name: "Machine Learning",
    icon: <SiPython />,
    message: `• Built classification, regression, and anomaly detection models
• Used scikit-learn for ML pipelines and feature engineering
• Optimized hyperparameters and model selection with Optuna`,
    color: "#A020F0",
  },
  {
    name: "Vector Databases",
    icon: <SiDatabricks />,
    message: `• Powered retrieval-based AI with FAISS, Milvus, and Pinecone
• Implemented approximate nearest-neighbor search at billion-scale
• Optimized embedding search for high-speed response times`,
    color: "#FF6F00",
  },
  {
    name: "LLM Fine-Tuning & Optimization",
    icon: <SiPytorch />,
    message: `• Applied LoRA, QLoRA, and PEFT to fine-tune large LLMs efficiently
• Used quantization techniques to enable memory-efficient model deployment
• Tuned hyperparameters to maximize LLM accuracy with minimal compute`,
    color: "#EE4C2C",
  },
  {
    name: "Multimodal AI",
    icon: <SiKeras />,
    message: `• Integrated CLIP, BLIP, and SAM for vision-language applications
• Built AI models that process both text and images for richer insights
• Developed AI-powered content retrieval and annotation systems`,
    color: "#D00000",
  },
];

// ===============
// TAB 3: GROWTH & ADVANCED AREAS
// ===============
const additionalSkills = [
  {
    name: "Edge AI & Efficient Model Deployment",
    icon: <SiNvidia />,
    message: `• Optimized AI models for Jetson, Raspberry Pi, and mobile devices
• Used quantization, pruning, and TinyML for real-time inference
• Deployed low-power AI models for efficient edge computing`,
    color: "#76B900",
  },
  {
    name: "Distributed Training & HPC",
    icon: <SiNvidia />,
    message: `• Trained AI models using PyTorch Distributed, Horovod, and Ray
• Reduced training time via parallelized data loaders and sharding
• Used Kubernetes and Slurm for efficient multi-GPU resource scheduling`,
    color: "#76B900",
  },
  {
    name: "Advanced Vector Search & Optimization",
    icon: <SiDatabricks />,
    message: `• Tuned FAISS, Milvus, and Pinecone for high-speed embedding retrieval
• Implemented hybrid search (dense + sparse) for improved accuracy
• Benchmarked search latency on billion-scale vector datasets`,
    color: "#FF6F00",
  },
  {
    name: "Data Engineering & AI Pipelines",
    icon: <SiApachespark />,
    message: `• Built ETL/ELT workflows with Airflow, Prefect, and Kubeflow
• Ensured data lineage, versioning, and validation in ML pipelines
• Managed large-scale data streaming with Spark and Kafka`,
    color: "#ed5338",
  },
  {
    name: "AutoML & Hyperparameter Optimization",
    icon: <SiPython />,
    message: `• Used Optuna and Ray Tune for hyperparameter tuning and model selection
• Reduced training time via Bayesian optimization techniques
• Integrated AutoKeras for scalable AutoML experimentation`,
    color: "#795548",
  },
  {
    name: "LLM Evaluation & Benchmarking",
    icon: <SiPython />,
    message: `• Used HELLASWAG, MMLU, and TruthfulQA for model evaluation
• Measured hallucination rates and factual accuracy of LLM outputs
• Developed custom benchmarks for enterprise LLM deployment`,
    color: "#9C27B0",
  },
  {
    name: "Explainable AI & Bias Mitigation",
    icon: <SiPython />,
    message: `• Applied SHAP and LIME for AI model interpretability
• Ensured fairness with bias detection metrics like demographic parity
• Developed ethical AI pipelines for transparent decision-making`,
    color: "#795548",
  },
  {
    name: "Security & Adversarial AI",
    icon: <SiPython />,
    message: `• Researched adversarial attacks (FGSM, PGD) and robust defenses
• Prevented AI poisoning and model theft vulnerabilities
• Secured ML pipelines against adversarial perturbations`,
    color: "#9E9E9E",
  },
  {
    name: "Research & AI Innovation",
    icon: <SiPython />,
    message: `• Published AI research in arXiv, NeurIPS, and ICML
• Contributed to open-source AI libraries for industry adoption
• Adopted cutting-edge ML techniques for applied research projects`,
    color: "#673ab7",
  },
  {
    name: "Project Management & AI Roadmaps",
    icon: <SiPython />,
    message: `• Defined AI roadmaps aligned with business objectives
• Translated complex AI concepts for non-technical stakeholders
• Managed sprint planning and milestone tracking for AI projects`,
    color: "#607d8b",
  },
];

// ===============
// MAIN COMPONENT
// ===============
export default function SkillsSection() {
  const tabs = ["Tech Stack", "AI & LLM Expertise", "Growth & Advanced Areas"];
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [popoverPosition, setPopoverPosition] = useState<{
    position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
    maxHeight?: string;
    overflow?: string;
    width?: string;
    zIndex?: string;
  }>({});
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);

  let currentSkills: Skill[];
  if (activeTab === 0) currentSkills = techStack;
  else if (activeTab === 1) currentSkills = aiExpertise;
  else currentSkills = additionalSkills;

  // Check screen size on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Add click away listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedSkill && 
        containerRef.current && 
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedSkill(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedSkill]);
  
  // Add scroll event listener to close popover on significant scroll
  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll events on desktop
      if (!isMobile && selectedSkill) {
        const currentScrollY = window.scrollY;
        // If user scrolls more than 150px, close the popover
        if (Math.abs(currentScrollY - lastScrollY.current) > 200) {
          setSelectedSkill(null);
        }
      }
    };
    
    // Store initial scroll position when popover opens
    if (selectedSkill) {
      lastScrollY.current = window.scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [selectedSkill, isMobile]);

  // Calculate popover position to keep it in viewport
  const calculatePopoverPosition = (event: React.MouseEvent, elementRect: DOMRect): {
    position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
    maxHeight?: string;
    overflow?: string;
    width?: string;
    zIndex?: string;
  } => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // For mobile screens (under 768px), use a full screen modal approach
    if (isMobile) {
      return {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        transform: 'none',
        maxHeight: '100vh',
        overflow: 'auto',
        zIndex: '100'
      };
    }
    
    // For desktop, we'll use fixed positioning for more reliable placement
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const elementCenterX = elementRect.left + (elementRect.width / 2);
    
    // Calculate available space
    const spaceBelow = viewportHeight - elementRect.bottom;
    const spaceAbove = elementRect.top;
    
    // Set width based on viewport
    const popoverWidth = Math.min(400, viewportWidth - 40);
    
    // Default position below the element
    let position: {
      position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
      transform?: string;
      maxHeight?: string;
      overflow?: string;
      width?: string;
      zIndex?: string;
    } = { 
      position: 'fixed',
      top: `${elementRect.bottom + 10}px`,
      left: `${Math.max(20, Math.min(viewportWidth - popoverWidth - 20, elementCenterX - (popoverWidth / 2)))}px`,
      width: `${popoverWidth}px`,
      maxHeight: `${Math.min(450, spaceBelow - 20)}px`,
      overflow: 'auto'
    };
    
    // If not enough space below but enough space above, position above
    if (spaceBelow < 300 && spaceAbove > spaceBelow) {
      position = { 
        position: 'fixed',
        bottom: `${viewportHeight - elementRect.top + 10}px`,
        left: `${Math.max(20, Math.min(viewportWidth - popoverWidth - 20, elementCenterX - (popoverWidth / 2)))}px`,
        width: `${popoverWidth}px`,
        maxHeight: `${Math.min(450, spaceAbove - 20)}px`,
        overflow: 'auto'
      };
    }
    
    return position;
  };

  const handleSkillClick = (skill: Skill, event: React.MouseEvent) => {
    event.stopPropagation();
    
    // Get the position of the clicked element
    const element = event.currentTarget as HTMLElement;
    const rect = element.getBoundingClientRect();
    
    // Calculate optimal position
    const newPosition = calculatePopoverPosition(event, rect);
    setPopoverPosition(newPosition);
    
    // Toggle the selected skill
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
    
    // For mobile, prevent background scrolling when popover is open
    if (isMobile && skill && selectedSkill?.name !== skill.name) {
      document.body.style.overflow = 'hidden';
    } else if (isMobile) {
      document.body.style.overflow = '';
    }
  };
  
  // Reset body overflow when skill is deselected
  useEffect(() => {
    if (!selectedSkill && isMobile) {
      document.body.style.overflow = '';
    }
  }, [selectedSkill, isMobile]);

  // Render mobile popover
  const renderMobilePopover = (skill: Skill) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Header with back button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span 
            className="text-3xl"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </span>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {skill.name}
          </h3>
        </div>
        <button
          onClick={() => {
            setSelectedSkill(null);
            document.body.style.overflow = '';
          }}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Close skill details"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {skill.message.split('\n').map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div 
                className="p-4 rounded-lg bg-gray-50/80 dark:bg-gray-800/60
                border border-gray-100 dark:border-gray-700/50
                hover:bg-gray-100/80 dark:hover:bg-gray-800/80
                transition-colors duration-300"
              >
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {line.replace('• ', '')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  // Render desktop popover
  const renderDesktopPopover = (skill: Skill) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={popoverPosition}
      className="
        z-50
        bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)]
        dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)]
        border border-gray-200 dark:border-gray-800
        rounded-xl shadow-lg
        p-6
        backdrop-blur-sm
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header with icon and close button */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span 
            className="text-3xl transition-transform duration-300 hover:scale-110"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </span>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {skill.name}
          </h3>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSelectedSkill(null);
          }}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          aria-label="Close skill details"
        >
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content with modern styling */}
      <div className="space-y-3 overflow-y-auto max-h-[350px]">
        {skill.message.split('\n').map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div 
              className="p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800/30
              border border-gray-100 dark:border-gray-700/50
              hover:bg-gray-100/50 dark:hover:bg-gray-800/50
              transition-colors duration-300 min-h-[60px] flex items-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {line.replace('• ', '')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Scroll hint */}
      <div className="mt-4 text-center">
        <span className="text-xs text-gray-400 dark:text-gray-500">Scroll down to dismiss</span>
      </div>

      {/* Bottom decoration */}
      <div 
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full opacity-20"
        style={{ backgroundColor: skill.color }}
      />
    </motion.div>
  );

  const renderSkills = (skills: Skill[]) => (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mx-auto">
      {skills.map((skill) => {
        const isSelected = selectedSkill?.name === skill.name;
        
        return (
          <div key={skill.name} className="relative group">
            {/* Main Card */}
            <div
              className={`
                bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)]
                dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)]
                border border-gray-200 dark:border-gray-800
                rounded-xl p-4
                transition-all duration-300
                cursor-pointer
                hover:border-gray-300 dark:hover:border-gray-700
                hover:shadow-lg dark:hover:shadow-gray-900/20
                h-[100px] flex flex-col justify-center
                ${isSelected ? 'border-blue-500 dark:border-blue-500 ring-2 ring-blue-500/20' : ''}
              `}
              onClick={(e) => handleSkillClick(skill, e)}
            >
              <div className="flex flex-col items-center gap-2">
                <span 
                  className="text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </span>
                <h3 className="text-sm font-medium bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent text-center line-clamp-2">
                  {skill.name}
                </h3>
              </div>
            </div>

            {/* Tooltip/Popover with Dynamic Positioning */}
            <AnimatePresence>
              {isSelected && (
                <>
                  {isMobile 
                    ? renderMobilePopover(skill)
                    : renderDesktopPopover(skill)
                  }
                </>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-[#020b14] dark:to-[#010913]">
      <div className="relative mb-16 text-center">
        <motion.h2
          className="text-7xl font-extrabold text-gray-200 dark:text-gray-800 absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
        >
          SKILLS
        </motion.h2>

        <motion.div
          className="relative space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Tabs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(index);
                setSelectedSkill(null);
              }}
              className={`
                px-6 py-2 rounded-full text-sm md:text-base
                transition-all duration-300
                ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-purple-500/20"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="relative">
          {renderSkills(currentSkills)}
        </div>
      </div>
    </section>
  );
}
