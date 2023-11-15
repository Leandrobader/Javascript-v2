//IF --> Si

//sintaxis
/*
if(condicion logica a evaluar){
    accion a efectuar en caso que se cumpla la condicion 
}
*/

let edad = 70;

// if(edad > 18){
//     console.log("Eres mayor de edad")
// }

// if (edad >= 21) {
//     console.log("eres legalmente responsable");
// }else{
//     console.log("Eres menor de 21 años");
// }

if (edad<21) {
    console.log("eres menor de edad, tu edad es: ", edad);
} else if (edad>=21 && edad<50) {
    console.log("Eres joven adulto, tu edad es: ", edad);
}else if (edad>=50 && edad <60) {
    console.log("Eres adulto, tu edad es: ", edad);
}else{
    console.log("Eres anciano, tu edad es: ", edad);
}

