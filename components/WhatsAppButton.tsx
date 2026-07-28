export default function WhatsAppButton() {
  const whatsappMessage = `Hola, quiero solicitar información o una cotización con Transportes ZUSASA.

Servicio que necesito:
- Movimiento local de contenedores:
- Movimiento local de ISO tanques:
- Transporte nacional de contenedores e ISO tanques:
- Resguardo en patio de maniobras:
- Apoyo operativo:

Datos del servicio:
- Empresa:
- Nombre de contacto:
- Teléfono:
- Tipo de contenedor o ISO tanque:
- Origen:
- Destino local:
- Destino nacional:
- Fecha estimada:
- Peso aproximado:
- Requiere movimiento local previo:
- Requiere resguardo:
- Comentarios:`;

  const whatsappLink = `https://wa.me/522224556651?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <a
      className="floatingWhatsApp"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp con Transportes ZUSASA"
    >
      WhatsApp
    </a>
  );
}
