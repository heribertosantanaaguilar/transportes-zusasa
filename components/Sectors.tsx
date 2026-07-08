export default function Sectors() {
  const sectors = [
    {
      title: "Agencias aduanales",
      text: "Apoyamos la coordinación de movimientos locales vinculados a operaciones de importación y exportación.",
    },
    {
      title: "Operadores logísticos",
      text: "Nos integramos a la operación como un aliado confiable para resolver traslados locales de contenedores.",
    },
    {
      title: "Empresas transportistas",
      text: "Brindamos apoyo local en Manzanillo para operaciones que requieren capacidad, respuesta y coordinación.",
    },
    {
      title: "Importadores",
      text: "Ayudamos a mover carga contenerizada con comunicación clara y seguimiento durante el servicio.",
    },
    {
      title: "Exportadores",
      text: "Coordinamos movimientos locales para que tu carga avance con orden, seguridad y cumplimiento.",
    },
    {
      title: "Industria y comercio",
      text: "Atendemos necesidades de transporte local relacionadas con cadenas de suministro y operaciones portuarias.",
    },
  ];

  return (
    <section id="sectores" className="zusasaSectors">
      <div className="sectionHeader white">
        <span>Sectores que atendemos</span>

        <h2>Soluciones para quienes necesitan mover carga en Manzanillo.</h2>

        <p>
          Trabajamos con empresas que requieren un proveedor local confiable,
          capaz de responder con claridad, coordinación y compromiso operativo.
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
    </section>
  );
}
