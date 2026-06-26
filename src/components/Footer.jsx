import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <div className="flex items-center gap-3">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
          GitHub
        </a>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
