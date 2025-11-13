export default function ProductCard({ img, name, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img src={img} alt={name} className="w-full h-60 object-cover transform transition hover:scale-110" />
      </div>
      <div className="p-5 text-center">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition">{name}</h2>
        <p className="text-lg font-bold text-indigo-700 mt-2">{price}</p>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
