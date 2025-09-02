import React from "react";
import Image from "next/image";

const teachers = [
  {
    id: 1,
    name: "Arif Khan",
    subject: "MSc. Mathematics",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    subject: "PhD Physics",
    rating: 4.8,
    avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Hamza Ali",
    subject: "English",
    rating: 4.7,
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Aman Gupta",
    subject: "Chemistry",
    rating: 4.9,
    avatar: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function TeachersBy({ cat }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 lg:px-20 py-10 bg-slate-800 mb-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-lg lg:text-2xl font-bold text-white">Best Teachers for class {cat} students</h2>
          <p className="text-xs text-gray-500">Best in class teaching for {cat} grade students</p>
        </div>
        <button className="rounded-md border border-gray-200 bg-white px-4 py-2 md:text-sm text-xs font-medium text-gray-700 transition hover:bg-gray-50">
          View all
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.map((t) => (
          <article
            key={t.id}
            className="rounded-xl overflow-hidden border border-gray-200 bg-white pb-3 px-3 pt-2 shadow-sm"
          >
            <div className="flex flex-col items-center gap-3">
              {/* Image wrapper */}
              <div className="relative lg:h-68 lg:w-68 h-40 w-38 overflow-hidden bg-gray-100 rounded-xl">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={212}
                  height={212}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />

                {/* Rating badge on top-left */}
                <span className="absolute top-2 left-2 rounded-md bg-yellow-50 px-2 py-0.5 text-xs font-semibold text-slate-800 shadow">
                  <span className="text-yellow-500">★</span> {t.rating}
                </span>
              </div>

              {/* Name + Subject */}
              <div className="text-center">
                <h3 className="lg:text-lg font-semibold text-gray-900 -mb-1">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.subject}</p>
              </div>
            </div>

            {/* Action */}
            <button className="mt-4 w-full rounded-md bg-slate-800 py-2 text-sm font-semibold text-white transition hover:bg-slate-900">
              View profile
            </button>
          </article>

        ))}
      </div>
    </section>
  );
}
