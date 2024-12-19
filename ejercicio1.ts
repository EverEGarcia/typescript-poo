// ejercicio1.ts
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // Método 1: Obtener título, color y fuente
    obtenerDatos(): string {
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    // Método 2: Alineación del título
    alinearTitulo(ubicacion: 'izquierda' | 'centro' | 'derecha'): string {
        return `El título se alinea a la ${ubicacion}.`;
    }

    // Método 3: Imprimir todas las propiedades
    imprimirPropiedades(): void {
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
