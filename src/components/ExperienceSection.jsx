import { experiences } from "../data/portfolio";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Roles and project work taken directly from the CV.
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 md:-translate-x-1/2" />

          <div className="relative space-y-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <article
                  key={`${exp.company}-${exp.title}`}
                  className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"} pl-10 md:pl-0`}
                >
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] rounded-2xl border border-border bg-card p-6 shadow-xs card-hover ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-primary/80">
                          {exp.date}
                        </p>
                        <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm text-foreground/85 list-disc list-inside">
                      {exp.achievements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
