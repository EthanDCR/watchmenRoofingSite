import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Coverage from "@/components/Coverage";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Services />
        <Process />
        <Coverage />
        <Contact />
      </main>
    </>
  );
}
