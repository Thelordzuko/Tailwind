import { useEffect, useState } from "react";
import seyi from "./seyi.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

export default function Hero() {
  const icons = [
    { id: "github", icon: FaGithub, link: "https://github.com/Thelordzuko" },
    { id: "linkedin", icon: FaLinkedin, link: "https://www.linkedin.com/in/oluwaseyi-alebiosu-30095823b/" },
  ];

  const fullName = "Oluwaseyi Alebiosu";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen bg-black overflow-hidden scroll-smooth">

      <div className="absolute top-0 left-0 h-full w-[55%] bg-[#d9d9d9] origin-left -skew-x-[12deg] animate-fade-in"></div>

      <div className="absolute top-0 left-0 h-full w-[55%] flex flex-col justify-start pl-10 md:pl-20 animate-slide-in">
        <h1 className="pt-8 text-2xl font-bold text-black pl-30 mb-20">
          My Portfolio
        </h1>

        <div className="mt-20 flex flex-col justify-center pl-30">
          <h2 className="text-lg font-medium text-gray-700">Hi, I am</h2>

          <h1 className="text-4xl sm:text-5xl font-bold mt-3 text-black">
            {typedName}
            <span className="border-r-2 border-black animate-blink ml-1"></span>
          </h1>

          <h2 className="text-gray-600 font-medium mt-2 sm:mt-4">
            AI Developer / Tech Enthusiast
          </h2>

          <div className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base animate-fade-in">
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-green-600" />
              <FaPhone className="text-blue-600" />
              <span>07055868171</span>
            </p>

            <p className="flex items-center gap-2">
              <MdEmail className="text-red-600" />
              <span className="text-sm">alebiosuseyi20@gmail.com</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 mt-16 pl-30 gap-2">
          {icons.map(({ id, icon: Icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-black h-13 w-12 p-1 rounded-md border border-gray-800
                transform transition-all duration-300 hover:scale-110 hover:animate-bounce hover:border-cyan-400"
            >
              <Icon className="w-8 h-8 text-white" />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 h-full flex items-end pr-8 md:pr-39 pb-10 animate-image-fade">
        <img
          src={seyi}
          alt="My pic"
          className="h-[80%] md:h-[95%] object-contain rounded-full"
        />
      </div>
    </section>
  );
}
