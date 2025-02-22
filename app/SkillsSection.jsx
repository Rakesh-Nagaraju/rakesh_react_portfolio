"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  SiApachekafka,
  SiMlflow,
  SiGithub,
  SiLinux,
  SiDatabricks,
  SiPrometheus,
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
    message: `• 6+ years building automation scripts, data pipelines, and reliable backend APIs
• Leveraged libraries (NumPy, Pandas, SciPy) to expedite AI/ML workflows
• Created modular, testable code with Pytest integration for high coverage
• Automated deployment tasks using shell scripts and CI/CD tooling`,
    color: "#3776AB",
  },
  {
    name: "Node.js & Microservices",
    icon: <SiNodedotjs />,
    message: `• Architected scalable backend services handling real-time data streams
• Utilized Express.js, gRPC, or WebSockets for low-latency APIs
• Ensured maintainable codebases via ESLint, Jest, and separation of concerns
• Deployed microservices to Docker/K8s clusters for easy scaling`,
    color: "#339933",
  },
  {
    name: "React",
    icon: <SiReact />,
    message: `• 3+ years building interactive, data-driven dashboards with real-time updates
• Created custom hooks to simplify state management in complex UIs
• Employed Next.js for SSR/SSG, improving SEO and load performance
• Collaborated with designers to achieve pixel-perfect, responsive layouts`,
    color: "#61DAFB",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    message: `• Containerized apps for consistent dev/prod environments across teams
• Automated multi-stage builds in CI pipelines, speeding up release cycles
• Minimized overhead by building lean custom images
• Deployed Docker containers on AWS, GCP, and on-prem Kubernetes`,
    color: "#0db7ed",
  },
  {
    name: "Django",
    icon: <SiDjango />,
    message: `• 5+ years creating large-scale web apps with ORM and robust auth flows
• Leveraged Django Admin for rapid data management and prototyping
• Ensured maintainable architecture with a clean, modular code structure
• Optimized performance using Redis-based caching and DB indexing`,
    color: "#092E20",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi />,
    message: `• Developed async, high-throughput REST APIs for ML model serving
• Employed Python type hints, generating interactive docs (OpenAPI)
• Achieved low-latency inference under heavy concurrency loads
• Successfully integrated OAuth2 for secure, token-based access`,
    color: "#009688",
  },
  {
    name: "Kafka / RabbitMQ",
    icon: <SiApachekafka />, // or SiRabbitmq
    message: `• Implemented event-driven pipelines for real-time data processing
• Handled large-scale message throughput with robust fault tolerance
• Orchestrated consumer groups for balanced load distribution
• Integrated with microservices to ensure reliable asynchronous communication`,
    color: "#231F20",
  },
  {
    name: "Terraform",
    icon: <SiTerraform />,
    message: `• Employed Infrastructure as Code (IaC) for repeatable cloud provisioning
• Automated resource creation (VPCs, EC2, S3) with version-controlled configs
• Minimized drift by enforcing remote state and consistent deployment patterns
• Reduced manual overhead, enabling rapid multi-environment spins`,
    color: "#844FBA",
  },
  {
    name: "Airflow (Orchestration)",
    icon: <SiApachespark />, // placeholder icon
    message: `• Scheduled complex ETL/ELT pipelines with DAGs for reliable data flows
• Created dynamic tasks for robust data ingestion and transformation
• Monitored real-time progress, rerunning failed tasks to ensure data consistency
• Automated dependency management across multi-stage ML pipelines`,
    color: "#ed5338",
  },
  {
    name: "MLflow",
    icon: <SiMlflow />,
    message: `• Centralized experiment tracking, model versioning, and deployment records
• Standardized metric logging and artifact storage across teams
• Facilitated easy rollbacks with clear model lineage and history
• Seamlessly integrated with CI/CD to automate model packaging`,
    color: "#01579B",
  },
  {
    name: "GitHub / GitLab",
    icon: <SiGithub />,
    message: `• 5+ years managing code reviews, branching strategies, and CI/CD pipelines
• Automated Docker image builds, testing, and artifact deployments
• Coordinated PR-based workflows ensuring thorough peer code reviews
• Leveraged GitLab CI/CD to unify dev, test, and deploy stages`,
    color: "#6e5494",
  },
  {
    name: "Linux",
    icon: <SiLinux />,
    message: `• 6+ years administering production servers for AI tasks
• Automated repetitive tasks using shell scripting & cron jobs
• Debugged performance bottlenecks and optimized resource usage
• Deployed secure environments (SSH, firewall, SELinux) in enterprise settings`,
    color: "#000000",
  },
  {
    name: "Testing & Quality",
    icon: <SiPython />, // placeholder
    message: `• Implemented unit/integration tests (Pytest, Jest) to detect regressions early
• Ensured >80% coverage in CI/CD for stable, maintainable code
• Enforced static analysis (ESLint, Flake8) for style and error checks
• Wrote regression test suites for model performance & data integrity`,
    color: "#9C27B0",
  },
  {
    name: "Monitoring & Observability",
    icon: <SiPrometheus />,
    message: `• Established Prometheus/Grafana dashboards for real-time alerting
• Tracked app metrics (CPU, mem, inference latency) to spot anomalies
• Deployed logs and events to ELK stacks for in-depth troubleshooting
• Ensured SLO/SLAs by setting up automated alerts & escalations`,
    color: "#E6522C",
  },
  {
    name: "Cloud / Hosting (AWS, GCP, etc.)",
    icon: <SiAmazon />,
    message: `• 4+ years deploying AI services on EC2, S3, Lambda, GCP Compute
• Scaled horizontally with auto-scaling groups under unpredictable loads
• Stored large training datasets on S3/GS, integrated with ML pipelines
• Leveraged managed solutions (SageMaker, Vertex AI) for model hosting`,
    color: "#FF9900",
  },
];

