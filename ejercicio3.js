"use strict";
// ejercicio3.ts
class Cancion {
    // Constructor con título y género, el autor se inicializa como vacío
    constructor(titulo, genero, autor) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
    }
    // Método get para autor
    getAutor() {
        return this.autor;
    }
    // Método set para autor
    setAutor(autor) {
        this.autor = autor;
    }
    // Mostrar los datos de la canción
    mostrarDatos() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}
// Crear una instancia de Cancion
const cancion = new Cancion("Bohemian Rhapsody", "Rock", "Freddie Mercury");
cancion.mostrarDatos();
// Modificar el autor
cancion.setAutor("Nuevo Autor");
console.log(`Nuevo autor: ${cancion.getAutor()}`);
