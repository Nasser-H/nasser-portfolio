import { StaticImageData } from "next/image";

export interface Project {
    projectName: string;
    projectImage: StaticImageData;
    projectGitHubLink: string;
    projectLiveLink: string;
  }
export interface Skill {
    skillName: string,
    skillIcon?: string,
    skillIcon2?: string,
    levelInPercentage: number,
  }