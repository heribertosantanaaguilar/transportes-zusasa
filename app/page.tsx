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
      <About />
      <Services />
      <Value />
      <Process />
      <Stats />
      <Contact />
      <Footer />
   <WhatsAppButton />
    </>
  );
}