// ===============
// TAB 2: AI & LLM EXPERTISE
// ===============
const aiExpertise = [
  {
    name: "Machine Learning",
    icon: <SiPython />,
    message: `• 5+ years building classification, regression, anomaly detection pipelines
• Optimized model performance with feature engineering and hyperparameter tuning
• Integrated scikit-learn models into REST/GraphQL endpoints
• Presented results via data visualization and iterative evaluation`,
    color: "#A020F0",
  },
  {
    name: "Deep Learning",
    icon: <SiTensorflow />,
    message: `• 4+ years architecting CNNs, RNNs for vision and sequence tasks
• Leveraged GPU acceleration (CUDA) and mixed precision for speed
• Tuned advanced architectures (ResNet, Inception) for domain-specific datasets
• Handled large data pipelines with real-time augmentation`,
    color: "#FF6F00",
  },
  {
    name: "Transformer / LLMs",
    icon: <SiPytorch />,
    message: `• Fine-tuned BERT, GPT, T5, Llama for QA, summarization, domain-specific chat
• Employed RAG workflows (LlamaIndex, Milvus) for context-driven responses
• Deployed advanced parameter-efficient tuning (LoRA, QLoRA) to save memory
• Achieved lower latency with model distillation and quantization`,
    color: "#EE4C2C",
  },
  {
    name: "Computer Vision",
    icon: <SiKeras />,
    message: `• Deployed YOLO (v3, v4, v8), RetinaFace for real-time object/face detection
• Fine-tuned VGGFace-based classifiers on custom datasets, boosting accuracy
• Utilized batching/quantization for near real-time inference speeds
• Tracked improvements using MLflow for each new model iteration`,
    color: "#D00000",
  },
  {
    name: "NLP",
    icon: <SiPytorch />,
    message: `• Built advanced pipelines for NER, text classification, sentiment analysis
• Adapted Hugging Face Transformers to handle domain-specific language
• Deployed RAG chatbots via Chainlit for interactive internal document Q&A
• Monitored performance (F1, BLEU, ROUGE) to refine NLP models`,
    color: "#F44747",
  },
  {
    name: "Generative AI",
    icon: <SiTensorflow />,
    message: `• Created synthetic datasets using GANs/VAEs to enrich limited training data
• Integrated CLIP, BLIP, SAM for multimodal text/image generation tasks
• Leveraged diffusion models (e.g., Stable Diffusion) for creative solutions
• Validated outputs for quality, bias, and domain alignment`,
    color: "#FF6F00",
  },
  {
    name: "Reinforcement Learning",
    icon: <SiNvidia />,
    message: `• Trained agents in simulator environments optimizing continuous control
• Explored policy gradients (PPO) and Q-learning for complex tasks
• Fine-tuned reward shaping to hasten convergence and stable performance
• Deployed RL-based solutions for real-time decision-making in production`,
    color: "#76B900",
  },
  {
    name: "MLOps",
    icon: <SiPython />, // placeholder
    message: `• Established automated pipelines for data collection, model retraining, and deployment
• Handled model versioning with MLflow and tracked drift in production
• Integrated tests ensuring reproducible results and consistent performance
• Coordinated with DevOps to unify code, data, and model release cycles`,
    color: "#01579B",
  },
  {
    name: "Edge AI",
    icon: <SiNvidia />,
    message: `• Optimized YOLO for embedded devices with quantization/pruning
• Deployed MobileNet-based classifiers for on-device inference (Jetson, RasPi)
• Achieved near real-time speeds with minimal resource footprints
• Balanced performance vs. accuracy via hardware-software co-optimization`,
    color: "#76B900",
  },
  {
    name: "Chainlit & RAG",
    icon: <SiPython />, // placeholder
    message: `• Built interactive chat UIs that query large LLMs with context from vector DBs
• Combined dense (Milvus) and sparse (BM25) retrieval to boost response accuracy
• Tuned prompts and indexing strategies to handle domain-specific corpora
• Collected user queries to further refine fine-tuned LLM performance`,
    color: "#800080",
  },
  {
    name: "Vector Databases (FAISS, Milvus, Pinecone)",
    icon: <SiDatabricks />, // placeholder
    message: `• Powered retrieval-based chatbots with large embedding collections
• Implemented approximate nearest-neighbor search for high-scale vector data
• Ensured minimal downtime with incremental indexing and replication
• Configured advanced distance metrics for specialized similarity needs`,
    color: "#FF6F00",
  },
  {
    name: "Fine-Tuning & Parameter-Efficient Methods",
    icon: <SiPytorch />,
    message: `• Utilized LoRA, Adapters, and QLoRA to tune giant LLMs with minimal overhead
• Applied domain adaptation for specialized tasks without full retraining
• Explored various optimization strategies to preserve model quality
• Documented best practices for memory-limited environments`,
    color: "#EE4C2C",
  },
  {
    name: "Multimodal AI",
    icon: <SiKeras />,
    message: `• Integrated CLIP, BLIP, SAM for vision-language applications
• Achieved image captioning, cross-modal retrieval, and segmentation
• Combined text and image features to build advanced search experiences
• Validated pipelines on diverse datasets for broad generalization`,
    color: "#D00000",
  },
  {
    name: "Large-Scale / Distributed Model Deployment",
    icon: <SiTensorflow />,
    message: `• Explored DeepSpeed, FSDP, and data parallelism to handle massive LLMs
• Deployed multi-GPU setups with balanced load distribution
• Minimized latency by sharding models and caching frequently used layers
• Monitored cluster performance, optimizing memory and network usage`,
    color: "#FF6F00",
  },
];

