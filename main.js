let resultado;
let seguir;
let continuar = "no";

function division(valorA , valorB){
    return valorA / valorB;
}
do {
    let precioProducto = parseInt(prompt("Ingrese el valor del producto:"));

    let cuotas = prompt("Ingrese en cuantas cuotas quiere pagar su producto (1,3,6,9,12):");

    switch(cuotas){
        case "1":
            resultado = division(precioProducto , 1);
            console.log("EL valor de su cuota es de: " + resultado);
            break;
        case "3":
            resultado = division(precioProducto , 3);
            console.log("El valor de su cuota es de: " + resultado.toFixed(2));
            break;
        case "6":
            resultado = division(precioProducto , 6);
            console.log("El valor de su cuota es de: " + resultado.toFixed(2));
            break;
        case "9":
            resultado = division(precioProducto , 9);
            console.log("El valor de su cuota es de: " + resultado.toFixed(2));
            break;
        case "12":
            resultado = division(precioProducto , 12);
            console.log("El valor de su cuota es de: " + resultado.toFixed(2));
            break;
        default:
            alert("El numero ingresado no es un valor aceptado.");
            break;
    }

    seguir = prompt("Desea calcular otra cuota?(si/no): ")
    
} while (seguir!=continuar);
