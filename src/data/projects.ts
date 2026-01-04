export interface Project {
  name: string;
  description: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Online Shop",
    description: "A Django-based online shop with product management, cart and checkout, a recommendation system, automated emails, and a robust admin panel for managing users, orders, and products.",
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "HTML", "CSS"],
    repositoryUrl: "https://github.com/Pokrywkaa/Django-Online-Shop",
    demoUrl: "https://www.youtube.com/watch?v=laRJfd9wW0k&ab_channel=DamianPokrywka",
    featured: true
  },
  {
    name: "Master's Thesis: Comparison of Snowflake and Databricks platforms in the context of data processing and business analytics",
    description: "A master’s thesis focused on a comparative analysis of Snowflake and Databricks in the context of data processing and business analytics, conducted in collaboration with Capgemini, evaluating their strengths and weaknesses through documentation review and practical experiments to support informed platform selection.",
    technologies: ["Snowflake", "Databricks", "Python", "Jupyter Notebooks", "pandas", "numpy"],
    repositoryUrl: "https://github.com/Pokrywkaa/Comparison_Snowflake_Databricks",
    demoUrl: `${import.meta.env.BASE_URL}/thesis.pdf`,
    featured: true
  },
  // {
  //   name: "Task Management Tool",
  //   description: "Kanban-style task management application with drag-and-drop functionality, team collaboration features, and analytics dashboard.",
  //   technologies: ["Vue.js", "Express", "MySQL", "Docker"],
  //   repositoryUrl: "https://github.com/yourusername/task-manager",
  //   demoUrl: "https://tasks.example.com"
  // },
  // {
  //   name: "Weather Dashboard",
  //   description: "Modern weather dashboard with location-based forecasts, interactive maps, and weather alerts. Features clean UI and real-time updates.",
  //   technologies: ["Astro", "TypeScript", "Weather API", "Chart.js"],
  //   repositoryUrl: "https://github.com/yourusername/weather-dashboard",
  //   demoUrl: "https://weather.example.com"
  // },
  // {
  //   name: "Portfolio Generator",
  //   description: "CLI tool to generate customizable portfolio websites from templates. Supports multiple themes and easy deployment to various hosting platforms.",
  //   technologies: ["Node.js", "Commander.js", "EJS", "CSS"],
  //   repositoryUrl: "https://github.com/yourusername/portfolio-generator"
  // }
];
