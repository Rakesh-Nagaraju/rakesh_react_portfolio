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

  let currentSkills: Skill[];
  if (activeTab === 0) currentSkills = techStack;
  else if (activeTab === 1) currentSkills = aiExpertise;
  else currentSkills = additionalSkills;

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

  const handleSkillClick = (skill: Skill, event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
  };

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

            {/* Tooltip/Popover */}
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={`
                    absolute z-50 left-0 right-0 mt-2
                    bg-[linear-gradient(210deg,_#f4f6fbbd_0%,_#fff_48%)]
                    dark:bg-[linear-gradient(210deg,_#1d232c_0%,_#06090f_48%)]
                    border border-gray-200 dark:border-gray-800
                    rounded-xl shadow-lg
                    p-6
                    min-w-[320px] max-w-md
                    transform origin-top
                  `}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Tooltip Arrow */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                    <div className="border-8 border-transparent border-b-[#f4f6fbbd] dark:border-b-[#1d232c]" />
                  </div>

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
                    >
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Content with modern styling */}
                  <div className="space-y-3">
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
                          transition-colors duration-300 h-[60px] flex items-center"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                            {line.replace('• ', '')}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom decoration */}
                  <div 
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full opacity-20"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
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
