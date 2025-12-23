export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  aboutLong: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface TechnologyCategory {
  category: string;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Damian Pokrywka",
  role: "Software Engineer",
  bio: "Software Engineer with over 3 years of professional experience, specializing in Python and cloud-native solutions on AWS. Currently working at Capgemini, I focus on building scalable, reliable systems for enterprise clients while continuously exploring innovative technologies.",
  aboutLong: "I'm Damian, a Software Engineer at Capgemini with over three years of professional experience. I hold a Bachelor's degree in Automation and Robotics, where I gained my first exposure to computer science and discovered my passion for software engineering. To further strengthen my expertise, I pursued a Master's degree in Applied Computer Science, taught entirely in English, alongside a full-time job.\n\nDuring my studies, I balanced daily academic work with professional responsibilities, gaining strong theoretical foundations and hands-on industry experience. This journey culminated in my master's thesis, \"Comparison of Snowflake and Databricks Platforms in the Context of Data Processing and Business Analytics,\" developed in collaboration with Capgemini.\n\nI specialize in Python and Cloud Computing, particularly AWS, which I work with on a daily basis. My responsibilities include designing and implementing cloud infrastructure, developing business logic, and delivering scalable, production-grade solutions for enterprise clients. I work in Agile environments using the Scrum framework and enjoy tackling complex technical challenges.\n\nIn addition to cloud engineering, I actively participate in innovative projects involving intelligent agents, Model Context Protocol (MCP), and large language model (LLM) processing. I’m particularly interested in how AI-driven systems can enhance data processing, automation, and decision-making at scale.",
  email: "damian.pokrywka3@gmail.com",
  github: "https://github.com/Pokrywkaa",
  linkedin: "https://www.linkedin.com/in/damian-pokrywka-7602a6231/",
  location: "Poland"
};

export const technologies: TechnologyCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Vue.js", "TypeScript", "Astro", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions", "Terraform", "Linux"]
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack", "Vite"]
  }
];
