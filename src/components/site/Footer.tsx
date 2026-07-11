import { Zap, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              {/* <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#157BFF] to-[#22D3EE] shadow-[0_0_20px_rgba(21,123,255,0.5)]">
                <Zap className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span> */}
              <div>
                <div className="text-sm font-semibold text-white">Kashyap Electricals</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/60 leading-relaxed">
              ISO-certified electrical engineering. EPC contracting, LT &amp; HT panel manufacturing,
              industrial electrification and power distribution — delivered across India.
            </p>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Facebook, Instagram].map((I, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <I className="h-4 w-4 text-white/80" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[["#about","About"],["#projects","Projects"],["#products","Products"],["#contact","Contact"]].map(([h,l]) => (
                <li key={h}><a href={h} className="text-white/70 hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-white/50">Services</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["EPC Contracting","LT & HT Panels","Industrial Electrification","Power Distribution","Testing & Commissioning"].map((l) => (
                <li key={l}><span className="text-white/70">{l}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Kashyap Electricals Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-xs text-white/40">ISO 9001:2015 · CIN: U00000TN0000PTC000000</div>
        </div>
      </div>
    </footer>
  );
}
