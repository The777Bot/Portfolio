"use client";

import React from "react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  const deployedLinks: Record<string, string> = {
    FitForge: "https://fitforgepk.com/",
    Nexium_UbaidAhmed_GrandProject:
      "https://nexium-ubaid-ahmed-grand-project-gpq51a8zp.vercel.app/",
    "blog-summarizerai": "https://blog-summarizerai.vercel.app/",
    Fruit_Ninja_Clone: "https://play.unity.com/en/games/24638411-efad-4c8b-9f55-159afec2024d/fruit-ninja-clone",
    Mini_Bomb_Squad: "https://play.unity.com/en/games/62b5b2ca-99e2-4423-8f3e-d60048748fec/mini-bomb-squad",
    Force_Impulse: "https://play.unity.com/en/games/31fd18c4-b44b-4c4d-87df-7fad1c54b5d5/force-impulse",
  };

  const projectDisplayName: Record<string, string> = {
    FitForge: "FitForge",
    Nexium_UbaidAhmed_GrandProject: "MindMonitor (AI Mental Health Tracker)",
    Super_Stickmen: "Super Stickmen",
    "OBE-System": "OBE System",
    "blog-summarizerai": "AI Blog Summarizer",
    Fitex: "Fitex (Fitness App)",
    Fruit_Ninja_Clone: "Fruit Ninja Clone (3D)",
    Mini_Bomb_Squad: "Mini Bomb Squad (Replica)",
    Force_Impulse: "Force‑Impulse (2D)",
  };

  const githubLinks: Record<string, string> = {
    Fitex: "https://github.com/Hassaanafzal/FITex",
    Super_Stickmen: "https://github.com/The777Bot/Super_Stickmen",
    "OBE-System": "https://github.com/The777Bot/OBE-System",
    Nexium_UbaidAhmed_GrandProject: "https://github.com/The777Bot/Nexium_UbaidAhmed_GrandProject",
    FitForge: "https://github.com/The777Bot/FitForge",
    "blog-summarizerai": "https://github.com/The777Bot/blog-summarizerai",
  };
  
  const projectTopics: Record<string, string[]> = {
  FitForge: ["Next.js", "Tailwind", "Fitness", "Vercel", "Auth"],
  Nexium_UbaidAhmed_GrandProject: ["AI", "Mental Health", "Next.js", "LangChain"],
  "blog-summarizerai": ["AI", "OpenAI API", "Summarization", "Vercel"],
  "OBE-System": ["Academic", "OBE", "MongoDB", "Node.js", "Dashboards"],
  Super_Stickmen: ["Game", "JavaScript", "Canvas", "Physics"],
  Fitex: ["Fitness", "Firebase", "React", "Tailwind"],
  Fruit_Ninja_Clone: ["Unity", "C#", "3D", "Physics", "Mobile"],
  Mini_Bomb_Squad: ["Unity", "C#", "Arcade", "Physics", "Desktop"],
  Force_Impulse: ["Unity", "C#", "2D", "Arcade", "Mobile"],
};


  const featuredKeys = Object.keys(projectDisplayName);

  return (
    <div className="min-h-screen relative text-white overflow-hidden bg-transparent">
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
          Unity Game Developer • AI Engineer • Full‑Stack Dev • n8n Wizard • Frontend Specialist
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm text-white">
          {[
            "Unity",
            "C#",
            "Game Dev",
            "AR",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "MongoDB",
            "n8n",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-white/10 border border-white/20 px-3 py-1 rounded-full hover:bg-white/20 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-bold mb-2">🎮 Featured Game Projects</h2>
          <p className="text-pink-300 text-sm mb-2">AI Engineer • Full‑Stack Dev • n8n Wizard • Frontend Specialist</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: "Fruit_Ninja_Clone",
                name: "Fruit Ninja Clone (3D)",
                url: deployedLinks.Fruit_Ninja_Clone,
                tags: ["Unity", "C#", "3D", "Physics", "Mobile"],
              },
              {
                key: "Mini_Bomb_Squad",
                name: "Mini Bomb Squad (Replica)",
                url: deployedLinks.Mini_Bomb_Squad,
                tags: ["Unity", "C#", "Arcade", "Physics", "Desktop"],
              },
              {
                key: "Force_Impulse",
                name: "Force‑Impulse (2D)",
                url: deployedLinks.Force_Impulse,
                tags: ["Unity", "C#", "2D", "Arcade", "Mobile"],
              },
            ].map((g) => (
              <a
                key={g.key}
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/30 backdrop-blur-lg border border-pink-400 shadow-lg hover:scale-[1.02] hover:border-pink-300 hover:from-purple-800/50 hover:to-blue-800/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white">{g.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-pink-400/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm hover:bg-pink-400/30 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-pink-400 mt-3 text-sm">🌐 Unity Play</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">🚀 Featured Web Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredKeys
              .filter((k) => !["Fruit_Ninja_Clone", "Mini_Bomb_Squad", "Force_Impulse"].includes(k))
              .map((key) => {
              const name = projectDisplayName[key] || key;
              const deployedUrl = deployedLinks[key];
              const githubUrl = githubLinks[key];

              return (
                <a
                  key={key}
                  href={deployedUrl || githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-[1.02] hover:border-pink-400 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-white">{name}</h3>
                  
                  {/* Description */}
<p className="text-gray-300 mt-2">
  {githubUrl?.split("/").pop()?.replace(/[-_]/g, " ") || "No description"}
</p>

{/* Tags */}
<div className="flex flex-wrap gap-2 mt-3">
  {(projectTopics[key] || []).map((topic) => (
    <span
      key={topic}
      className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm hover:bg-pink-400/30 transition"
    >
      {topic}
    </span>
  ))}
</div>

{/* Link Badge */}
<p className="text-pink-400 mt-3 text-sm">
  {deployedUrl ? "🌐 Live" : "📦 GitHub"}
</p>

                </a>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-4">👋 About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m Ubaid Ahmed, a Full‑Stack Web Developer & Workflow Automation
            Engineer passionate about building AI-enhanced apps. Skilled in
            React, Next.js, Tailwind, Firebase, Node.js, n8n, and UI/UX
            optimization — with hands-on experience deploying startup-grade
            solutions, anime-themed interfaces, and interactive web projects.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-3xl font-bold mb-4">🛠 Skills & Tech</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Unity 2D/3D",
              "C#",
              "AR Foundation",
              "XR Interaction Toolkit",
              "Vuforia",
              "Shader Graph/URP",
              "Physics & Collisions",
              "Input System",
              "Cinemachine",
              "NavMesh",
              "ScriptableObjects",
              "Addressables",
              "Mobile Optimization",
              "Web Development",
              "Front-End Development",
              "UI/UX Optimization",
              "AI-Enhanced Web Apps",
              "n8n Automation",
              "Python",
              "JavaScript/TypeScript",
              "HTML/CSS",
              "MongoDB",
              "Flask",
              "FastAPI",
              "Flutter",
              "TensorFlow",
              "React",
              "C/C++",
              "Advanced MS Word",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md text-sm hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">📬 Contact</h2>
          <p className="text-gray-300">
            Reach out via{" "}
            <a
              href="mailto:ubadahme@gmail.com"
              className="text-pink-400 hover:underline"
            >
              ubadahme@gmail.com
            </a>{" "}
            or connect on{" "}
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

      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800 mt-20">
        © {new Date().getFullYear()} Ubaid Ahmed (All Rights Reserved)
      </footer>
    </div>
  );
}
