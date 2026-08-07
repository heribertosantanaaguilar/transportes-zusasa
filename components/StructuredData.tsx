export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.transporteszusasa.com/#localbusiness",
    name: "Transportes ZUSASA",
    alternateName: "ZUSASA",
    url: "https://www.transporteszusasa.com",
    logo: "https://www.transporteszusasa.com/images/logo-zusasa.png",
    image: "https://www.transporteszusasa.com/images/logo-zusasa.png",
    description:
      "Transportes ZUSASA es una empresa logística ubicada en Manzanillo, Colima. Coordina transporte nacional de contenedores e ISO tanques desde Manzanillo hacia Guadalajara, Monterrey, Apodaca, Querétaro, Bajío, CDMX, Toluca y Puebla, integrando movimiento local, resguardo en patio de maniobras, apoyo operativo y seguimiento logístico.",
    telephone: "+522224556651",
    email: "cotizaciones@transporteszusasa.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Algodón #67, Interior 3, Tapeixtles",
      addressLocality: "Manzanillo",
      addressRegion: "Colima",
      postalCode: "28239",
      addressCountry: "MX",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Manzanillo, Colima",
      },
      {
        "@type": "Place",
        name: "Guadalajara, Jalisco",
      },
      {
        "@type": "Place",
        name: "El Salto, Jalisco",
      },
      {
        "@type": "Place",
        name: "Monterrey, Nuevo León",
      },
      {
        "@type": "Place",
        name: "Apodaca, Nuevo León",
      },
      {
        "@type": "Place",
        name: "Querétaro",
      },
      {
        "@type": "Place",
        name: "Bajío",
      },
      {
        "@type": "Place",
        name: "Ciudad de México",
      },
      {
        "@type": "Place",
        name: "Toluca, Estado de México",
      },
      {
        "@type": "Place",
        name: "Puebla",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte nacional de contenedores desde Manzanillo",
          description:
            "Coordinación de transporte nacional de contenedores desde Manzanillo hacia destinos industriales del país.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transporte nacional de ISO tanques desde Manzanillo",
          description:
            "Coordinación de transporte nacional de ISO tanques desde Manzanillo hacia distintos destinos del país.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Movimiento local de contenedores en Manzanillo",
          description:
            "Movimiento local de contenedores dentro de la zona portuaria y logística de Manzanillo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Resguardo en patio de maniobras",
          description:
            "Resguardo temporal de contenedores en patio de maniobras en Manzanillo, sujeto a disponibilidad y condiciones operativas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Apoyo operativo para carga contenerizada",
          description:
            "Apoyo operativo y seguimiento logístico para operaciones con contenedores e ISO tanques desde Manzanillo.",
        },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+522224556651",
        contactType: "Cotizaciones y atención comercial",
        email: "cotizaciones@transporteszusasa.com",
        areaServed: "MX",
        availableLanguage: ["es-MX"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+522224556651",
        contactType: "Gerencia general",
        email: "jzuniga@transporteszusasa.com",
        areaServed: "MX",
        availableLanguage: ["es-MX"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/transportes-zusasa/",
      "https://www.facebook.com/profile.php?id=61591897865110",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  );
}
