export default function Sectors() {
  const sectors = [
    {
      title: "Agencias aduanales",
      text: "Apoyamos la coordinación de movimientos locales, resguardo y gestión logística para operaciones de importación y exportación en Manzanillo.",
    },
    {
      title: "Operadores logísticos",
      text: "Nos integramos a la operación como un aliado confiable para coordinar movimiento local, apoyo operativo y transporte nacional mediante alianza comercial.",
    },
    {
      title: "Transportistas nacionales y foráneos",
      text: "Apoyamos a transportistas que realizan fletes desde Manzanillo hacia otros estados del país, coordinando movimientos locales para reducir tiempos de espera, desgaste de unidades y complejidad operativa dentro de la zona portuaria.",
    },
    {
      title: "Importadores",
      text: "Ayudamos a coordinar soluciones para contenedores e ISO tanques desde Manzanillo, integrando movimiento local, resguardo y gestión de transporte nacional cuando se requiere.",
    },
    {
      title: "Exportadores",
      text: "Coordinamos servicios logísticos para que tu carga avance con orden, comunicación clara y seguimiento operativo desde Manzanillo.",
    },
    {
      title: "Industria y comercio",
      text: "Atendemos necesidades logísticas relacionadas con cadenas de suministro, operaciones portuarias, contenedores, ISO tanques y envíos nacionales.",
    },
  ];

  return (
    <section id="sectores" className="zusasaSectors">
      <div className="sectionHeader white sectorsHeader">
        <span>Sectores que atendemos</span>

        <h2>Soluciones para quienes necesitan mover carga desde Manzanillo.</h2>

        <p>
          Trabajamos con empresas que requieren un proveedor confiable para
          coordinar movimiento local, resguardo, apoyo operativo y gestión de
          transporte nacional de contenedores e ISO tanques.
        </p>
      </div>

      <div className="zusasaSectorsGrid">
        {sectors.map((sector) => (
          <article className="zusasaSectorCard" key={sector.title}>
            <h3>{sector.title}</h3>
            <p>{sector.text}</p>
          </article>
        ))}
      </div>

      <style>{`
        .sectorsHeader {
          width: 100%;
          max-width: none;
        }

        .sectorsHeader p {
          width: 100%;
          max-width: none;
        }
      `}</style>
    </section>
  );
}
