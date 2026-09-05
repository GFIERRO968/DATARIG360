# Desert Barrel — Página Web Piloto

Sitio web piloto para **Desert Barrel**, empresa de venta de barriles asadores
(ahumadores) con sede en Emiratos Árabes Unidos. Precios expresados en
Dirhams de EAU (AED).

Es un sitio **100% estático** (HTML + CSS + JS puro, sin frameworks ni
dependencias externas, sin llamadas a APIs ni CDNs), pensado para revisarse
localmente antes de contratar hosting definitivo.

## Contenido

- **Idiomas**: selector de idioma en el header (English / العربية / Español).
  **Inglés es el idioma principal** (predeterminado), seguido de árabe y
  español. El árabe activa automáticamente diseño RTL (de derecha a
  izquierda). La preferencia de idioma se guarda en el navegador
  (`localStorage`) y persiste entre visitas. Las traducciones viven en
  `js/i18n.js`.
- **Header**: logo (camel + barril) y navegación.
- **Hero**: mensaje principal y llamados a la acción.
- **Catálogo**: 4 tamaños de barril asador con precios en AED
  (Bedouin Mini, Oasis Combo, Caravan Combo, Sultan XL).
- **Nosotros**: breve historia de la marca.
- **Portal de pago (checkout)**: modal de compra con datos de envío,
  selección de método de pago (tarjeta / transferencia / contra entrega)
  y confirmación de orden. **Es una simulación**: no procesa pagos reales,
  no se conecta a ninguna pasarela de pago ni almacena datos de tarjeta —
  todo ocurre en el navegador, ideal para validar la experiencia de usuario
  antes de integrar un proveedor de pagos real (Stripe, Telr, PayTabs, etc.,
  todos con presencia en EAU).
- **Footer**: datos de contacto —
  - Atención al cliente: **Marco Toala**
  - Teléfono: **+971 123456**
  - Correo: **info@desertbarrel.ae**
  - Dominio propuesto: **www.desertbarrel.ae** *(dominio ficticio para la
    demo — debe registrarse formalmente antes de usarse en producción)*

## Cómo correrlo en hosting local

### Opción 1 — Script incluido (recomendado, requiere Python 3)

```bash
cd desert-barrel-website
python3 serve.py
```

Esto levanta un servidor en `http://localhost:8000` y abre el navegador
automáticamente. Para usar otro puerto:

```bash
python3 serve.py 5500
```

### Opción 2 — Servidor HTTP estándar de Python

```bash
cd desert-barrel-website
python3 -m http.server 8000
```

Luego abre `http://localhost:8000` en tu navegador.

### Opción 3 — Node.js

```bash
cd desert-barrel-website
npx serve .
```

### Opción 4 — Abrir directamente el archivo

También puedes abrir `index.html` directamente con doble clic desde el
explorador de archivos. Todo funciona sin servidor porque no hay llamadas
a APIs externas, aunque se recomienda usar un servidor local (opciones
1-3) para una experiencia más fiel a producción.

## Próximos pasos sugeridos

1. Confirmar precios finales y nombres de producto con el negocio.
2. Reemplazar las ilustraciones vectoriales de los barriles por fotografías
   reales del producto.
3. Registrar el dominio `desertbarrel.ae` (o la variante que se decida) y
   contratar hosting/DNS.
4. Integrar una pasarela de pago real habilitada en EAU (Telr, PayTabs,
   Network International, Stripe) en reemplazo de la simulación del
   portal de pago.
5. Conectar el formulario de checkout a un backend/CRM o servicio de
   correo para recibir los pedidos.
