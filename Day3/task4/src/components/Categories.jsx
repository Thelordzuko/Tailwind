const categories = ["Sneakers", "Boots", "Sandals", "Loafers"];

export default function Categories() {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Categories</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="px-6 py-4 bg-indigo-600 text-white rounded-xl font-semibold cursor-pointer hover:bg-indigo-700 transition"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
