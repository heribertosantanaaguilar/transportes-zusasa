import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Company from "../components/Company";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import CoverageMap from "../components/CoverageMap";
import OperationPhotos from "../components/OperationPhotos";
import ServiceCTA from "../components/ServiceCTA";
import Sectors from "../components/Sectors";
import Value from "../components/Value";
import Process from "../components/Process";
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
      <WhatWeDo />
      <Services />
      <CoverageMap />
      <OperationPhotos />
      <ServiceCTA />
      <Sectors />
      <Value />
      <Process />
      <Stats />
      <Quote />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
