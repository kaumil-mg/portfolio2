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
          {services.map((service, index) => {
            const ringColorHover = 
              service.colorClass === "primary" ? "hover:border-primary/20 hover:shadow-[0_0_30px_rgba(0,241,253,0.15)]" :
              service.colorClass === "secondary" ? "hover:border-secondary/20 hover:shadow-[0_0_30px_rgba(68,163,245,0.15)]" :
              service.colorClass === "tertiary" ? "hover:border-tertiary/20 hover:shadow-[0_0_30px_rgba(172,137,255,0.15)]" :
              "hover:border-primary-fixed/20 hover:shadow-[0_0_30px_rgba(0,241,253,0.15)]";

            const iconBgText = 
              service.colorClass === "primary" ? "bg-primary/10 text-primary" :
              service.colorClass === "secondary" ? "bg-secondary/10 text-secondary" :
              service.colorClass === "tertiary" ? "bg-tertiary/10 text-tertiary" :
              "bg-primary-fixed/10 text-primary-fixed";
            
            const lineBgHover = 
              service.colorClass === "primary" ? "group-hover:bg-primary/30" :
              service.colorClass === "secondary" ? "group-hover:bg-secondary/30" :
              service.colorClass === "tertiary" ? "group-hover:bg-tertiary/30" :
              "group-hover:bg-primary-fixed/30";

            return (
              <div
                key={index}
                className={`group p-8 rounded-xl bg-surface-container-highest/50 hover:bg-surface-container-highest transition-all duration-500 border border-transparent ${ringColorHover} hover:scale-[1.02]`}
              >
                <div
                  className={`w-12 h-12 mb-8 flex items-center justify-center rounded-lg ${iconBgText} group-hover:scale-110 transition-transform`}
                >
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-4">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div
                  className={`w-full h-px bg-outline-variant/30 ${lineBgHover} transition-colors`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}
