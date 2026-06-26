import { Briefcase, Code, User } from "lucide-react";
import { profile } from "../data/portfolio";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Junior Full-Stack Engineer with AI and IoT Experience
            </h3>

            <p className="text-muted-foreground">
              I am Ahmed Chkir, a junior full-stack software engineer based in
              Tunisia. My work spans web applications, AI-assisted workflows,
              APIs, databases, and IoT systems, with a strong focus on shipping
              practical solutions that are maintainable and easy to use.
            </p>

            <p className="text-muted-foreground">
              My recent work includes a festival management platform, an AI
              business-plan generator, a smart greenhouse, and a face
              recognition system. I enjoy bridging product thinking with strong
              technical execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-start">
              <a href="#contact" className="cosmic-button w-full sm:w-auto text-center">
                Get In Touch
              </a>
              <a
                href={profile.cv}
                download="Ahmed_Chkir_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-start md:pt-2 lg:pt-0">
            <div className="absolute w-[360px] h-[360px] bg-primary/30 rounded-full blur-3xl opacity-40 z-0 animate-pulse" />
            <img
              src="/ahmedchkir.png"
              alt="Ahmed Chkir portrait"
              className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border border-white/10 md:mt-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {[
            {
              label: "Focus",
              title: "Full-stack engineer with AI and IoT experience",
              icon: <Code className="h-6 w-6 text-primary" />,
            },
            {
              label: "Location",
              title: profile.location,
              icon: <User className="h-6 w-6 text-primary" />,
            },
            {
              label: "Status",
              title: "Open to internships and junior roles",
              icon: <Briefcase className="h-6 w-6 text-primary" />,
            },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">{item.icon}</div>
                <div className="text-left min-w-0">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary/70">
                    {item.label}
                  </p>
                  <h4 className="mt-2 text-base md:text-lg font-semibold leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
