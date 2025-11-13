import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsGrid />
      <Categories />
      <Footer />
    </div>
  );
}
