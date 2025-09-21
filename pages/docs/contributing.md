# Guía de Contribución

## Cómo contribuir al proyecto

### Flujo de trabajo

1. **Issue**: Crear o asignarte un issue existente
2. **Rama**: Crear rama con nombre descriptivo
3. **Desarrollo**: Realizar cambios con commits descriptivos
4. **PR**: Abrir Pull Request con plantilla
5. **Review**: Participar en revisión de código
6. **Merge**: Integrar cambios a main

### Convenciones

#### Nombres de ramas
- `feat/descripcion-issue` - Nueva funcionalidad
- `fix/descripcion-issue` - Corrección de bugs
- `docs/descripcion-issue` - Cambios en documentación

#### Mensajes de commit
- `feat: parte 3 tarea #101-issue`
#### Pull Requests
- Usar la plantilla predefinida
- Completar checklist
- Describir cambios y evidencias
- Referenciar issue relacionado

### Versionado

Seguimos [Versionado Semántico](https://semver.org/):
- **MAJOR**: cambios incompatibles
- **MINOR**: nueva funcionalidad compatible
- **PATCH**: correcciones de bugs

### Testing

Antes de hacer commit:
```bash
npm run build    # Verificar que compila
npm run lint     # Verificar estilo de código
npm run dev      # Probar funcionalmente