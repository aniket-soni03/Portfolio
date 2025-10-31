import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {

  const fullText = "Hi, I'm Aniket Soni";
  const typingSpeed = 100; // typing speed in ms
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  // split the text for color styling exactly as your original version
  const parts = displayText.split(" ");
  const hiPart = parts[0] ? parts[0] : "";
  const imPart = parts[1] ? parts[1] : "";
  const namePart1 = parts[2] ? parts[2] : "";
  const namePart2 = parts[3] ? parts[3] : "";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-100">{hiPart}</span>{" "}
            <span className="opacity-100">{imPart}</span>{" "}
            <span className="text-primary opacity-100">{namePart1}</span>{" "}
            <span className="text-gradient ml-2 opacity-100">{namePart2}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I created seamless user interfaces with React and modern web tools.
            With a strong Java and Spring Boot foundation, I turn ideas into complete, full-stack web applications.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
