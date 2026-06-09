import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: '01',
      title: 'PROJECT: NEON ARCADE',
      desc: 'An in-browser 3D retro arcade ecosystem with zero-latency input rendering.',
      tags: ['THREE.JS', 'WEBAUDIO', 'GO'],
      headerColor: 'bg-primary',
      type: 'WebGL Game Engine'
    },
    {
      id: '02',
      title: 'CODESYNC EDITOR',
      desc: 'Decentralized code editing platform featuring local-first sync systems.',
      tags: ['REACT', 'CRDTS', 'WEBRTC'],
      headerColor: 'bg-secondary',
      type: 'Real-time IDE'
    },
    {
      id: '03',
      title: 'VOXEL ENGINE V2',
      desc: 'Rust-compiled WebAssembly voxel builder for block-based digital spaces.',
      tags: ['RUST', 'WASM', 'WEBGPU'],
      headerColor: 'bg-tertiary',
      type: 'Graphics Pipeline'
    },
    {
      id: '04',
      title: 'CYBERNETIC DASHBOARD',
      desc: 'High-performance data visualization dashboard for real-time system metrics.',
      tags: ['NEXT.JS', 'D3.JS', 'WEBSOCKETS'],
      headerColor: 'bg-[#303030]', // Custom dark color
      type: 'Data Analytics'
    },
  ];

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-primary-container text-black">FILE EXPLORER</span>
            <span className="font-code text-sm">Projects</span>
          </div>
          <h1 className="display-lg text-white text-shadow-hard uppercase">
            SELECTED WORKS
          </h1>
          <p className="body-lg text-gray-700 max-w-xl">
            A listing of our high-voltage builds and developer systems. We build tools that break boundaries and look loud.
          </p>
        </div>

        {/* Projects Slider */}
        <div className="relative overflow-hidden w-full py-8 mb-4">
          {/* Rel Kereta (Track) - Static */}
          <div className="absolute bottom-[24px] left-0 w-full z-0 flex flex-col opacity-80">
            <div className="w-full h-3 bg-gray-400 border-y-[3px] border-black"></div>
            {/* Bantalan Rel (Ties) */}
            <div className="w-full h-4" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 48px)' }}></div>
          </div>

          <div className="flex w-max animate-slide-horizontal relative z-10 items-stretch">
            {/* Set Pertama */}
            <div className="flex gap-8 pr-8">
              {projects.map((proj) => (
                <div key={proj.id} className="w-[300px] md:w-[400px] shrink-0 relative flex flex-col pb-10">
                  {/* Card */}
                  <div className="neo-card neo-card-interactive z-10 h-full">
                    <div className={`neo-card-header ${proj.headerColor} text-white`}>
                      <span className="font-code text-sm">[{proj.id}] - {proj.type}</span>
                    </div>
                    <div className="neo-card-body flex flex-col gap-4">
                      <h3 className="headline-md text-black">{proj.title}</h3>
                      <p className="body-md text-gray-700 flex-grow">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tags.map(tag => (
                          <span key={tag} className="pixel-sticker bg-surface-container text-black text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Roda Kiri */}
                  <div className="absolute bottom-[18px] left-8 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                    <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Roda Kanan */}
                  <div className="absolute bottom-[18px] right-12 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                    <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Set Kedua (Duplikat untuk efek seamless) */}
            <div className="flex gap-8 pr-8" aria-hidden="true">
              {projects.map((proj) => (
                <div key={`${proj.id}-dup`} className="w-[300px] md:w-[400px] shrink-0 relative flex flex-col pb-10">
                  {/* Card */}
                  <div className="neo-card neo-card-interactive z-10 h-full">
                    <div className={`neo-card-header ${proj.headerColor} text-white`}>
                      <span className="font-code text-sm">[{proj.id}] - {proj.type}</span>
                    </div>
                    <div className="neo-card-body flex flex-col gap-4">
                      <h3 className="headline-md text-black">{proj.title}</h3>
                      <p className="body-md text-gray-700 flex-grow">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tags.map(tag => (
                          <span key={tag} className="pixel-sticker bg-surface-container text-black text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Roda Kiri */}
                  <div className="absolute bottom-[18px] left-8 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                    <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Roda Kanan */}
                  <div className="absolute bottom-[18px] right-12 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                    <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}