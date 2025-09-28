import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const HeroSection = () => {
return ( <section id="hero" className="relative min-h-screen flex items-center"> <div className="container max-w-4xl mx-auto px-4"> <div className="grid md:grid-cols-2 gap-8 items-center">
{/* Text Content */} <div className="text-center md:text-left space-y-4"> <h1 className="text-4xl md:text-6xl font-bold mb-6"> <span>Hi There, Hello! I'm </span> <span>Tumbikani </span> <span className="opacity-0 animate-fade-in-delay-2 text-primary">
Kapandamake </span> </h1>


        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          A computer science student hoping to help change the world in one way or another.
        </p>

        <div className="flex justify-center md:justify-start gap-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
          <img
            src="/images/profile.jpg"
            alt="Tumbikani Kapandamake"
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full object-cover border-4 border-primary/20 mx-auto relative z-10"
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>

);
};
