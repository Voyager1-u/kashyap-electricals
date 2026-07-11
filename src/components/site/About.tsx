import { Award, Factory, ShieldCheck, Wrench, HardHat, Sparkles } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";
import { Counter } from "./Counter";
import comapnyimg from "@/assets/project-industrial.jpg";

const pillars = [
  { icon: Award, title: "ISO Certified", desc: "Quality management aligned to global standards." },
  { icon: Factory, title: "EPC Contracting", desc: "End-to-end engineering, procurement, construction." },
  { icon: Wrench, title: "LT & HT Panels", desc: "In-house manufacturing with rigorous testing." },
  { icon: ShieldCheck, title: "Safety First", desc: "Zero-harm culture across every site & shop floor." },
  { icon: HardHat, title: "Industrial Solutions", desc: "Turnkey electrification for heavy industry." },
  { icon: Sparkles, title: "Engineering Excellence", desc: "Decades of expertise, delivered on schedule." },
];

const stats = [
  { n: 400, suffix: "+", label: "Direct Employees" },
  { n: 100, suffix: "+ MW", label: "Projects Delivered" },
  { n: 250, suffix: "+", label: "Projects Executed" },
  { n: 30, suffix: "+ yrs", label: "Engineering Legacy" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Company Summary + Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Company Summary */}
          <Reveal>
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">
                About the Company
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
                Engineering the backbone of India&rsquo;s industry.
              </h2>

              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Kashyap Electricals is an ISO-certified electrical
                engineering company delivering ESA Grade Electrical
                Contracting, LT & HT Panel Manufacturing, EPC Projects,
                Industrial Electrification, and Power Distribution solutions to
                leading enterprises across India.
              </p>
            </div>
          </Reveal>

          {/* Right Side - Company Image */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[420px] group">
              <img
                src={comapnyimg}
                alt="LT HT Panels"
                loading="lazy"
                width={1280}
                height={960}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1F] via-[#050B1F]/40 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#22D3EE]">
                  Corporate Headquarters
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="glass rounded-3xl p-6 h-full hover:bg-white/[0.06] hover:-translate-y-1 transition-all group relative overflow-hidden">
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(21,123,255,0.3), transparent 60%)",
                  }}
                />

                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#157BFF]/20 to-[#22D3EE]/10 border border-white/10">
                    <p.icon className="h-5 w-5 text-[#22D3EE]" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-strong rounded-3xl p-6 text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-gradient">
                  <Counter to={s.n} suffix={s.suffix} />
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
