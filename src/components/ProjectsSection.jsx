import { ArrowRight, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Wina Bwangu Website",
    description:
      "A repository for a simple website built using HTML, CSS, and JavaScript. The website is designed to be responsive and user-friendly, showcasing various features and content.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Kapandamake018/wina-bwangu.git",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description:
      "This is my personal portfolio website built using React and Tailwind CSS. It showcases my projects, skills, and experience in a clean and modern design. The website is fully responsive and optimized for performance.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/Kapandamake018/twc-portfolio.git",
  },
    {
    id: 3,
    title: "Glam Gardens Official Website",
    description:
      "This is the official website for Glam Gardens, built using React and Tailwind CSS. It showcases the various services offered by Glam Gardens, along with a gallery of images and a contact form.",
    image: "/projects/project5.png",
    tags: ["React", "Tailwind CSS"],
    URL: "https://glam-gardens.vercel.app/",
  },
    {
    id: 4,
    title: "Circle Property Official Website",
    description:
      "This is the official website for Circle Property, built using React and Tailwind CSS. It showcases the various services offered by Circle Property, along with a gallery of images and a contact form.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS"],
    URL: "https://circle-property.vercel.app/",
  },
  {
    id: 5,
    title: "Data Structures and Algorithms",
    description:
      "In this repository, I have implemented various data structures and algorithms using Python. The project includes implementations of linked lists, stacks, queues, binary trees, sorting algorithms, and searching algorithms. Each implementation is accompanied by test cases to demonstrate its functionality.",
    image: "/projects/project3.png",
    tags: ["Python"],
    githubUrl: "https://github.com/Kapandamake018/stacks-and-queues.git",
  },
]

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px04 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently. Click the icon
          to visit the project's website or view its GitHub repository.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Pushes GitHub link to bottom */}
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.URL ? project.URL : project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={project.URL ? "Visit project website" : "View source on GitHub"}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {project.URL ? (
                        <ExternalLink size={20} />
                      ) : (
                        <Github size={20} />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/Kapandamake018"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
