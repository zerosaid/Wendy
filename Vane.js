function mostrar(texto) {
    document.getElementById("solucion").textContent = texto;
}

// 1. Definición de variables
function ejercicio1() {
    let nombreEstudiante = "Daniel";
    let edadEstudiante = 18;
    let notaFinal = 4.2;
    let resultado = `Nombre: ${nombreEstudiante}\nEdad: ${edadEstudiante}\nNota final: ${notaFinal}`;
    mostrar(resultado);
}

// 2. Concatenación
function ejercicio2() {
    let nombre = prompt("Ingresa tu nombre:");
    let carrera = prompt("Ingresa tu carrera:");
    mostrar(`Hola ${nombre}, estás inscrito en la carrera de ${carrera}.`);
}

// 3. Leer y Escribir
function ejercicio3() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let resultado = `Suma: ${num1 + num2}\nDiferencia: ${num1 - num2}\nProducto: ${num1 * num2}\nCociente: ${num1 / num2}`;
    mostrar(resultado);
}

// 4. Área de un círculo
function ejercicio4() {
    let radio = parseFloat(prompt("Ingresa el radio del círculo:"));
    let area = 3.14 * radio * radio;
    mostrar(`Área del círculo: ${area}`);
}

// 5. Operaciones lógicas
function ejercicio5() {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let pais = prompt("Ingresa tu país:");
    if (edad >= 18 && pais.toLowerCase() === "colombia") {
        mostrar("Puede votar");
    } else {
        mostrar("No puede votar");
    }
}

// 6. Condicional simple
function ejercicio6() {
    let nota = parseFloat(prompt("Ingresa tu nota:"));
    if (nota >= 3.0) {
        mostrar("Aprobado");
    } else {
        mostrar("No aprobado");
    }
}

// 7. Condicional doble
function ejercicio7() {
    let edadPersona = parseInt(prompt("Ingresa tu edad:"));
    if (edadPersona >= 18) {
        mostrar("Mayor de edad");
    } else {
        mostrar("Menor de edad");
    }
}

// 8. Condicional anidado
function ejercicio8() {
    let calificacion = parseFloat(prompt("Ingresa tu calificación:"));
    let mensaje = "";
    if (calificacion >= 4.5) {
        mensaje = "Excelente";
    } else if (calificacion >= 3.0 && calificacion < 4.5) {
        mensaje = "Aceptable";
    } else {
        mensaje = "Reprobado";
    }
    mostrar(mensaje);
}

// 9. Promedio y aprobación
function ejercicio9() {
    let estudiante = prompt("Ingresa tu nombre:");
    let notaMat = parseFloat(prompt("Ingresa tu nota en matemáticas:"));
    let notaInfo = parseFloat(prompt("Ingresa tu nota en informática:"));
    let promedio = (notaMat + notaInfo) / 2;
    let resultado = `${estudiante}, tu promedio es ${promedio.toFixed(2)}.\n`;
    resultado += promedio >= 3.0 ? "Aprobaste" : "Reprobaste";
    mostrar(resultado);
}

// 10. Subsidio con lógica compuesta
function ejercicio10() {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let desempleadoConHijos = prompt("¿Estás desempleado y tienes hijos? (sí/no):");
    if (edad > 60 || desempleadoConHijos.toLowerCase() === "sí") {
        mostrar("Tiene derecho al subsidio");
    } else {
        mostrar("No tiene derecho al subsidio");
    }
}
