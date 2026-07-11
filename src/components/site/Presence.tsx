import { SectionHeader, Reveal } from "./Section";
import { motion } from "framer-motion";

// Rough coordinates (percent within a stylised India outline box)
const locations = [
  { name: "Head Office", city: "Hyderabad", x: 55, y: 78},
  // { name: "Project Site", city: "Mumbai", x: 32, y: 55 },
  { name: "Project Site", city: "Delhi NCR", x: 45, y: 25 },
  { name: "Project Site", city: "Bengaluru", x: 48, y: 78 },
  { name: "Project Site", city: "Hyderabad", x: 52, y: 63, primary: true },
  { name: "Project Site", city: "Kolkata", x: 72, y: 45 },
  { name: "Project Site", city: "Ahmedabad", x: 30, y: 45 },
  // { name: "Project Site", city: "Pune", x: 36, y: 60 },
];

export function Presence() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pan-India Presence"
          title={<>On the ground where our clients are.</>}
          subtitle="Headquartered in Hyderabad, delivering projects across every major industrial corridor in India."
        />
        <Reveal>
          <div className="mt-14 glass-strong rounded-3xl p-6 sm:p-10">
            <div className="relative mx-auto aspect-[4/5] max-w-xl">
              {/* Stylised India outline */}
              <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" fill="none">
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#157BFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                <path
                  d="M180 30 C 220 40 260 55 280 90 C 310 130 330 150 340 200 C 350 250 320 290 300 320 C 290 340 310 380 290 410 C 260 450 220 470 200 470 C 180 470 150 440 140 400 C 130 370 100 360 90 320 C 80 280 100 240 90 210 C 80 180 100 140 120 110 C 140 80 150 40 180 30 Z"
                  fill="url(#g)"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1.5"
                />
              </svg>

              {locations.map((l, i) => (
                <motion.div
                  key={l.city}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${l.x}%`, top: `${l.y}%` }}
                >
                  <span className={`relative flex h-3 w-3 ${l.primary ? "h-4 w-4" : ""}`}>
                    <span className={`absolute inline-flex h-full w-full rounded-full ${l.primary ? "bg-[#22D3EE]" : "bg-[#157BFF]"} opacity-75 animate-ping`} />
                    <span className={`relative inline-flex rounded-full h-full w-full ${l.primary ? "bg-[#22D3EE]" : "bg-[#157BFF]"} shadow-[0_0_15px_rgba(34,211,238,0.8)]`} />
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-[10px] uppercase tracking-widest text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                    {l.city}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {locations.slice(0, 8).map((l) => (
                <div key={l.city} className="glass rounded-xl px-3 py-2 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-[#22D3EE]">{l.primary ? "HQ" : l.name}</div>
                  <div className="text-sm text-white">{l.city}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
