"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "inicio", label: "Inicio", href: "/#inicio" },
  { id: "nosotros", label: "Nosotros", href: "/#nosotros" },
  { id: "servicios", label: "Servicios", href: "/#servicios" },
  { id: "sectores", label: "Sectores", href: "/#sectores" },
  { id: "contacto", label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let current = "inicio";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const handleClick = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === "inicio") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 10);
    }
  };

  return (
    <header className="topNavbar">
      <a
        href="/#inicio"
        className="zusasaLogo"
        onClick={() => handleClick("inicio")}
      >
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
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => handleClick(item.id)}
            className={activeSection === item.id ? "activeNavLink" : ""}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="quoteButton" href="/cotizacion">
        Cotizar ahora
      </a>
    </header>
  );
}
