# Prueba técnica Conexa

### Configurar y correr el backend en local

```bash
cd ./backend
npm run install
# Duplicar ".env.example" con el nombre ".env.development"
npm run start:dev
```

### Configurar y correr el fronted en local

```bash
cd ./fronted
npm run install
npm run dev
```

# Detalles y pendientes

- Ambos proyectos tienen lint y formatter.
- El backend tiene Swagger en /documentation.
- El backend valida la arquitectura hexagonal con el comando npm run validate.
- El backend valida los valores de las variables de entorno.
- Hay un caché en el backend para evitar el consumo de la API externa.
- El frontend usa SSR (Datalle de cada item) y CSR (Scroll infinito en las listas).
- Agregar tests unitarios a las transformaciones de datos en los adapters del backend y los helpers del frontend.
- Agregar tests e2e comprobando las estructuras de los responses en el backend.
- Limpiar código duplicado en algunos componentes y estilos en el frontend.
- Agregar logs y manejo de errores en el backend.
- Mejorar loaders, animaciones e iconografía en el frontend.
