import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Diego Rodriguez",
  initials: "DR",
  location: "Frankfurt am Main, Germany, CET",
  locationLink: "https://www.google.com/maps/place/FrankfurtamMain",
  about: 
      "Physicist with practical experience in data science, software development, and regulatory reporting. Always learning 📙. Solving problems with AI \u{1F916}. Obsessed for automation, either in software or data processing.",
  summary: (
    <>
      I have been immersed in data science/analysis field since my early days as a physics student. My expertise spans analyzing complex data models, making data-driven predictions, and tailoring client data for regulatory reporting compliance. My focus is working on complex datasets and transform them into fruitful business insights. I have also experience in technical architecture and database management.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/123733873?s=400&u=17bdf84a736ec887924a058dd9f6c3368083cf5b&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "diego.rodriguez.ffm@gmail.com",
    tel: "Tel: +49 152 25261508",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/diegordzffm",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diego-rodriguez-721876305",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universität Stuttgart",
      degree: "Master of Science in Physics",
      start: "2016",
      end: "2020",
    },
    {
      school: "Universidad Autónoma de Coahuila, Mexico",
      degree: "Bachelor of Science in Physics",
      start: "2011",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Regnology",
      link: "https://www.regnology.net/en/",
      badges: [],
      title: "Data/IT-Business Analyst",
      start: "2021",
      end: null,
      description: (
        <>
          <span style={{ fontSize: "0.8rem", fontWeight: "normal", marginBottom: "0.3rem", display: "block",}}>
            Expertise in Data-Driven Regulatory Reporting and Software Solution Design.</span>
          <ul className="list-inside list-disc">
            <li>
            Developed software solutions for financial institutions. Specializing in designing and implementing regulatory reporting requirements for German and Belgian Institutions. I worked with tools like git, Bitbucket, jjson
            </li>
            <li>
            Automating complex ETL processes using Apache-Airflow and Rest-APIs, enhancing the efficiency and scalability of regulatory reporting pipelines.
            </li>
            <li>
            Management of databases and datalakes. Developed client data quality checks and monitoring.
            </li>
            <li>
            Modeling techniques to customize client datasets for banking regulation software.            
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Max Planck Institute Festkörperphysik, Stuttgart",
      link: "",
      badges: [],
      title: "Scientific Assistant",
      start: "2020",
      end: "2021",
      description: (
        <>
          <span style={{ fontSize: "0.8rem", fontWeight: "normal", marginBottom: "0.3rem", display: "block" }}>
            Specialized in statistical modeling and data analysis within the field of optical measurement systems for chemical materials.</span>
          <ul className="list-inside list-disc">
            <li>
            Conducted raw data analysis of physical measurements, ensuring accurate interpretation of complex datasets.
            </li>
            <li>
            Developed statistical and mathematical models to represent and analyze experimental data effectively.
            </li>
            <li>            
            Managed data systems, including data clustering and organizing data lakes, to support streamlined research and analysis workflows.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Python",
    "Pandas",
    "Numpy",
    "Matplotlib",
    "sklearn",
    "SQLite databases",
    "REST APIs",
    "SQL",
    "RDBMS",
    "PostgreSQL",
    "Data Lakes (AWS S3)",
    "apache-airflow",
    "Docker",
    "CI/CD Pipelines",
    "Software Testing",
    "git",
    "Software automation",
    "Agile Methodology",
    "Microsoft Office",
    "Languages = English: advanced, German: Fluent, Spanish= Native"
  ],
  projects: [
    {
      title: "",
      techStack: [""],
      description:
        "",
    },
  ],
} as const;
