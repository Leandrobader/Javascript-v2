//ARRAYS

/*
let dias=[0,1,2,3,...,n]
*/

let dias=["Lunes", "Martes", "Miercoles"];

let longitud = dias.length
console.log("La longitud del array dias es: ", longitud);

//Para acceder a los elementos de un array

console.log("El valor de la posicion 0 del array es: ", dias[0]);
console.log("El valor de la posicion 0 del array es: ", dias[6]);//Esta es una posicion que no existe.
console.log("El valor de la posicion 0 del array es: ", dias[2]);

//Agregar elementos a un array

//Push Añade uno o mas elementos al final de un array

let nuevaLong=dias.push("Jueves");
dias.push("viernes","sabado")
console.log(nuevaLong);
console.log(dias);

//Unshift agrega un nuevo elemento al inicio del array

dias.unshift("Domingo");
console.log("El array modificado es: ", dias);

//Agregar un elemento a un array en una posicion especifica
//Metodo Splice (Puedo agregar y/o eleminar elementos)

let array = [1,2,3];

//agregar algo en la posicion 1 con splice
console.log("El array es: ", array);
array.splice(1,0,5)
console.log("El array es: ", array);

//Borrar elementos de un array

//Eliminar el ultimo elemento de un array
let arr=[1,2,3,4,5,6,7]
console.log("El array es: ", arr);
arr.pop()
console.log("El array es: ", arr);

//Eliminar el primer elemento
//SHIFT
arr.shift()
console.log("El array es: ", arr);

//Eliminar una posicion especifica de un array
//SPLICE

arr.splice(2,1)
console.log("El array es: ", arr);
//Averiguar la posicion de un elemento
let arrayNumeros = [1,2,3,4,5,6,7,8,9];
let index= arrayNumeros.indexOf(5); //devuelve la posicion en donde esta el elemento que estamos buscando
arrayNumeros.splice(index,1)

console.log("ArrayNumeros = ", arrayNumeros);

//Averiguar el valor maximo de un array de numeros

let precios = [100,25,50,34,56,4,78];
let valorMax=Math.max(...precios)
console.log("El precio maximo es: ",valorMax);

//Averiguar el minimo

let valorMinimo = Math.min(...precios)
console.log("El precio minimo es: ",valorMinimo);

//ORDENAR ARRAYS

let arrayString = ["a","z","x","b","c","h"];
console.log("El array original es: ", arrayString);
let arrSortStr= arrayString.sort()

console.log("El array ordenado es: ", arrSortStr);

let arrnumeros = [2,54,3,6,9]
console.log("El array de numeros original es: ", arrnumeros);

arrnumeros.sort((a,b)=> a - b)
console.log("El array ordenado es: ", arrnumeros);

//Filtrar arrays

let arrOriginal=["perro","gato","conejo","elefante","rata"]
console.log("El array de animales es: ",arrOriginal);

let arrFilter=arrOriginal.filter((element)=> element !== "rata") //va recorriendo el array elemento por elemento y filtrando y guardando a todos los que sean distintos de "rata"
console.log("El array modificado es: ", arrFilter);
console.log("El array de animales es: ",arrOriginal);//El array original no se modifica
