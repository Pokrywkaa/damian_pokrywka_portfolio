export interface Education {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  description?: string;
  achievements?: string[];
}

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    location: "City, Country",
    startYear: 2016,
    endYear: 2018,
    description: "Specialized in Software Engineering and Distributed Systems",
    achievements: [
      "GPA: 3.8/4.0",
      "Thesis: Scalable Microservices Architecture",
      "Teaching Assistant for Web Development course"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    location: "City, Country",
    startYear: 2012,
    endYear: 2016,
    description: "Foundation in Computer Science fundamentals",
    achievements: [
      "Graduated with Honors",
      "President of Computer Science Club"
    ]
  }
];
