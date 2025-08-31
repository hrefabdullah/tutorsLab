import React from "react";
import Link from "next/link";
import Image from "next/image";
import lightIllustration from "../assets/teacherIllustration.jpg";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 py-6 md:grid-cols-2 md:py-16">
      {/* Left: copy */}
      <div className="flex flex-col justify-center">
        <h1 className="text-[50px] w-[70%] font-bold tracking-tight leading-[1] sm:text-[55px] ">
          Find the <span className="text-yellow-500">right tutor</span> for yourself
        </h1>
        <p className="mt-4 text-sm md:text-md text-gray-600">
          TutorsLab connects passionate educators with students looking for
          personalized learning.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-5 py-2.5 text-md font-semibold text-white transition hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            Join as Tutor
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-5 py-2.5 text-md font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Find Tutors
          </Link>
        </div>
      </div>

      {/* Right: reserved space for illustration */}
      <div className="relative">
        <div className="aspect-[5/4] w-full overflow-hidden rounded-2xl">
          <Image
            src={lightIllustration}
            alt="Teachers helping students"
            className="h-full w-full object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}


