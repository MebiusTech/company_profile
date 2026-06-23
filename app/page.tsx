"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "$ Welcome to Mebius Terminal Playground" },
    { type: "output", text: "$ Type anything and press Enter to execute" },
    { type: "output", text: "" }
  ]);
  const [inquiryName, setInquiryName] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleTerminalSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && terminalInput.trim()) {
      const newHistory = [...terminalHistory];
      newHistory.push({ type: "input", text: `$ ${terminalInput}` });
      
      // Simple command responses
      let response = "";
      const cmd = terminalInput.toLowerCase().trim();
      
      if (cmd === "help") {
        response = "Available commands: help, clear, info, time, echo [text]";
      } else if (cmd === "clear") {
        setTerminalHistory([{ type: "output", text: "$ Terminal cleared" }, { type: "output", text: "" }]);
        setTerminalInput("");
        return;
      } else if (cmd === "info") {
        response = "Mebius Tech - We build bold, high-performance web solutions with a raw creative edge.";
      } else if (cmd === "time") {
        response = new Date().toLocaleString();
      } else if (cmd.startsWith("echo ")) {
        response = cmd.substring(5);
      } else {
        response = `command not found: ${terminalInput}. Type 'help' for available commands.`;
      }
      
      newHistory.push({ type: "output", text: response });
      newHistory.push({ type: "output", text: "" });
      
      setTerminalHistory(newHistory);
      setTerminalInput("");
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="flex-1 pixel-grid py-16 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-20">
        
        <section className="relative flex flex-col gap-8 pt-8">
          <div className="absolute right-0 top-0 w-72 h-72 bg-secondary opacity-20 hidden lg:block -z-10 transform rotate-6 neo-border" />
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="pixel-sticker bg-primary-container text-black">WELCOME</span>
            </div>
            
            <h1 className="display-lg text-black text-shadow-hard uppercase">
              <span className="highlight-red">SOLUSI</span> TEKNOLOGI <span className="text-outlined">TEPAT GUNA</span> UNTUK BISNIS MODERN
            </h1>
          </div>

          <p className="body-lg text-gray-800 max-w-2xl">
            A digital agency designed to be loud. We craft custom web applications, smooth performant, and top solutions wrapped in a raw <strong>Creativity</strong> aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="neo-btn">
              Initialize project with us now
            </Link>
            <Link href="/projects" className="neo-btn neo-btn-secondary">
              Read our successful project
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="headline-md text-black">PLAYGROUND TERMINAL</h2>
            <div className="hidden sm:flex gap-1.5">
              <span className="pixel-sticker bg-primary-container text-black">INTERACTIVE</span>
              <span className="pixel-sticker bg-secondary-fixed-dim text-black">LIVE_INPUT</span>
            </div>
          </div>

          <div className="neo-card bg-white">
            <div className="neo-card-header bg-[#303030] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a] block neo-border border-2" />
                  <span className="w-3 h-3 rounded-full bg-[#ffd7f0] block neo-border border-2" />
                  <span className="w-3 h-3 rounded-full bg-[#c9f300] block neo-border border-2" />
                </div>
                <span className="font-code text-sm text-white">Terminal Session</span>
              </div>
            </div>
            <div className="neo-card-body p-0">
              <div className="bg-black text-green-400 font-code text-sm overflow-x-auto min-h-[240px] flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-1">
                  {terminalHistory.map((line, idx) => (
                    <div key={idx} className={line.type === "input" ? "text-yellow-300 font-bold" : "text-green-400"}>
                      {line.text}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 p-4 border-t border-green-400">
                  <span className="text-green-400">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalSubmit}
                    placeholder="Type any command and press Enter..."
                    className="flex-1 bg-transparent text-yellow-300 outline-none placeholder-green-400 placeholder-opacity-50"
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="font-code text-xs text-gray-600">
            💡 Try: <span className="text-black font-bold">help</span> | <span className="text-black font-bold">info</span> | <span className="text-black font-bold">time</span> | <span className="text-black font-bold">echo [text]</span> | <span className="text-black font-bold">clear</span>
          </p>
        </section>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="pixel-sticker bg-secondary text-white w-max">CORE CAPABILITIES</span>
            <h2 className="headline-lg text-black uppercase">SYSTEM CAPABILITIES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header">
                <span>01 - BRAND WARFARE</span>
              </div>
              <div className="neo-card-body flex flex-col justify-between gap-6">
                <div>
                  <h3 className="headline-md text-black mb-3">CREATIVE GRAPHICS</h3>
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

            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header neo-card-header-pink">
                <span>02 - PERFORMANCE OPS</span>
              </div>
              <div className="neo-card-body flex flex-col justify-between gap-6">
                <div>
                  <h3 className="headline-md text-black mb-3">SPEED AND SMOOTH WEB ENGINE</h3>
                  <p className="body-md text-gray-700">
                    Compiled WebAssembly modules, optimized server component trees, and zero-latency client hydrations.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="pixel-sticker bg-surface-container text-black">WASM</span>
                  <span className="pixel-sticker bg-surface-container text-black">NEXTJS_16</span>
                </div>
              </div>
            </div>

            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header neo-card-header-orange">
                <span>03 - OFFLINE FIRST</span>
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

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white neo-border p-8 md:p-12 relative neo-shadow-lg">
          <div className="flex flex-col gap-4">
            <span className="pixel-sticker bg-primary-container text-black w-max">CONNECT PACKETS</span>
            <h2 className="headline-lg text-black uppercase">INITIALIZE CONTACT</h2>
            <p className="body-md text-gray-700 max-w-md">
              Fill in your communication packet details. Test our custom Neo-Brutalist input field system below. Active states react physically to user focus.
            </p>
          </div>

          <div className="neo-card bg-[var(--surface)]">
            <div className="neo-card-header bg-[#303030]">
              <span>QUICK INQUIRY</span>
            </div>
            <div className="neo-card-body">
              <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
                <div className="neo-input-wrapper">
                  <label className="neo-label">Your Signature:</label>
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
                  {isSent ? "Transmitting..." : "Submit Signature"}
                </button>
                {isSent && (
                  <p className="font-code text-xs text-secondary text-center mt-2 animate-pulse">
                    Packet successfully broadcasted
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
