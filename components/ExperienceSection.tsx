import RevealSection from "./RevealSection";

const experiences = [
  {
    role: "Data Scientist",
    company: "Think 360 AI",
    period: "12/2024 – Present | Mumbai",
    points: [
      "Lead a data science team delivering high-impact solutions across finance and product development using ML, SQL, Power BI, and Generative AI, owning the full lifecycle.",
      "Drive advanced analytics initiatives including credit risk scorecard modelling, NLP, and GenAI use cases (LLMs, prompt engineering, RAG) with algorithms like XGBoost.",
      "Design and optimize scalable, cloud-based data pipelines using Python, PySpark, and SQL to support end-to-end AI/GenAI workloads."
    ]
  },
  {
    role: "Data Scientist",
    company: "Let's Enkindle",
    period: "04/2024 – 12/2024 | Ahmedabad",
    points: [
      "Performed data analysis and visualization using SQL, Power BI, and Python, delivering interactive dashboards.",
      "Built and deployed ML, Deep Learning, and Generative AI solutions on Azure ML and AWS SageMaker using Databricks, RAG, and vector databases.",
      "Implemented RESTful APIs, MLOps, and optimized Snowflake-based data pipelines for scalable cloud analytics."
    ]
  },
  {
    role: "Technical Analyst",
    company: "Value Score Business Solution LLP",
    period: "04/2023 – 03/2024 | Mumbai",
    points: [
      "Designed SQL databases, integrated multi-source data, and built robust ETL pipelines.",
      "Developed business intelligence dashboards using Tableau for data-driven strategic decisions.",
      "Applied statistical analysis and ML to extract insights and improve outcomes while customizing Epicor ERP systems."
    ]
  },
  {
    role: "Data Scientist / Web Developer",
    company: "Dotmg Studio",
    period: "06/2018 – 06/2021 | Ahmedabad",
    points: [
      "Successfully transitioned from a Web Developer role to Data Scientist role.",
      "Developed web applications via Python/Django, PHP, PostgreSQL prior to pivot.",
      "Built ML models for predictive analytics, integrated marketing tracking, and built Power BI dashboards."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <RevealSection id="experience" className="py-24 px-8 relative overflow-hidden bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4 text-on-surface">
            Professional Trajectory
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            A linear progression of deploying data structures globally.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:border-primary/20 hover:bg-surface-container transition-all duration-500 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-container to-secondary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface">{exp.role}</h3>
                  <div className="text-lg text-primary">{exp.company}</div>
                </div>
                <div className="text-sm font-label uppercase tracking-widest text-on-surface-variant md:text-right">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.points.map((pt, i) => (
                  <li key={i} className="text-on-surface-variant text-sm leading-relaxed flex gap-3">
                    <span className="text-secondary mt-1 material-symbols-outlined text-sm">arrow_forward_ios</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
