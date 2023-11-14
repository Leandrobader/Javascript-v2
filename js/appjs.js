//Aqui vamos a comenzar con Javascript

console.log("Hola mundo");

//Tipos de datos

//string: cadenas de caracteres (se lo representa porque esta contenido entre comillas simples o dobles)
//number: todos los numeros
//Booleanos: son logicos y solo toman dos valores (true o false)
//Array:
//Object
//Empty: null, nada

//Variables (hay tres tipos: var, let, const)
//var: deprecado, ya no se usa
//crear o declarar una variable

//sintaxis:
/*
tipo de variable (nombre de la variable en CamelCase o nombre-de-la-var o nombre_de_la_var) = string, numbre, boolean, array o Object

*/

let mensaje = "Esto es un mensaje"; //le puedo cambiar el valor
console.log("let mensaje:", mensaje);
document.write("<br>" + mensaje)
const token = "fdsdffgdf"; //no le puedo cambiar el valor

//cambiar valor de una variable
mensaje = "Esto es otro mensaje distinto"
console.log(mensaje);
document.write("<br>" + mensaje)

mensaje = 16;
console.log(mensaje);
document.write("<br>" + mensaje)

//token = 1234 No se puede cabiar el valor de una constante

//imprimir datos en el documento HTML

//document.write("Esto es un document.write")

let numero_1 = 15
let numero_2 = 20
let suma = numero_1 + numero_2
console.log(numero_1 + numero_2);
document.write("<br>" + (numero_1 + numero_2)) //si no le pongo los parentesis me los concatena porque detecta que el primero es string y los toma a todos como string
document.write("<br> El resultado de la suma es: " + suma)

//ALERT (PopUp) Tiene prioridad o mas peso que los document.write
alert("Hola mundo con un ALERT");
alert("El resultado de suma es: " + suma)
alert("<br>" + (numero_1 + numero_2))






