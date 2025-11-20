import { FaTools } from "react-icons/fa";
import { MdDesignServices, MdOutlineDeveloperMode } from "react-icons/md";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#d9d9d9] py-20 px-4 text-center font-secondary">
      <h1 className="inline-block border-3 border-black px-8 py-2 tracking-[0.3em] font-bold">
        ABOUT ME
      </h1>
      <p className="max-w-2xl mt-6 mx-auto text-gray-700 text-xl">
        I'm an emerging AI Developer passionate about building intuitive, scalable, and human-centered solutions...
      </p>
      <div className="mt-8 flex justify-center">
        <div className="w-20 h-[1px] bg-black"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto mt-12">
        <div>
          <MdDesignServices className="mx-auto text-3xl" />
          <h3 className="mt-3 font-bold tracking-wide text-sm">DESIGN</h3>
          <p className="mt-2 text-gray-600 px-5 text-l">I design clean, intuitive, and user-focused digital experiences...</p>
        </div>
        <div>
          <MdOutlineDeveloperMode className="mx-auto text-3xl" />
          <h3 className="mt-3 font-bold tracking-wide text-sm">DEVELOPMENT</h3>
          <p className="mt-2 text-l text-gray-600 px-5">I build efficient, scalable, and user-centric websites...</p>
        </div>
        <div>
          <FaTools className="mx-auto text-3xl" />
          <h3 className="mt-3 font-bold tracking-wide text-sm">MAINTENANCE</h3>
          <p className="mt-2 text-l text-gray-600 px-5">I ensure systems remain secure, updated, and optimized...</p>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="w-28 h-[1px] bg-black"></div>
      </div>
    </section>
  );
}
