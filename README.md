## Arquitectura Basada en Funcionalidades

Feature-Based Architecture


First, run the development server:

```bash
src/
|-- app/ # Rutas y Layouts
|-- components/ # Componentes globales
|-- features/ # Corazón -> Screaming Architectura
|   |-- reservas/ # Funcionalidad
|       |-- components/ # Componenentes de esta feature
|       |-- hooks/ # Lógica de estado
|       |-- services/ # Servicios y Clientes (Lógica y HTTP)
|       |-- mappers/ # Capa DTO -> Front Models
|       |-- types/ # Interfaces y tipos
|       |-- index.ts # Exportaciones públicas de la feature. NO exportar cosas privadas de la feature
|-- lib/ # Librerias
|-- utils/ # Funciones puras y formateadores globales    
```


## Crear feature

Correr este comando para crear una feature (te ahorra crear cada carpeta)
Se generaran las carpetas dentro de la feature: components, hooks, services, mappers y types además del index.ts.
```
npm run gen:feature -- nombreFeature
```

## Variables de entorno

1) Cada desarrollador tiene que tener su ambiente en la raíz del proyecto (.env.nombre)
2) Dentro debe configurar sus variables
3) Luego debe agregarlas al archivo `src/lib/config.ts`
4) Su perfil debe estar agregado en el `package.json` en los scripts 
como `"nombre":  "env-cmd -f .env.nombre next dev"`
5) Luego levantar la aplicación usando su perfil con `npm run nombre`
6) ¡Listo! Ya levantaste el front con tu perfil y tus datos.

## Agregar componentes Shadcn/ui

```
npx shadcn@latest add componenteNombre
```