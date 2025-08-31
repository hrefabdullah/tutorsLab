export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">TutorsLab</h2>
          <p className="mt-3 text-sm text-gray-400">
            Connecting passionate educators with students for personalized learning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Find Tutors</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Join as Tutor</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Categories</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">Subscribe to get the latest updates and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-md bg-gray-800 border border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="rounded-r-md bg-yellow-500 px-4 text-sm font-semibold text-white hover:bg-yellow-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TutorsLab. All rights reserved.
      </div>
    </footer>
  );
}
