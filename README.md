# MiApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## GitHub Pages

Este repositorio ya contiene una versión estática en la carpeta `docs/` que se está sirviendo vía GitHub Pages:

- URL: https://patrickarias-76.github.io/P4-PATRICK-ARIAS/

Si quieres regenerar la versión para GitHub Pages desde la aplicación Angular (build de producción), usa este comando desde la raíz del proyecto:

```powershell
ng build --configuration production --base-href /P4-PATRICK-ARIAS/ --output-path docs
```

Después de ejecutar el build, añade y empuja la carpeta `docs/` al remoto:

```powershell
git add docs -A
git commit -m "Build: update docs for GitHub Pages"
git push origin HEAD:main
```

Nota: este repositorio contiene algunos archivos relacionados con SSR (por ejemplo `src/main.server.ts`, `src/server.ts` y archivos `*.server.ts`). Si al correr `ng build` obtienes errores de typings o dependencias faltantes, puedes:

- instalar tipos y dependencias necesarias (por ejemplo `@types/node`, `@types/express`, y paquetes SSR) o
- eliminar/ignorar temporalmente los archivos server si no necesitas SSR para este proyecto.

