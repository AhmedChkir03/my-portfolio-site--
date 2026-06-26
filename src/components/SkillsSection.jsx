import { skillGroups } from "../data/portfolio";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          A compact view of the stack I actually use across product, AI, and IoT work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-card p-6 rounded-2xl shadow-xs card-hover border border-border"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3 className="font-semibold text-lg">{group.title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {group.items.length} items
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-secondary/70 text-sm text-foreground/90 border border-border/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground max-w-2xl mx-auto">
          The stack reflects the work shown in the CV: web apps, API
          integration, AI features, and IoT-oriented projects.
        </p>
      </div>
    </section>
  );
};
