import {
  Cable, CircuitBoard, Cpu, Gauge, Grid3x3, Layers, Plug, Settings2, ShieldCheck, TowerControl, Wrench, Zap,
} from "lucide-react";
import { SectionHeader, Reveal } from "./Section";

const services = [
  { icon: TowerControl, title: "EPC Electrical Contracting", desc: "End-to-end engineering, procurement & construction." },
  { icon: Grid3x3, title: "LT Panels", desc: "Low-voltage panels engineered for reliability." },
  { icon: CircuitBoard, title: "HT Panels", desc: "High-voltage switchgear built to IEC standards." },
  { icon: Layers, title: "PCC Panels", desc: "Power control centers for critical distribution." },
  { icon: Settings2, title: "MCC Panels", desc: "Motor control centers with intelligent protection." },
  { icon: Gauge, title: "Synchronizing Panels", desc: "Multi-source synchronization with precision control." },
  { icon: Cpu, title: "VFD Panels", desc: "Variable frequency drives optimized for efficiency." },
  { icon: Cable, title: "Bus Duct Systems", desc: "High-current busway distribution, safely engineered." },
  { icon: Zap, title: "Industrial Electrification", desc: "Complete plant electrification, turnkey execution." },
  { icon: Plug, title: "Power Distribution", desc: "Reliable LV/MV distribution architectures." },
  { icon: ShieldCheck, title: "Testing & Commissioning", desc: "Type-tested equipment, site-verified handover." },
  { icon: Wrench, title: "Maintenance Services", desc: "AMC & preventive maintenance, 24/7 support." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 aurora-bg opacity-40" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>Full-stack electrical engineering, built in-house.</>}
          subtitle="From concept and design to manufacturing, installation, and lifetime support — we own every layer of the electrical value chain."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.05}>
              <div className="group relative glass rounded-3xl p-6 h-full transition-all hover:-translate-y-1 hover:bg-white/[0.07] overflow-hidden">
                {/* animated glow border */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(21,123,255,0.5), rgba(34,211,238,0.35), transparent 70%)",
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#157BFF]/25 to-[#22D3EE]/10 border border-white/10 group-hover:shadow-[0_0_30px_rgba(21,123,255,0.4)] transition-shadow">
                    <s.icon className="h-5 w-5 text-[#22D3EE]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                    0{(i + 1).toString().padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
