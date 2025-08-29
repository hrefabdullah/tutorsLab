import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BestTeachers from "./BestTeachers";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <BestTeachers />
    </main>
  );
}


