import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span>Hi, I'm </span>
                    <span className="text-primary">Thomas</span>
                    <span className={cn("ml-2")}>👋</span>
                    <span className={cn("opacity-0", "animate-fade-in-delay-2")}>
                        Web Developer
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                    I craft responsive websites where technology meets creativity
                </p>

                <div className="flex justify-center gap-4">
                    <a
                        href="#projects"
                        className="cosmic-button"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="cosmic-button-outline"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};