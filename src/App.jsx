const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "REST API",
];

const projects = [
  {
    title: "Furniture E-Commerce",
    description:
      "Full-stack furniture e-commerce platform with authentication, cart functionality and admin dashboard.",
    tech: "React • Node.js • MongoDB • Tailwind",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
  {
    title: "Notes Sharing Platform",
    description:
      "Students can upload, download and manage study notes with a modern responsive UI.",
    tech: "React • Express • MongoDB",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
  {
    title: "Task Manager",
    description:
      "Productivity application with authentication and CRUD operations.",
    tech: "React • Node.js • MongoDB",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-3 md:p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="block lg:grid lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <aside className="bg-slate-900 text-white p-6 lg:p-8">
            {/* Profile */}
            <div className="text-center">
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-3xl lg:text-4xl font-bold">
                DG
              </div>

              <h1 className="mt-4 text-2xl lg:text-3xl font-bold">
                Devendra Gehlot
              </h1>

              <p className="text-cyan-400 mt-2">Full Stack Developer</p>

              <div className="mt-3 inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                Available for Opportunities
              </div>
            </div>

            {/* Mobile Contact Cards */}
            <div className="grid grid-cols-2 gap-3 mt-8 lg:hidden">
              <div className="bg-slate-800 p-3 rounded-xl">
                <p className="text-xs text-slate-400">Phone</p>
                <p className="text-sm mt-1">+91 7742196865</p>
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-sm mt-1">Jodhpur</p>
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-sm mt-1">yourmail@gmail.com</p>
              </div>

              <div className="bg-slate-800 p-3 rounded-xl">
                <p className="text-xs text-slate-400">Status</p>
                <p className="text-sm mt-1">Open to Work</p>
              </div>
            </div>

            {/* Desktop Contact */}
            <div className="hidden lg:block mt-10">
              <h2 className="font-bold text-lg mb-4">Contact</h2>

              <div className="space-y-3 text-sm text-slate-300">
                <p>📧 yourmail@gmail.com</p>
                <p>📱 +91 7742196865</p>
                <p>📍 Jodhpur, Rajasthan</p>
              </div>
            </div>

            {/* Profiles */}
            <div className="mt-10">
              <h2 className="font-bold text-lg mb-4">Profiles</h2>

              <div className="space-y-3 text-sm">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300"
                >
                  GitHub Profile
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300"
                >
                  LinkedIn Profile
                </a>

                <a
                  href="https://yourportfolio.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-cyan-400 hover:text-cyan-300"
                >
                  Portfolio Website
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h2 className="font-bold text-lg mb-4">Skills</h2>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-800 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="p-5 md:p-8 lg:p-10">
            {/* About */}
            <section>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>

              <p className="text-slate-600 leading-7">
                Passionate Full Stack Developer specializing in React.js,
                Node.js and MongoDB. I enjoy building modern, scalable and
                user-friendly applications. Strong understanding of frontend
                architecture, backend APIs and database design.
              </p>
            </section>

            {/* Experience */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>

              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="font-semibold text-lg">MERN Stack Intern</h3>

                <p className="text-slate-500 text-sm">
                  WsCube Tech • 2024 - 2025
                </p>

                <p className="mt-2 text-slate-600">
                  Built responsive web applications using React, Node.js and
                  MongoDB. Worked on authentication, REST APIs and deployment.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-5">Featured Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-lg">{project.title}</h3>

                    <p className="text-slate-600 text-sm mt-2">
                      {project.description}
                    </p>

                    <p className="text-cyan-600 text-sm mt-3">{project.tech}</p>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
    group
    relative
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-xl
    bg-white
    text-slate-800
    text-sm
    font-medium
    border
    border-slate-200
    shadow-sm
    transition-all
    duration-300
    hover:bg-slate-100
    hover:shadow-md
    hover:scale-105
  "
                      >
                        <span className="group-hover:hidden">Live Demo</span>

                        <span className="hidden group-hover:block">Visit</span>
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
    group
    relative
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-xl
    bg-white
    text-slate-800
    text-sm
    font-medium
    border
    border-slate-200
    shadow-sm
    transition-all
    duration-300
    hover:bg-slate-100
    hover:shadow-md
    hover:scale-105
  "
                      >
                        <span className="group-hover:hidden">GitHub</span>

                        <span className="hidden group-hover:block">Visit</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Education</h2>

              <div className="border rounded-2xl p-5">
                <h3 className="font-semibold">
                  Bachelor of Computer Applications
                </h3>

                <p className="text-slate-600 mt-1">
                  Jai Narayan Vyas University
                </p>

                <p className="text-slate-500 text-sm mt-1">2023 - 2026</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
