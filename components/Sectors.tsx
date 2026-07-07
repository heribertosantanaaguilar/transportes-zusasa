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
    <section className="sectorsPremium">
      <span className="sectionTag">Sectores que atendemos</span>
      <h2>Entendemos tu operación. Hablamos tu idioma.</h2>

      <div className="sectorGrid">
        {sectors.map((sector) => (
          <article className="sectorCard" key={sector}>
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
