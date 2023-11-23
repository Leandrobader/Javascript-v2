//IF --> Si

//sintaxis
/*
if(condicion logica a evaluar){
    accion a efectuar en caso que se cumpla la condicion 
}
*/

let edad = 55;

// if(edad > 18){
//     console.log("Eres mayor de edad")
// }

// if (edad >= 21) {
//     console.log("eres legalmente responsable");
// }else{
//     console.log("Eres menor de 21 años");
// }

//Definicion del Pseudocodigo del if
/*
BASICO

Si(CONDICION A IGUALAR = VERDADERO){
    EJECUTA ESTA INSTRUCCION
}

COMBINADO

Si(CONDICION A IGUALAR = VERDADERO){
    EJECUTA ESTA INSTRUCCION
}SINO"SE EJECUTA EN CASO DE QUE LA CONDICON RESULTE FALSA"{
    EJECUTA ESTA INSTRUCCION
}


Si(CONDICION A IGUALAR = VERDADERO){
    EJECUTA ESTA INSTRUCCION
}SINO SI (CONDICION A EVALUAR = VERDADERO){
    EJECUTA ESTA INSTRUCCION
}
SINO{EJECUTA ESTA INSTRUCCION}
*/
if (edad < 21) {
  console.log("eres menor de edad, tu edad es: ", edad);
} else if (edad >= 21 && edad < 50) {
  console.log("Eres joven adulto, tu edad es: ", edad);
} else if (edad >= 50 && edad < 60) {
  console.log("Eres adulto, tu edad es: ", edad);
} else {
  console.log("Eres anciano, tu edad es: ", edad);
}

if (edad < 21) {
  if (edad >= 18) {
    console.log("Tienes entre 18 y 20 años");
  } else {
    console.log("Eres menor de 18 años");
  }
} else {
  if (edad < 50) {
    console.log("tienes entre 21 y 49 años");
  } else {
    console.log("Tienes 50 años o mas");
  }
}

//CONDICIONALES MULTIPLES
// SON ESTRUCTURAS DE CONTROL EN LOS QUE SE EJECUTA UN CODIGO SIEMPRE Y CUANDO SE CUMPLA UNA CONDICION

//SWICH

//SCOPE Y AMBITO (ES LO QUE EXISTE SOLO DENTRO DE UN CODIGO)

/*
EN CASO DE (EXPRESION A EVALUAR){
    CASO: (COMPARA UN VALOR)
    EJECUTA UNA INSTRUCCION
    BREAK;
    N...
    DEFAULT 
    EJECUTA UNA INSTRUCCION
    BREAK
}
*/
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

//let dia = parseInt(prompt("Ingrese un numero del 1 al 7 para decir que dia de la semana es"));
let dia=4
switch (dia) {
  case 1:
    console.log("Lunes");
    document.write("Lunes")
    break;
  case 2:
    console.log("Martes");
    document.write("Martes")
    break;
  case 3:
    console.log("Miercoles");
    document.write("Miercoles")
    break;
  case 4:
    console.log("Jueves");
    document.write("Jueves")
    break;
  case 5:
    console.log("Viernes");
    document.write("Viernes")
    break;
  case 6:
    console.log("Sabado");
    document.write("Sabado")
    break;
  case 7:
    console.log("Domingo");
    document.write("Domingo")
    break;
  default:
    console.log("No ingresaste un valor valido");
    break;
}

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:              
        console.log("Es dia laboral");
        document.write("-Es dia laboral")
        break;
    case 6:
    case 7:    
        console.log("Es fin de semana");
        document.write("-Es fin de semana");
        break;    
    default:
        console.log("no es un dia valido");
        break;
}

//BUCLES

//WHILE = MIENTRAS (CONDICION LOGICA QUE TIENE QUE SER IGUAL A TRUE = VERDADER){
//    EJECUTA LA INSTRUCCION
//}
//
/*
while (condition) {
    
}
*/

let cantidad = 4;
let contador = 0;
while (cantidad <=5) {
    console.log("La cantidad es: ", cantidad);
    cantidad ++;
    contador ++

}
console.log("El valor de contador es: ", contador);

/*
DO WHILE -> EJECUTA AL MENOS UNA VEZ Y LUEGO EVALUA LA CONDICION
*/

do {
    console.log("La cantidad es: ", cantidad);
    cantidad ++;
    contador ++
} while (cantidad <=5);
console.log("El valor de contador es: ", contador);

//CICLOS

//FOR -> PARA

/*
PARA (INICIALIZACION; CONDICION; INCREMENTADOR){
    BLOQUE DE CODIGO A EJECUTAR
}
*/
/*
for (let index = 0; index < 10; index++) {
    console.log("El valor de index es: ", index)
    
}
*/
let contadorFor=0;
for (let index = 0; index < 10; index++) {
    console.log("El valor de index es: ", index);   
    contadorFor ++
}

console.log("El ciclo for se ejecuto "+contadorFor+" veces");

