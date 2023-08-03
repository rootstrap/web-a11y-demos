# Demo app para Workshop de Accesibilidad

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Como correr el proyecto

Te recomendamos usar este [codesandbox](https://codesandbox.io/p/github/rootstrap/web-a11y-demos/a11y-workshop-food-app) por facilidad y hacer un fork propio para poder editarlo.

Si te lo bajaste local en vez, vas a tener que correr los siguientes comandos:

```bash
npm install
```
Para instalar las dependecias y luego esto para levantar el servidor en modo dev

```bash
npm start
```

Podés acceder al servidor que levantaste en [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

Esta página se va a recargar automaticamente cuando hagas cambios en el código.

## Ejercicios del workshop
### Ejercicios base
#### 1: Agregar alt text a estas imágenes:
  1. En `src/pages/HomePage.js` agregar alt text a `plate_of_food.png`
  2. En `src/components/NavBar/NavBar.js` agregar alt text a `logo.png`

Si te preguntás como determinar el alt text, te recomendamos leer [este artículo](https://www.w3.org/WAI/tutorials/images/decision-tree/).

#### 2: Transformar los items de la NavBar en links
En `src/components/NavBar/NavBar.js` los "links" que tiene la barra de navegación no son realmente links. Esto hace que no se comporten como tal. ¿Podés encontrar que cosas no funcionan? Nosotros identificamos al menos 3.

Luego de identificar los problemas te invitamos a corregir el código para que se comporten como links.

### Ejercicios avanzados
#### 1: Hacer que el modal sea accesible con el teclado
En `src/components/Modal/Modal.js` el modal no es accesible con el teclado. Discutir como debería de funcionar.

Para este tipo de interacciones más complejas es donde nos conviene hacer el uso de una libería que ya tenga accesibilidad tomada en cuenta. En este caso la librería que vamos a usar es [react-modal](https://www.npmjs.com/package/react-modal).

Instalá la librería con el siguiente comando:

```bash
npm i react-modal
```

Y seguí la documentación para implementar el modal.
 
#### 2: Mejorar la lectura del ¿Quiénes somos? para screen readers

En `src/pages/AboutPage.js` el texto de ¿Quiénes somos? no se lee bien para screen readers. ¿Podés identificar que es lo que no se lee bien? ¿Cómo lo podrías mejorar?

Utiliza tags de heading como `h1`, `h2`, `h3`, etc. para mejorar la lectura por secciones.

Corrige la semántica de las listas con `ul` y `li` para que se lean mejor.