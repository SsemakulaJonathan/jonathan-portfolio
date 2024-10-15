export type Project = {
    slug: string;
    title: string;
    description: string;
    image: string;
    logo?: string;
    role: string;
    problem: string;
    solution: string;
    marketOpportunity: string;
    businessModel: string;
    fundingRequest: string;
    futureProspects: string;
    team: string;
  };
  
  export type ProjectsData = {
    projects: Project[];
  };