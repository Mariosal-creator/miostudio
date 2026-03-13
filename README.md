# MOI Studio - Workflow Seguro para Fotos y Vercel

## Comandos principales

- `npm run dev`: levanta el proyecto en desarrollo.
- `npm run photos:catalog`: regenera el catalogo estatico de fotos en `app/data/photoCatalog.ts`.
- `npm run photos:refresh`: alias rapido para regenerar catalogo de fotos.
- `npm run deploy:check`: regenera catalogo + lint + build para validar antes de push.
- `npm run build`: build de produccion (incluye `prebuild` automaticamente).

## Flujo recomendado cuando agregas fotos

1. Copia tus imagenes en `public/portfolio/fotografia/miniaturas/...`.
2. Ejecuta `npm run photos:refresh`.
3. Ejecuta `npm run deploy:check`.
4. Si todo pasa, haz commit y push.

## Por que este flujo evita fallas en Vercel

- Las rutas de fotos se generan en build-time en `app/data/photoCatalog.ts`.
- Las paginas no escanean carpetas con `fs` en runtime.
- Esto evita que Vercel empaquete carpetas gigantes de `public` dentro de funciones serverless.

## Nota importante

Si agregas fotos nuevas y no regeneras el catalogo, esas fotos no apareceran hasta el siguiente build.
