export type ExperienceCategory = 'Internship' | 'Education' | 'Simulation' | 'Certification';

export interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: ExperienceCategory;
  description: string[];
}