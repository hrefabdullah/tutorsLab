export default function CategoriesBento() {
  const categories = [
    { title: "Age", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHN8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", span: "col-span-2 row-span-1" },
    { title: "Class", img: "https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xhc3N8ZW58MHx8MHx8fDA%3D", span: "col-span-1 row-span-2" },
    { title: "Subject", img: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D", span: "col-span-1 row-span-2" },
    { title: "Exam", img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhhbXxlbnwwfHwwfHx8MA%3D%3D", span: "col-span-2 row-span-1" },
    { title: "School", img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjaG9vbHxlbnwwfHwwfHx8MA%3D%3D", span: "col-span-1 row-span-2" },
    { title: "Language", img: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWFraW5nfGVufDB8fDB8fHww", span: "col-span-1 row-span-1" },
    { title: "Skills", img: "https://images.unsplash.com/photo-1485460535564-844461f37f77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraWxsc3xlbnwwfHwwfHx8MA%3D%3D", span: "col-span-1 row-span-2" },
    { title: "Computer", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Explore by Category</h2>
        <p className="text-sm text-gray-500">Find tutors based on what matters to you</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[150px] gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`relative rounded-2xl overflow-hidden shadow-md cursor-pointer group ${cat.span}`}
          >
            {/* Background Image */}
            <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />

            {/* Centered Title */}
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-30">
              <span className="text-white font-semibold text-lg">{cat.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}