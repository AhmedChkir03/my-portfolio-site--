import { Briefcase, Calendar, Star } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "ASZ Automation",
    date: "Feb 2024 – May 2024",
    achievements: [
      "Developed responsive UI components with Vue.js and TailwindCSS",
      "Integrated backend systems using Laravel and RESTful APIs",
      "Implemented SEO improvements and boosted engagement"
    ],
    tech: ["Vue.js", "Laravel", "Bootstrap", "TailwindCSS"],
  },
 {
  title: "Full-Stack Developer Intern",
  company: "VISS Tunisie",
  date: "Jun 2025 – Jul 2025",
  achievements: [
    "Developed a WordPress website for Innovia360, showcasing an AI-powered content generation plugin",
    "Designed and implemented a web application for generating Business Plans using AI (Gemini API)",
    "Built the backend with Laravel and the frontend with Bootstrap for responsive design"
  ],
  tech: ["Laravel", "Bootstrap", "WordPress", "Gemini API", "JavaScript", "PHP"],
},

  {
    title: "Stager",
    company: "STEG Mahres",
    date: "Jun 2024 – jul 2024",
    achievements: [
      "Collaboré avec l’équipe du service relevé pour la collecte et le traitement des données de consommation des clients.",
      "Utilisé Microsoft Excel pour saisir, trier et analyser les relevés de compteurs.",
      "Rédigé des documents administratifs et rapports internes avec Microsoft Word.",
      "Consulté et mis à jour les informations client sur le site interne de la STEG.",
      "Développé des compétences en gestion de données, organisation et communication avec les clients."
    ],
    tech: ["Microsoft Excel", "Microsoft Word", "Site officiel du steg"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <h2 className="text-3xl font-bold text-center mb-16">
        My Professional Experience
      </h2>

      {/* Vertical glowing line */}
<div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 z-0"
        style={{
          height: `calc(100% - 150px)`, // Shorter than full height
          backgroundColor: "rgba(82, 53, 150, 0.5)",
          animation: "pulse-glow 2s infinite",
        }}
      />
      <div className="relative max-w-6xl mx-auto space-y-12 z-10">
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className={`md:w-1/2 ${isLeft ? "md:pr-8" : "md:pl-8"}`}>
                <div className="gradient-border p-6 card-hover rounded-2xl shadow-md text-left">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span className="font-semibold" >
                      {exp.title}
                    </span>
                    <span>{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-2  " >{exp.company}</h3>

                  <ul className="mt-4 list-disc list-inside space-y-2 text-sm ">
                    {exp.achievements.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-[#28244f] rounded-full text-cyan-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
