import { SectionHeader, Reveal } from "./Section";
import mfgImg from "@/assets/manufacturing.jpg";
import panelsImg from "@/assets/panels.jpg";
import manufacturesapce from "@/assets/ms.jpg";
import space from "@/assets/space.jpg";

const steps = [
  { n: "01", title: "CNC Machining", desc: "Precision cutting, punching & bending on modern CNC lines." },
  { n: "02", title: "Bus Bar Processing", desc: "Automated bending, cutting and shrinking of copper bus bars." },
  { n: "03", title: "Powder Coating", desc: "Seven-tank pre-treatment with electrostatic powder coating." },
  { n: "04", title: "Panel Assembly", desc: "Skilled wireman assembly under strict SOPs." },
  { n: "05", title: "Quality Testing", desc: "Type-tested per IEC 61439; every panel FAT verified." },
  { n: "06", title: "Dispatch", desc: "Packed, tagged & shipped ready for site installation." },
];

export function Manufacturing() {
  return (
    <section id="manufacturing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Manufacturing"
          title={<>An in-house facility engineered for scale &amp; precision.</>}
          subtitle="Modern infrastructure, integrated processes, and IEC-compliant testing — our facility is built to deliver enterprise-grade quality at speed."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-4">
          {/* <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 h-full min-h-[380px] group">
              <img src={manufacturesapce} alt="Manufacturing facility" loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">Shop Floor</span>
                <h3 className="mt-3 text-2xl font-semibold text-white">Integrated panel manufacturing line</h3>
                <p className="mt-2 text-sm text-white/70 max-w-md">
                  CNC machining, bus bar processing, powder coating, assembly and full electrical testing under one roof.
                </p>
              </div>
            </div>
          </Reveal> */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 h-full min-h-[380px] group">
              <img src={panelsImg} alt="LT HT panels" loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">Testing Bay</span>
                <h3 className="mt-3 text-2xl font-semibold text-white">Every panel, factory-tested</h3>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 h-full min-h-[380px] group">
              <img src={mfgImg} alt="Manufacturing facility" loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">Panel Assembly Floor</span>
                <h3 className="mt-3 text-2xl font-semibold text-white"> Panel building facility</h3>
                <p className="mt-2 text-sm text-white/70 max-w-md">
                  full electrical testing under one roof.
                </p>
              </div>
            </div>
          </Reveal>
          {/* <Reveal delay={0.1} className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 h-full min-h-[380px] group">
              <img src={space} alt="LT HT panels" loading="lazy" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">Manufacturing Unit</span>
                <h3 className="mt-3 text-2xl font-semibold text-white">Unit 2</h3>
              </div>
            </div>
          </Reveal> */}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="glass rounded-3xl p-6 h-full hover:bg-white/[0.06] transition-all relative">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-semibold text-gradient">{s.n}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#157BFF]/60 to-transparent" />
                </div>
                <h4 className="mt-4 text-base font-semibold text-white">{s.title}</h4>
                <p className="mt-1.5 text-sm text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
