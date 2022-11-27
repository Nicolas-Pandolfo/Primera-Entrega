let precioProducto = parseInt(prompt("Ingrese el valor del producto:"));

let cuotas = prompt("Ingrese en cuantas cuotas quiere pagar su producto (1,3,6,9,12):");
let resultado;


switch(cuotas){
    case "1":
        resultado = precioProducto;
        alert("EL valor de su cuota es de: " + resultado);
        break;
    case "3":
        resultado = precioProducto / 3;
        alert("El valor de su cuota es de: " + resultado.toFixed(2));
        break;
    case "6":
        resultado = precioProducto / 6;
        alert("El valor de su cuota es de: " + resultado.toFixed(2));
        break;
    case "9":
        resultado = precioProducto / 9;
        alert("El valor de su cuota es de: " + resultado.toFixed(2));
        break;
    case "12":
        resultado = precioProducto / 12;
        alert("El valor de su cuota es de: " + resultado.toFixed(2));
        break;
    default:
        alert("El numero ingresado no es un valor aceptado.");
        break;
}