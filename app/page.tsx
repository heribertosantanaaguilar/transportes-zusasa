import type { Metadata } from "next";
import StructuredData from "../components/StructuredData";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Company from "../components/Company";
import WhatWeDo from "../components/WhatWeDo";
import Services from "../components/Services";
import CoverageMap from "../components/CoverageMap";
import RutasNacionales from "../components/RutasNacionales";
import OperationPhotos from "../components/OperationPhotos";
import OperationVideo from "../components/OperationVideo";
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

export const metadata: Metadata = {
  title:
    "Transportes ZUSASA | Transporte nacional de contenedores desde Manzanillo",
  description:
    "Transportes ZUSASA coordina transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, CDMX, Toluca y Puebla. Integramos movimiento local, resguardo en patio de maniobras, apoyo operativo y seguimiento logístico.",
  alternates: {
    canonical: "https://www.transporteszusasa.com",
    languages: {
      "es-MX": "https://www.transporteszusasa.com",
      "en-US": "https://www.transporteszusasa.com/en",
      "x-default": "https://www.transporteszusasa.com",
    },
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <Hero />
      <Company />
      <WhatWeDo />
      <Services />
      <CoverageMap />
      <RutasNacionales />
      <OperationPhotos />
      <OperationVideo />
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
