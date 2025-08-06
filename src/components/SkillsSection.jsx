import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Web Development - Frontend
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Angular", level: 40, category: "frontend" },

  // Web Development - Backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Laravel", level: 85, category: "backend" },
  { name: "JEE", level: 60, category: "backend" },

  // Web Development - Tools
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Figma", level: 50, category: "tools" },
  { name: "VS Code", level: 80, category: "tools" },
  { name: "Postman", level: 70, category: "tools" },
  { name: "WordPress", level: 95, category: "tools" },

  // Programming Languages
  { name: "Java", level: 75, category: "languages" },
  { name: "Python", level: 70, category: "languages" },
  { name: "C", level: 65, category: "languages" },
  { name: "VHDL", level: 55, category: "languages" },

  // IoT & Embedded
  { name: "IoT Coding", level: 70, category: "iot" },
  { name: "Code Design", level: 60, category: "iot" },
  { name: "Embedded Systems", level: 60, category: "iot" },
];

const topCategories = ["all", "webdev", "languages", "iot"];
const webdevSubCategories = ["all", "frontend", "backend", "tools"];

const categoryLabels = {
  all: "All",
  webdev: "Web Development",
  languages: "Programming Languages",
  iot: "IoT & Embedded",
};

const subCategoryLabels = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubCategory, setActiveSubCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const MAX_VISIBLE_SKILLS = 9; // 3 rows * 3 cols

  // Filter skills based on active category and subcategory
  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;

    if (activeCategory === "webdev") {
      if (activeSubCategory === "all") {
        return ["frontend", "backend", "tools"].includes(skill.category);
      } else {
        return skill.category === activeSubCategory;
      }
    } else {
      return skill.category === activeCategory;
    }
  });

  // Decide which skills to show based on showAll state
  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, MAX_VISIBLE_SKILLS);

  // When changing top category, reset subcategory and showAll
  const onCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubCategory("all");
    setShowAll(false);
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Top-level categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {topCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => onCategoryClick(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {categoryLabels[category] || category}
            </button>
          ))}
        </div>

        {/* Subcategories for Web Development only */}
        {activeCategory === "webdev" && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {webdevSubCategories.map((subcat, key) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSubCategory(subcat);
                  setShowAll(false);
                }}
                className={cn(
                  "px-4 py-1 rounded-full text-sm transition-colors duration-300",
                  activeSubCategory === subcat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/60 text-foreground hover:bg-secondary"
                )}
              >
                {subCategoryLabels[subcat] || subcat}
              </button>
            ))}
          </div>
        )}

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less button */}
        {filteredSkills.length > MAX_VISIBLE_SKILLS && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
