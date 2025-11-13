import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: " Online Job Portal",
    description: "A responsive job portal enabling users to register, log in, and manage job postings with secure role-based authentication.",
    image: "/projects/project1.png",
    tags: ["React", "Spring Boot", "REST API", "Spring Data JPA", "Spring JWT", "SQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/aniket-soni03/online-job-portal-fullstack.git",
  },
  {
    id: 2,
    title: "Smart Recipe Finder",
    description: "A full-stack banking platform for managing accounts, transactions, and administrative operations with robust security controls.",
    image: "/projects/project2.png",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    demoUrl: "https://food-recipe-website-frontend.vercel.app",
    githubUrl: "https://github.com/aniket-soni03/food-recipe-website-frontend.git",
  },
  {
    id: 3,
    title: "News &Weather Dashboard",
    description: "A real-time dashboard that displays the latest news and weather updates using public APIs with a clean and responsive interface.",
    image: "/projects/project3.png",
    tags: ["React", "HTML", "CSS", "Fetch API"],
    demoUrl: "https://news-weather-dashboard-aniket.vercel.app",
    githubUrl: "https://github.com/aniket-soni03/News-Weather-Dashboard.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover project-card"
            >
              {/* Wrap card content in <a> to make it clickable */}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="p-6 flex flex-col h-full justify-between">
                  {/* Project image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 w-full rounded-md"
                  />

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-center">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm text-center mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex justify-center items-center gap-4 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 relative z-10"
                      onClick={(e) => e.stopPropagation()} // So GitHub link click doesn't trigger demoUrl
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aniket-soni03"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
