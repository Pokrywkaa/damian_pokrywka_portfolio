export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: "Tech Company Inc.",
    role: "Senior Software Engineer",
    startDate: "2022-01",
    endDate: "Present",
    description: "Led development of cloud-native applications using modern web technologies. Architected and implemented scalable microservices, mentored junior developers, and optimized CI/CD pipelines.",
    technologies: ["TypeScript", "React", "Node.js", "AWS", "Docker", "Kubernetes"]
  },
  {
    company: "Digital Solutions Ltd.",
    role: "Full Stack Developer",
    startDate: "2020-03",
    endDate: "2021-12",
    description: "Developed and maintained full-stack web applications. Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
    technologies: ["JavaScript", "Vue.js", "Python", "PostgreSQL", "Redis"]
  },
  {
    company: "StartUp Ventures",
    role: "Frontend Developer",
    startDate: "2018-06",
    endDate: "2020-02",
    description: "Built responsive and interactive user interfaces. Implemented modern frontend best practices and improved application performance.",
    technologies: ["React", "HTML5", "CSS3", "REST APIs"]
  }
];
