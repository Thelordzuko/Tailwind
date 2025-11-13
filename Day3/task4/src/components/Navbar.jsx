export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">ShopEasy</h1>
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-yellow-300 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Products</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Categories</li>
          <li className="hover:text-yellow-300 cursor-pointer transition">Contact</li>
        </ul>
        <button className="md:hidden bg-white text-indigo-600 px-3 py-1 rounded-lg font-semibold">
          Menu
        </button>
      </div>
    </nav>
  );
}
