#### Prueba o test que crea cypress al iniciar el proyecto


`describe("template spec", () => {`
          `it("passes", () => {`
        `cy.visit("https://example.cypress.io");`
    `});`
`});`

## Estructura de una prueba


`bloque(‘nombre o descripción’, ()=>{ })`

## Bloques

**describe()**: Sirve para agrupar un conjunto de pruebas relacionadas. Dentro de este bloque, puedes describir lo que estás probando (por ejemplo, una página, componente o funcionalidad específica).

**it()**: Dentro de cada bloque describe, los bloques it representan cada prueba individual. Este bloque suele describir el comportamiento esperado de la aplicación o del componente.

## Hooks
**(before, beforeEach, after, afterEach)**: Los hooks permiten ejecutar código antes o después de ciertas pruebas, o antes de cada prueba individual. Son útiles para configuraciones iniciales o limpiezas después de las pruebas.

**before**: una función que se ejecutará una vez antes de todas las pruebas (its)

**beforeEach**: una función que se ejecutará una vez antes de cada una de las pruebas (its)

**after**: una función que se ejecutará una vez después de que terminen todas las pruebas (its)

**afterEach**: una función que se ejecutará una vez después de cada una de las pruebas (its)

## ORDEN

1- **before**: "Esto se ejecuta antes de todas las pruebas".
2- **beforeEach**: "Esto se ejecuta antes de cada prueba".
3- **it('Prueba 1')**: "Esto es la prueba 1".
4- **afterEach**: "Esto se ejecuta después de cada prueba".
5- **beforeEach**: "Esto se ejecuta antes de cada prueba".
6- **it('Prueba 2')**: "Esto es la prueba 2".
7- **afterEach**: "Esto se ejecuta después de cada prueba".
8- **after**: "Esto se ejecuta después de todas las pruebas"

`describe("nombre de la suit de pruebas", () => {`
`before("nombre o descripción", () => {`
`cy.log("lo que se va a ejecutar");`
`});`

`beforeEach("nombre o descripción", () => {`
`cy.log("lo que se va a ejecutar");`
`});`

`it("nombre o descripción", () => {`
`cy.log("lo que se va a ejecutar");`
`});`

`it("nombre o descripción", () => {`
`cy.log("lo que se va a ejecutar");`
`});`

`after("nombre o descripción", () => {`
`cy.log("lo que se va a ejecutar");`
`});`

`afterEach("nombre o descripción", () => {`
`cy.log("lo que se va a ejecutar");`
`});`
`});`
