export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between bg-[#d9d9d9] text-gray-900">
      
      <div className="pt-16 sm:pt-20 flex flex-col items-center px-4">
        <div className="border-4 border-black px-6 sm:px-10 py-2 sm:py-3">
          <h1 className="tracking-[0.4em] font-bold text-xl sm:text-lg">
            CONTACT
          </h1>
        </div>

        <p className="mt-5 text-center sm:text-sm max-w-lg text-gray-700">
          I believe in meaningful connections. If you've got an idea, a question, or a project in mind, let’s talk. Together, we can create something impactful.
        </p>

        <div className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs tracking-widest text-gray-600">
          <span>───</span> <span>○</span> <span>───</span>
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-lg mx-auto flex flex-col gap-5 mt-10 px-4 sm:px-6"
      >
        <input
          type="text"
          placeholder="ENTER YOUR NAME*"
          className="bg-transparent border-b-3 border-l-3 border-black px-2 py-2 text-xs sm:text-sm tracking-wide focus:outline-none"
        />

        <input
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          className="bg-transparent border-b-3 border-l-3 border-black px-2 py-2 text-xs sm:text-sm tracking-wide focus:outline-none"
        />

        <input
          type="text"
          placeholder="PHONE NUMBER"
          className="bg-transparent border-b-3 border-l-3 border-black px-2 py-2 text-xs sm:text-sm tracking-wide focus:outline-none"
        />

        <textarea
          placeholder="YOUR MESSAGE*"
          rows="4"
          className="bg-transparent border-b-3 border-l-3 border-black px-2 py-2 text-xs sm:text-sm tracking-wide focus:outline-none resize-none"
        />

        <button
          type="submit"
          className="mx-auto mt-4 px-8 sm:px-10 py-2 border-t border-b border-black font-bold tracking-widest text-[13px] sm:text-xl hover:opacity-70 transition cursor-pointer"
        >
          SUBMIT
        </button>
      </form>

      <footer className="bg-black text-white mt-20 py-3 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block mx-auto text-[10px] sm:text-xs tracking-widest cursor-pointer hover:opacity-70"
        >
          ^<br />BACK TO TOP
        </button>

        <div className="flex justify-center gap-6 sm:gap-8 text-base sm:text-lg mb-8">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-envelope"></i>
        </div>

        <p className="text-[8px] sm:text-[10px] tracking-wider opacity-70">
          ©2025 Oluwaseyi Alebiosu. All Rights Reserved.
        </p>
      </footer>
    </section>
  );
}
