import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { staticContent } from "@/lib/data/staticContent";

// Server Component
export function Footer() {
  const { footer, brand } = staticContent;

  return (
    <footer className="py-16 px-6 border-t border-white/[0.06] bg-[#080808]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-white font-medium text-[18px]">{brand.name}</span>
            </Link>
            <p className="text-white/40 text-[14px] leading-relaxed max-w-sm">
              {footer.description}
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white/60 text-[12px] uppercase tracking-[0.15em] font-mono mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 text-[14px] hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
          <p className="text-white/30 text-[12px]">{footer.copyright}</p>
          
          <div className="flex items-center gap-6">
            {footer.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="text-white/30 text-[12px] hover:text-white/60 transition-colors flex items-center gap-1"
              >
                {social.label}
                {social.external && <ArrowUpRight size={10} />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
