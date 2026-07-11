import { useState } from "react";
import { Mail, Phone, MapPin, Globe, ArrowRight } from "lucide-react";
import { SectionHeader, Reveal } from "./Section";

function Field({ label, type = "text", textarea }: { label: string; type?: string; textarea?: boolean }) {
  const [val, setVal] = useState("");
  const active = val.length > 0;
  return (
    <label className="relative block">
      {textarea ? (
        <textarea
          rows={4}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="peer w-full rounded-2xl glass px-4 pt-6 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#157BFF]/60 resize-none"
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="peer w-full rounded-2xl glass px-4 pt-6 pb-2 text-sm text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#157BFF]/60"
          placeholder={label}
        />
      )}
      <span
        className={`pointer-events-none absolute left-4 transition-all text-white/50 ${
          active ? "top-2 text-[10px] uppercase tracking-widest text-[#22D3EE]" : "top-4 text-sm"
        } peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#22D3EE]`}
      >
        {label}
      </span>
    </label>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let&rsquo;s engineer what&rsquo;s next.</>}
          subtitle="Reach out for project inquiries, RFQs, panel manufacturing quotes, or partnership opportunities."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-4">
          <Reveal className="lg:col-span-2">
            <div className="glass-strong rounded-3xl p-8 h-full">
              <h3 className="text-xl font-semibold text-white">Corporate Office</h3>
              <div className="mt-6 space-y-5">
                {[
                  { icon: MapPin, label: "Address", val: "20 - 157/1,R.B Nagar, \nShamshabad, Telangana, - 501218" },
                  { icon: Phone, label: "Phone", val: "+91 9948045423" },
                  { icon: Mail, label: "Email", val: "kashyapelectricals12@gmail.com" },
                  // { icon: Globe, label: "Website", val: "www.shrivaari-electrotech.com" },
                ].map((r) => (
                  <div key={r.label} className="flex gap-4">
                    <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[#157BFF]/25 to-[#22D3EE]/10 border border-white/10">
                      <r.icon className="h-4 w-4 text-[#22D3EE]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-white/50">{r.label}</div>
                      <div className="mt-1 text-sm text-white whitespace-pre-line">{r.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="mt-8 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 relative">
                <iframe
                  title="Location"
                  src=""
                  className="absolute inset-0 h-full w-full grayscale contrast-125"
                  loading="lazy"
                />
              </div> */}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); }}
              className="glass-strong rounded-3xl p-8 h-full flex flex-col gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" />
                <Field label="Company" />
                <Field label="Email" type="email" />
                <Field label="Phone" type="tel" />
              </div>
              <Field label="Subject" />
              <Field label="Tell us about your project" textarea />
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#157BFF] px-6 py-4 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(21,123,255,0.8)] hover:shadow-[0_10px_50px_-5px_rgba(21,123,255,1)] transition-all"
              >
                Send inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
