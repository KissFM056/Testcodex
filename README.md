# Dress UP Faire

Prototipo de juego de moda con tres avatares, tres vestidos, tres peinados y tres retos seleccionables: Baile de primavera, Noche de gala y Bajo los focos. Ilustraciones SVG originales provisionales, adaptables a móvil y escritorio.

Requiere Node.js 22.18+ (probado con 24) y npm.

```sh
npm ci
npm run dev
```

Selecciona una musa, cambia las prendas en las pestañas y pulsa «Evaluar mi look». Cambiar la selección limpia el resultado anterior. Cada reto concede 60 puntos por vestido del estilo solicitado (30 por otro estilo) y 40 por estilos coordinados (15 por estilos distintos). El avatar no afecta a la puntuación.

```sh
npm test
npm run build
```

Las fuentes de Google son opcionales; hay fuentes locales de reserva. No requiere claves ni servicios externos. Las animaciones respetan la preferencia de movimiento reducido.

## Estructura del código

- `src/components/`: vista SVG del avatar y panel de puntuación.
- `src/data/`: catálogo de avatares, prendas y retos.
- `src/game/`: tipos, reglas de puntuación y estado de la partida.
- `src/styles/`: estilos adaptables y animaciones.
- `src/App.tsx`: pantalla del vestidor.
- `tests/`: comprobaciones de puntuación y combinaciones.

El selector de retos cambia el estilo que se premia y limpia el resultado anterior. «Empezar de nuevo» restaura el avatar, las prendas y el reto iniciales. La partida se mantiene en memoria mientras la página está abierta.

## Jugar desde el navegador

La publicación se automatiza con GitHub Actions al actualizar `main`.
En GitHub, activa una vez **Settings → Pages → Build and deployment → Source → GitHub Actions**.
Tras finalizar el flujo «Publicar Dress UP Faire», el juego estará en https://kissfm056.github.io/Testcodex/.
