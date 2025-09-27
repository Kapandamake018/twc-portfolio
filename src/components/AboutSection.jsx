import { Briefcase, Code } from "lucide-react";
import { User } from "lucide-react";


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            A bit about me
                        </h3>
                        <p className="text-muted-foreground">
                            I am a passionate Computer Science student currently in my 
                            third year at <strong>ZCAS University</strong> in Lusaka, Zambia. 
                            I enjoy solving problems with code, experimenting with new 
                            technologies, and building applications that make life easier.
                        </p>
                        <p className="text-muted-foreground">
                            My interests include <span className="font-medium">Backend 
                            Development, Machine Learning, and Data Analytics</span>. 
                            I have experience working with Python, Java, HTML, CSS, 
                            and SQL databases like PostgreSQL and MySQL.
                        </p>
                        <p className="text-muted-foreground">
                            Outside academics, I love learning by doing — from building 
                            a <em>Library Management System</em> in Python to experimenting 
                            with web applications and exploring DevOps practices.
                        </p>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch</a>
                        <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download CV</a>
                    </div>
                    </div>

{/* Right Column */}
<div className="grid grid-cols-1 gap-6">
    {/* Code */}
    <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Backend Development</h4>
                <p className="text-muted-foreground">
                    Designing and building efficient server-side applications with Python, Java, and SQL databases.
                </p>
            </div>
        </div>
    </div>

    {/* User */}
    <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Collaboration</h4>
                <p className="text-muted-foreground">
                    Experienced in working with teams on academic and personal projects, emphasizing communication and shared problem-solving.
                </p>
            </div>
        </div>
    </div>

    {/* Briefcase */}
    <div className="gradient-border p-6 card-hover">
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Machine Learning & Analytics</h4>
                <p className="text-muted-foreground">
                    Exploring data-driven solutions and learning machine learning concepts through hands-on projects and experimentation.
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
 