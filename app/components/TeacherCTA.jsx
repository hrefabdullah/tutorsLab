export default function TeacherCTA() {
  return (
    <section className="max-w-[1400px] px-4 py-10 mx-auto mb-5">
      <div className="rounded-2xl bg-yellow-500 p-10 flex lg:flex-row gap-5 flex-col items-center justify-between shadow-md">
        
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-2xl font-bold text-white">
            Are you a teacher?
          </h2>
          <p className="mt-2 text-gray-300 text-sm">
            Join TutorsLab today and connect with thousands of students seeking personalized learning.
          </p>
        </div>

        {/* Action */}
        <div className="mt-6 lg:mt-0">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-slate-800 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-yellow-400 transition"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}
