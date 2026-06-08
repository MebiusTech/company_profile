import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white neo-border border-l-0 border-r-0 border-b-0 mt-auto py-12 px-6 md:px-12">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display font-black text-2xl text-black">
            MEBIUS_TECH<span className="text-secondary font-code text-base ml-1">{"</>"}</span>
          </h3>
          <p className="body-md text-gray-700 max-w-sm">
            Merging raw, unpolished Neo-Brutalist energy with modern, state-of-the-art software craftsmanship.
          </p>
          <div className="flex gap-2">
            <span className="pixel-sticker bg-primary-container text-black">SYSTEM_ACTIVE</span>
            <span className="pixel-sticker bg-secondary-fixed text-black">v1.0.0</span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-code font-bold uppercase text-black text-sm tracking-wider">
            [DIRECTORY]
          </h4>
          <div className="flex flex-col gap-2">
            <Link href="/" className="font-code text-sm text-gray-800 hover:text-secondary hover:underline transition-all">
              &gt; home.sh
            </Link>
            <Link href="/projects" className="font-code text-sm text-gray-800 hover:text-secondary hover:underline transition-all">
              &gt; projects_showcase.bin
            </Link>
            <Link href="/blog" className="font-code text-sm text-gray-800 hover:text-secondary hover:underline transition-all">
              &gt; blog_articles.txt
            </Link>
            <Link href="/about" className="font-code text-sm text-gray-800 hover:text-secondary hover:underline transition-all">
              &gt; info_about_us.conf
            </Link>
          </div>
        </div>

        {/* contact and social */}
        <div className="flex flex-col gap-3">
          <h4 className="font-code font-bold uppercase text-black text-sm tracking-wider">
            [CONNECT]
          </h4>
          <p className="body-md text-gray-700">
            Email: <span className="font-code text-sm">hello@mebius.tech</span>
          </p>
          <p className="body-md text-gray-700">
            HQ: <span className="font-code text-sm">Arcade Room #32, Pixel Square</span>
          </p>
          <div className="flex gap-4 mt-2 font-code text-sm font-bold">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
              GITHUB_
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
              TWITTER_
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-black">
              DISCORD_
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto border-t-2 border-black mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-code text-xs text-gray-600">
          © {new Date().getFullYear()} MEBIUS_TECH. ALL CODE IS OPEN-SOURCE.
        </span>
        <span className="font-code text-xs text-gray-500">
          [STAMP: {new Date().toISOString().split('T')[0]} - PROD]
        </span>
      </div>
    </footer>
  );
}
