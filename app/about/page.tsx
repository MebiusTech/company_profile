import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-secondary text-white">SYS INFO</span>
            <span className="font-code text-sm">About Us</span>
          </div>
          <h1 className="display-lg text-black text-shadow-hard uppercase">
            TENTANG KAMI
          </h1>
          <p className="body-lg text-gray-700 max-w-2xl">
            Mebius Tech adalah studio pengembangan kreatif dan laboratorium rekayasa teknologi tinggi. Kami membangun ekosistem digital untuk tim yang menuntut kecepatan dan otoritas desain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi */}
          <div className="neo-card">
            <div className="neo-card-header bg-primary">
              <span>VISI</span>
            </div>
            <div className="neo-card-body">
              <h3 className="headline-md text-black mb-3">DIGITAL FRONTIER</h3>
              <p className="body-md text-gray-700">
                Menjadi pionir dalam menghadirkan solusi teknologi yang unapologetic, berkinerja tinggi, dan mendobrak batasan desain konvensional di era modern.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="neo-card">
            <div className="neo-card-header bg-secondary">
              <span>MISI</span>
            </div>
            <div className="neo-card-body">
              <ul className="body-md text-gray-700 flex flex-col gap-2 list-disc pl-4">
                <li>Mengembangkan produk web dengan kecepatan sub-detik (zero bloat).</li>
                <li>Menerapkan desain Neo-Brutalism yang fungsional dan berani.</li>
                <li>Memberikan kode sumber yang transparan, terstruktur, dan mudah dikelola.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sejarah */}
        <div className="neo-card bg-white">
          <div className="neo-card-header bg-[#303030]">
            <span>SEJARAH SINGKAT</span>
          </div>
          <div className="neo-card-body">
            <p className="body-md text-gray-700 leading-relaxed">
              Didirikan pada awal 2024 di "Arcade Room #32", Mebius Tech bermula dari sekumpulan engineer dan desainer yang bosan dengan tampilan web yang terlalu bersih dan membosankan (soft UI). Kami bereksperimen dengan desain kontras tinggi yang digabung dengan optimasi arsitektur mutakhir. Hari ini, kami membantu berbagai bisnis dan enterprise membangun produk yang fungsional dan mustahil untuk diabaikan.
            </p>
          </div>
        </div>

        {/* Tim Inti */}
        <div className="flex flex-col gap-6">
          <h2 className="headline-lg text-black uppercase">PROFIL TIM INTI</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Member 1 */}
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header bg-primary-container text-black">
                <span>CEO & ARCHITECT</span>
              </div>
              <div className="neo-card-body flex flex-col items-center text-center gap-4">
                <div className="unusual-frame">
                  <div className="ascii-face ascii-face-1"></div>
                </div>
                <div>
                  <h4 className="headline-md text-black">ALEX "VOID" R.</h4>
                </div>
                <p className="body-md text-gray-700">Mantan insinyur DevOps yang beralih menjadi pendiri studio. Terobsesi dengan performa sistem dan arsitektur database berskala besar.</p>
              </div>
            </div>

            {/* Member 2 */}
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header bg-secondary-fixed-dim text-black">
                <span>CTO & LEAD ENGINEER</span>
              </div>
              <div className="neo-card-body flex flex-col items-center text-center gap-4">
                <div className="unusual-frame">
                  <div className="ascii-face ascii-face-2"></div>
                </div>
                <div>
                  <h4 className="headline-md text-black">SARAH "GLITCH" W.</h4>
                </div>
                <p className="body-md text-gray-700">Pakar Frontend dan desain interaksi. Memastikan setiap baris kode berjalan mulus serta membenci gradien lembut tanpa fungsi.</p>
              </div>
            </div>

            {/* Member 3 */}
            <div className="neo-card neo-card-interactive">
              <div className="neo-card-header bg-tertiary-fixed-dim text-black">
                <span>CDO & CREATIVE HEAD</span>
              </div>
              <div className="neo-card-body flex flex-col items-center text-center gap-4">
                <div className="unusual-frame">
                  <div className="ascii-face ascii-face-3"></div>
                </div>
                <div>
                  <h4 className="headline-md text-black">MAX "NULL" T.</h4>
                </div>
                <p className="body-md text-gray-700">Arsitek visual yang membawa gaya Neo-Brutalism ke level berikutnya. Menghancurkan aturan UI konvensional demi estetika mentah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}