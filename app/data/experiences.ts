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
  }
  

/* Experience Data */
const experiences = [
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