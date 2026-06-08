export default function AboutPage() {
  const philosophies = [
    {
      title: "01. UNCOMPROMISING CONTRAST",
      desc: "No subtle grey-on-grey lines. The internet is built on pixels, we make them stand out with heavy black lines and aggressive offsets.",
    },
    {
      title: "02. LOCAL-FIRST ENGINEERING",
      desc: "We prioritize local state databases, offline-capable code execution, and high-performance WebAssembly architectures.",
    },
    {
      title: "03. STRUCTURAL TRANSPARENCY",
      desc: "Our designs do not hide their framework. Brackets, grids, and technical code stamps are styled proudly on the screen.",
    },
  ];

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-tertiary text-white">SYS_INFO</span>
            <span className="font-code text-sm">/root/about/</span>
          </div>
          <h1 className="display-lg text-black text-shadow-hard uppercase">
            AGENCY_MANIFESTO
          </h1>
          <p className="body-lg text-gray-700 max-w-xl">
            Mebius Tech is a high-octane engineering lab and creative development studio. We build websites and custom webapps for teams that demand design authority and speed.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="flex flex-col gap-6">
          <h2 className="headline-lg text-black mb-2">[OUR_VALUES]</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophies.map((phil, idx) => (
              <div key={idx} className="neo-card bg-white">
                <div className="neo-card-header bg-[#303030]">
                  <span>CORE_RULE_0{idx + 1}</span>
                </div>
                <div className="neo-card-body flex flex-col gap-4">
                  <h3 className="headline-md text-black">{phil.title}</h3>
                  <p className="body-md text-gray-600">{phil.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs section */}
        <div className="neo-card bg-[#f3f3f3]">
          <div className="neo-card-header bg-secondary">
            <span>[HARDWARE_SOFTWARE_SPECS]</span>
          </div>
          <div className="neo-card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="headline-md text-black mb-4">DESIGN SYSTEM CODEBASE</h4>
                <p className="body-md text-gray-700 mb-4">
                  Our websites run on a strict mathematical 8px grid canvas. All layout columns, gutters, and box sizes map back to binary numbers.
                </p>
                <div className="neo-codeblock">
                  <span className="code-comment">// Mebius Coordinate System</span><br />
                  <span className="code-keyword">const</span> GRID_UNIT = <span className="code-string">8</span>;<br />
                  <span className="code-keyword">const</span> BORDER_WIDTH = <span className="code-string">3</span>;<br />
                  <span className="code-keyword">const</span> SHADOW_OFFSET = <span className="code-string">8</span>;<br />
                  <span className="code-keyword">const</span> activeTransform = (x) =&gt; <span className="code-function">`translate(${"${x}"}px, ${"${x}"}px)`</span>;
                </div>
              </div>
              <div>
                <h4 className="headline-md text-black mb-4">ENGINEERING STACK</h4>
                <ul className="list-none p-0 flex flex-col gap-3 font-code text-sm">
                  <li className="p-2 bg-white neo-border border-[1px]">
                    <span className="text-secondary font-bold">[01]</span> Next.js 16 (App Architecture)
                  </li>
                  <li className="p-2 bg-white neo-border border-[1px]">
                    <span className="text-secondary font-bold">[02]</span> React 19 (Async Transitions)
                  </li>
                  <li className="p-2 bg-white neo-border border-[1px]">
                    <span className="text-secondary font-bold">[03]</span> TypeScript (Type-Safe Actions)
                  </li>
                  <li className="p-2 bg-white neo-border border-[1px]">
                    <span className="text-secondary font-bold">[04]</span> WebAssembly (Compute Boosts)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
