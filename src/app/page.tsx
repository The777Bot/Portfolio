"use client";

import React from "react";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  const [isWhiteBg, setIsWhiteBg] = React.useState(false);
  React.useEffect(() => {
    const root = document.documentElement;
    if (isWhiteBg) {
      root.style.setProperty("--background", "#004cafff");
      root.style.setProperty("--foreground", "#171717");
    } else {
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
    }
  }, [isWhiteBg]);
  const deployedLinks: Record<string, string> = {
    FitForge: "https://fitforgepk.com/",
    Nexium_UbaidAhmed_GrandProject:
      "https://nexium-ubaid-ahmed-grand-project-gpq51a8zp.vercel.app/",
    "blog-summarizerai": "https://blog-summarizerai.vercel.app/",
    Faded_Nights: "https://play.unity.com/en/games/3c353858-38ff-4e0f-bc75-7531d566479a/faded-nights",
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
    Faded_Nights: "Faded Nights",
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
  
  const projectThumbs: Record<string, string> = {
    Faded_Nights:
      "https://play.unity.com/_next/image?url=https%3A%2F%2Fplay.unity.com%2Fapi%2Fv1%2Ffiles%2Ffile%2Fc3080e53-511a-4dc0-9145-5abbf50ae885%2Fcontent&w=640&q=75",
    Fruit_Ninja_Clone:
      "https://play.unity.com/_next/image?url=https%3A%2F%2Fplay.unity.com%2Fapi%2Fv1%2Ffiles%2Ffile%2F835d08f6-fe8c-403d-af6f-b340c765a29f%2Fcontent&w=640&q=75",
    Mini_Bomb_Squad:
      "https://play.unity.com/_next/image?url=https%3A%2F%2Fplay.unity.com%2Fapi%2Fv1%2Ffiles%2Ffile%2F0aacf961-f328-4fe3-9884-2a4e0bbb9b12%2Fcontent&w=640&q=75",
    Force_Impulse:
      "https://play.unity.com/_next/image?url=https%3A%2F%2Fplay.unity.com%2Fapi%2Fv1%2Ffiles%2Ffile%2F5e7df423-cd43-4d2a-9181-82df0bf9ef9e%2Fcontent&w=640&q=75",
  };
  
  const projectTopics: Record<string, string[]> = {
  FitForge: ["Next.js", "Tailwind", "Fitness", "Vercel", "Auth"],
  Nexium_UbaidAhmed_GrandProject: ["AI", "Mental Health", "Next.js", "LangChain"],
  "blog-summarizerai": ["AI", "OpenAI API", "Summarization", "Vercel"],
  "OBE-System": ["Academic", "OBE", "MongoDB", "Node.js", "Dashboards"],
  Super_Stickmen: ["Game", "JavaScript", "Canvas", "Physics"],
  Fitex: ["Fitness", "Firebase", "React", "Tailwind"],
  Faded_Nights: ["Unity", "C#", "3D", "Horror", "Survival"],
  Fruit_Ninja_Clone: ["Unity", "C#", "3D", "Physics", "Mobile"],
  Mini_Bomb_Squad: ["Unity", "C#", "Arcade", "Physics", "Desktop"],
  Force_Impulse: ["Unity", "C#", "2D", "Arcade", "Mobile"],
};


  const featuredKeys = Object.keys(projectDisplayName);

  return (
    <div className="min-h-screen relative dark:text-white text-black overflow-hidden bg-transparent transition-colors duration-[10000ms] transition-opacity dark:opacity-100 opacity-95">
      <ParticleBackground light={isWhiteBg} />
      <button
        onClick={() => setIsWhiteBg((v) => !v)}
        aria-label="Toggle background"
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-pink-500 to-blue-500 p-[2px] rounded-full shadow-lg hover:shadow-xl transition-transform hover:scale-105"
      >
        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 text-black dark:text-white backdrop-blur-xl">
          <span className="text-lg">{isWhiteBg ? "☀️" : "🌙"}</span>
          <span className="text-sm font-semibold">{isWhiteBg ? "" : ""}</span>
        </span>
      </button>

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
        <p className="mt-1 text-lg text-white transition-colors duration-[10000ms]">
          Unity Game Developer • AI Engineer • Full‑Stack Dev • n8n Wizard • Frontend Specialist
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-3 text-sm">
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
              className="px-3 py-1 rounded-full transition bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 text-[var(--accent)]"
            >
              {tech}
            </span>
          ))}
        </div>
        
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-20 relative z-10">
        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-bold mb-2 text-white transition-colors duration-[10000ms]">🎮 Featured Game Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                key: "Faded_Nights",
                name: "Faded Nights",
                url: deployedLinks.Faded_Nights,
                tags: ["Unity", "C#", "3D", "Horror", "Survival"],
              },
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
                className="block p-6 rounded-2xl bg-gradient-to-br from-purple-200/60 to-blue-200/50 dark:from-purple-900/40 dark:to-blue-900/30 backdrop-blur-lg border border-pink-300 dark:border-pink-400 shadow-lg hover:scale-[1.02] hover:border-pink-400 dark:hover:border-pink-300 hover:from-purple-300/70 hover:to-blue-300/60 dark:hover:from-purple-800/50 dark:hover:to-blue-800/40 transition-colors duration-[10000ms]"
              >
                <img
                  src={projectThumbs[g.key] || "/globe.svg"}
                  alt={`${g.name} thumbnail`}
                  className="w-full h-40 object-cover rounded-xl mb-4 border border-white/20"
                />
                <h3 className="text-2xl font-semibold text-black dark:text-white">{g.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {g.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full backdrop-blur-sm transition-colors duration-[10000ms] bg-pink-400/10 dark:bg-pink-400/20 text-[var(--accent)] hover:bg-pink-400/20 dark:hover:bg-pink-400/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[var(--accent)] mt-3 text-sm transition-colors duration-[10000ms]">🌐 Unity Play</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">🚀 Featured Web Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredKeys
              .filter((k) => !["Faded_Nights", "Fruit_Ninja_Clone", "Mini_Bomb_Squad", "Force_Impulse"].includes(k))
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
                className="block p-6 rounded-2xl backdrop-blur-lg shadow-lg hover:scale-[1.02] transition-colors duration-[10000ms] bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 hover:border-pink-400 hover:bg-black/10 dark:hover:bg-white/20"
                >
                  <h3 className="text-2xl font-semibold text-black dark:text-white">{name}</h3>
                  
                  {/* Description */}
<p className="text-black dark:text-gray-300 mt-2 transition-colors duration-[10000ms]">
  {githubUrl?.split("/").pop()?.replace(/[-_]/g, " ") || "No description"}
</p>

{/* Tags */}
<div className="flex flex-wrap gap-2 mt-3">
  {(projectTopics[key] || []).map((topic) => (
    <span
      key={topic}
      className="text-xs px-2 py-1 rounded-full backdrop-blur-sm transition-colors duration-[10000ms] bg-black/10 dark:bg-white/20 text-[var(--accent)] hover:bg-pink-400/20 dark:hover:bg-pink-400/30"
    >
      {topic}
    </span>
  ))}
</div>

{/* Link Badge */}
<p className="text-[var(--accent)] mt-3 text-sm transition-colors duration-[10000ms]">
  {deployedUrl ? "🌐 Live" : "📦 GitHub"}
</p>

                </a>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white transition-colors duration-[10000ms]">👋 About Me</h2>
          <p className="text-[var(--accent)] leading-relaxed transition-colors duration-[10000ms]">
            I’m Ubaid Ahmed, a Unity Game Developer and Full‑Stack Engineer
            building 2D/3D gameplay, AR experiences, and production‑ready systems.
            Skilled in C# and Unity (URP, Shader Graph, Cinemachine, NavMesh,
            Input System, ScriptableObjects, Addressables), physics‑based mechanics,
            mobile optimization, and profiling. On the web side, I ship AI‑enhanced
            apps with Next.js, Tailwind, Node.js, and n8n, focused on performance
            and polished UX.
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
          <p className="text-black dark:text-gray-300 transition-colors duration-[10000ms]">
            Reach out via{" "}
            <a
              href="mailto:ubadahme@gmail.com"
              className="text-[var(--accent)] hover:underline transition-colors duration-[10000ms]"
            >
              ubadahme@gmail.com
            </a>{" "}
            or connect on{" "}
            <a
              href="https://linkedin.com/in/ubaid-ahmed-230098328/"
              className="text-[var(--accent)] hover:underline transition-colors duration-[10000ms]"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="text-center py-6 text-black/60 dark:text-gray-500 text-sm border-t border-black/20 dark:border-gray-800 mt-20 transition-colors duration-[10000ms]">
        © {new Date().getFullYear()} Ubaid Ahmed (All Rights Reserved)
      </footer>
    </div>
  );
}
