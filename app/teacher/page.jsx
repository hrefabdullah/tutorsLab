export default function TeacherDetailPage() {
  const teacher = {
    name: "Aman Gupta",
    subject: "Physics Educator • NEET & JEE Mentor",
    avatar:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    cover:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y292ZXJ8ZW58MHx8MHx8fDA%3D",
    experience: "10+ years",
    location: "Rampur, Uttar Pradesh",
    students: 1200,
    bio: "Passionate Physics educator specializing in NEET & JEE preparation. I focus on building strong fundamentals and problem-solving skills.",
  };

  const courses = [
    {
      id: 1,
      title: "Mastering Mechanics for JEE",
      description: "Comprehensive mechanics module covering Newtonian physics with practice problems.",
      students: 300,
      duration: "8 weeks",
    },
    {
      id: 2,
      title: "NEET Physics Crash Course",
      description: "Quick revision program focusing on high-yield NEET physics topics.",
      students: 500,
      duration: "6 weeks",
    },
  ];

  const comments = [
    { id: 1, name: "Rohan Gupta", text: "Aman Gupta is the best mentor I’ve had. His teaching style is amazing!" },
    { id: 2, name: "Priya Sharma", text: "Very clear explanations. Helped me improve my NEET physics score a lot." },
  ];

  return (
    <div className="max-w-[1400px] mx-auto bg-white rounded-xl shadow border border-gray-200">
      {/* Cover Section */}
      <div className="relative">
        <div className="h-48 lg:h-56 w-full bg-slate-200 overflow-hidden rounded-b-xl">
          <img
            src={teacher.cover}
            alt="Cover"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-6">
          <div className="h-32 w-32 lg:h-40 lg:w-40 rounded-full border-4 border-white overflow-hidden shadow-md">
            <img
              src={teacher.avatar}
              alt={teacher.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 lg:px-10 pb-6 mt-20 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Left Side Info */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{teacher.name}</h1>
          <p className="text-sm text-slate-600 mt-1">{teacher.subject}</p>
          <p className="text-sm text-slate-500 mt-1">📍 {teacher.location}</p>

          {/* Stats */}
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
            <span>👨‍🎓 {teacher.students}+ Students</span>
            <span>⭐ {teacher.rating} / 5</span>
            <span>📚 {teacher.experience}</span>
          </div>
        </div>

        {/* Right Side CTA */}
        <div className="mt-6 lg:mt-0 flex gap-3">
          <button className="rounded-md bg-yellow-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-yellow-400 transition">
            Book a Session
          </button>
          <button className="rounded-md border border-gray-300 px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-gray-100 transition">
            Message
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 lg:px-10 py-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">About</h2>
        <p className="text-sm text-slate-600 leading-relaxed">{teacher.bio}</p>
      </div>

      {/* Subjects Section */}
      <div className="px-6 lg:px-10 py-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Subjects</h2>
        <ul className="flex flex-wrap gap-3">
          <li className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
            Physics
          </li>
          <li className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
            NEET Preparation
          </li>
          <li className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
            JEE Preparation
          </li>
        </ul>
      </div>

      {/* Ongoing Courses Section */}
      <div className="px-6 lg:px-10 py-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Ongoing Courses</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="p-5 border border-gray-200 rounded-lg shadow-sm bg-slate-50">
              <h3 className="text-base font-semibold text-slate-800">{course.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{course.description}</p>
              <div className="mt-3 flex justify-between text-xs text-slate-500">
                <span>👨‍🎓 {course.students} students</span>
                <span>⏳ {course.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="px-6 lg:px-10 py-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Student Reviews</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg bg-slate-50">
            <p className="text-sm text-slate-700">
              “Dr. Ananya makes Physics super easy to understand. Her problem-solving strategies helped me crack JEE Main with confidence.”
            </p>
            <p className="text-xs text-slate-500 mt-2">– Rohan Gupta</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg bg-slate-50">
            <p className="text-sm text-slate-700">
              “Amazing teacher! She explains concepts with real-life examples. Perfect mentor for NEET aspirants.”
            </p>
            <p className="text-xs text-slate-500 mt-2">– Priya Sharma</p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="px-6 lg:px-10 py-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-3">Comments</h2>

        {/* Comment Form */}
        <form className="mb-6">
          <textarea
            placeholder="Write a comment..."
            className="w-full p-3 border border-gray-300 rounded-lg text-sm text-slate-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            rows={3}
          ></textarea>
          <button
            type="submit"
            className="mt-3 rounded-md bg-yellow-500 px-5 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-yellow-400 transition"
          >
            Post Comment
          </button>
        </form>

        {/* Existing Comments */}
        <div className="space-y-4">
          {comments.map((c) => (
            <div key={c.id} className="p-4 border border-gray-200 rounded-lg bg-slate-50">
              <p className="text-sm text-slate-700">{c.text}</p>
              <p className="text-xs text-slate-500 mt-2">– {c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
