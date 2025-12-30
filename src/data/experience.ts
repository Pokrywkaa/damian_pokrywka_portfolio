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
    company: "Capgemini",
    role: "Senior Software Engineer",
    startDate: "2025-01",
    endDate: "Present",
    description:
      "Working on innovative, AI-driven solutions for enterprise clients. Designed and implemented an Email Response Bot leveraging LLMs to automatically analyze incoming emails, generate summaries, and propose solutions based on email content and external data sources. Architected cloud infrastructure on AWS and implemented CI/CD pipelines using GitLab CI/CD. Developed an API Gateway–based entry point orchestrating data retrieval and LLM processing workflows using AWS Step Functions.",
    technologies: [
      "Python",
      "AWS (API Gateway, Step Functions, Lambda, SageMaker)",
      "Terraform",
      "Snowflake",
      "Git"
    ]
  },
  {
    company: "Capgemini",
    role: "Software Engineer",
    startDate: "2023-06",
    endDate: "2025-01",
    description:
      "Contributed to multiple large-scale enterprise projects. Worked on a car price forecasting system using machine learning, collaborating closely with Data Architects and ML engineers. Designed and implemented AWS infrastructure with Terraform and prepared data pipelines for model training. Additionally, participated in an ADAS (Advanced Driver Assistance System) project, where I was responsible for designing scalable AWS-based architectures, implementing GraphQL APIs with AppSync, maintaining CI/CD pipelines, and developing Grafana dashboards for system monitoring and performance analysis.",
    technologies: [
      "Python",
      "PySpark",
      "AWS (CDK, Lambda, DynamoDB, AppSync, Glue, S3, Athena, SageMaker)",
      "Terraform",
      "Grafana",
      "Git"
    ]
  },
  {
    company: "Capgemini",
    role: "Software Engineer Intern",
    startDate: "2022-05",
    endDate: "2023-06",
    description:
      "Upskilled in cloud technologies and enterprise development best practices under the guidance of experienced engineers. Worked on an Enterprise Data Integration project focused on migrating large-scale data from on-premise sources to AWS. Maintained and optimized ETL jobs using AWS Glue (Spark), implemented additional features, and contributed to infrastructure development using Terraform.",
    technologies: [
      "Python",
      "PySpark",
      "Terraform",
      "AWS (Glue, Lambda, Step Functions, RDS PostgreSQL, Athena)",
      "Git"
    ]
  },
  {
    company: "Software Interactive",
    role: "Backend Developer Intern",
    startDate: "2022-03",
    endDate: "2022-04",
    description:
      "Built the Worker Reporter Tool from scratch as a backend-focused internship project. Designed RESTful APIs, implemented business logic, and integrated a relational database. Gained hands-on experience with backend architecture, version control, and collaborative development workflows.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Git"
    ]
  }
];
