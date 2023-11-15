//crear un input para que el usuario ingrese datos
//solicitando string al usuario
/*
let nombreUsuario;
let apellidoUsuario;
let dniUsuario;
console.log("El valor ingresado en nombreUsuario es: ", nombreUsuario);
console.log("El valor ingresado en apellidoUsuario es: ", apellidoUsuario);
console.log("El valor ingresado en dniUsuario es: ", dniUsuario);
//aqui hariamos que el usuario ingrese su nombre
nombreUsuario = prompt("ingrese su nombre por favor!!");
apellidoUsuario = prompt("Ingrese su apellido por favor");
dniUsuario = prompt("Ingrese su numero de DNI por favor");

console.log("El nombre es: -->" , nombreUsuario);
console.log("El apellido es: -->" , apellidoUsuario);
console.log("El dni es: -->" , dniUsuario);

document.write("El nombre de usuario es: " + nombreUsuario)
document.write("<br/>El apellido de usuario es: " + apellidoUsuario)
document.write("<br/>El DNI de usuario es: " + dniUsuario)
*/

//Solicitando numeros al usuario

let numero_1;
let numero_2;

numero_1=prompt("ingrese el primer numero")
numero_2 = prompt("ingrese el segundo numero")
//hay que castear para que los numeros que ingresamos en string se conviertan en numeros
let numero_1_parseado = parseInt(numero_1)
let numero_2_parseado = parseInt(numero_2)
let suma = numero_1_parseado + numero_2_parseado;

document.write("El resultado de la suma de ambos numeros ingresados es de: " + suma);