// ===============
// TAB 3: GROWTH & ADVANCED AREAS
// ===============
const additionalSkills = [
  {
    name: "HPC & Distributed Training",
    icon: <SiNvidia />,
    message: `• Leveraged PyTorch Distributed, Horovod, or Ray for multi-GPU/cluster training
• Reduced training time via parallel data loaders and model partitioning
• Utilized Kubernetes/Slurm for resource scheduling at scale
• Tuned HPC usage (MPI, NCCL) for cost-efficient experimentation`,
    color: "#76B900",
  },
  {
    name: "Data Engineering & Pipeline Orchestration",
    icon: <SiApachespark />,
    message: `• Built multi-stage ETL/ELT workflows with Airflow, Prefect, or Kubeflow
• Ensured data versioning, lineage, and validation for robust ML pipelines
• Automated complex transformations for batch/streaming data
• Maintained data quality checks preventing corrupted datasets in production`,
    color: "#ed5338",
  },
  {
    name: "Data Governance & Compliance",
    icon: <SiPython />, // placeholder
    message: `• Aligned AI pipelines with GDPR/CCPA for ethical data handling
• Employed encryption/anonymization to safeguard PII
• Documented data sources, transformations, and usage policies
• Collaborated with legal teams to mitigate regulatory risks`,
    color: "#9C27B0",
  },
  {
    name: "Ethical AI & Bias Mitigation",
    icon: <SiPython />,
    message: `• Implemented metrics (demographic parity, equal opportunity) to detect bias
• Employed interpretability tools (SHAP, LIME) for transparent model decisions
• Curated inclusive training datasets reflecting real-world diversity
• Advocated for accountability and fairness in ML across teams`,
    color: "#795548",
  },
  {
    name: "Advanced Mathematics & Statistics",
    icon: <SiPython />,
    message: `• Mastered linear algebra, optimization, probability for rigorous model design
• Analyzed model performance trade-offs with advanced statistical testing
• Confidently tackled novel research papers and cutting-edge techniques
• Communicated complex math concepts effectively to cross-functional teams`,
    color: "#3f51b5",
  },
  {
    name: "Spark / Big Data Ecosystems",
    icon: <SiApachespark />,
    message: `• Processed TB-scale data with Spark, Hadoop, or Databricks
• Implemented distributed feature engineering at scale
• Integrated streaming analytics (Spark Streaming, Kafka) for real-time insights
• Optimized cluster resource usage, lowering operational overhead`,
    color: "#ed5338",
  },
  {
    name: "LLM Fine-Tuning Best Practices",
    icon: <SiPytorch />,
    message: `• Systematically tuned hyperparameters for large-scale LLM tasks
• Explored knowledge distillation to reduce model footprints
• Experimented with advanced optimizers (AdamW, Adafactor) for stable training
• Maintained reproducible runs with strict versioning of code/data`,
    color: "#EE4C2C",
  },
  {
    name: "Memory Optimization for Large Models",
    icon: <SiTensorflow />,
    message: `• Leveraged techniques (Tensor/Activation Checkpointing, Flash Attention)
• Deployed quantized and pruned models to reduce GPU/CPU usage
• Explored GPU memory fragmentation solutions for seamless training
• Balanced speed and accuracy under strict hardware constraints`,
    color: "#FF6F00",
  },
  {
    name: "Serverless AI",
    icon: <SiAmazon />, // placeholder
    message: `• Packaged inference endpoints as serverless functions (AWS Lambda, Cloud Functions)
• Scaled automatically under bursty traffic with pay-per-invocation pricing
• Integrated ephemeral compute layers with secure data sources
• Minimized operational overhead, focusing on model quality`,
    color: "#FF9900",
  },
  {
    name: "AutoML & Hyperparameter Search",
    icon: <SiPython />,
    message: `• Conducted automatic model selection with frameworks like AutoKeras
• Leveraged Optuna, Ray Tune for intelligent hyperparameter sweeps
• Reduced dev time by systematically exploring model variants
• Combined with CI/CD to automatically tune models on new data`,
    color: "#795548",
  },
  {
    name: "Advanced Vector Search Optimization",
    icon: <SiDatabricks />,
    message: `• Explored index compression, re-ranking, hybrid approaches for large-scale embedding retrieval
• Tuned Faiss parameters for recall-latency trade-offs
• Balanced memory usage with efficient indexes and inverted files
• Benchmarked search latency on billion-scale embedding corpora`,
    color: "#FF6F00",
  },
  {
    name: "LLM Evaluation Metrics & Benchmarking",
    icon: <SiPython />,
    message: `• Incorporated HELLASWAG, MMLU, and TruthfulQA for thorough LLM performance tests
• Used knowledge-intensive tasks to measure factual recall and reasoning
• Tracked improvements or regressions across LLM versions
• Communicated benchmark scores to stakeholders for model acceptance`,
    color: "#9C27B0",
  },
  {
    name: "Project Management & Stakeholder Communication",
    icon: <SiPython />,
    message: `• Aligned AI roadmaps with business goals to ensure measurable ROI
• Translated technical progress for non-technical teams, bridging knowledge gaps
• Planned sprints, estimates, and cross-functional collaborations
• Collected user feedback and delivered iterative demos for early validation`,
    color: "#607d8b",
  },
  {
    name: "Research & Publication",
    icon: <SiPython />,
    message: `• Stayed current with cutting-edge journals (arXiv, NeurIPS, ICML)
• Conducted novel experiments, publishing findings in internal or public mediums
• Contributed to open-source AI libraries for broader community impact
• Adopted best practices from the academic sphere into production pipelines`,
    color: "#673ab7",
  },
  {
    name: "Security & Adversarial AI",
    icon: <SiPython />,
    message: `• Analyzed adversarial attacks (FGSM, PGD) and developed robust defenses
• Prevented data poisoning and model reverse-engineering vulnerabilities
• Integrated secure coding and scanning into ML CI/CD pipelines
• Ensured tamper-proof deployments with encryption and access controls`,
    color: "#9e9e9e",
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

  // State to handle active tab and selected skill
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [selectedSkill, setSelectedSkill] = useState(techStack[0]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [debouncedHoveredSkill, setDebouncedHoveredSkill] = useState(null);
  const [focusedSkill, setFocusedSkill] = useState(null);

  // Figure out which set of skills to display based on tab
  let currentSkills;
  if (activeTab === "Tech Stack") {
    currentSkills = techStack;
  } else if (activeTab === "AI & LLM Expertise") {
    currentSkills = aiExpertise;
  } else {
    currentSkills = additionalSkills;
  }

  // Sync selectedSkill to the first skill in the array whenever the tab changes
  useEffect(() => {
    if (currentSkills.length > 0) {
      setSelectedSkill(currentSkills[0]);
    } else {
      setSelectedSkill(null);
    }
  }, [activeTab, currentSkills]);

  // Debounce hoveredSkill to reduce rapid state changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedHoveredSkill(hoveredSkill);
    }, 100);
    return () => clearTimeout(handler);
  }, [hoveredSkill]);

  const renderSkills = (skills) => (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => {
        const isHovered = debouncedHoveredSkill?.name === skill.name;
        const isFocused = focusedSkill?.name === skill.name;
        const isSelected = selectedSkill?.name === skill.name;

        // Determine if any skill is hovered
        const isAnyHovered = debouncedHoveredSkill !== null;

        // Icon color logic
        const iconColor = isAnyHovered
          ? isHovered
            ? skill.color
            : "#6B7280" // gray if another skill is hovered
          : isSelected
          ? skill.color
          : "#6B7280"; // default gray if none hovered/selected

        // Scale logic
        const shouldScale = isHovered || isFocused || (isSelected && !isAnyHovered);

        // Bold text if hovered or selected
        const shouldBold = isSelected || isHovered;

        // Enhanced shadow if hovered or focused
        const shouldEnhanceShadow = isHovered || isFocused;

        return (
          <motion.button
            key={skill.name}
            onClick={() => setSelectedSkill(skill)}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            onFocus={() => setFocusedSkill(skill)}
            onBlur={() => setFocusedSkill(null)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedSkill(skill);
              }
            }}
            animate={{ scale: shouldScale ? 1.1 : 1 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center px-4 py-2
              bg-[#f9fafb] dark:bg-gray-800
              text-black dark:text-white
              rounded-full
              cursor-pointer
              transition-transform
              transition-shadow
              ${shouldBold ? "font-semibold" : ""}
              ${shouldEnhanceShadow ? "shadow-lg" : "shadow-sm"}
            `}
            aria-label={skill.name}
            title={`Learn more about ${skill.name}`}
            tabIndex={0}
          >
            <span
              className="mr-2 text-xl transition-colors"
              style={{ color: iconColor }}
            >
              {skill.icon}
            </span>
            {skill.name}
          </motion.button>
        );
      })}
    </div>
  );

  return (
    <section
      id="skills"
      className="pt-5 mt-[106px] pb-20 px-4
                 bg-white dark:bg-black
                 flex flex-col "
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <h3 className="text-gray-300 text-xl md:text-4xl mb-12">
          Skills & Expertise
        </h3>

        {/* Tabs */}
        <div className="flex justify-center mb-[55px] flex-wrap gap-2">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedSkill(currentSkills[0]);
                setFocusedSkill(null);
                setHoveredSkill(null);
              }}
              className={`
                px-6 py-2 rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                transition-transform
                flex items-center
                ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }
              `}
              aria-label={`Show ${tab}`}
              whileHover={{
                boxShadow:
                  activeTab === tab
                    ? "0px 6px 20px rgba(0, 0, 0, 0.3)"
                    : "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col items-center flex-grow min-h-[75px]">
          {renderSkills(currentSkills)}
        </div>

        {/* Selected Skill Message (2-column layout) */}
        <div className="items-stretch min-w-[100px] mt-8 min-h-[50px] flex items-center justify-center">
          <motion.div
            key={(debouncedHoveredSkill || selectedSkill)?.name || "empty"}
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="max-w-3xl w-full min-h-[250px] px-4 py-4
                       text-gray-600 dark:text-gray-300
                       rounded"
          >
            {/* Responsive 2-column grid: single column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-full leading-[35px] tracking-[1.0px]">
              {/* Icon Column */}
              <div className="flex items-center justify-center">
                {debouncedHoveredSkill || selectedSkill ? (
                  <span
                    className="text-6xl"
                    style={{
                      color: (debouncedHoveredSkill || selectedSkill)?.color,
                    }}
                  >
                    {(debouncedHoveredSkill || selectedSkill)?.icon}
                  </span>
                ) : null}
              </div>

              {/* Content Column */}
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
      </div>
    </section>
  );
}
