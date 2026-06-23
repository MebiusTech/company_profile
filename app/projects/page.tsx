import Link from "next/link";
import Image from "next/image";
import { projectsList } from "@/data/projects";

export default function ProjectsPage() {
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
          <div className="absolute bottom-0 left-0 w-full z-0 flex flex-col opacity-80">
            <div className="w-full h-3 bg-gray-400 border-y-[3px] border-black"></div>
            {/* Bantalan Rel (Ties) */}
            <div className="w-full h-4" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 48px)' }}></div>
          </div>

          <div className="flex w-max animate-slide-horizontal relative z-10 items-stretch">
            {/* Set Pertama */}
            <div className="flex gap-8 pr-8">
              {projectsList.map((proj) => (
                <Link href={`/projects/${proj.id}`} key={proj.id}>
                  <div className="w-[300px] md:w-[400px] shrink-0 relative flex flex-col cursor-pointer group pb-0">
                    {/* Card */}
                    <div className="neo-card neo-card-interactive z-10 transition-transform duration-200 group-hover:scale-105 flex flex-col h-[420px] md:h-[480px]">
                      {/* Image Container */}
                      <div className="relative w-full h-[180px] md:h-[220px] bg-gray-900 overflow-hidden shrink-0">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className={`neo-card-header ${proj.headerColor} text-white shrink-0`}>
                        <span className="font-code text-sm">[{proj.id}] - {proj.type}</span>
                      </div>
                      <div className="neo-card-body flex flex-col gap-4 flex-grow">
                        <h3 className="headline-md text-black line-clamp-2">{proj.title}</h3>
                        <p className="body-md text-gray-700 line-clamp-3 flex-grow">{proj.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {proj.tags.map(tag => (
                            <span key={tag} className="pixel-sticker bg-surface-container text-black text-xs">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Roda Kiri */}
                    <div className="absolute -bottom-6 left-8 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                      <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Roda Kanan */}
                    <div className="absolute -bottom-6 right-12 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                      <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Set Kedua (Duplikat untuk efek seamless) */}
            <div className="flex gap-8 pr-8" aria-hidden="true">
              {projectsList.map((proj) => (
                <div key={`${proj.id}-dup`} className="w-[300px] md:w-[400px] shrink-0 relative flex flex-col pointer-events-none pb-0">
                  {/* Card */}
                  <div className="neo-card neo-card-interactive z-10 flex flex-col h-[420px] md:h-[480px]">
                    {/* Image Container */}
                    <div className="relative w-full h-[180px] md:h-[220px] bg-gray-900 overflow-hidden shrink-0">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className={`neo-card-header ${proj.headerColor} text-white shrink-0`}>
                      <span className="font-code text-sm">[{proj.id}] - {proj.type}</span>
                    </div>
                    <div className="neo-card-body flex flex-col gap-4 flex-grow">
                      <h3 className="headline-md text-black line-clamp-2">{proj.title}</h3>
                      <p className="body-md text-gray-700 line-clamp-3 flex-grow">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {proj.tags.map(tag => (
                          <span key={tag} className="pixel-sticker bg-surface-container text-black text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Roda Kiri */}
                  <div className="absolute -bottom-6 left-8 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
                    <div className="w-8 h-8 rounded-full border-[3px] border-dashed border-gray-400 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Roda Kanan */}
                  <div className="absolute -bottom-6 right-12 w-12 h-12 bg-zinc-800 rounded-full border-[3px] border-black z-0 flex items-center justify-center wheel-spin">
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