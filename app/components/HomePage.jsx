import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import BestTeachers from "./BestTeachers";
import QuoteStrip from "./QuoteStrip";
import CategoriesBento from "./CategoryBento";
import Footer from "./Footer";
import TeacherCTA from "./TeacherCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <QuoteStrip />
      <Navbar />
      <Hero />
      <BestTeachers />
      <CategoriesBento />
      <TeacherCTA />
      <Footer />
    </main>
  );
}


