"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiDocker,
  SiDjango,
  SiFastapi,
  SiApachespark,
  SiTerraform,
  SiMongodb,
  SiRabbitmq,
  SiOpencv,
  SiApachekafka,
  SiMlflow,
  SiGithub,
  SiLinux,
  SiDatabricks,
  SiPrometheus,
  SiPostgresql,
  SiAmazon, // placeholder for AWS
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiNvidia,
} from "react-icons/si";

// ===============
// TAB 1: TECH STACK (E2E DEVELOPMENT)
// ===============
const techStack = [
  {
    name: "Python",
    icon: <SiPython />,
    message: `• 6+ years developing AI applications and scalable APIs
• Built automation scripts, ETL pipelines, and backend services
• Used NumPy, Pandas, and SciPy for ML/data engineering`,
    color: "#3776AB",
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
    name: "Docker / Kubernetes",
    icon: <SiDocker />,
    message: `• Deployed AI models with containerization and orchestration
• Created reproducible dev/prod environments with Docker Compose
• Scaled workloads using Kubernetes and Helm charts`,
    color: "#0db7ed",
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
    name: "AWS / GCP",
    icon: <SiAmazon />,
    message: `• Deployed AI services on AWS (S3, Lambda, EC2, SageMaker)
• Managed scalable data pipelines using GCP's Vertex AI
• Used Terraform for Infrastructure as Code (IaC) automation`,
    color: "#FF9900",
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
    name: "Prometheus / Grafana",
    icon: <SiPrometheus />,
    message: `• Built monitoring dashboards for AI performance tracking
• Set up real-time alerting on inference latency and resource usage
• Integrated with Kubernetes for cluster-wide observability`,
    color: "#E6522C",
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
    name: "Training & Fine-Tuning (PyTorch / TensorFlow)",
    icon: <SiPytorch />,
    message: `• Trained deep learning models using PyTorch & TensorFlow/Keras
• Fine-tuned LLMs (BERT, LLaMA, T5) with LoRA & QLoRA
• Used mixed precision training and DeepSpeed for large-scale models`,
    color: "#EE4C2C",
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
    name: "Model Optimization & Deployment",
    icon: <SiTensorflow />,
    message: `• Optimized AI models using quantization and pruning techniques
• Deployed models using TensorRT, ONNX, and TFLite for inference acceleration
• Configured multi-GPU setups for high-throughput AI inference`,
    color: "#FF6F00",
  },
];

// ===============
// TAB 2: AI & LLM EXPERTISE
// ===============
const aiExpertise = [
  {
    name: "Machine Learning",
    icon: <SiPython />,
    message: `• Built classification, regression, and anomaly detection models
• Used scikit-learn for ML pipelines and feature engineering
• Optimized hyperparameters and model selection with Optuna`,
    color: "#A020F0",
  },
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
    name: "Multimodal AI",
    icon: <SiKeras />,
    message: `• Integrated CLIP, BLIP, and SAM for vision-language applications
• Built AI models that process both text and images for richer insights
• Developed AI-powered content retrieval and annotation systems`,
    color: "#D00000",
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
];

// ===============
// TAB 3: GROWTH & ADVANCED AREAS
// ===============
const additionalSkills = [
  {
    name: "AutoML & Hyperparameter Optimization",
    icon: <SiPython />,
    message: `• Used Optuna and Ray Tune for hyperparameter tuning and model selection
• Reduced training time via Bayesian optimization techniques
• Integrated AutoKeras for scalable AutoML experimentation`,
    color: "#795548",
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
    name: "Data Engineering & AI Pipelines",
    icon: <SiApachespark />,
    message: `• Built ETL/ELT workflows with Airflow, Prefect, and Kubeflow
• Ensured data lineage, versioning, and validation in ML pipelines
• Managed large-scale data streaming with Spark and Kafka`,
    color: "#ed5338",
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
    name: "Advanced Vector Search & Optimization",
    icon: <SiDatabricks />,
    message: `• Tuned FAISS, Milvus, and Pinecone for high-speed embedding retrieval
• Implemented hybrid search (dense + sparse) for improved accuracy
• Benchmarked search latency on billion-scale vector datasets`,
    color: "#FF6F00",
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
    name: "Project Management & AI Roadmaps",
    icon: <SiPython />,
    message: `• Defined AI roadmaps aligned with business objectives
• Translated complex AI concepts for non-technical stakeholders
• Managed sprint planning and milestone tracking for AI projects`,
    color: "#607d8b",
  },
  {
    name: "Research & AI Innovation",
    icon: <SiPython />,
    message: `• Published AI research in arXiv, NeurIPS, and ICML
• Contributed to open-source AI libraries for industry adoption
• Adopted cutting-edge ML techniques for applied research projects`,
    color: "#673ab7",
  },
];

// ===============
// FRAMER MOTION ANIMATIONS
// ===============
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const messageVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

