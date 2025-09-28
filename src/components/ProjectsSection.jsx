import { ArrowRight, Github } from "lucide-react"
import { useState } from "react"

const projects =[
    {
        id: 1,
        title: "Project One",
        description: "This is a brief description of Project One.",
        image: "/projects/project1.png",
        tags: ["HTML", "CSS", "JavaScript"],
        githubUrl:"https://github.com/Kapandamake018/wina-bwangu.git"
    },
        {
        id: 2,
        title: "Project Two",
        description: "This is a brief description of Project One.",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind CSS"],
        githubUrl:"https://github.com/Kapandamake018/twc-portfolio.git"
    },
        {
        id: 3,
        title: "Project Three",
        description: "This is a brief description of Project One.",
        image: "/projects/project1.png",
        tags: ["Python"],
        githubUrl:"https://github.com/Kapandamake018/stacks-and-queues.git"
    }

    
]

export const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  return (
    <section id="projects" className="py-24 px04 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                 Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                 Here are some of the projects I've worked on recently. Click on the GitHub icon to view the code repository.
            </p>
            <div className="flex gap-4 mb-8">
              <button onClick={() => setFilter('all')}>All</button>
              <button onClick={() => setFilter('react')}>React</button>
              <button onClick={() => setFilter('node')}>Node.js</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
                {projects.filter(project => filter === 'all' || project.tags.includes(filter)).map((project, key) => (
                    <div
                     key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img
                             src={project.image} 
                             alt={project.title}
                             className="w-full h-full object-covr transition-transform duration-500 group-hover:scale-110"
                             />
                        </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 pu-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}                                    
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>

                                    </a>

                                </div>
                        </div>
                            </div>

                    </div>
                
                ))}


            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Kapandamake018"
                target="_blank">
                    Check my Github <ArrowRight size={16}/>

                    
                </a>

            </div>
            
            </div>
    </section>
  );
};