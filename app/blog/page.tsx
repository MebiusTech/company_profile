import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "THE DESTRUCTION OF SOFT UI",
      date: "2026-06-05",
      readTime: "5 MIN READ",
      summary: "Why flat shadows and soft gradient meshes are making web designs feel sluggish. The case for raw contrasts and hard 8px offsets.",
      tag: "Design Theory",
      tagColor: "bg-primary-container",
    },
    {
      id: 2,
      title: "NEXT.JS 16 COMPILE SPEEDRUN",
      date: "2026-05-20",
      readTime: "8 MIN READ",
      summary: "Exploring breaking compiler optimizations in Next.js 16. How we reduced dev server cold starts by 45% using native assembly maps.",
      tag: "Engineering",
      tagColor: "bg-secondary-fixed-dim",
    },
    {
      id: 3,
      title: "THE POWER OF VANILLA CUSTOM CSS",
      date: "2026-04-12",
      readTime: "4 MIN READ",
      summary: "Ditching multi-megabyte CSS class bundles for scoped custom variables. A clean, maintainable architecture for modern component styling.",
      tag: "Frontend",
      tagColor: "bg-tertiary-fixed-dim",
    },
  ];

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-secondary text-white">SYS_LOGS</span>
            <span className="font-code text-sm">/root/blog/</span>
          </div>
          <h1 className="display-lg text-black text-shadow-hard uppercase">
            DEV_TRANSMISSIONS
          </h1>
          <p className="body-lg text-gray-700 max-w-xl">
            Raw, unfiltered engineering logs, architectural notes, and digital design treatises directly from the Mebius team.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Posts List */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {posts.map((post) => (
              <article key={post.id} className="neo-card">
                <div className="neo-card-header bg-[#303030]">
                  <span className="font-code text-sm">TRANSMISSION_0{post.id} // {post.date}</span>
                  <span className={`pixel-sticker ${post.tagColor} text-black text-[10px]`}>{post.tag.toUpperCase()}</span>
                </div>
                <div className="neo-card-body flex flex-col gap-4">
                  <h2 className="headline-lg text-black hover:text-secondary hover:underline cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="body-md text-gray-600">
                    {post.summary}
                  </p>
                  <div className="flex justify-between items-center border-t-2 border-black pt-4 mt-2">
                    <span className="font-code text-xs text-gray-500">{post.readTime}</span>
                    <button className="neo-btn py-1.5 px-4 text-xs">
                      read_entry.sh
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            
            {/* Search/Newsletter */}
            <div className="neo-card">
              <div className="neo-card-header bg-secondary">
                <span>[SUBSCRIBE]</span>
              </div>
              <div className="neo-card-body flex flex-col gap-4">
                <p className="body-md text-gray-700">Receive dev updates directly to your inbox. No spam. Only code.</p>
                <div className="neo-input-wrapper">
                  <label className="neo-label">email_addr:</label>
                  <input type="email" placeholder="dev@mebius.tech" className="neo-input" />
                </div>
                <button className="neo-btn w-full">subscribe.exe</button>
              </div>
            </div>

            {/* Tags cloud */}
            <div className="neo-card">
              <div className="neo-card-header bg-primary">
                <span>[TAG_INDEX]</span>
              </div>
              <div className="neo-card-body">
                <div className="flex flex-wrap gap-2">
                  <span className="pixel-sticker bg-primary-container text-black cursor-pointer hover:bg-black hover:text-white transition-all">#DESIGN</span>
                  <span className="pixel-sticker bg-secondary-fixed text-black cursor-pointer hover:bg-black hover:text-white transition-all">#NEXTJS</span>
                  <span className="pixel-sticker bg-tertiary-fixed text-black cursor-pointer hover:bg-black hover:text-white transition-all">#WEBGL</span>
                  <span className="pixel-sticker bg-white text-black cursor-pointer hover:bg-black hover:text-white transition-all">#RUST</span>
                  <span className="pixel-sticker bg-white text-black cursor-pointer hover:bg-black hover:text-white transition-all">#WASM</span>
                  <span className="pixel-sticker bg-white text-black cursor-pointer hover:bg-black hover:text-white transition-all">#CSS</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
