export type TemplateName = "classic" | "modern" | "creative";
export type Language = "pl" | "en";

export type ExperienceItem = {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationItem = {
  id: string;
  school: string;
  field: string;
  startDate: string;
  endDate: string;
};

export type CvData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
  photo: string;
  summary: string;
  skills: string;
  interests: string;
  experience: ExperienceItem[];
  education: EducationItem[];
};
