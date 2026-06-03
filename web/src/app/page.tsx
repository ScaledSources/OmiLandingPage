import { CTA } from "@/components/CTA";
import { Compiler } from "@/components/Compiler";
import { Contribute } from "@/components/Contribute";
import { Directory } from "@/components/Directory";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directory />
        <Philosophy />
        <Compiler />
        <Contribute />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
