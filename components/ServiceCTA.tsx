export default function ServiceCTA() {
  const whatsappMessage = [
    "Hola, quiero solicitar informacion o una cotizacion con Transportes ZUSASA.",
    "",
    "Servicio que necesito:",
    "- Movimiento local de contenedores:",
    "- Movimiento local de ISO tanques:",
    "- Transporte nacional de contenedores e ISO tanques:",
    "- Resguardo en patio de maniobras:",
    "- Apoyo operativo:",
    "",
    "Datos del servicio:",
    "- Empresa:",
    "- Nombre de contacto:",
    "- Telefono:",
    "- Tipo de contenedor o ISO tanque:",
    "- Origen:",
    "- Destino local:",
    "- Destino nacional:",
    "- Fecha estimada:",
    "- Peso aproximado:",
    "- Requiere movimiento local previo:",
    "- Requiere resguardo:",
    "- Comentarios:",
  ].join("\n");

  const whatsappLink = `https://wa.me/522224556651?${new URLSearchParams({
    text: whatsappMessage,
  }).toString()}`;

  return (
    <section className="serviceCtaBlock">
      <div className="serviceCtaContent">
        <span>Solución logística integral</span>

        <h2>Coordinemos tu operación desde Manzanillo.</h2>

        <p>
          Podemos ayudarte a revisar movimiento local de contenedores e ISO
          tanques, resguardo en patio de maniobras, apoyo operativo y gestión de
          transporte nacional mediante alianza comercial.
        </p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          Solicitar información por WhatsApp →
        </a>
      </div>
    </section>
  );
}
