const projects = [
  {
    title: "Furniture E-Commerce",
    description:
      "Full-stack furniture e-commerce platform with authentication, cart, admin panel and payment integration.",
    tech: "React • Node.js • MongoDB • Tailwind",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
  {
    title: "Notes Sharing Platform",
    description:
      "Students can upload, download and manage notes with a responsive UI.",
    tech: "React • Express • MongoDB",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
  {
    title: "Task Manager",
    description:
      "Modern productivity application with authentication and CRUD operations.",
    tech: "React • Node.js • MongoDB",
    live: "https://your-live-link.com",
    github: "https://github.com/yourusername/project",
  },
];

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

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">

        <div className="grid lg:grid-cols-[320px_1fr]">

          {/* Sidebar */}
          <aside className="bg-slate-900 text-white p-8">

            <div className="text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold">
                DG
              </div>

              <h1 className="mt-5 text-3xl font-bold">
                Devendra Gehlot
              </h1>

              <p className="text-cyan-400 mt-2">
                Full Stack Developer
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-bold text-lg mb-4">
                Contact
              </h2>

              <div className="space-y-3 text-sm text-slate-300">
                <p>📧 yourmail@gmail.com</p>
                <p>📱 +91 7742196865</p>
                <p>📍 Jodhpur, Rajasthan</p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-bold text-lg mb-4">
                Profiles
              </h2>

              <div className="space-y-3 text-sm">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-cyan-400"
                >
                  GitHub Profile
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-cyan-400"
                >
                  LinkedIn Profile
                </a>

                <a
                  href="https://yourportfolio.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-cyan-400"
                >
                  Portfolio Website
                </a>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-bold text-lg mb-4">
                Skills
              </h2>

              <div className="flex flex-wrap gap-2">
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

          {/* Main */}
          <main className="p-6 md:p-10">

            <section>
              <h2 className="text-2xl font-bold mb-4">
                About Me
              </h2>

              <p className="text-slate-600 leading-7">
                Passionate Full Stack Developer specializing in
                React.js, Node.js and MongoDB. I enjoy building
                modern, scalable and user-friendly applications.
                Strong understanding of frontend architecture,
                backend APIs and database design.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                Experience
              </h2>

              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="font-semibold">
                  MERN Stack Intern
                </h3>

                <p className="text-slate-500 text-sm">
                  WsCube Tech • 2024 - 2025
                </p>

                <p className="mt-2 text-slate-600">
                  Built responsive web applications using React,
                  Node.js and MongoDB. Worked on REST APIs,
                  authentication and deployment.
                </p>
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-5">
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-lg">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm mt-2">
                      {project.description}
                    </p>

                    <p className="text-cyan-600 text-sm mt-3">
                      {project.tech}
                    </p>

                    <div className="flex gap-5 mt-4">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-blue-600"
                      >
                        Live Demo →
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-green-600"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">
                Education
              </h2>

              <div>
                <h3 className="font-semibold">
                  Bachelor of Computer Applications
                </h3>

                <p className="text-slate-600">
                  Jai Narayan Vyas University
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}