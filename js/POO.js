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
    edad: 35
}

const tutor={
    nombre: "Valentin",
    apellido: "Quiroga",
    edad: 27
}

console.log("Este es el objeto profesor -->",profesor);
console.log("Este es el objeto tutor -->",tutor);

//ACCEDER AL VALOR DE LOS ATRIBUTOS
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