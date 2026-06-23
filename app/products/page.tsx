import Link from "next/link";

export default function ProductPage() {
  const products = [
    {
      id: "01",
      title: "WEBSITE DEVELOPMENT",
      desc: "Pembuatan website company profile, landing page, toko online, dan sistem informasi sesuai kebutuhan.",
      tags: ["NEXT.JS", "PHP", "MYSQL"],
      headerColor: "bg-primary",
      type: "Web Solution",
    },
    {
      id: "02",
      title: "MOBILE APPLICATION",
      desc: "Pengembangan aplikasi Android dan multiplatform dengan desain modern dan performa optimal.",
      tags: ["FLUTTER", "FIREBASE", "API"],
      headerColor: "bg-secondary",
      type: "Mobile Solution",
    },
    {
      id: "03",
      title: "AI INTEGRATION",
      desc: "Implementasi AI Chatbot, Automation, Prompt Engineering, dan solusi berbasis Artificial Intelligence.",
      tags: ["OPENAI", "AI", "AUTOMATION"],
      headerColor: "bg-tertiary",
      type: "Artificial Intelligence",
    },
    {
      id: "04",
      title: "UI/UX DESIGN",
      desc: "Perancangan antarmuka modern yang fokus pada pengalaman pengguna dan identitas brand.",
      tags: ["FIGMA", "UX", "PROTOTYPE"],
      headerColor: "bg-[#303030]",
      type: "Design Service",
    },
    {
      id: "05",
      title: "IT CONSULTING",
      desc: "Konsultasi pengembangan sistem, transformasi digital, dan solusi teknologi untuk bisnis.",
      tags: ["CONSULTING", "ANALYSIS", "PLANNING"],
      headerColor: "bg-primary",
      type: "Consulting",
    },
  ];

  return (
    <div className="flex-1 pixel-grid py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="pixel-sticker bg-primary-container text-black">
              PRODUCT CATALOG
            </span>

            <span className="font-code text-sm">
              Products
            </span>
          </div>

          <h1
            className="display-lg uppercase"
            style={{
              color: "#0066ff",
              textShadow: "5px 5px 0 #8ec5ff",
            }}
          >
            DIGITAL PRODUCTS
          </h1>

          <p className="body-lg text-gray-700 max-w-2xl">
            Explore our technology services and digital solutions designed
            to help businesses, startups, organizations, and individuals
            accelerate their digital transformation through innovative,
            scalable, and future-ready technologies.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="neo-card neo-card-interactive"
            >
              <div
                className={`neo-card-header ${product.headerColor} text-white`}
              >
                <span className="font-code text-sm">
                  [{product.id}] - {product.type}
                </span>
              </div>

              <div className="neo-card-body flex flex-col gap-4">
                <h3 className="headline-md text-black">
                  {product.title}
                </h3>

                <p className="body-md text-gray-700 flex-grow">
                  {product.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pixel-sticker bg-surface-container text-black text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="neo-card">
          <div className="neo-card-header bg-primary text-white">
            <span className="font-code">
              READY TO BUILD?
            </span>
          </div>

          <div className="neo-card-body text-center">
            <h3 className="headline-md mb-4">
              Let's Build Your Next Digital Product
            </h3>

            <p className="body-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Whether you need a website, mobile application,
              AI-powered solution, or digital consulting,
              Mebius Tech is ready to transform your ideas into reality.
            </p>

            <Link href="/contact" className="neo-btn">
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}