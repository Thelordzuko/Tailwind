import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="absolute top-8 right-10 md:right-16 flex items-center z-50">

      <ul className="hidden md:flex flex-row space-x-6 gap-5 text-white text-lg pr-30">
        {links.map((link) => (
          <li
            key={link.id}
            className={`${
              link.name === "Home" ? "text-yellow-400 font-semibold" : ""
            } hover:text-yellow-400 hover:scale-105 transition cursor-pointer`}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </li>
        ))}
      </ul>

      <button
        className="md:hidden ml-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <HiOutlineX className="w-8 h-8 text-white" />
        ) : (
          <HiOutlineMenu className="w-8 h-8 text-white" />
        )}
      </button>

      <ul
        className={`absolute top-14 right-0 bg-black/90 backdrop-blur-md rounded-lg shadow-lg py-4 w-40 flex flex-col space-y-3 px-4 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.id}
            className={`${
              link.name === "Home" ? "text-yellow-400 font-semibold" : ""
            } hover:text-yellow-400 hover:scale-105 transition cursor-pointer`}
            onClick={() => scrollToSection(link.id)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}



