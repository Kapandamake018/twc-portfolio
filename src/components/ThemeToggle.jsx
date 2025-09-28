import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed bottom-8 right-8 z-40 p-3 rounded-full transition-colors duration-300 shadow-lg bg-background/90 hover:scale-110",
                "focus:outline-none"
            )}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
}