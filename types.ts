
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  hackerrank: string;
  hackerrankDisplay: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  location?: string;
  dates?: string;
  description: string;
  githubLink?: string;
  githubDisplay?: string;
  technologies?: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  dates?: string;
  university?: string;
  percentage?: string;
  details?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  dates: string;
  description?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface ResumeData {
  name: string;
  contact: ContactInfo;
  summary: string;
  skills: SkillCategory[];
  workExperience: WorkExperience[];
  projects: Project[];
  education: EducationEntry[];
  certifications: Certification[];
  languages: Language[];
  hobbies: string[];
}
