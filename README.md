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

## Contribuir

### Guía de contribución

1. **Fork** el repositorio
2. Crear una **rama** para tu feature: `git checkout -b feat/mi-feature`
3. **Commit** tus cambios: `git commit -m "feat: agregar mi feature #101"`
4. **Push** a la rama: `git push origin feat/mi-feature`
5. Abrir un **Pull Request**

### Proceso de desarrollo

- Usar versionado semántico (SemVer)
- Referencias a issues en commits
- Pull Request con plantilla
- Actualizar CHANGELOG.md

## Versiones

| Versión | Fecha      | Descripción              |
|---------|------------|--------------------------|
| v1.1.0  | 2025-09-21 | Guía de contribución     |
| v1.0.0  | 2025-09-21 | Línea base inicial       |