/**
 * EN OBJETOS TENEMOS PROPIEDADES O ATRIBUTOS Y TENEMOS METODOS O FUNCIONALIDADES
 * 
 * ANALOGIA PROPIEDAD O ATRIBUTO = VARIABLE
 * METODOS O FUNCIONALIDADES = FUNCIONES
 * 
 *
 * CREACION DE UN OBJETO LITERAL
 * SINTAXIS
 * 
 * CONST [NOMBRE O IDENTIFICADOR]={
 * ADENTRO SE DECLARAN LAS PROPIEDADES O ATRIBUTOS
 * SINTAXIS
 * KEY: VALOR
 * 
 * } 
 */

const profesor={
    nombre: "Alan",
    apellido: "chibilisco",
    edad: 35,

    saludar() {
        console.log("Hola soy el profesor: " + this.nombre);//el this hace referencia al propio objeto
    },

    mostrarInformacion(){
        console.log(`Hola mi nombre es ${this.nombre}, mi apellido es ${this.apellido} y mi edad es ${this.edad}`);
    }
}

const tutor={
    nombre: "Valentin",
    apellido: "Quiroga",
    edad: 27,
    saludar() {
        console.log("Hola soy el tutor: " + this.nombre);//el this hace referencia al propio objeto
    }
}

const profesor2 = {
    nombre: "Alan",
    apellido: "chibilisco",
    edad: 35
}

console.log("Este es el objeto profesor -->",profesor);
console.log("Este es el objeto tutor -->",tutor);

//ACCEDER AL VALOR DE LOS ATRIBUTOS (HAY DOS MANERAS DE ACCEDER)
//1- OBJETO.PROPIEDAD
//2- OBJETO["PROPIEDAD"]

console.log("El nombre del profesor es: ", profesor.nombre);
console.log("El apellido del profesor es: ", profesor["apellido"]);
console.log("El nombre del tutor es: ", tutor["nombre"]);
console.log("La edad del tutor es: ", tutor.edad);

//LOS OBJETOS NOS SIRVEN PARA MODELAR COSAS DE LA REALIDAD EN LA PROGRAMACION

//AGREGAR UNA NUEVA PROPIEDAD O ATRIBUTO

//OBJETO.NUEVAPROPIEDAD=NUEVO VALOR

profesor.sexo="masculino";
tutor.sexo="masculino";
console.log("El sexo del profesor es: ",profesor.sexo);
console.log("El sexo del tutor es:",tutor.sexo);
console.log("El objeto tutor modificado es:", tutor);

//MODIFICAR UN VALOR DE UN ATRIBUTO DE UN OBJETO
//OBJETO.PROPIEDAD=NUEVO VALOR

profesor.edad=40
console.log("El objeto profesor modificado es:",profesor);

//ELIMINAR UNA PROPIEDAD DE UN OBJETO
//deleto OBJETO.PROPIEDAD

delete profesor.sexo;

console.log("El objeto profesor con propiedad sexo eliminada -->",profesor);

//COMPARAR OBJETOS
let a =1
let b =1
console.log(a==b);

console.log(profesor == tutor); //false
console.log(profesor === profesor2); //false es porque hacen referencia a distintos espacios de memoria
console.log(profesor.nombre == profesor2.nombre); //true porque compara los valores de cada propiedad

const profesor1=profesor;
console.log(profesor1 === profesor);//true

//RECORRER LAS PROPIEDADES DE UN OBJETO (FOR IN)

for (const value in profesor) { //value representa el nombre de la propiedad 
    console.log(value,profesor[value]); //profesor[value] --> accedemos al valor de la propiedad
}


//UTILIZAR LOS METODOS DE UN OBJETO

profesor.saludar();
tutor.saludar();
profesor1.saludar();//funciona porque es una copia de profesor, apunta al mismo espacio en memoria
profesor.mostrarInformacion();

//CREAR OBJETOS CON FUNCION CONSTRUCTORA
//Nos permite crear muchos objetos sin necesidad de estar creandolos uno a uno
function Auto(marca, color){
    this.brand=marca; //crea la propiedad o atributo de un objeto
    this.color=color; //crea la propiedad color que recibe el parametro color
}

const ford = new Auto("ford","azul");
console.log(ford);
const fiat = new Auto("FIAT","NEGRO");
console.log(fiat);




