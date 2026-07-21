import WhyChoose from "../components/WhyChoose";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Company from "../components/Company";
import Services from "../components/Services";
import Sectors from "../components/Sectors";
import Value from "../components/Value";
import Trust from "../components/Trust";
import Process from "../components/Process";
import Coverage from "../components/Coverage";
import Stats from "../components/Stats";
import Quote from "../components/Quote";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <WhatWeDo />
      <Stats />

      <Company />
      <Services />
      <WhyChoose />
      <Sectors />
      <Value />
      <Trust />
      <Process />
      <Coverage />
      <Quote />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
