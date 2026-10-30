# Formulario web: publicación coordinada

Publicar únicamente después de habilitar y comprobar Control en producción. Configurar en Production:

- ZUSASA_QUOTE_FORM_ENABLED=1
- ZUSASA_INTEGRATED_RELEASE_APPROVED=1
- ZUSASA_CONTROL_QUOTE_ENDPOINT=https://control.transporteszusasa.com/api/public/quote-request
- ZUSASA_WEB_FORM_SECRET: mismo secreto privado de servidor que Control, exclusivo de producción.

No trasladar el bypass Vercel de Preview a producción. El backend debe recibir datos de clientes únicamente en la base productiva. El código rechaza direcciones Preview en producción y direcciones productivas en Preview.

Conservar configuración aislada en la rama de pruebas. No copiar usuarios ni solicitudes ficticias. La prueba de publicación debe usar sólo al propietario como destinatario de correos/avisos y requiere su autorización para cualquier envío real.

Reversión: deshabilitar formulario y volver al despliegue previo; no eliminar las solicitudes recibidas en Control.
