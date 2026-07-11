import { Award, Users, Timer, Factory, Layers, ShieldCheck, MapPin, HardHat } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";

const items = [
  { icon: Award, title: "ISO Certified" },
  { icon: Users, title: "Experienced Engineers" },
  { icon: Timer, title: "Fast Delivery" },
  { icon: Factory, title: "In-house Manufacturing" },
  { icon: Layers, title: "End-to-End EPC" },
  { icon: ShieldCheck, title: "High Quality Standards" },
  { icon: MapPin, title: "Pan India Service" },
  { icon: HardHat, title: "Safety Compliance" },
];

export function WhyChoose() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why choose us"
          title={<>Enterprise-grade partners. Startup-grade agility.</>}
          center
        />
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 0.06}>
              <div className="group glass rounded-3xl p-6 h-full text-center hover:bg-white/[0.06] transition-all hover:-translate-y-1">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#157BFF]/25 to-[#22D3EE]/10 border border-white/10 group-hover:animate-pulse-glow">
                  <it.icon className="h-6 w-6 text-[#22D3EE]" />
                </div>
                <div className="mt-4 text-sm font-medium text-white">{it.title}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