// ===============
// MAIN COMPONENT
// ===============
export default function SkillsSection() {
  const tabs = ["Tech Stack", "AI & LLM Expertise", "Growth & Advanced Areas"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedSkill, setSelectedSkill] = useState(techStack[0]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [debouncedHoveredSkill, setDebouncedHoveredSkill] = useState(null);
  const [focusedSkill, setFocusedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // For mobile, use a popover instead of inline content.
  const [showPopover, setShowPopover] = useState(false);
  // Create a ref for the big tabs container.
  const tabsRef = useRef(null);

  let currentSkills;
  if (activeTab === "Tech Stack") currentSkills = techStack;
  else if (activeTab === "AI & LLM Expertise") currentSkills = aiExpertise;
  else currentSkills = additionalSkills;

  useEffect(() => {
    if (currentSkills.length > 0) setSelectedSkill(currentSkills[0]);
    else setSelectedSkill(null);
  }, [activeTab, currentSkills]);

  useEffect(() => {
    if (isMobile) {
      setDebouncedHoveredSkill(null);
      return;
    }
    const handler = setTimeout(() => setDebouncedHoveredSkill(hoveredSkill), 100);
    return () => clearTimeout(handler);
  }, [hoveredSkill, isMobile]);

  const renderSkills = (skills) => (
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill) => {
        const isHovered = debouncedHoveredSkill?.name === skill.name;
        const isFocused = focusedSkill?.name === skill.name;
        const isSelected = selectedSkill?.name === skill.name;
        const isAnyHovered = debouncedHoveredSkill !== null;
        const iconColor = isAnyHovered
          ? isHovered
            ? skill.color
            : "#6B7280"
          : isSelected
          ? skill.color
          : "#6B7280";
        const shouldScale = isHovered || isFocused || (isSelected && !isAnyHovered);
        return (
          <motion.button
            key={skill.name}
            onClick={() => {
              setSelectedSkill(skill);
              if (isMobile) setShowPopover(true);
            }}
            onMouseEnter={() => { if (!isMobile) setHoveredSkill(skill); }}
            onMouseLeave={() => { if (!isMobile) setHoveredSkill(null); }}
            onFocus={() => { if (!isMobile) setFocusedSkill(skill); }}
            onBlur={() => { if (!isMobile) setFocusedSkill(null); }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedSkill(skill);
                if (isMobile) setShowPopover(true);
              }
            }}
            animate={{ scale: shouldScale ? 1.1 : 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center px-2 py-1 bg-[#f9fafb] dark:bg-gray-800 text-black dark:text-white rounded-full cursor-pointer transition-transform transition-shadow text-[0.9rem]"
            aria-label={skill.name}
            title={`Learn more about ${skill.name}`}
            tabIndex={0}
          >
            <span className="mr-2 text-lg transition-colors" style={{ color: iconColor }}>
              {skill.icon}
            </span>
            {skill.name}
          </motion.button>
        );
      })}
    </div>
  );

  return (
    <section id="skills" className="pt-5 mt-[100px] pb-20 px-4 bg-white dark:bg-black flex flex-col">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="text-gray-300 text-3xl md:text-4xl mb-[63px]">Skills & Expertise</h3>
        {/* Big Tabs Container with ref */}
        <div ref={tabsRef} className={`z-49 flex justify-center mb-[55px] flex-wrap gap-5`}> {/* ${isMobile ? "sticky top-10 bg-white dark:bg-black py-4" : ""}`} */}
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedSkill(currentSkills[0]);
                setFocusedSkill(null);
                setHoveredSkill(null);
                if (isMobile && tabsRef.current) {
                  const yOffset = -90; // adjust offset (negative means 50px above the element)
                  const y = tabsRef.current.getBoundingClientRect().top + scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`px-6 py-2 rounded-full focus:outline-none transition-transform flex items-center ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              aria-label={`Show ${tab}`}
              whileHover={!isMobile ? {
                boxShadow: activeTab === tab ? "0px 6px 20px rgba(0, 0, 0, 0.3)" : "0px 4px 15px rgba(0, 0, 0, 0.2)",
              } : {}}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
        <div className="flex flex-col items-center flex-grow min-h-[75px]">
          {renderSkills(currentSkills)}
        </div>
        {/* Inline content for medium/large screens */}
        {!isMobile && (
          <div className="items-stretch min-w-[100px] mt-8 min-h-[50px] flex items-center justify-center">
            <motion.div
              key={(debouncedHoveredSkill || selectedSkill)?.name || "empty"}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="max-w-3xl w-full min-h-[250px] px-4 py-4 text-gray-600 dark:text-gray-300 rounded"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full leading-[35px] tracking-[1.0px]">
                <div className="flex items-center justify-center">
                  {debouncedHoveredSkill || selectedSkill ? (
                    <span className="text-6xl" style={{ color: (debouncedHoveredSkill || selectedSkill)?.color }}>
                      {(debouncedHoveredSkill || selectedSkill)?.icon}
                    </span>
                  ) : null}
                </div>
                <div className="flex items-center md:text-left text-center whitespace-pre-line">
                  {debouncedHoveredSkill
                    ? debouncedHoveredSkill.message
                    : selectedSkill
                    ? selectedSkill.message
                    : ""}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      {/* Popover for mobile */}
      <AnimatePresence>
        {isMobile && showPopover && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-49 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-black p-6 rounded shadow-lg max-w-md w-full"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold" style={{ color: selectedSkill?.color }}>
                  {selectedSkill?.icon} {selectedSkill?.name}
                </span>
                <button
                  onClick={() => {
                    setShowPopover(false);
                    // Removed clearing selectedSkill so the tab remains active.
                  }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  ✕
                </button>
              </div>
              <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {selectedSkill?.message}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
