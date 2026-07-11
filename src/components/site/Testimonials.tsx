import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./Section";

const t = [
  { quote: "Kashyap Electricals delivered our substation ahead of schedule with impeccable quality. Their engineering team is world-class.", name: "Head of Projects", org: "Leading Steel Manufacturer" },
  { quote: "The panels have been running flawlessly for years. Their FAT process is one of the most rigorous we've seen.", name: "Plant Director", org: "Automotive OEM" },
  { quote: "From design to commissioning, they own the full scope. A truly reliable EPC partner.", name: "VP Engineering", org: "Cement Major" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % t.length), 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <SectionHeader eyebrow="Testimonials" title={<>What our clients say.</>} center />
        <div className="mt-14 relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 sm:p-12"
            >
              <Quote className="h-10 w-10 text-[#22D3EE]/50 mx-auto" />
              <p className="mt-6 text-xl sm:text-2xl text-white leading-relaxed font-light">
                &ldquo;{t[i].quote}&rdquo;
              </p>
              <div className="mt-8">
                <div className="text-sm font-medium text-white">{t[i].name}</div>
                <div className="text-xs text-white/60">{t[i].org}</div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-2">
            {t.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-[#22D3EE]" : "w-1.5 bg-white/25"}`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
