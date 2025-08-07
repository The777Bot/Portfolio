"use client";

import { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/The777Bot/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        const featured = data.filter((repo) =>
          [
            "Super_Stickmen",
            "OBE-System",
            "Nexium_UbaidAhmed_GrandProject",
            "FitForge",
            "blog-summarizerai",
            "Fitex",
            "Nexium_UbaidAhmed_Assign2",
          ].includes(repo.name)
        );
        setProjects(featured);
      });
  }, []);

  const deployedLinks = {
    FitForge: "https://fit-forge-lake.vercel.app/",
    Nexium_UbaidAhmed_GrandProject:
      "https://nexium-ubaid-ahmed-grand-project-gpq51a8zp.vercel.app/",
    "blog-summarizerai": "https://blog-summarizerai.vercel.app/",
  };

  const projectDisplayName = {
    FitForge: "FitForge",
    Nexium_UbaidAhmed_GrandProject: "MindMonitor (AI Mental Health Tracker)",
    Super_Stickmen: "Super Stickmen",
    "OBE-System": "OBE System",
    "blog-summarizerai": "AI Blog Summarizer",
    Fitex: "Fitex (Fitness App)",
    Nexium_UbaidAhmed_Assign2: "Nexium Assignment 2",
  };

  return (
    <div className="min-h-screen relative text-white overflow-hidden bg-transparent">
      {/* DYNAMIC PARTICLE BACKGROUND */}
      <ParticleBackground />

      {/* HEADER */}
      <header className="text-center py-12 relative z-10 flex flex-col items-center gap-4">
        <img
          src="/me.jpeg"
          alt="Ubaid Ahmed Profile Picture"
          className="w-28 h-28 rounded-full border-4 border-pink-500 shadow-lg object-cover hover:scale-105 transition-transform"
        />
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
          Ubaid Ahmed
        </h1>
        <p className="mt-1 text-lg text-gray-300">
          AI Engineer • Full‑Stack Dev • n8n Wizard • Frontend Specialist
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm text-white">
          {["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS", "MongoDB", "n8n"].map(
            (tech) => (
              <span
                key={tech}
                className="bg-white/10 border border-white/20 px-3 py-1 rounded-full hover:bg-white/20 transition"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-bold mb-8">🚀 Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.length === 0 ? (
              <p className="text-gray-400">Loading latest projects...</p>
            ) : (
              projects.map((p) => {
                const deployedUrl = deployedLinks[p.name];
                const name = projectDisplayName[p.name] || p.name.replace(/_/g, " ");
                return (
                  <a
                    key={p.id}
                    href={deployedUrl || p.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-[1.02] hover:border-pink-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-semibold text-white">{name}</h3>
                    <p className="text-gray-300 mt-2">
                      {p.description || "No description available"}
                    </p>
                    <p className="text-pink-400 mt-1 text-sm">
                      {deployedUrl ? "🌐 Live" : "📦 GitHub"}
                    </p>
                  </a>
                );
              })
            )}
          </div>
        </section>

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m Ubaid Ahmed, a Full‑Stack Web Developer & Workflow Automation Engineer passionate about building AI-enhanced apps. Skilled in React, Next.js, Tailwind, Firebase, Node.js, n8n, and UI/UX optimization — with hands-on experience deploying startup-grade solutions, anime-themed interfaces, and interactive web projects.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-3xl font-bold mb-4">🛠 Skills & Tech</h2>
          <div className="flex flex-wrap gap-3">
            {["Web Development", "Front-End Development", "UI/UX Optimization", "AI-Enhanced Web Apps", "n8n Automation", "Python", "JavaScript/TypeScript", "HTML/CSS", "MongoDB", "Flask", "FastAPI", "Flutter", "TensorFlow", "React", "AWS/GCP", "Advanced MS Word"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md text-sm hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">📬 Contact</h2>
          <p className="text-gray-300">
            Reach out via {" "}
            <a
              href="mailto:ubadahme@gmail.com"
              className="text-pink-400 hover:underline"
            >
              ubadahme@gmail.com
            </a>{" "}
            or connect on {" "}
            <a
              href="https://linkedin.com/in/ubaid-ahmed-230098328/"
              className="text-pink-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800 mt-20">
        © {new Date().getFullYear()} Ubaid Ahmed
      </footer>
    </div>
  );
}
