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
    name: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with modern stack for optimal performance and user experience.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    repositoryUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://demo.example.com",
    featured: true
  },
  {
    name: "Real-time Chat Application",
    description: "WebSocket-based chat application with rooms, private messaging, and file sharing capabilities. Includes authentication and message history.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    repositoryUrl: "https://github.com/yourusername/chat-app",
    featured: true
  },
  {
    name: "Task Management Tool",
    description: "Kanban-style task management application with drag-and-drop functionality, team collaboration features, and analytics dashboard.",
    technologies: ["Vue.js", "Express", "MySQL", "Docker"],
    repositoryUrl: "https://github.com/yourusername/task-manager",
    demoUrl: "https://tasks.example.com"
  },
  {
    name: "Weather Dashboard",
    description: "Modern weather dashboard with location-based forecasts, interactive maps, and weather alerts. Features clean UI and real-time updates.",
    technologies: ["Astro", "TypeScript", "Weather API", "Chart.js"],
    repositoryUrl: "https://github.com/yourusername/weather-dashboard",
    demoUrl: "https://weather.example.com"
  },
  {
    name: "Portfolio Generator",
    description: "CLI tool to generate customizable portfolio websites from templates. Supports multiple themes and easy deployment to various hosting platforms.",
    technologies: ["Node.js", "Commander.js", "EJS", "CSS"],
    repositoryUrl: "https://github.com/yourusername/portfolio-generator"
  }
];
