# Azucararte - Sitio Web de Dulcería

Sitio web estatico multipagina para la dulceria Azucararte, construido con HTML5, Tailwind CSS (CDN), CSS personalizado y JavaScript vanilla.

El proyecto replica el diseno visual compartido y agrega mejoras de accesibilidad, estructura limpia y contenidos editables por datos JSON.

## Repositorio

- GitHub: [JManuelPorras/Sitio-web-Azucararte](https://github.com/JManuelPorras/Sitio-web-Azucararte)

## Demo local

Importante: como el sitio carga datos desde un archivo JSON con fetch, no se recomienda abrir los HTML con doble clic.

Ejecuta el proyecto con un servidor local:

1. Opcion VS Code: extension Live Server
2. Opcion Node.js: npx serve .
3. Opcion Python: python -m http.server 5500

Luego abre:

- [http://localhost:5500/index.html](http://localhost:5500/index.html)

## Tecnologias

- HTML5
- Tailwind CSS via CDN
- CSS3 personalizado
- JavaScript vanilla
- JSON para contenido editable

## Estructura del proyecto

- [index.html](index.html): pagina principal (hero, horario, destacados, conexion cubana)
- [menu.html](menu.html): carta completa y seccion de grandes
- [contacto.html](contacto.html): direccion, telefonos y enlace de WhatsApp
- [styles/main.css](styles/main.css): estilos globales, variables y ajustes visuales
- [js/main.js](js/main.js): menu movil
- [js/menu-data.js](js/menu-data.js): renderizado dinamico desde JSON
- [data/menu.json](data/menu.json): fuente de datos para menu, destacados y contacto
- [img](img): imagenes de productos y portada
- [Diseno](Diseno): PDF y capturas de referencia del diseno

## Capturas del proyecto

### Inicio

![Vista de inicio](Diseno/Captura%20de%20pantalla%202026-04-16%20142603.png)

### Horario y destacados

![Vista de horario y destacados](Diseno/Captura%20de%20pantalla%202026-04-16%20142612.png)

### Menu

![Vista del menu](Diseno/Captura%20de%20pantalla%202026-04-16%20142624.png)

### Contacto

![Vista de contacto](Diseno/Captura%20de%20pantalla%202026-04-16%20142718.png)

## Contenido editable (sin tocar HTML)

Todo el contenido principal del menu y contacto se actualiza desde [data/menu.json](data/menu.json):

- featured: cards de productos destacados en inicio
- sections: categorias y precios del menu
- contact: direccion, telefonos y enlace de WhatsApp

Despues de editar el JSON, recarga la pagina.

## Accesibilidad incluida

- Estructura semantica de pagina
- Enlace para saltar al contenido principal
- Estados de foco visibles
- Textos alternativos en imagenes
- Navegacion movil con atributos ARIA

## Flujo de despliegue a GitHub

1. Crea un repositorio nuevo en GitHub
2. Desde la raiz del proyecto ejecuta:

   git init
   git add .
   git commit -m "feat: initial Azucararte website"
   git branch -M main
   git remote add origin [https://github.com/JManuelPorras/Sitio-web-Azucararte.git](https://github.com/JManuelPorras/Sitio-web-Azucararte.git)
   git push -u origin main

3. Activa GitHub Pages:
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / root

4. Tu web quedara publicada en una URL similar a:
   - [https://JManuelPorras.github.io/Sitio-web-Azucararte/](https://JManuelPorras.github.io/Sitio-web-Azucararte/)

## Recomendaciones

- Mantener nombres de imagenes consistentes para evitar rutas rotas
- Comprimir imagenes para mejorar velocidad de carga
- Si cambias estructura de carpetas, actualiza rutas en HTML y JSON

## Autor

J. Manuel Porras
