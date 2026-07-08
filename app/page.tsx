import FAQ from "../components/FAQ";
import Trust from "../components/Trust";
import Gallery from "../components/Gallery";
import Quote from "../components/Quote";
import Company from "../components/Company";
import WhatWeDo from "../components/WhatWeDo";
import Coverage from "../components/Coverage";
import Sectors from "../components/Sectors";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Value from "../components/Value";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
<Navbar />
<Hero />
<WhatWeDo />
<Company />
<Services />
<Sectors />
<Value />
<Trust />
<Process />
<Coverage />
<Gallery />
<Quote />
<FAQ />
<Contact />
<Stats />
      <Footer />
   <WhatsAppButton />
    </>
  );
}
