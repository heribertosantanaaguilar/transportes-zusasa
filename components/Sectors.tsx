export default function Sectors() {
  const sectors = [
    "Agencias aduanales",
    "Operadores logísticos",
    "Empresas transportistas",
    "Importadores",
    "Exportadores",
    "Industria y comercio",
  ];

  return (
    <section id="sectores" className="zusasaSectors">
      <div className="sectionHeader white">
        <span>Sectores que atendemos</span>
        <h2>Entendemos tu operación. Hablamos tu idioma.</h2>
        <p>
          Trabajamos con empresas que necesitan proveedores confiables para
          resolver movimientos locales de carga en Manzanillo.
        </p>
      </div>

      <div className="zusasaSectorsGrid">
        {sectors.map((sector) => (
          <article className="zusasaSectorCard" key={sector}>
            <h3>{sector}</h3>
            <p>
              Soluciones locales de transporte para operaciones que requieren
              respuesta, coordinación y confianza.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
