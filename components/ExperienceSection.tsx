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

        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative pl-12 md:pl-0">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 group-hover:bg-primary/50 transition-colors duration-500 -translate-x-1/2"></div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}>
                <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-high md:-translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(0,241,253,0.5)]"></div>
                <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,139,163,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,241,253,0.08)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                  <span className="inline-block px-3 py-1 bg-surface-container-highest text-xs font-label uppercase tracking-widest text-primary rounded-full mb-4">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-secondary font-headline mb-4">
                    {exp.company}
                  </h4>
                  <ul className="space-y-3 mt-6 text-left">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="text-on-surface-variant text-sm leading-relaxed flex gap-3">
                        <span className="text-secondary mt-1 material-symbols-outlined text-sm">arrow_forward_ios</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
