
export interface SyllabusModule {
  title: string;
  description: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: 'ML' | 'DS' | 'Python' | 'Web' | 'Other';
  image: string;
}

export interface InternshipConfig {
  id: string;
  title: string;
  subtitle: string;
  rating: number;
  reviews: number;
  duration: string;
  syllabus: SyllabusModule[];
  projects: string[];
  priceInr: number;
  priceUsd: number;
  instructor: {
    name: string;
    role: string;
    credentials: string;
    experience: string;
    stack: string;
  };
}
