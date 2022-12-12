class Cliente {
    constructor(nombre, apellido, dni, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.saldo = saldo;
    }
}

const clienteNicolas = new Cliente("Nicolas", "Pandolfo", 25485629, 35950);
const clienteMariela = new Cliente("Mariela", "Peralta", 35987168, 15720);
const clienteCarlos = new Cliente("Carlos", "Martinez", 15742953, 9536);
const clienteMarta = new Cliente("Marta", "Gutierrez", 95872647, 152478);

const arrayClientes = [];

arrayClientes.push(clienteNicolas);
arrayClientes.push(clienteMariela);
arrayClientes.push(clienteCarlos);
arrayClientes.push(clienteMarta);

console.log(arrayClientes);


function menu() {
    alert("Bienvenido al Banco Nacion");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de cliente \n 2) Baja de cliente \n 3) Modificación de cliente \n 4) Consulta de cliente \n 5) Calculadora de cuotas \n 6) Salir"));
    return opcion;
}


function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let cliente = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}


function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}


function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let saldo = parseInt(prompt("Ingrese el saldo del cliente: "));
    let clienteModificado = new Cliente(nombre, apellido, dni, saldo);
    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}


function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente: "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}

function cuota() {
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
                alert("EL valor de su cuota es de: " + resultado);
                console.log("EL valor de su cuota es de: " + resultado);
                break;
            case "3":
                resultado = division(precioProducto , 3);
                alert("El valor de su cuota es de: " + resultado.toFixed(2));
                console.log("El valor de su cuota es de: " + resultado.toFixed(2));
                break;
            case "6":
                resultado = division(precioProducto , 6);
                alert("El valor de su cuota es de: " + resultado.toFixed(2));
                console.log("El valor de su cuota es de: " + resultado.toFixed(2));
                break;
            case "9":
                resultado = division(precioProducto , 9);
                alert("El valor de su cuota es de: " + resultado.toFixed(2));
                console.log("El valor de su cuota es de: " + resultado.toFixed(2));
                break;
            case "12":
                resultado = division(precioProducto , 12);
                alert("El valor de su cuota es de: " + resultado.toFixed(2));
                console.log("El valor de su cuota es de: " + resultado.toFixed(2));
                break;
            default:
                alert("El numero ingresado no es un valor aceptado.");
                break;
        }
        
        seguir = prompt("Desea calcular otra cuota?(si/no): ")
        
    } while (seguir!=continuar);
}

function salir() {
    alert("Gracias por utilizar el Banco Nacion");
}


let opcion = menu();
switch (opcion) {
    case 1:
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3:
        modificacionCliente();
        break;
    case 4:
        consultaCliente();
        break;
    case 5:
        cuota();
        break;
    case 6:
        salir();
        break
    default:
        alert("Opción incorrecta");
        break;
}
