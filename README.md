# Docs Proyecto Curso

Micrositio de documentación para práctica de GCS (Gestión de Configuración de Software).

## Descripción

Este proyecto implementa un micrositio de documentación versionada utilizando Next.js y siguiendo las mejores prácticas de control de versiones con SemVer.

## Instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd docs-proyecto-curso

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## Estructura del proyecto

```
docs-proyecto-curso/
├── docs/                 # Documentación en Markdown
├── pages/               # Páginas de Next.js
├── public/              # Archivos estáticos
├── CHANGELOG.md         # Registro de cambios
├── README.md           # Este archivo
└── package.json        # Configuración del proyecto
```

## Comandos disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter

## Tecnologías utilizadas

- Next.js 14
- React 18
- TypeScript
- Markdown para documentación

## Licencia

MIT