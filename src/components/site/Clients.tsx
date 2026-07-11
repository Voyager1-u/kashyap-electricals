import { SectionHeader } from "./Section";
import tataLogo from "../../assets/tata.svg";
import lntLogo from "../../assets/L&T.png";
import adaniLogo from "../../assets/adanilogo.png";
import dlflogo from "../../assets/dlflogo.png";
import jswlogo from "../../assets/jswlogo.png";
import myhomegroup from "../../assets/myhomegroup.png";
import kimshospital from "../../assets/kims3.png";
import resustainabilityLogo from "../../assets/re.png";
import chettinadcement from "../../assets/cc.png";
import xlantinfra from "../../assets/xi.png";
import mieplogo from "../../assets/m.png";
import aspirespacelogo from "../../assets/as.png";
import premierenergylogo from "../../assets/pe.png";
import technipfmcLogo from "../../assets/tech.png";
import fordlogo from "../../assets/f2.png";

const clients = [
  { name: "Tata Projects", logo: tataLogo },
  { name: "L&T", logo: lntLogo },
  { name: "DLF", logo: dlflogo },
  { name: "Adani", logo: adaniLogo },
  { name: "JSW", logo: jswlogo },
  { name: "MyHomeGroup", logo: myhomegroup },
  { name: "KimsHospitals", logo: kimshospital },
  { name: "RESustainability", logo: resustainabilityLogo },
  { name: "ChettinadCement", logo: chettinadcement },
  { name: "XlantInfra", logo: xlantinfra },
  { name: "Miepl", logo: mieplogo },
  { name: "AspireSpaces", logo: aspirespacelogo },
  { name: "PremierEnergy", logo: premierenergylogo },
  { name: "TechnipFMC", logo: technipfmcLogo },
  { name: "Ford", logo: fordlogo },
];

export function Clients() {
  const row = [...clients, ...clients];
  return (
    <section className="relative py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Clients" title={<>Trusted by industry leaders.</>} center />
      </div>
      <div className="mt-12 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#050B1F] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#050B1F] to-transparent" />
        <div className="flex gap-4 scroll-marquee w-max">
          {row.map((c, i) => (
            <div key={i} className="rounded-2xl w-48 h-28 flex items-center justify-center bg-white/80 backdrop-blur-lg border border-white/25">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-w-[110px] max-h-[80px] object-contain"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
