import RevealSection from "./RevealSection";
import Image from "next/image";

export default function AboutSection() {
  const stackList = [
    "Python", "SQL", "Power BI", "Tableau",
    "Generative AI", "LLMs (Ollama, Gemini, OpenAI)",
    "RAG", "AWS / Azure / GCP", "PySpark",
    "Docker", "Databricks", "Snowflake"
  ];

  return (
    <RevealSection id="about" className="py-24 px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tertiary/5 to-transparent"></div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/20 shadow-2xl relative">
            <Image
              alt="Professional Portrait"
              className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700 w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiZYkaHFG_4ozkBa9JXpvdpcOXiHTlVErjVATdOnzXShm4DqkJpbnyrq3pnd7KH0OvrdDMnlkoNKwwBfxtQFQIUa_yMCor2LW4T3K2b6Y6xJU3vuWds9vuuMeTyRNMvv_KfHNtJsw8ZXrm6F8sHWqylkj8pu0yG9PCZC3VGeTA-01ZlCQv-EoIQFkqLHXJSYhfwiuT6B7hoSOlcQTzI4fgrfNq1JB2QCo6GCmcST9bmud2CpLAByAo3FGU4ywr2CdpFGPVvDiAKr5X"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-surface-container-highest border border-primary/20 rounded-xl backdrop-blur-xl">
            <div className="text-3xl font-headline font-bold text-primary">06+</div>
            <div className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Years Experience</div>
          </div>
        </div>
        <div className="space-y-8 relative z-10">
          <h2 className="text-4xl font-headline font-bold tracking-tighter text-on-surface">The Mind Behind the Machine</h2>
          <p className="text-on-surface-variant text-base leading-relaxed">
            I am a Data Scientist at Think 360 Analytics, bringing over 6 years of expertise in data analysis, machine learning, and comprehensive web development architecture. Focused heavily on designing systems that utilize SQL, Python, Power BI, and Tableau to extract structured logic and strategic narratives.
          </p>
          <p className="text-on-surface-variant text-base leading-relaxed">
            My experience spans constructing massive data pipelines, executing MLOps configurations across AWS, Azure, and GCP, and successfully deploying GenAI tools via tailored RAG workflows and robust vector databases. I have a track record of driving cross-functional teams to deliver enterprise data-driven solutions for banking risk optimization and product development.
          </p>
          <div className="space-y-4 pt-4">
            <h4 className="font-headline text-xs uppercase tracking-[0.3em] text-primary-container">Technical Stack</h4>
            <div className="flex flex-wrap gap-2">
              {stackList.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-md bg-surface-variant text-primary text-xs font-label border border-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-headline text-xs uppercase tracking-[0.3em] text-secondary mb-2">Education</h4>
                <div className="space-y-2">
                  <p className="text-sm text-on-surface font-semibold">M.Sc. Data Science</p>
                  <p className="text-xs text-on-surface-variant">Symbiosis Skills & Prof. Univ. (2021-2023)</p>
                  <p className="text-sm text-on-surface font-semibold mt-2">B.Sc. IT</p>
                  <p className="text-xs text-on-surface-variant">Indus University (2018-2021)</p>
                </div>
              </div>
              <div>
                 <h4 className="font-headline text-xs uppercase tracking-[0.3em] text-tertiary mb-3">Certifications</h4>
                 <div className="space-y-3">
                  <div>
                    <a href="https://pwskills.com/learn/certificate/d334f700-6492-43ae-8a61-7c255e8fb3d4/" target="_blank" rel="noopener noreferrer" className="block group">
                      <p className="text-sm text-on-surface font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
                        Data Science Master
                        <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                      </p>
                      <p className="text-xs text-on-surface-variant">Physics Wallah</p>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/PAS6RXGC4FDD" target="_blank" rel="noopener noreferrer" className="block group">
                      <p className="text-sm text-on-surface font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
                        Build a Data Science Web App with Streamlit and Python
                        <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                      </p>
                      <p className="text-xs text-on-surface-variant">Coursera</p>
                    </a>
                  </div>
                  <div>
                    <a href="https://lnkd.in/dZue93N4" target="_blank" rel="noopener noreferrer" className="block group">
                      <p className="text-sm text-on-surface font-semibold group-hover:text-primary transition-colors flex items-center gap-1">
                        Data Analytics Part 2: Extending and Applying Core Knowledge
                        <span className="material-symbols-outlined text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                      </p>
                      <p className="text-xs text-on-surface-variant">LinkedIn</p>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
