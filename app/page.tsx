import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Company from "../components/Company";
import Services from "../components/Services";
import Sectors from "../components/Sectors";
import Value from "../components/Value";
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
      <Company />
      <Services />
      <WhatWeDo />
      <Sectors />
      <Value />
      <Process />
      <Coverage />
      <Stats />
      <Quote />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
