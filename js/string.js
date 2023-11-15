//Objetos globales de los strings

let texto = "Hola Valentin"
console.log("El valor de la variable texto es: ", texto);

//Propiedad unica segun blog oficial
//length --> sirve para obtener la longitud de una string

let longitud = texto.length;
console.log("La longitud de texto es: ", longitud);

//Metodos

//Pasar a mayuscula

let mayuscula=texto.toUpperCase();
console.log("variable texto en mayusculas: ", mayuscula);

//minusculas

let minusculas=texto.toLowerCase();
console.log("variable texto todo en minuscula: ", minusculas);

//posicion de un caracter

let posicion = texto.indexOf(" ")
console.log("el resultado de la posicion es: ", posicion);

let posicion_a = texto.indexOf("a")
console.log("el resultado de la posicion de la letra a es: ", posicion_a);

//subcadena
let subCadena = texto.slice(5) // let subCadena = texto.slice(5,texto.length)
console.log("La sub cadena que se extrajo es: ", subCadena);

//Remplazar una porcion de string
let reemplazo = texto.replace("Valentin", "Alan");
console.log("El resultado de cambiar el texto es: ", reemplazo);

//Eliminar espacios en blanco
let texto2 = " Hola Valentin "
let sinEspacio = texto2.trim(); //quita los espacios en blanco del principio y el final 
console.log("El resultado de eliminar los espacios en blanco con trim es: ", texto2);

let trimStart = texto2.trimStart();
console.log("El resultado de aplicar trim start es: ", trimStart.length);

//texto a numero
// parseInt de texto a entero
// parseFloat de texto a decimal

//MATH sirve para hacer operaciones matematicas
//valor absoluto
let num = -5;
let valorAbs = Math.abs(num)
console.log("El valor absoluto de num es: ", valorAbs);

//ARRAYS --> let arrayNumeros=[];

let arrayNumeros=[3,5,7,78,90,0, num];
console.log("El contenido del array de numeros es: ", arrayNumeros);

//max y min

let max = Math.max(...arrayNumeros) //con esos tres puntos se lo descompone al array para que pueda buscar el mayor
console.log("El valor maximo del array de nuemros es: ", max);

let max2 = Math.max(num, 10,100,25)
console.log("El valor maximo 2 es de: ", max2);

let min= Math.min(0,6,3,num);
console.log("El valor minimo es: ", min);

//El metodo math.round redondea un numero al entero mas cercano

let numero2 = 5.6
let numeroRedondeado2 = Math.round(numero2)
console.log("El numero redondeado es: ", numeroRedondeado2);

//Math.floor redondea para abajo
//Math.ceil redondea hacia arriba 
//Para generar numeros aleatorios con Math.random(); devuelve un numero aleatorio entre 0 y 1

