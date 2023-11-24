let nombre = "alan"
let apellido = "chibilisco"
let edad = 35
let sexo = "masculino"

let a = 2
let b = 3

let suma = a+b

console.log("El resultado de sumar a +b es: ", suma);

//FUNCIONES DECLARATIVAS
//la definimos mediante una palabra clave (function) y debemos declararle un nombre

function funcionsuma(numero1,numero2){
    let resultado = numero1+numero2;
    console.log("El resultado de sumar numero 1 y numero2 es: ", resultado);
}
//entre parentecis puede o no tener parametros la funcion

a=100
b=200

//Utilizo una funcion
funcionsuma(a,b)

a=27
b=13

funcionsuma(a,b)
funcionsuma(2,2)
//esta es una funcion que no retorna nada
function saludar(nombre, apellido){
    console.log("Hola, mucho gusto " + nombre + " "+ apellido+ ", como estas?");
}

saludar("Leandro","bader")
//Esta es una funcion que retorna un numero
function division(divisor, dividendo){
    return divisor / dividendo 
}

let resultado = division(4,2)
console.log("El resultado de la division es: ", resultado);

console.log("El resultado de dividir 4 en 0 es: ", division(4,0));

console.log("El resultado de dividir 0 en 0 es: ", division(0,0));
/*
let nombreUsuario = prompt("ingresa tu nombre por favor")
let apellidoUsuario = prompt("Ingresa tu apellido por favor")

saludar(nombreUsuario,apellidoUsuario)
*/

//FUNCIONES ANONIMAS
//Se las puede utilizar recien despues de haberla declarado ya que se comporta como una variable
//miFuncion(3,4) --> no se puede invocar a una funcion anonima antes de su declaracion
const miFuncion = function(a,b){
    console.log(a+b);
}

miFuncion(3,4)


//FUNCIONES FLECHA - ARROW FUNCTION
//Se las puede utilizar recien despues de haberla declarado ya que se comporta como una variable
//miFuncionFlecha(3,4) --> no se puede invocar a una funcion flecha antes de su declaracion
const miFuncionFlecha=(a,b)=>{
    return a * b;
}
console.log("El resultado de utilizar mi funcion flecha es: ", miFuncionFlecha(3,2));

//CALLBACKS
//son funciones que llaman a otra funcion como un log que llama a una funcion

const funcionCallback=(nombre, apellido, callback)=>{
    callback(nombre, apellido) //indica que le tenemos que pasar una funcion
}

funcionCallback("valentin","Quiroga",saludar);

let arrOriginal=["perro", "gato","conejo","vaca","pajaro"]
console.log("El array original es: ", arrOriginal)

const filtro=(element, index)=>{
    console.log("analizando el elemento de la posicion: ", index);
    if(element!=="perro"){
        return element;
    }else{
        return false;
    }
}

let arrFilter = arrOriginal.filter((element, index)=> filtro(element, index))
console.log("El array filtrado es: ", arrFilter);