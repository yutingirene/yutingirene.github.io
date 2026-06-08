export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  description?: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  link: string;
  abstract: string;
}

export interface Conference {
  title: string;
  authors?: string;
  description?: string;
  name: string;
  location?: string;
  time: string;
}

export interface Honour {
  title: string;
  time: string;
  description?: string;
}

export function isExperience(
  element: Experience | Education | Conference,
): element is Experience {
  return "company" in element;
}

export function isEducation(
  element: Education | Experience | Conference,
): element is Education {
  return "school" in element;
}

export function isConference(
  element: Experience | Education | Conference,
): element is Conference {
  return "name" in element && !("company" in element) && !("school" in element);
}

export function isSkill(element: Skill | Publication): element is Skill {
  return "description" in element;
}

export function isPublication(
  element: Skill | Publication,
): element is Publication {
  return "authors" in element;
}
