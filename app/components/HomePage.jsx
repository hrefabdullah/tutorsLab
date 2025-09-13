import React from "react";
import Hero from "./Hero";
import BestTeachers from "./BestTeachers";
import QuoteStrip from "./QuoteStrip";
import CategoriesBento from "./CategoryBento";
import TeacherCTA from "./TeacherCTA";
import TeachersBy from "./TeachersBy";
import UnderDevelopmentCard from "./UnderDevelopmentCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <QuoteStrip />
      <Hero />
      <UnderDevelopmentCard />
      <BestTeachers />
      <CategoriesBento />
      <TeachersBy cat={'IX & X'} />
      <TeachersBy cat={'XI & XII'} />
      <TeacherCTA />
      {/* <ExamPrepCard /> */}
    </main>
  );
}


