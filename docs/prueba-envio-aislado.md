# Prueba de envío aislado ZUSASA

Este documento corresponde únicamente a la rama `feature/formulario-cotizacion-zusasa-pruebas`.

- El formulario público en producción permanece deshabilitado.
- El despliegue Preview usa `ZUSASA_QUOTE_FORM_ENABLED=1` sólo en esta rama.
- La API del sitio remite por HTTPS a la API de ZUSASA Control en Preview, con secreto de servidor.
- La API de Control utiliza exclusivamente la base independiente `ZUSASA-Control-Pruebas`.
- Usar únicamente datos ficticios y verificar inserción en `public.public_quote_leads`.
- Antes de publicación definitiva, validar cuenta ADMIN, PDF oficial y RLS.

No se deben incorporar secretos al repositorio.
