export default function TeacherCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-2xl bg-yellow-500 border border-yellow-200 p-8 flex flex-col lg:flex-row items-center justify-between shadow-md">
        
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-2xl font-bold text-gray-50">
            Are you a teacher?
          </h2>
          <p className="mt-2 text-gray-100 text-sm">
            Join TutorsLab today and connect with thousands of students seeking personalized learning.
          </p>
        </div>

        {/* Action */}
        <div className="mt-6 lg:mt-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow hover:bg-slate-200 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
