"use client";
import { useEffect, useState } from "react";

export default function QuoteStrip() {
  const quotes = [
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "An investment in knowledge pays the best interest."
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000); // 3s per quote
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="hidden md:flex w-full bg-yellow-500  items-center justify-center overflow-hidden h-[5vh] lg:h-[6vh] mb-2">
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {quotes.map((quote, i) => (
          <p
            key={i}
            className={`absolute text-center text-white text-xs sm:text-base md:text-md font-medium transition-opacity duration-700 ease-in-out px-4 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            {quote}
          </p>
        ))}
      </div>
    </div>
  );
}
