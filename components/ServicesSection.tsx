import RevealSection from "./RevealSection";

const services = [
  {
    title: "Data Science & Analytics",
    icon: "analytics",
    description: "Power BI, Tableau, Python (Pandas, NumPy, Matplotlib, Seaborn, Plotly, PySpark), AWS Glue, ETL/ELT Pipelines, Snowflake.",
    colorClass: "primary",
  },
  {
    title: "Data Mining & Cloud",
    icon: "database",
    description: "SQL, NoSQL, MongoDB, PostgreSQL, Azure Databricks. AWS, Azure, GCP, Azure ML, SageMaker, Docker, CI/CD, MLflow.",
    colorClass: "secondary",
  },
  {
    title: "Machine Learning & AI",
    icon: "neurology",
    description: "Scikit-learn, Generative AI, Model Deployment Pipelines, Model Monitoring, Result Validation & Documentation.",
    colorClass: "tertiary",
  },
  {
    title: "Generative AI",
    icon: "smart_toy",
    description: "LLMs, Ollama, Gemini API, OpenAI API, RAG workflows, LLMOps, Agentic AI applied to real-world business optimization.",
    colorClass: "primary-fixed",
  },
];

export default function ServicesSection() {
  return (
    <RevealSection id="skills" className="py-24 px-8 bg-surface-container-low">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-headline font-bold tracking-tighter mb-4 text-on-surface">
              Core Skills & Technologies
            </h2>
            <p className="text-on-surface-variant">
              Comprehensive toolkit for bridging the gap between raw data streams and generative intelligence.
            </p>
          </div>
          <div className="text-primary-container font-headline text-sm tracking-[0.2em] uppercase">
            Skills // 01
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,139,163,0.1)] dark:hover:shadow-[0_10px_40px_rgba(0,241,253,0.1)] hover:border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">{service.icon}</span>
              <h3 className="text-xl font-headline font-bold text-on-surface mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed group-hover:text-on-surface transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
