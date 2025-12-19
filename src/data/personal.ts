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
  name: "Your Name",
  role: "Full Stack Developer",
  bio: "Passionate software engineer specializing in building exceptional digital experiences. I focus on creating efficient, scalable, and user-friendly applications.",
  aboutLong: "I'm a Full Stack Developer with 5+ years of experience building web applications. I have a strong foundation in both frontend and backend development, with expertise in modern JavaScript frameworks, cloud technologies, and DevOps practices. I'm passionate about writing clean, maintainable code and continuously learning new technologies. When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new web technologies.",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "City, Country"
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
