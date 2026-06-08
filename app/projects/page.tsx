import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "PROJECT: NEON ARCADE",
      tag: "WebGL Game Engine",
      desc: "An in-browser 3D retro arcade ecosystem with zero-latency input rendering.",
      colorClass: "neo-card-header", // Lime/Primary
      tech: ["Three.js", "WebAudio", "Go"],
    },
    {
      id: 2,
      title: "CODESYNC EDITOR",
      tag: "Real-time IDE",
      desc: "Decentralized code editing platform featuring local-first sync systems.",
      colorClass: "neo-card-header-pink", // Pink/Secondary
      tech: ["React", "CRDTs", "WebRTC"],
    },
    {
      id: 3,
      title: "VOXEL ENGINE V2",
      tag: "Graphics Pipeline",
      desc: "Rust-compiled WebAssembly voxel builder for block-based digital spaces.",
      colorClass: "neo-card-header-orange", // Orange/Tertiary
      tech: ["Rust", "WASM", "WebGPU"],
    },
  ];

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-secondary-fixed text-black">FILE_EXPLORER</span>
            <span className="font-code text-sm">/root/projects/</span>
          </div>
          <h1 className="display-lg text-black text-shadow-hard uppercase">
            SELECTED_WORKS
          </h1>
          <p className="body-lg text-gray-700 max-w-xl">
            A listing of our high-voltage builds and developer systems. We build tools that break boundaries and look loud.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="neo-card neo-card-interactive">
              <div className={project.colorClass}>
                <span>[0{project.id}] // {project.tag}</span>
                <span>{"<>"}</span>
              </div>
              <div className="neo-card-body flex flex-col justify-between gap-6">
                <div>
                  <h3 className="headline-md text-black mb-3">{project.title}</h3>
                  <p className="body-md text-gray-600">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="font-code text-xs bg-surface-container px-2 py-1 neo-border border-[1px] radius-[2px]">
                        #{t.toLowerCase()}
                      </span>
                    ))}
                  </div>
                  <button className="neo-btn w-full neo-btn-secondary text-sm">
                    inspect_system.sh
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="neo-card bg-[#fffbff]">
          <div className="neo-card-header bg-[#303030]">
            <span>[SYSTEM_ALERT] // COLLABORATE</span>
          </div>
          <div className="neo-card-body flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="headline-md text-black mb-2">HAVE A SYSTEM TO CONSTRUCT?</h4>
              <p className="body-md text-gray-700">We are currently taking reservations for Q3/Q4 engineering collaborations.</p>
            </div>
            <Link href="/contact" className="neo-btn whitespace-nowrap">
              initialize_contact.exe
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
