import React, { useState, useEffect } from "react";
import "./Demo.css";

const TypingEffect = () => {
  const text = "Hi, I'm Aniket Soni"; // ✏️ Your name or any text you want to animate
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Stop when the whole text is typed
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, 150); // typing speed in ms (lower = faster)
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="text-3xl font-bold text-center mt-10 text-blue-600">
      {displayedText}
      <span className="animate-pulse">|</span> {/* blinking cursor */}
    </div>
  );
};

export default TypingEffect;