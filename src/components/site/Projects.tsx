import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";
import p1 from "@/assets/project-powerplant.jpg";
import p2 from "@/assets/project-industrial.jpg";
import p3 from "@/assets/project-substation.jpg";
import p4 from "@/assets/project-transmission.jpg";
import p5 from "@/assets/project-manufacturing.jpg";
import p6 from "@/assets/project-commercial.jpg";

const projects = [
  // { img: p1, cat: "Power Plants", title: "Thermal Power Plant Electrification", desc: "Complete electrical BOP for a 2×660 MW super-critical thermal power project.", span: "lg:col-span-2 lg:row-span-2" },
  { img: p3, cat: "Substations", title: "220/33 kV GIS Substation", desc: "EPC delivery of GIS switchyard including protection & control systems.", span: "lg:col-span-2" },
  { img: p4, cat: "Transmission", title: "400 kV Transmission Line", desc: "Turnkey erection of 400 kV double-circuit transmission corridor."},
  { img: p2, cat: "Industrial Buildings", title: "Automotive Plant Electrification", desc: "Full plant electrification with LT/HT panels, DBs, and cabling." },
  { img: p5, cat: "Manufacturing Units", title: "Pharma Manufacturing Facility", desc: "MCC/PCC panels and process electrification with clean-room readiness.", span: "lg:col-span-2" },
  { img: p6, cat: "Commercial Infrastructure", title: "Corporate Campus HV/LV Distribution", desc: "End-to-end HV & LV distribution for a 1.2M sq ft campus." },
];

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title={<>Trusted to power mission-critical infrastructure.</>}
          subtitle="Selected work across power plants, substations, transmission corridors and industrial facilities."
        />

        <div className="mt-14 grid lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.05} className={p.span ?? ""}>
              <button
                onClick={() => setOpen(i)}
                className="group relative w-full h-full overflow-hidden rounded-3xl border border-white/10 text-left"
              >
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F]/95 via-[#050B1F]/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(135deg, rgba(21,123,255,0.25), transparent 60%)" }} />
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#22D3EE]">{p.cat}</span>
                  <h3 className="mt-1.5 text-base sm:text-lg font-semibold text-white">{p.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050B1F]/80 backdrop-blur-md p-4"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="glass-strong relative max-w-3xl w-full rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full glass flex items-center justify-center hover:bg-white/10">
                <X className="h-4 w-4 text-white" />
              </button>
              <img src={projects[open].img} alt={projects[open].title} className="w-full aspect-[16/9] object-cover" />
              <div className="p-7">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">{projects[open].cat}</span>
                <h3 className="mt-2 text-2xl font-semibold text-white">{projects[open].title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{projects[open].desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
