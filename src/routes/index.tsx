import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Manufacturing } from "@/components/site/Manufacturing";
import { Projects } from "@/components/site/Projects";
import { Products } from "@/components/site/Products";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Clients } from "@/components/site/Clients";
import { Presence } from "@/components/site/Presence";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#050B1F] text-white overflow-hidden">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Manufacturing />
        <Projects />
        <Products />
        <WhyChoose />
        <Clients />
        <Presence />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
