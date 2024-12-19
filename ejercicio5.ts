// ejercicio5.ts

// Clase abstracta Persona
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    // Constructor
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    verificarEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} es menor de edad.`);
        }
    }

    // Método abstracto (será implementado en las clases hijas)
    abstract mostrarDatos(): void;
}

// Clase Empleado que extiende de Persona
class Empleado extends Persona {
    private sueldo: number;

    // Constructor que llama al constructor de Persona
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad); // Llamada al constructor de Persona
        this.sueldo = sueldo;
    }

    // Método para cargar sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`${this.nombre} tiene un sueldo de: $${this.sueldo}`);
    }

    // Implementación del método abstracto mostrarDatos
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        this.verificarEdad(); // Verificamos si es mayor de edad o no
    }
}

// Crear un objeto de la clase Empleado
const empleado1 = new Empleado("Juan", "Pérez", "Calle Ficticia 123", "123-456-789", 30, 3000);

// Mostrar los datos del empleado
empleado1.mostrarDatos();

// Imprimir el sueldo del empleado
empleado1.imprimirSueldo();

// Cambiar el sueldo
empleado1.cargarSueldo(3500);

// Imprimir el nuevo sueldo
empleado1.imprimirSueldo();
