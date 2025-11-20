
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";

export function USFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 640 480">
      <rect width="640" height="480" fill="#b22234" />
      <g fill="#fff">
        <rect y="37" width="640" height="37" />
        <rect y="111" width="640" height="37" />
        <rect y="185" width="640" height="37" />
        <rect y="259" width="640" height="37" />
        <rect y="333" width="640" height="37" />
        <rect y="407" width="640" height="37" />
      </g>
      <rect width="296" height="259" fill="#3c3b6e" />
    </svg>
  );
}

export function NigeriaFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 3 2">
      <rect width="1" height="2" fill="#008753" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#008753" />
    </svg>
  );
}

export default function Skill() {
  return (
    <section id="skills" className="w-full bg-[#d9d9d9] py-20 px-4 text-center">

      <h2 className="inline-block border-3 border-black px-8 py-2 tracking-[0.3em] text-xl font-bold">
        SKILLS
      </h2>

      <h3 className="mt-10 tracking-wide text-l font-bold">USING NOW:</h3>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-5xl text-[#E34F26]" />
          <p className="mt-2 text-sm font-medium text-gray-700">HTML5</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-5xl text-[#1572B6]" />
          <p className="mt-2 text-sm font-medium text-gray-700">CSS3</p>
        </div>
        <div className="flex flex-col items-center">
          <FaSass className="text-5xl text-[#CC6699]" />
          <p className="mt-2 text-sm font-medium text-gray-700">Sass</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="text-5xl text-[#F7DF1E]" />
          <p className="mt-2 text-sm font-medium text-gray-700">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="text-5xl text-[#61DAFB]" />
          <p className="mt-2 text-sm font-medium text-gray-700">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="text-5xl text-[#7711F6]" />
          <p className="mt-2 text-sm font-medium text-gray-700">Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt className="text-5xl text-[#F1502F]" />
          <p className="mt-2 text-sm font-medium text-gray-700">Git</p>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="text-5xl text-[#0ACF83]" />
          <p className="mt-2 text-sm font-medium text-gray-700">Figma</p>
        </div>
      </div>

      <h3 className="mt-20 tracking-wide text-l font-bold">LEARNING:</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-5xl text-[#83CD29]" />
          <p className="mt-2 text-sm font-medium text-gray-700">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb className="text-5xl text-[#47A248]" />
          <p className="mt-2 text-sm font-medium text-gray-700">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="text-5xl text-[#3178C6]" />
          <p className="mt-2 text-sm font-medium text-gray-700">TypeScript</p>
        </div>
      </div>

      <h3 className="mt-20 tracking-wide text-l font-bold">LANGUAGES:</h3>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <USFlag className="w-16 h-10 rounded shadow" />
          <p className="mt-2 text-sm font-medium text-gray-700">English</p>
        </div>
        <div className="flex flex-col items-center">
          <NigeriaFlag className="w-16 h-10 rounded shadow" />
          <p className="mt-2 text-sm font-medium text-gray-700">Yoruba</p>
        </div>
      </div>
    </section>
  );
}
