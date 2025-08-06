import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Innovative Web Developer with IoT Expertise
            </h3>

            <p className="text-muted-foreground">
              I am Ahmed Chkir, a third-year IoT student at Enetcom Sfax,
              specializing in web development. I focus on building efficient and
              scalable web applications using modern technologies like HTML,
              CSS, JavaScript, React, and Angular.
            </p>

            <p className="text-muted-foreground">
              Combining my IoT background with web development, I bring a unique
              perspective to projects. I am continuously improving my backend
              skills to become a full-stack developer and enjoy crafting
              solutions that are both user-friendly and technically sound.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/AhmedChkir_Cv.pdf"
                download="Ahmed_Chkir_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center items-center">
              {/* Purple glow behind image */}
             <div className="absolute w-[450px] h-[450px] bg-purple-500 rounded-full blur-3xl opacity-40 z-0 animate-pulse" />

            {/* Your professional photo */}
           <img
              src="/ahmedchkir.png"
              alt="Ahmed Chkir"
              className="relative z-10 w-96 h-96 object-cover rounded-full shadow-2xl"
             />
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: <Code className="h-6 w-6 text-primary" />,
              title: "Web Development & WordPress",
              desc:
                "Creating responsive websites and custom WordPress solutions using modern frameworks.",
            },
            {
              icon: <User className="h-6 w-6 text-primary" />,
              title: "UI/UX Design",
              desc:
                "Designing user-friendly interfaces and seamless experiences focused on accessibility and engagement.",
            },
            {
              icon: <Briefcase className="h-6 w-6 text-primary" />,
              title: "Project Management",
              desc:
                "Managing projects end-to-end with agile methodologies to ensure timely delivery and quality results.",
            },
            {
              icon: <User className="h-6 w-6 text-primary" />,
              title: "Backend Development",
              desc:
                "Developing robust server-side applications using Node.js, Express, and Laravel.",
            },
            {
              icon: <User className="h-6 w-6 text-primary" />,
              title: "Version Control & Collaboration",
              desc:
                "Using GitHub for code management, collaboration, and continuous integration.",
            },
            {
              icon: <User className="h-6 w-6 text-primary" />,
              title: "API Development & Testing",
              desc:
                "Creating and testing RESTful APIs with tools like Postman to ensure reliable integrations.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="gradient-border p-6 card-hover rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">{item.icon}</div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
