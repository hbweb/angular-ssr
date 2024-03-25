# DTM Portal UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1. 
This project come with Angular SSR supported. However, we only use `prerender` feature for static pages as this app only have one single static homepage for now.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build & Pre-render

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
Run `npm run prerender` to prerender static pages for this project. The build artifacts will be stored in the `dist/browser` & `dist/server` directory.

## Pipeline & Deployment

Since we don't actually use Server Side Rendering (SSR) at least in the scope of this application, we only care about the `dist/browser` folder. Hence, these static pages would need to zip up and deploy to our server.

Please follow these steps:

Run `npm i`
Run `npm run prerender`

Once all files have been compiled and generated, we just need to copy all files under `dist/browser` folder onto our server. Alternatively, run this script to test it locally.

Run `npm run serve:ssr` to start a Node express server to server `dist/browser` web-root.
