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
          <div>
            <h4 className="font-headline text-xs uppercase tracking-[0.3em] text-tertiary mb-4">Core Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {stackList.map((tech, i) => (
                <span key={i} className="px-4 py-2 border border-outline-variant/30 rounded-full text-xs font-label text-on-surface-variant tracking-wide hover:border-tertiary/50 hover:bg-tertiary/5 hover:text-tertiary transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Education & Certifications - Elevated Prominence */}
      <div className="container mx-auto mt-24">
        <h3 className="text-3xl font-headline font-bold text-on-surface mb-8 tracking-tighter text-center md:text-left">Credentials & Proof of Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/20 relative overflow-hidden">
             <div className="w-12 h-12 mb-6 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">school</span>
             </div>
             <h4 className="font-headline font-bold mb-2">M.Sc. Data Science</h4>
             <p className="text-sm text-on-surface-variant mb-4">Symbiosis Skills & Prof. Univ. (2021-2023)</p>
             <h4 className="font-headline font-bold mb-2">B.Sc. IT</h4>
             <p className="text-sm text-on-surface-variant">Indus University (2018-2021)</p>
          </div>

          {/* Certifications */}
          <a href="https://pwskills.com/learn/certificate/d334f700-6492-43ae-8a61-7c255e8fb3d4/" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,139,163,0.1)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div>
               <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">verified</span>
               </div>
               <h4 className="font-headline font-bold mb-2 group-hover:text-primary transition-colors">Data Science Master</h4>
               <p className="text-sm text-on-surface-variant">Physics Wallah</p>
             </div>
             <span className="material-symbols-outlined absolute bottom-8 right-8 text-on-surface-variant opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">arrow_outward</span>
          </a>

          <a href="https://www.coursera.org/account/accomplishments/certificate/PAS6RXGC4FDD" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(68,163,245,0.1)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between cursor-pointer">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div>
               <div className="w-12 h-12 mb-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">verified</span>
               </div>
               <h4 className="font-headline font-bold mb-2 group-hover:text-secondary transition-colors">Build a Data Science Web App with Streamlit</h4>
               <p className="text-sm text-on-surface-variant">Coursera</p>
             </div>
             <span className="material-symbols-outlined absolute bottom-8 right-8 text-on-surface-variant opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">arrow_outward</span>
          </a>

          <a href="https://lnkd.in/dZue93N4" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-tertiary/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(172,137,255,0.1)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between cursor-pointer lg:col-start-2">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-tertiary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div>
               <div className="w-12 h-12 mb-6 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">verified</span>
               </div>
               <h4 className="font-headline font-bold mb-2 group-hover:text-tertiary transition-colors">Data Analytics Part 2: Extending Core Knowledge</h4>
               <p className="text-sm text-on-surface-variant">LinkedIn</p>
             </div>
             <span className="material-symbols-outlined absolute bottom-8 right-8 text-on-surface-variant opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">arrow_outward</span>
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
