"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", "nosotros", "servicios", "sectores", "contacto"];

    const handleScroll = () => {
      let currentSection = "inicio";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 180;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="topNavbar">
      <a href="/#inicio" className="zusasaLogo">
        <img
          className="navbarLogoImage"
          src="/images/logo-zusasa.png"
          alt="Transportes ZUSASA"
        />

        <span className="logoText">
          <small>TRANSPORTES</small>
          <strong>ZUSASA</strong>
        </span>
      </a>

      <nav className="topNavlinks">
        <a
          href="/#inicio"
          className={activeSection === "inicio" ? "activeNavLink" : ""}
        >
          Inicio
        </a>

        <a
          href="/#nosotros"
          className={activeSection === "nosotros" ? "activeNavLink" : ""}
        >
          Nosotros
        </a>

        <a
          href="/#servicios"
          className={activeSection === "servicios" ? "activeNavLink" : ""}
        >
          Servicios
        </a>

        <a
          href="/#sectores"
          className={activeSection === "sectores" ? "activeNavLink" : ""}
        >
          Sectores
        </a>

        <a
          href="/#contacto"
          className={activeSection === "contacto" ? "activeNavLink" : ""}
        >
          Contacto
        </a>
      </nav>

      <a className="quoteButton" href="/cotizacion">
        Cotizar ahora
      </a>
    </header>
  );
}
