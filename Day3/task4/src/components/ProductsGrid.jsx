import ProductCard from "./ProductCard";

const products = [
  { name: "Sneaker 1", price: "₦25,000", img: "https://i.pinimg.com/1200x/0c/3c/a0/0c3ca070c785c0d52923571f07a312c3.jpg" },
  { name: "Sneaker 2", price: "₦30,000", img: "https://i.pinimg.com/736x/cc/be/5d/ccbe5dad7b58097cfbebd2183f3fc663.jpg" },
  { name: "Sneaker 3", price: "₦28,000", img: "https://i.pinimg.com/1200x/dc/35/02/dc35027c5dfbda313a716b2bde3619a8.jpg" },
  { name: "Sneaker 4", price: "₦35,000", img: "https://i.pinimg.com/736x/28/d8/13/28d813143e48e600b0d9de464b151dad.jpg" },
  { name: "Sneaker 5", price: "₦22,000", img: "https://i.pinimg.com/736x/a3/f1/e5/a3f1e5873259df96599d278e41efa0d7.jpg" },
  { name: "Sneaker 6", price: "₦27,000", img: "https://i.pinimg.com/736x/4f/be/f4/4fbef452a5061d627d9e3995f67c35c6.jpg" },
];

export default function ProductsGrid() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 object-contain">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </section>
  );
}
