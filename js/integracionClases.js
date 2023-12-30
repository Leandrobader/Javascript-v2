/**CREAR UN SISTEMA DONDE SE LE MUESTRE AL USUARIO UN MENU DE OPCIONES PARA CREAR MENTOR, ALUMNO, LISTAR TODO, LISTAR MENTOR, LISTAR ALUMNO Y QUE LOS DATOS ESTEN PERSISTIDOS. EL SISTEMA SE DETENDRA CUANDO EL USUARIO LO INDIQUE
 * 
 */

class Persona{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni=dni
    };

    mostrarInformacion(){
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, DNI: ${this.dni}`
    }
}

class Mentor extends Persona{
    constructor(nombre, apellido, dni, materia){
        super(nombre, apellido, dni);
        this.materia = materia;
        this.rol = "Mentor"
    }

    mostrarInformacion(){
        return `Rol: ${this.rol}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, DNI: ${this.dni} Materia: ${this.Materia}`
    }
}

class Alumno extends Persona{
    constructor(nombre, apellido, dni, curso, becado){
        super(nombre, apellido, dni);
        this.rol = "alumno";
        this.curso = curso;
        this.becado = becado
    };

    mostrarInformacion(){
        return `Rol: ${this.rol}, Apellido: ${this.apellido}, Nombre: ${this.nombre}, DNI: ${this.dni} Curso: ${this.curso}, Becado: ${this.becado}`
    }
}

class Sistema{
    constructor(){
        // const lsValue = localStorage.getItem("almacenamiento");
        // const array = JSON.parse(lsValue);
        // if(array !== null){
        //     this.almacenamiento = array;
        // }else{
        //     this.almacenamiento = [];
        // }
        
        this.almacenamiento= JSON.parse(localStorage.getItem("almacenamiento")) || []; //Es lo mismo que tengo comentado arriba pero en una sola linea
    }

    existeUsuario(usuario){
        const exist = this.almacenamiento.find((element)=>element.dni===usuario.dni)
        if (exist !== undefined) {
            return true
        } else {
            return false
        }
    };

    crearMentor(mentor){
        if (this.existeUsuario(mentor)) {
            console.log("El usuario ya existe");
        } else {
            this.almacenamiento.push(mentor);
            console.log("EXITO SE CREO EL MENTOR");
        }
        
    }

    crearAlumno(alumno){
        if (this.existeUsuario(alumno)) {
            console.log("El alumno ya existe");
        } else {
            this.almacenamiento.push(alumno);
            console.log("EXITO SE CREO EL ALUMNO");
        }

    };

    mostrarInformacion(object){
        let str="";
        for (const key in object) {
           str+=`${key.toUpperCase()}: ${object[key]}  `
        }
        return str;
    }

    listarTodo(){
        if (this.almacenamiento.length===0) {
            console.log("Aun no existen registros");
        } else {
            this.almacenamiento.forEach((element, index)=>{
                //console.log(`${index +1}: ${element.mostrarInformacion()}`);
                console.log(`${index +1}: ${this.mostrarInformacion(element)}`);
            })
        }
        
    };

    listarMentor(){
        const mentores = this.almacenamiento.filter((element)=>element.rol==="Mentor")
        if (mentores.length>0) {
            mentores.forEach((element, index)=>{
                console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
            })
        } else {
            console.log("Aun no hay registros de MENTORES");
        }
    };

    listarAlumnos(){
        const alumnos = this.almacenamiento.filter((element)=>element.rol==="alumno")
        if (alumnos.length>0) {
            alumnos.forEach((element, index)=>{
                console.log(`${index+1}: ${this.mostrarInformacion(element)}`);
            })
        } else {
            console.log("Aun no hay registros de ALUMNOS");
        }
    };
}
// AQUI INSTANCIAMOS LA CLASE SISTEMA
const system = new Sistema();

do {
    let opcion = parseInt(prompt("Seleccione una opcion, 1- CREAR MENTOR, 2-CREAR ALUMNO, 3 LISTAR TODO, 4 LISTAR MENTORES, 5 LISTAR ALUMNOS"))
    switch (opcion) {
        case 1:
            let nombreM=prompt("ingrese el nombre")
            let apellidoM=prompt("ingrese el apellido")
            let dniM=prompt("Ingrese el DNI")
            let materiaM=prompt("ingrese la materia")
            const mentor = new Mentor(nombreM,apellidoM,dniM,materiaM)
            system.crearMentor(mentor);

            break;

        case 2:
            let nombreA=prompt("ingrese el nombre")
            let apellidoA=prompt("ingrese el apellido")
            let dniA=prompt("Ingrese el DNI")
            let cursoA=prompt("ingrese el curso")
            let becadoA=confirm("es becado? si es si presione aceptar caso contrario cancelar")
            const alumno = new Alumno(nombreA,apellidoA,dniA,cursoA,becadoA)
            system.crearAlumno(alumno);
        break;    

        case 3:
            system.listarTodo();
            break;
        
        case 4:
            system.listarMentor();
        break;

        case 5:
            system.listarAlumnos();
        break;
        default:
            console.error("OPCION INGRESADA INVALIDA: INGRESO --> " + opcion);
            break;
    }
} while (confirm("Desea continuar operando?"));

console.log("ALMACENAMIENTO = ", system.almacenamiento);

localStorage.setItem("almacenamiento", JSON.stringify(system.almacenamiento));

/**
 * PASOS PARA PERCISTIR LOS DATOS
 * 1- COMPROBAR SI EXISTE LS ALMACENADO --> localstorage.getItem(almacenamiento);  ESTO NOS DEVUELVE UN STRING O NULL
 * SI ES UN STRING NECESITO CONVERTIRLO DE NUEVO A UN ARRAY
 * 1-A- JSON.parse(localstorage.getItem(alamcenamiento))
 * 1-B- EN CASO QUE NO EXISTA (QUE DEVUEVA NULL) DEVEMOS CREAR EL LOCAL STORAGE --> localStorage.setItem("almacenamiento", JSON.stringify([])) --> LO CREAMOS Y GUARDAMOS UN ARRAY VACIO COMO STRING
 * 
 */