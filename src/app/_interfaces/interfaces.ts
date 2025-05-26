import { StaticImageData } from "next/image";

export interface Project {
    projectName: string;
    projectImage: StaticImageData;
    projectGitHubLink: string;
    projectLiveLink: string;
  }