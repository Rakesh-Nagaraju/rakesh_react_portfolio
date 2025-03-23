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
  
