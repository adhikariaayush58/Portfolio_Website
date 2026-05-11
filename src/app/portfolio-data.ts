export interface NavItem {
    label: string;
    target: string;
  }
  
  export interface SkillGroup {
    title: string;
    skills: string[];
  }
  
  export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
    companyLogo: string;
    logoAlt: string;
    bannerColor: string;
  }
  
  export interface Achievement {
    title: string;
    description: string;
  }
  
  export interface EducationItem {
    schoolName: string;
    subHeader: string;
    duration: string;
    desc: string;
    descBullets: string[];
    logoAlt: string;
    logoPath: string;
  }
  
  export const navItems: NavItem[] = [
    { label: 'Work Experience', target: 'experience' },
    { label: 'Skills', target: 'skills' },
    { label: 'Resume', target: 'resume' },
    { label: 'Contact Me', target: 'contact' },
  ];
  
  export const education: EducationItem = {
    schoolName: 'University of Texas at Arlington',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'August 2019 - May 2023',
    desc: 'Earned Magna Cum Laude in Computer Science.',
    descBullets: [
      'Relevant Courses: Data Structures, Algorithm, Artificial Intelligence, Computer Networks, Operating System',
    ],
    logoAlt: 'University of Texas at Arlington logo',
    logoPath: 'assets/UTA_logomark.jpg',
  };
  
  export const skillGroups: SkillGroup[] = [
    {
      title: 'Frontend',
      skills: ['Angular', 'TypeScript', 'React', 'HTML', 'CSS', 'NgRx'],
    },
    {
      title: 'Backend',
      skills: ['C#', '.NET', 'Microservices', 'REST APIs', 'Entity Framework'],
    },
    {
      title: 'Databases',
      skills: ['SQL Server Management Studio', 'PostgreSQL', 'Cosmos DB', 'MongoDB', 'SQLite']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Azure', 'Docker', 'Azure Service Bus', 'CI/CD', 'Terraform', 'Vercel'],
    },
    {
      title: 'Engineering Practices',
      skills: ['Agile', 'Microservices Architecture', 'Multi Threading', 'Infrastructure as Code'],
    },
  ];
  
  export const experiences: ExperienceItem[] = [
    {
      role: 'Software Engineer',
      company: 'Janus Henderson Investors',
      period: 'January 2026 - Present',
      description:
        'Built scalable financial risk and exposure analytics platforms using C#, .NET, Angular, Azure, and API-driven architectures to support portfolio management, trading workflows, and enterprise risk reporting.',
      highlights: [
        'Led migration of enterprise risk data pipelines from on-prem APIs to Global Snowflake, improving query performance and reporting consistency across analytics platforms.',
        'Contributed to BlackRock Aladdin API integrations within Azure API Management (APIM), enabling scalable and secure trading and portfolio exposure workflows.',
        'Developed backend microservices and Angular-based risk dashboards to support real-time portfolio exposure analysis for traders and portfolio managers.',
      ],
      companyLogo: 'assets/JHILogo.jpg',
      logoAlt: 'JHI Logo',
      bannerColor: '#b86a18', 
    },
    {
      role: 'Software Engineer I',
      company: 'Medpace',
      period: 'June 2023 - October 2025',
      description:
        'Designed and modernized clinical trial platforms using C#, .NET microservices, Angular, Docker, Azure Cosmos DB, and distributed messaging systems for scalable and secure clinical workflows.',
      highlights: [
        'Designed scalable .NET microservices with Docker and Cosmos DB for ClinTrak IRT, improving platform efficiency and distributed system scalability.',
        'Developed a complex randomization algorithm for blinded and double-blinded clinical trial configurations, improving system accuracy and performance.',
        'Modernized legacy clinical trial applications into a microservices-based architecture integrated with Angular and Azure Service Bus (ESB) communication workflows.'
      ],
      companyLogo: 'assets/MedpaceLogo.jpeg',
      logoAlt: 'Medpace Logo',
      bannerColor: '#9a9d9c',
    },
    {
      role: 'Software Developer Intern',
      company: 'Q2 Software',
      period: 'May 2022 - August 2022',
      description:
        'Developed backend systems and database-driven services focused on financial configuration workflows, API integrations, and real-time data management.',
      highlights: [
        'Designed and implemented RESTful APIs using Django to improve internal configuration and account number generation workflows.',
        'Built PostgreSQL-backed real-time data services for client account numbers, product details, and product range management.',
        'Collaborated on scalable backend application development practices involving APIs, database systems, and workflow optimization.'
      ],
      companyLogo: 'assets/Q2Logo.jpg',
      logoAlt: 'Q2 Logo',
      bannerColor: '#1f3a5f',
    },
  ];
  
//   export const achievements: Achievement[] = [
//     {
//       title: 'Scalable Microservices Architecture',
//       description:
//         'Designed services using C#, Docker containers, and Cosmos DB to improve project execution efficiency.',
//     },
//     {
//       title: 'Clinical Randomization Engine',
//       description:
//         'Developed robust randomization logic for active and placebo drug assignment in clinical trial workflows.',
//     },
//     {
//       title: 'Secure Study Workflows',
//       description:
//         'Worked with safety-focused features including protected documents, MFA workflows, and secure sign-off processes.',
//     },
//   ];