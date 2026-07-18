export default function WhatWeDo() {
  return (
    <section className="zusasaWhatWeDo">
      <div className="sectionHeader">
        <span>Operación logística</span>

        <h2>Soluciones para mover y resguardar carga contenerizada.</h2>

        <p>
          Atendemos operaciones vinculadas al movimiento local de contenedores,
          resguardo en patio de maniobras y apoyo operativo para clientes que
          requieren coordinación confiable en Manzanillo.
        </p>
      </div>

      <div className="whatWeDoFeatureGrid">
        <article
          className="whatWeDoFeatureCard"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(5, 24, 46, 0.18) 0%, rgba(5, 24, 46, 0.82) 100%), url('https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&w=1600&q=90')",
          }}
        >
          <div>
            <h3>Entorno portuario</h3>

            <p>
              Operaciones vinculadas al movimiento local de contenedores dentro
              de la zona logística de Manzanillo.
            </p>
          </div>
        </article>

        <article
          className="whatWeDoFeatureCard"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(5, 24, 46, 0.18) 0%, rgba(5, 24, 46, 0.82) 100%), url('/images/patio-maniobras-zusasa-1.jpg')",
          }}
        >
          <div>
            <h3>Patio de maniobras</h3>

            <p>
              Coordinación terrestre para atender traslados, resguardo y
              movimientos de carga contenerizada.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
