import { ArrowRight } from "lucide-react";
import { projects, profile } from "../data/portfolio";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected work from the CV, with emphasis on AI, IoT, backend systems,
          and practical product delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-xs card-hover border border-border"
            >
              <div className="relative px-6 pt-5 pb-4 border-b border-border/60 bg-[linear-gradient(180deg,rgba(139,92,246,0.12),transparent_100%)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
                    Featured project
                  </p>
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    Case study
                  </span>
                </div>
                <div className="mt-5 h-px w-16 bg-primary/60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.summary}
                </p>
                <p className="text-sm text-foreground/80 mb-5">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Source and demos can be shared on request.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href={profile.github}
          >
            View GitHub Profile <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
