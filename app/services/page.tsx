import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "HIGH-PERFORMANCE WEB APPS",
      status: "AVAILABLE",
      timeline: "3-6 WEEKS",
      startingPrice: "Mulai Rp 15.000.000",
      summary: "Kami tidak sekadar membuat website; kami membangun mesin web berkinerja tinggi tanpa bloatware. Aplikasi web kustom dengan arsitektur modern dan waktu muat sub-detik.",
      features: [
        "Zero-latency frontend hydrations",
        "SSR & Static Generation (Next.js)",
        "Progressive Web App (PWA) Offline-first",
        "Optimasi Core Web Vitals & SEO"
      ],
      tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "RUST"],
      headerColor: "bg-primary"
    },
    {
      id: 2,
      title: "NEO-BRUTALIST UI/UX DESIGN",
      status: "AVAILABLE",
      timeline: "2-4 WEEKS",
      startingPrice: "Mulai Rp 8.000.000",
      summary: "Singkirkan desain korporat yang membosankan. Kami merancang antarmuka kontras tinggi yang fungsional, berani, dan meninggalkan kesan kuat di benak pengguna.",
      features: [
        "Sistem warna High-Contrast",
        "Custom micro-interactions & animations",
        "Unapologetic typography & layout",
        "Design system & asset handover (Figma)"
      ],
      tags: ["FIGMA", "TAILWIND", "WEBGL", "CSS"],
      headerColor: "bg-secondary"
    },
    {
      id: 3,
      title: "SCALABLE BACKEND & CLOUD",
      status: "LIMITED SLOTS",
      timeline: "ONGOING",
      startingPrice: "Mulai Rp 20.000.000",
      summary: "Infrastruktur yang siap menahan lonjakan trafik ekstrem. API yang stabil, aman, dan dirancang khusus untuk skalabilitas kelas enterprise.",
      features: [
        "Arsitektur Microservices / Serverless",
        "Database clustering & caching (Redis)",
        "Automated CI/CD Pipeline Setup",
        "Zero-downtime deployment (AWS/GCP)"
      ],
      tags: ["NODE.JS", "GO", "POSTGRESQL", "AWS"],
      headerColor: "bg-tertiary"
    },
    {
      id: 4,
      title: "TECH STRATEGY & AUDIT",
      status: "AVAILABLE",
      timeline: "1-2 WEEKS",
      startingPrice: "Mulai Rp 5.000.000",
      summary: "Analisis mendalam untuk ekosistem digital Anda. Kami mengidentifikasi bottleneck performa, kelemahan keamanan, dan merancang roadmap teknologi bisnis.",
      features: [
        "Codebase & architecture review",
        "Performance profiling & optimization",
        "Security vulnerability audit",
        "Scaling roadmap strategy blueprint"
      ],
      tags: ["PROFILING", "SECURITY", "SYSTEM_DESIGN"],
      headerColor: "bg-[#303030]"
    },
  ];

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-secondary text-white">CORE MODULES</span>
            <span className="font-code text-sm">Services</span>
          </div>
          <h1 className="display-lg text-black text-shadow-hard uppercase">
            OUR SERVICES
          </h1>
          <p className="body-lg text-gray-700 max-w-xl">
            High-performance engineering and bold designs. Explore the technical and creative services offered by the Mebius team.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Services List */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {services.map((service) => (
              <article key={service.id} className="neo-card">
                <div className={`neo-card-header ${service.headerColor} text-white`}>
                  <span className="font-code text-sm">Module 0{service.id} - {service.status}</span>
                </div>
                <div className="neo-card-body flex flex-col gap-4">
                  <h2 className="headline-lg text-black hover:text-secondary hover:underline cursor-pointer">
                    {service.title}
                  </h2>
                  <p className="body-md text-gray-800 font-bold border-l-4 border-primary pl-4">
                    {service.summary}
                  </p>
                  
                  <div className="flex flex-col gap-2 mt-2">
                    <h4 className="font-code font-bold text-sm text-black">KEY DELIVERABLES:</h4>
                    <ul className="list-disc pl-5 flex flex-col gap-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="font-code text-sm text-gray-700">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="pixel-sticker bg-surface-container text-black text-xs">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t-4 border-black pt-4 mt-4 gap-4">
                    <div className="flex flex-col">
                      <span className="font-code text-xs text-gray-600">EST. TIMELINE: {service.timeline}</span>
                      <span className="font-code font-bold text-sm text-black">INVESTMENT: {service.startingPrice}</span>
                    </div>
                    <Link href="/contact" className="neo-btn py-2 px-6 text-sm text-center w-full sm:w-auto">
                      Request Deployment
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            
            {/* Contact CTA */}
            <div className="neo-card">
              <div className="neo-card-header bg-secondary">
                <span>INITIATE CONTACT</span>
              </div>
              <div className="neo-card-body flex flex-col gap-4">
                <p className="body-md text-gray-700">Ready to build something raw and unfiltered? Send us your project parameters.</p>
                <Link href="/contact" className="neo-btn w-full text-center">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Tech Stack cloud */}
            <div className="neo-card">
              <div className="neo-card-header bg-primary">
                <span>TECH STACK</span>
              </div>
              <div className="neo-card-body">
                <div className="flex flex-wrap gap-2">
                  <span className="pixel-sticker bg-primary-container text-black cursor-pointer hover:bg-black hover:text-white transition-all">#NEXTJS</span>
                  <span className="pixel-sticker bg-secondary-fixed text-black cursor-pointer hover:bg-black hover:text-white transition-all">#TYPESCRIPT</span>
                  <span className="pixel-sticker bg-tertiary-fixed text-black cursor-pointer hover:bg-black hover:text-white transition-all">#TAILWINDCSS</span>
                  <span className="pixel-sticker bg-white text-black cursor-pointer hover:bg-black hover:text-white transition-all">#RUST</span>
                  <span className="pixel-sticker bg-white text-black cursor-pointer hover:bg-black hover:text-white transition-all">#POSTGRESQL</span>
                  <span className="pixel-sticker bg-white text-black cursor-pointer hover:bg-black hover:text-white transition-all">#AWS</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
