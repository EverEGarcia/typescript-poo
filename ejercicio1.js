"use strict";
// ejercicio1.ts
class CabeceraPagina {
    constructor(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }
    // Método 1: Obtener título, color y fuente
    obtenerDatos() {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }
    // Método 2: Alineación del título
    alinearTitulo(ubicacion) {
        return `El título se alinea a la ${ubicacion}.`;
    }
    // Método 3: Imprimir todas las propiedades
    imprimirPropiedades() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
    }
}
// Crear una instancia de la clase
const cabecera = new CabeceraPagina("Bienvenidos a mi página", "azul", "Arial");
console.log(cabecera.obtenerDatos());
console.log(cabecera.alinearTitulo("centro"));
cabecera.imprimirPropiedades();
