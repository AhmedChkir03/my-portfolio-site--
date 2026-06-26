import { certifications, education, languages } from "../data/portfolio";

export const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Education, <span className="text-primary">Languages</span> & Certifications
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The supporting details that make the CV stronger and help recruiters verify fit quickly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Education</h3>
            <div className="space-y-4 text-sm text-foreground/85">
              {education.map((item) => (
                <div key={item.title} className="border-b border-border/60 pb-4 last:border-b-0 last:pb-0">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-muted-foreground">{item.school}</p>
                  <p className="text-muted-foreground">{item.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="px-3 py-2 rounded-full bg-secondary/80 text-sm text-secondary-foreground"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <ul className="space-y-3 text-sm text-foreground/85 list-disc list-inside">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
