import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#manufacturing", label: "Facility" },
  { href: "#projects", label: "Projects" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`relative glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500 overflow-hidden ${
            scrolled ? "shadow-[0_10px_40px_-10px_rgba(21,123,255,0.55)] border-white/20" : ""
          }`}
        >
          {/* Animated top border scan line */}
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent opacity-60 animate-nav-scan" />
          {/* Glow blob follows on hover */}
          <span className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{ background: "radial-gradient(400px 80px at 50% 0%, rgba(34,211,238,0.18), transparent 60%)" }} />
          {/* <a href="#top" className="flex items-center gap-2.5 group relative z-10">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full overflow-hidden">
              <img
                src={logo}
                alt="Shri Vaari Logo"
                className="h-full w-full object-cover rounded-full"
              />

              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#157BFF] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </span>
          </a> */}
          <a href="#top" className="flex items-center gap-3 group relative z-10">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full overflow-hidden bg-white">
              <img
                src={logo}
                alt="Shri Vaari Logo"
                className="h-full w-full rounded-full object-cover"
              />

              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#157BFF] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </span>

            <div className="leading-tight">
              <div className="text-xl font-bold tracking-tight text-white">
                Kashyap
              </div>
              <div className="text-sm uppercase tracking-[0.18em] text-white/70">
                Electricals
              </div>
            </div>
          </a>
          {/* <a href="#top" className="flex items-center gap-2.5 group relative z-10">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#157BFF] to-[#22D3EE] shadow-[0_0_20px_rgba(21,123,255,0.5)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.9)] transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
              <Zap className="h-5 w-5 text-white group-hover:animate-pulse" strokeWidth={2.5} />
              <img/>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#157BFF] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white group-hover:text-gradient transition-all">
                Shri Vaari
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/60 group-hover:text-[#22D3EE] transition-colors">
                Electrotech
              </div>
            </div>
          </a> */}

          <div className="hidden md:flex items-center gap-1 relative z-10">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-3.5 py-2 text-sm text-white/75 hover:text-white transition-colors rounded-lg"
                style={{ animation: `navFadeIn 0.5s ease-out ${0.1 + i * 0.05}s both` }}
              >
                <span className="relative z-10">{l.label}</span>
                {/* Underline sweep */}
                <span className="absolute left-3.5 right-3.5 bottom-1 h-px scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 bg-gradient-to-r from-[#22D3EE] to-[#157BFF]" />
                {/* Soft pill glow */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/5" />
                <span className="absolute inset-x-2 -bottom-1 h-4 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                  style={{ background: "radial-gradient(50% 100% at 50% 0%, rgba(34,211,238,0.5), transparent)" }} />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative z-10 inline-flex items-center gap-2 rounded-xl bg-white text-[#050B1F] px-4 py-2 text-sm font-medium transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8),0_0_60px_rgba(21,123,255,0.4)] hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#157BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)" }} />
            <span className="relative group-hover:text-white transition-colors">Get a Quote</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
