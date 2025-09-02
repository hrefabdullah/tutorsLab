export default function TeacherProfileEdit() {
  return (
    <div className="max-w-[900px] mx-auto bg-white rounded-xl shadow border border-gray-200 p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Profile</h1>

      {/* Profile & Cover Upload */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Cover Image */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Cover Photo
          </label>
          <div className="relative h-40 w-full border border-gray-300 rounded-lg overflow-hidden bg-yellow-50">
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
            <p className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm">
              Click to upload cover
            </p>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-32 h-32 lg:w-40 lg:h-40 relative">
          <label className="block text-sm font-medium text-slate-700 mb-1">Profile Picture</label>
          <div className="relative w-full h-full rounded-full border border-gray-300 overflow-hidden bg-yellow-50">
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full" />
            <p className="absolute inset-0 flex items-center justify-center text-slate-500 text-xs text-center px-2">
              Upload
            </p>
          </div>
        </div>
      </div>

      {/* Profile Form */}
      <form className="space-y-6">
        {/* Name & Subject */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Subject / Expertise</label>
            <input
              type="text"
              placeholder="Physics, Chemistry, etc."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-900"
            />
          </div>
        </div>

        {/* Location & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
            <input
              type="text"
              placeholder="City, Country"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Experience</label>
            <input
              type="text"
              placeholder="Years of experience"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-900"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
          <textarea
            placeholder="Write a short bio about yourself..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-900"
            rows={4}
          ></textarea>
        </div>

        {/* Subjects / Courses */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Subjects / Courses</label>
          <input
            type="text"
            placeholder="Separate subjects with commas"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none text-slate-900"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-yellow-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-yellow-400 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
