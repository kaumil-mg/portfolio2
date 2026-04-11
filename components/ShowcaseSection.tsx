import RevealSection from "./RevealSection";
import Image from "next/image";

const projects = [
  {
    title: "Gen AI Application",
    description: "Developed scalable Generative AI applications leveraging LLMs via Ollama, Gemini API, and OpenAI for Finance and Healthcare. Built intelligent pipelines for document processing and RAG.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnGxzf2gohsfBLcxLtRXsg4MhnKWuJu_HR8-IGcFfN59Jezt40HfRLS795ansoT7Nhu455xFCQLFEzRxpkQVxxlHvNFZJtF4L8kNtzZmxlOzilzIEXYL6gqZ16EwV76jPXJxgj5jwL11ewSiM7R8LDCg3c_SrGv104K6OzWv67kfoa-Eu73bwwGXg8oPym2wg_GYmfLFwjs3I9w_RN6u8woBIF2eliiZV5uVwMhNTwcV2qfvb3vzcmgAotaXuL2rxVEM5O5tRM8QzX",
    tags: [
      { name: "Gen AI", colorClass: "text-primary border-primary/20", bgClass: "bg-surface-container-high" },
      { name: "Python / GCP", colorClass: "text-secondary border-secondary/20", bgClass: "bg-surface-container-high" }
    ],
    hoverShadow: "hover:shadow-[0_10px_40px_rgba(0,241,253,0.1)]"
  },
  {
    title: "Score Card Modelling",
    description: "Built robust credit risk models at Think360 AI. Collaborated with multiple banks to develop, validate, and deploy predictive models using XGBoost & GBM for risk assessment.",
    imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAdCd7aP6hyo8LWi8LLt5USZZ5CjWv35a0Ab55zUwCDwf8xytVKtOJzM7K2VTox1qsM0QuRYtt453Mq8HMGCLC8aPbcm38y65MaHRZaBTqVWx2ZDsdfzRQW9hYohVLNh62QGPeuJ2EMj6w_BH96hM_BbB2p6ViHSr1oPiiAzGcy6l-oFOLmJujMFoi2tPyph10OzpY9kYGFlyLQ-Gi3PkXHCIqdtkLWw7MM5__qdUX1zTh7oq27szrnUh2VsIXcE-ozOYTRW-MGUGm",
    tags: [
      { name: "Machine Learning", colorClass: "text-primary border-primary/20", bgClass: "bg-surface-container-high" },
      { name: "Finance", colorClass: "text-tertiary border-tertiary/20", bgClass: "bg-surface-container-high" }
    ],
    hoverShadow: "hover:shadow-[0_10px_40px_rgba(68,163,245,0.1)]"
  },
  {
    title: "Data Visualization Engine",
    description: "Comprehensive BI solution processing 1M+ rows of finance data to deliver real-time operational insights via Tableau and Power BI.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    tags: [
      { name: "Power BI", colorClass: "text-primary border-primary/20", bgClass: "bg-surface-container-high" },
      { name: "Tableau", colorClass: "text-secondary border-secondary/20", bgClass: "bg-surface-container-high" },
      { name: "SQL", colorClass: "text-tertiary border-tertiary/20", bgClass: "bg-surface-container-high" },
      { name: "ETL", colorClass: "text-primary border-primary/20", bgClass: "bg-surface-container-high" }
    ],
    hoverShadow: "hover:shadow-[0_10px_40px_rgba(172,137,255,0.1)]",
    link: "https://linktr.ee/Kaumilmg"
  }
];

export default function ShowcaseSection() {
  return (
    <RevealSection id="projects" className="py-24 px-8 bg-surface-container-lowest">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4 text-on-surface">
            Featured Projects
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Practical application of Generative Intelligence and Data Science models.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl bg-surface-container-low border border-outline-variant/10 hover:scale-[1.03] transition-all duration-500 ${project.hoverShadow}`}
            >
              <div className="aspect-video overflow-hidden relative w-full h-48 md:h-64">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-2">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`text-[10px] px-2 py-1 rounded text-primary border ${tag.colorClass} ${tag.bgClass}`}
                    >
                      {tag.name || tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-headline font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                    Live Showcase
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
