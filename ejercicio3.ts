// ejercicio3.ts
class Cancion {
    private autor: string;

    // Constructor con título y género, el autor se inicializa como vacío
    constructor(public titulo: string, public genero: string, autor: string) {
        this.autor = autor;
    }

    // Método get para autor
    getAutor(): string {
        return this.autor;
    }

    // Método set para autor
    setAutor(autor: string): void {
        this.autor = autor;
    }

    // Mostrar los datos de la canción
    mostrarDatos(): void {
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
