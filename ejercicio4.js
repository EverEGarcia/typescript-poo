"use strict";
// ejercicio4.ts
class Cuenta {
    // Constructor
    constructor(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // Método depositar
    depositar(valor) {
        if (valor < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += valor;
            console.log(`Se ha depositado correctamente $${valor}. Nuevo saldo: $${this.cantidad}`);
        }
    }
    // Método retirar
    retirar(valor) {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo en la cuenta.");
        }
        else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Saldo restante: $${this.cantidad}`);
        }
    }
    // Método mostrarDatos
    mostrarDatos() {
        console.log(`Nombre del titular: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo: $${this.cantidad}`);
    }
}
// Crear un objeto de la clase Cuenta
const cuenta = new Cuenta("Juan Pérez", 100, "Ahorros", "1234567890");
// Mostrar los datos iniciales de la cuenta
cuenta.mostrarDatos();
// Realizar depósitos y retiros
cuenta.depositar(10); // Depósito mayor a $5
cuenta.depositar(3); // Depósito menor a $5
cuenta.retirar(50); // Retiro mayor a $5
cuenta.retirar(3); // Retiro menor a $5
cuenta.retirar(200); // Retiro con saldo insuficiente
