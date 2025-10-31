import { Briefcase, Code, User } from "lucide-react";
import { Monitor, Server, Database } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Fresher Exploring React & Full Stack Development
            </h3>

            <p className="text-muted-foreground">
              As a trained Java Full Stack Developer, I love combining React’s front-end flexibility with the power of Java and Spring Boot. I’m constantly improving my skills to build secure and seamless web applications.
            </p>

            <p className="text-muted-foreground">
              Through my projects, I’ve learned how to build complete, real-world solutions — from designing interactive UIs to securing backend APIs. I’m eager to apply these skills in a professional environment and keep expanding my technical expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1Yc4pluIbSy3kE62s4ZXccEu3QMtU3qZO/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-End Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and dynamic web interfaces using React, JavaScript, HTML, and CSS for smooth user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Back-End Development</h4>
                  <p className="text-muted-foreground">
                    Developing secure and scalable RESTful APIs with Java, Spring Boot, and Hibernate, integrating front-end with strong back-end logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Database & API Integration</h4>
                  <p className="text-muted-foreground">
                    Designing efficient SQL databases and connecting front-end components to APIs with proper data handling and validation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// 🧩 1️⃣ Front-End Development

// Building responsive and dynamic web interfaces using React, JavaScript, HTML, and CSS for smooth user experiences.

// ⚙️ 2️⃣ Back-End Development

// Developing secure and scalable RESTful APIs with Java, Spring Boot, and Hibernate, integrating front-end with strong back-end logic.

// 🗄️ 3️⃣ Database & API Integration

// Designing efficient SQL databases and connecting front-end components to APIs with proper data handling and validation.