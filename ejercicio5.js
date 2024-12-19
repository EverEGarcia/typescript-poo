// ejercicio5.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta Persona
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    // Método para verificar si es mayor de edad
    Persona.prototype.verificarEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " es mayor de edad."));
        }
        else {
            console.log("".concat(this.nombre, " es menor de edad."));
        }
    };
    return Persona;
}());
// Clase Empleado que extiende de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    // Constructor que llama al constructor de Persona
    function Empleado(nombre, apellido, direccion, telefono, edad, sueldo) {
        var _this = _super.call(this, nombre, apellido, direccion, telefono, edad) || this; // Llamada al constructor de Persona
        _this.sueldo = sueldo;
        return _this;
    }
    // Método para cargar sueldo
    Empleado.prototype.cargarSueldo = function (sueldo) {
        this.sueldo = sueldo;
    };
    // Método para imprimir el sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("".concat(this.nombre, " tiene un sueldo de: $").concat(this.sueldo));
    };
    // Implementación del método abstracto mostrarDatos
    Empleado.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre, " ").concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        this.verificarEdad(); // Verificamos si es mayor de edad o no
    };
    return Empleado;
}(Persona));
// Crear un objeto de la clase Empleado
var empleado1 = new Empleado("Juan", "Pérez", "Calle Ficticia 123", "123-456-789", 30, 3000);
// Mostrar los datos del empleado
empleado1.mostrarDatos();
// Imprimir el sueldo del empleado
empleado1.imprimirSueldo();
// Cambiar el sueldo
empleado1.cargarSueldo(3500);
// Imprimir el nuevo sueldo
empleado1.imprimirSueldo();
