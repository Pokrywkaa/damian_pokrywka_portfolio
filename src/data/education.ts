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
    degree: "Master of Science in Applied Computer Science",
    institution: "Wrocław University of Science and Technology",
    location: "Wrocław, Poland",
    startYear: 2022,
    endYear: 2024,
    achievements: [
      "Master Thesis in cooperation with Capgemini: Comparison of Snowflake and Databricks platforms in the context of data processing and business analytics"
    ]
  },
  {
    degree: "Bachelor of Science in Automatic Control and Robotics",
    institution: "Wrocław University of Science and Technology",
    location: "Wrocław, Poland",
    startYear: 2018,
    endYear: 2022,
    achievements: [
      "Thesis: Synchronous Control System for Wind Turbines",
      "Rector’s Award for top students"
    ]
  }
];
