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

  export type Profile = {
    name: string;
    title: string;
    location: string;
    about: string;
    email: string;
    phone: string;
    address: string;
    image: string;
  };
  
  export type ProjectsData = {
    projects: Project[];
  };


  export type Education = {
    year: string;
    institution: string;
    qualification: string;
  };
  
  export type WorkExperience = {
    company: string;
    position: string;
    date: string;
    description: string;
  };
  
  export type ConsultancyAssignment = {
    date: string;
    organization: string;
    roleAndAssignment: string;
    referencePerson: string;
  };
  
  export type ProjectInfo = {
    name: string;
    description: string;
  };
  
  export type Reference = {
    name: string;
    position: string;
    organization: string;
    phone: string;
    email: string;
  };
  
  export type ResumeData = {
    education: Education[];
    workExperience: WorkExperience[];
    consultancyAssignments: ConsultancyAssignment[];
    projectsWorkedOn: ProjectInfo[];
    ongoingProjects: ProjectInfo[];
    skills: string[];
    hobbiesAndInterests: string[];
    languageProficiency: string[];
    references: Reference[];
  };
  
  export type PortfolioData = {
    profile: Profile;
    projects: Project[];
    resume: ResumeData;
  };