export default function UnderDevelopmentCard() {
  return (
    <section className="max-w-[1400px] px-4 py-10 mx-auto">
      <div className="rounded-2xl text-black p-10 flex flex-col items-center justify-center text-center shadow-md">
        
        {/* Text Content */}
        <h2 className="text-2xl font-bold text-black">
          🚧 Website Under Development
        </h2>
        <p className="mt-2 text-gray-800 text-sm max-w-md">
          We’re working hard to bring you an amazing experience. Stay tuned for updates!
        </p>

        {/* Action */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3 text-sm font-semibold text-slate-100 shadow hover:bg-yellow-400 transition"
          >
            Notify Me
          </a>
        </div>
      </div>
    </section>
  );
}
