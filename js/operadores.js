console.log("estoy en operadores");

//Operadores de asignacion =
let numero = 5 //estamos declarando una variable del tipo let y le estamos asignando / inicializando con el operador = y con valor 5
console.log("valor de numero: ", numero);

let numero2 = 3
console.log("valor numero 2: ", numero2);

numero2 = numero;
console.log("valor de numero 2 luego de igualarla al primer numero",numero2);

//OPERADORES ARITMETICOS +, -, *, /, %

let valor = 10
let valor2= 10

//operador suma
let suma = valor + valor2; //Tener en cuenta que si el valor de las variables es distinto de numeros, el operador funciona como concatenacion
console.log("el valor de suma es: ", suma);

//operador resta

let resta = valor - valor2;
console.log("el valor de la resta es: ", resta);

//operador multiplicacion

let multiplicacion = valor * valor2;
console.log("el valor de la multiplicacion es: ", multiplicacion);

//operador division

let division = valor / valor2
console.log("el valor de division es: ", division);

//operador MODULO o resto

let resto = valor % valor2
console.log("el valor del modulo o resto es: ", resto);

//OPERADORES UNITARIOS

//operador de incremento

//valor = valor +1 opcion 1
valor ++;//esto significa que se va a incrementar en 1 el valor de la variable
valor ++;
console.log("el valor de let valor es: ", valor);
valor+= 3 //me lo incrementa en 3
console.log("el valor de let valor es: ", valor);

//operador de decremento

valor --; //decrementa en 1
console.log("El valor de let valor es: ", valor);
valor-=7;
console.log("el valor de let valor es: ", valor);

//Operador de negacion (solo funciona con valores o variables de tipo booleano)

let logica = true;
console.log("El valor de la let logica es: ", logica);
console.log("el valor de la let logica NEGADA es: ", !logica);

//OPERADORES CONDICIONALES (RELACIONALES Y LOGICOS)

//operadores relacionales
//siempre devuelven un true o false

let variable1 = "10"
let variable2 = "10"

//op == "igual a"
console.log("el op ==" , variable1 == variable2);

//op === estricatamente igual no solo comprueba el valor de la variable sino que tambien se fija en el tipo de la variable
console.log("El resultado del op === es: ", variable1===valor);

//op != es distinto que
console.log("El resultado del op != es: ", variable1 != valor);
//op !== estrictamente distinto, comprueba el valor y el tipo
console.log("El resultado del op !== es: ", variable1 !== valor);

// >, <, >=, <=

console.log("El valor de > es:", valor > valor2);
console.log("El valor de > es:", valor < valor2);
console.log("El valor de > es:", valor > valor2);
console.log("El valor de > es:", valor > valor2);

//Logicos

//AND LOGICO && -- dara true si ambas condiciones se cumplen caso contrario sera false
console.log("probando el AND ", variable1!=valor && variable1!==valor);

//OR LOGICO RETORNA TRUE SI AL MENOS UNA DE LAS CONDICIONES ES TRUE

