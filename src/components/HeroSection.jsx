import { ArrowDown } from "lucide-react";
import { profile } from "../data/portfolio";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-7xl mx-auto text-center z-10">
        <div className="space-y-6 -translate-y-4 md:-translate-y-10">
          <p className="text-sm md:text-base uppercase tracking-[0.35em] text-primary/80 opacity-0 animate-fade-in">
            {profile.location}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I&apos;m </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Ahmed
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Chkir
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-violet-500 to-primary px-7 py-3 font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(139,92,246,0.45)] active:translate-y-0"
            >
              View Featured Work
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-background/20 px-7 py-3 font-medium text-primary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-foreground"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/50 px-7 py-3 font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:text-foreground"
            >
              Contact Me
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
