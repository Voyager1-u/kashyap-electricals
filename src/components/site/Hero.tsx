import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Zap, Building2 } from "lucide-react";
import heroImg from "@/assets/hero-substation.jpg";
import heroPanelImg from "@/assets/panels.jpg";

const badges = [
  { icon: ShieldCheck, label: "ISO 9001:201", sub: "Certified" },
  { icon: Users, label: "400+", sub: "Direct Employees" },
  { icon: Zap, label: "100+ MW", sub: "Projects Delivered" },
  { icon: Building2, label: "Pan-India", sub: "Trusted Partner" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-20 flex items-center">
      {/* Background image + gradient */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Electrical substation with transmission lines"
          className="h-full w-full object-cover object-center opacity-55"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050B1F]/70 via-[#050B1F]/60 to-[#050B1F]" />
        <div className="absolute inset-0 aurora-bg opacity-70 mix-blend-screen" />
        <div className="absolute inset-0 grid-overlay opacity-60" />
        {/* Light streaks */}
        <div className="absolute top-1/3 left-0 h-px w-40 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent animate-streak" style={{ animationDelay: "0s" }} />
        <div className="absolute top-2/3 left-0 h-px w-56 bg-gradient-to-r from-transparent via-[#157BFF] to-transparent animate-streak" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-0 h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent animate-streak" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                ISO Certified · EPC · Panel Manufacturing
              </span>
              <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-gradient">
                Powering Industries.<br />Building Reliable Electrical Infrastructure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
                Kashyap Electricals delivers end-to-end electrical engineering — EPC projects,
                LT &amp; HT panel manufacturing, industrial electrification, and power distribution
                solutions across India.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="btn-glow group relative inline-flex items-center gap-2 rounded-2xl bg-[#157BFF] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(21,123,255,0.8)] transition-all hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }} />
                  <span className="relative">Get a Quote</span>
                  <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#projects"
                  className="btn-glow group inline-flex items-center gap-2 rounded-2xl glass-strong px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <span className="relative">Explore Projects</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </a>
              </div>
            </motion.div>

            {/* Floating stat cards */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {badges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="frame-glow glass rounded-2xl p-5 hover:bg-white/[0.08] transition-all hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(34,211,238,0.6)] group cursor-default"
                  style={{ animation: `floatY ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}
                >
                  <b.icon className="h-5 w-5 text-[#22D3EE] group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] group-hover:scale-110 transition-transform" />
                  <div className="mt-4 text-2xl font-semibold text-white group-hover:text-gradient transition-all">{b.label}</div>
                  <div className="text-xs text-white/60 mt-1">{b.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hovering hero image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex relative w-full max-w-lg xl:max-w-xl flex-shrink-0"
          >
            <div className="frame-glow relative w-full aspect-[4/5] rounded-3xl glass-strong p-3 shadow-[0_30px_80px_-20px_rgba(21,123,255,0.5)] animate-float hover:shadow-[0_40px_100px_-15px_rgba(34,211,238,0.7)] transition-shadow duration-700">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#22D3EE]/20 via-transparent to-[#157BFF]/20 opacity-60 pointer-events-none" />
              <img
                src={heroPanelImg}
                alt="LT & HT electrical panels manufactured by Kashyap Eletricals"
                className="h-full w-full rounded-2xl object-cover"
                width={800}
                height={1000}
              />
              {/* Corner accents */}
              <div className="absolute top-6 left-6 h-8 w-1 rounded-full bg-gradient-to-b from-[#22D3EE] to-transparent" />
              <div className="absolute bottom-6 right-6 h-1 w-8 rounded-full bg-gradient-to-r from-transparent to-[#157BFF]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
