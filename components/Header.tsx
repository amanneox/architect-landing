import Link from "next/link";
import Image from "next/image";
import { staticContent } from "@/lib/data/staticContent";

// Server Component - no "use client" needed
export function Header() {
  const { brand, navItems } = staticContent;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity group"
        >
          <Image
            src="/images/icons/logo.svg"
            alt={brand.name}
            width={28}
            height={28}
            className="group-hover:rotate-90 transition-transform duration-500 invert"
          />
          <span className="font-medium tracking-tight text-sm hidden sm:block">{brand.name}</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/50 hover:text-white text-xs sm:text-[14px] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={brand.appUrl}
            className="bg-white text-[#0a0a0a] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-full text-xs sm:text-[13px] font-medium hover:bg-white/90 transition-colors"
          >
            <span className="sm:hidden">app</span>
            <span className="hidden sm:block">open app</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
