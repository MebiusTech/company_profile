"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [terminalTab, setTerminalTab] = useState<"wasm" | "seo" | "brutal">("wasm");
  const [inquiryName, setInquiryName] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  const getTerminalContent = () => {
    switch (terminalTab) {
      case "wasm":
        return (
          <>
            <span className="code-comment">// High-performance WASM pipeline</span><br />
            <span className="code-keyword">import</span> WASM_Module <span className="code-keyword">from</span> <span className="code-string">"./pkg/mebius_core.wasm"</span>;<br />
            <span className="code-keyword">const</span> engine = <span className="code-keyword">await</span> WASM_Module.<span className="code-function">init</span>();<br />
            <span className="code-keyword">const</span> result = engine.<span className="code-function">executeGridSystem</span>({"{"} "interval": <span className="code-string">32</span>, "opacity": <span className="code-string">0.05</span> {"}"});<br />
            <span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-string">"STATUS: OPTIMIZED"</span>, result);
          </>
        );
      case "seo":
        return (
          <>
            <span className="code-comment">// SEO & Semantic Integrity Audit</span><br />
            <span className="code-keyword">const</span> seoConfig = {"{"}<br />
            &nbsp;&nbsp;title: <span className="code-string">"Mebius Tech | Neo-Brutalist Digital Agency"</span>,<br />
            &nbsp;&nbsp;structure: <span className="code-string">"HTML5 Semantic Layout"</span>,<br />
            &nbsp;&nbsp;performanceScore: <span className="code-string">100</span><br />
            {"}"};<br />
            <span className="code-keyword">export default</span> <span className="code-function">function</span> <span className="code-function">verifySEO</span>() {"{"}<br />
            &nbsp;&nbsp;<span className="code-keyword">return</span> seoConfig.performanceScore &gt;= <span className="code-string">99</span>;<br />
            {"}"}
          </>
        );
      case "brutal":
        return (
          <>
            <span className="code-comment">// Neo-Brutalist Visual Config</span><br />
            <span className="code-keyword">const</span> theme = {"{"}<br />
            &nbsp;&nbsp;borders: <span className="code-string">"3px solid #000000"</span>,<br />
            &nbsp;&nbsp;shadows: <span className="code-string">"8px 8px 0px 0px #000000"</span>,<br />
            &nbsp;&nbsp;blur: <span className="code-string">"0px (Zero Blur Allowed)"</span>,<br />
            &nbsp;&nbsp;corners: <span className="code-string">"0px (Sharp Corners Only)"</span><br />
            {"}"};<br />
            <span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-string">"Neo-Brutalist Core Activated."</span>);
          </>
        );
    }
  };

  return (
    <div className="flex-1 pixel-grid py-16 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
        
        {/* HERO SECTION */}
        <section className="relative flex flex-col gap-8 pt-8">
          {/* Background layered card frame breaking the grid */}
          <div className="absolute right-0 top-0 w-72 h-72 bg-secondary-fixed opacity-10 hidden lg:block -z-10 transform rotate-6 neo-border" />
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="pixel-sticker bg-primary-container text-black">SYSTEM_ONLINE</span>
              <span className="font-code text-sm text-gray-800">// welcome_to_mebius_labs</span>
            </div>
            
            <h1 className="display-lg text-black text-shadow-hard uppercase">
              WE BUILD <span className="text-outlined">CREATIVE AND FUNCTIONAL</span> DIGITAL SYSTEMS.
            </h1>
          </div>

          <p className="body-lg text-gray-800 max-w-2xl">
            A digital agency designed to be loud. We craft custom web applications, smooth performant, and top solutions wrapped in a raw <strong>Creativity</strong> aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="neo-btn">
              Initailize project with us now
            </Link>
            <Link href="/projects" className="neo-btn neo-btn-secondary">
              Read our successful project
            </Link>
          </div>

          {/* Decorative Brackets Badge */}
          <div className="absolute top-1/2 right-12 text-gray-300 font-display font-black text-9xl hidden xl:block -z-20 transform -translate-y-1/2">
            {"{...}"}
          </div>
        </section>

        {/* INTERACTIVE TECH TERMINAL */}
        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="headline-md text-black">[PLAYGROUND_TERMINAL.EXE]</h2>
            <div className="hidden sm:flex gap-1.5">
              <span className="pixel-sticker bg-primary-container text-black">JS_REACT</span>
              <span className="pixel-sticker bg-secondary-fixed text-black">NEXTJS_16</span>
            </div>
          </div>

          <div className="neo-card bg-white">
            {/* Terminal Window Header */}
            <div className="neo-card-header bg-[#303030] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a] block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffd7f0] block" />
                  <span className="w-3 h-3 rounded-full bg-[#c9f300] block" />
                </div>
                <span className="font-code text-sm">terminal_session_0284.sh</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setTerminalTab("wasm")} 
                  className={`font-code text-xs px-3 py-1 neo-border border-[1px] cursor-pointer ${terminalTab === "wasm" ? "bg-primary-container text-black" : "bg-white text-black"}`}
                >
                  wasm_compile.go
                </button>
                <button 
                  onClick={() => setTerminalTab("seo")} 
                  className={`font-code text-xs px-3 py-1 neo-border border-[1px] cursor-pointer ${terminalTab === "seo" ? "bg-primary-container text-black" : "bg-white text-black"}`}
                >
                  seo_audit.json
                </button>
                <button 
                  onClick={() => setTerminalTab("brutal")} 
                  className={`font-code text-xs px-3 py-1 neo-border border-[1px] cursor-pointer ${terminalTab === "brutal" ? "bg-primary-container text-black" : "bg-white text-black"}`}
                >
                  visual_spec.css
                </button>
              </div>
            </div>
            {/* Terminal Window Body */}
            <div className="neo-card-body p-0">
              <pre className="neo-codeblock w-full border-0 m-0 box-shadow-none overflow-x-auto min-h-[160px]">
                <code>
                  {getTerminalContent()}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* CAPABILITIES / FEATURES GRID */}
        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="pixel-sticker bg-secondary text-white w-max">CORE_CAPABILITIES</span>
            <h2 className="headline-lg text-black uppercase">SYSTEM_CAPABILITIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header bg-secondary">
                <span>[01] // BRAND_WARFARE</span>
                <span>{"<>"}</span>
              </div>
              <div className="neo-card-body flex flex-col justify-between gap-6">
                <div>
                  <h3 className="headline-md text-black mb-3">NEO-BRUTALIST GRAPHICS</h3>
                  <p className="body-md text-gray-700">
                    We dump soft, generic meshes for hard edges, heavy ink frames, and vibrant displays. We build interfaces that are impossible to ignore.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="pixel-sticker bg-surface-container text-black">NO_BLUR</span>
                  <span className="pixel-sticker bg-surface-container text-black">SHARP_EDGES</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header">
                <span>[02] // PERFORMANCE_OPS</span>
                <span>{"{}"}</span>
              </div>
              <div className="neo-card-body flex flex-col justify-between gap-6">
                <div>
                  <h3 className="headline-md text-black mb-3">SPEED WEB ENGINE</h3>
                  <p className="body-md text-gray-700">
                    Compiled WebAssembly modules, optimized server component trees, and zero-latency client hydrations. Built on Next.js 16 frameworks.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="pixel-sticker bg-surface-container text-black">WASM</span>
                  <span className="pixel-sticker bg-surface-container text-black">NEXTJS_16</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header bg-tertiary">
                <span>[03] // OFFLINE_FIRST</span>
                <span>{"[]"}</span>
              </div>
              <div className="neo-card-body flex flex-col justify-between gap-6">
                <div>
                  <h3 className="headline-md text-black mb-3">LOCAL COORDINATION</h3>
                  <p className="body-md text-gray-700">
                    Applications that survive offline. CRDT client databases, state synchronizations, and robust peer network capabilities.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="pixel-sticker bg-surface-container text-black">CRDT</span>
                  <span className="pixel-sticker bg-surface-container text-black">LOCAL_DB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INPUT FORM PREVIEW */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white neo-border p-8 md:p-12 relative">
          <div className="absolute top-4 right-4 text-xs font-code text-gray-400">
            [CONN_CHECK: OK]
          </div>

          <div className="flex flex-col gap-4">
            <span className="pixel-sticker bg-primary-container text-black w-max">CONNECT_PACKETS</span>
            <h2 className="headline-lg text-black uppercase">INITIALIZE CONTACT_</h2>
            <p className="body-md text-gray-700 max-w-md">
              Fill in your communication packet details. Test our custom Neo-Brutalist input field system below. Active states react physically to user focus.
            </p>
          </div>

          <div className="neo-card bg-[#f9f9f9]">
            <div className="neo-card-header bg-[#303030]">
              <span>[QUICK_INQUIRY.EXE]</span>
            </div>
            <div className="neo-card-body">
              <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                <div className="neo-input-wrapper">
                  <label className="neo-label">your_signature:</label>
                  <input 
                    type="text" 
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Type name here (e.g. Satoshi)" 
                    className="neo-input" 
                    required
                  />
                </div>
                <button type="submit" className="neo-btn w-full">
                  {isSent ? "transmitting..." : "submit_signature.sh"}
                </button>
                {isSent && (
                  <p className="font-code text-xs text-[#a90097] text-center mt-2 animate-pulse">
                    &gt; PACKET SUCCESSFULLY BROADCASTED
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
