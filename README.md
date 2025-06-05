# Prueba tecnica conexa

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

- Ambos proyectos tienen lint y formater.
- El backend tiene Swagger en /documentation.
- El backend valida la arquitectura hexagonal con el comando 'npm run validate'.
- El backend valida los valores de las variables de entorno.
- Hay un cache en el backend para evitar el consumo de la API externa.
- Agregar test unitarios a las tranformaciones de datos en los adapters del backend y los helpers del front.
- Agregar test e2e comprobando estructuras de los response en el backend.
- Limpiar codigo duplicado en algunos componentes y estilos en el frontend.
- Agregar logs y manejo de errores en el backend.
- Mejorar loaders, animaciones e iconografía en el frontend.
