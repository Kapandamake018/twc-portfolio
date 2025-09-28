import { cn } from "@/lib/utils";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span>Hello, I'm </span>
                        <span className="text-primary">Tumbikani</span>
                        <span className="ml-2">👋</span>
                        <span className="opacity-0 animate-fade-in-delay-2">
                            Full Stack Developer
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                        Building digital experiences that make a difference
                    </p>

                    <div className="flex justify-center gap-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                        <a href="#contact" className="cosmic-button-outline">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};