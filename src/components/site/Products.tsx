import { SectionHeader, Reveal } from "./Section";
import { CircuitBoard, Cpu, Grid3x3, Layers, Settings2, Cable, Gauge, Zap } from "lucide-react";
import mv from "@/assets/product-mv.jpg";
import ht from "@/assets/htpanel.jpg";
import lt from "@/assets/product-lt.jpg";
import pcc from "@/assets/pcc.jpg";
import mcc from "@/assets/product-mcc.jpg";
import sync from "@/assets/sync.jpg";
import busduct from "@/assets/bus-duct.jpg";
import vfd from "@/assets/vfd.jpg";

const products = [
  { icon: Zap, name: "MV Panels", tag: "Up to 36 kV", img: mv },
  { icon: CircuitBoard, name: "HT Panels", tag: "11/22/33 kV", img: ht },
  { icon: Grid3x3, name: "LT Panels", tag: "Up to 6300 A", img: lt },
  { icon: Layers, name: "PCC Panels", tag: "Power Control", img: pcc },
  { icon: Settings2, name: "MCC Panels", tag: "Motor Control", img: mcc },
  { icon: Gauge, name: "Synchronizing Panels", tag: "Multi-source", img: sync },
  { icon: Cable, name: "Bus Duct", tag: "Sandwich / Air", img: busduct },
  { icon: Cpu, name: "VFD Panels", tag: "Drive Solutions", img: vfd },
];

export function Products() {
  return (
    <section id="products" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Product Gallery"
          title={<>A complete range of switchgear &amp; panel solutions.</>}
          subtitle="Type-tested, IEC-compliant products manufactured to your specifications."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 0.05}>
              <div className="group relative rounded-3xl aspect-[4/5] overflow-hidden border border-white/10 hover:border-[#22D3EE]/50 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(34,211,238,0.5)]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/60 to-[#050B1F]/10" />
                {/* Hover blue wash */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(180deg, rgba(21,123,255,0.15) 0%, transparent 40%, rgba(34,211,238,0.25) 100%)" }} />
                {/* Shimmer sweep */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                  style={{ background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)" }} />

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl glass-strong border border-white/15 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <p.icon className="h-5 w-5 text-[#22D3EE] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)] transition-all" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[#22D3EE]">{p.tag}</div>
                    <h3 className="mt-1.5 text-xl font-semibold text-white group-hover:text-gradient transition-all">{p.name}</h3>
                    <div className="mt-3 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#22D3EE] to-[#157BFF] transition-all duration-500" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
