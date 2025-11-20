function Project() {
  const projectsData = [
    {
      id: 1,
      title: "Restaurant menu",
      description:
        "A clean, modern digital tool designed to manage a restaurant menu. This allows customers check for available dishes in the restaurant website.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Thelordzuko/Web-development/tree/master/JavaScript/Project/restaurant_menu",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "A clean, modern, and responsive React application designed to help you track your daily expenses. This app allows you to add, edit, delete, and filter expenses, all while visualizing your spending habits with a simple and clear dashboard. All currency is formatted for Nigerian Naira (₦).",
      tags: ["React", "MySQL", "CSS"],
      link: "https://github.com/Thelordzuko/React/tree/master/MiniProject",
    },
    {
      id: 3,
      title: "Foodie Website",
      description:
        "Foodie is a simple web project designed to showcase food-related content with a clean and minimal interface.",
      tags: ["HTML", "CSS"],
      link: "https://github.com/AjeeAI/html_project1",
    },
    {
      id: 4,
      title: "E-commerce website",
      description:
        "This project is a fully responsive web build featuring a modern navbar, hero section, product grid, categories, and footer. It showcases polished hover effects, mobile-friendly design, and is deployed live for real-world use.",
      tags: ["Python"],
      link: "https://github.com/Thelordzuko/Tailwind/tree/master/Day3/task4",
    },
  ];

  return (
    <section id="projects" className="bg-[#d9d9d9]">
      <div className="md:flex flex-col items-center pt-18 max-w-7xl mx-auto px-4">
        <h2 className="inline-block border-3 text-black border-black px-8 py-2 tracking-[0.3em] text-xl font-bold mb-13">
          PROJECTS
        </h2>
        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.id}
              className="text-black border flex flex-col border-gray-700 bg-white/5 backdrop-blur-xl mx-auto p-8 rounded-xl shadow-2xl hover:scale-105 md:hover:scale-110 transition-all duration-800 hover:border-black hover:text-black"
            >
              <div className="font-semibold text-xl mb-5">{project.title}</div>
              <div className="text-black-400 text-sm flex-grow leading-relaxed line-clamp-3 mb-4">
                {project.description}
              </div>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-amber-700 text-white px-4 py-1 rounded-4xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
