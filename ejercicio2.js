"use strict";
// ejercicio2.ts
class Calculadora {
    // Sumar
    sumar(a, b) {
        return a + b;
    }
    // Restar
    restar(a, b) {
        return a - b;
    }
    // Multiplicar
    multiplicar(a, b) {
        return a * b;
    }
    // Dividir
    dividir(a, b) {
        if (b === 0) {
            console.log("No se puede dividir por cero.");
            return NaN;
        }
        return a / b;
    }
    // Potencia
    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }
    // Factorial
    factorial(n) {
        if (n <= 1)
            return 1;
        return n * this.factorial(n - 1);
    }
}
// Crear una instancia de la calculadora
const calc = new Calculadora();
console.log(calc.sumar(3, 4)); // 7
console.log(calc.restar(10, 3)); // 7
console.log(calc.multiplicar(4, 5)); // 20
console.log(calc.dividir(10, 2)); // 5
console.log(calc.potencia(2, 3)); // 8
console.log(calc.factorial(5)); // 120
