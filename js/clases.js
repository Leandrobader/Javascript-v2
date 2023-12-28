//CLASES
//SON MOLDES A PARTIR DE LAS CUALES PODEMOS CREAR MUCHOS OBJETOS QUE COMPARTIRAN PROPIEDADES
//construimos una clase que construya objetos personas
class Persona{
    constructor(nombre, apellido, edad){
        this.name=nombre;
        this.surName=apellido;
        this.age=edad;
    };

    saludar(){
        console.log(`Hola soy ${this.name}`);
    }
    mostrarInformacion(){
        console.log(`Hola mi nombre es ${this.name}, mi apellido es ${this.surName} y mi edad es ${this.age}`);
    }
    cambiarDatos(nuevoNombre, nuevoApellido, nuevaEdad){
        this.name=nuevoNombre;
        this.surName=nuevoApellido;
        this.age=nuevaEdad

        console.log("Exito!, Los datos fueron actualizados");
        this.mostrarInformacion();
    }

    obtenerEdad(){
        return this.age;
    }

    get GetDatos(){//obtener los valores
        return `Datos: ${this.name}, ${this.surName}, ${this.age}`
    }

    get getEdad(){
        return `${this.age}`;
    }
//Los seters son para modificar valores y solo se puede ir cambiando de a un valor
    set SetName(newName){//Establecer los valores
        this.name= newName;//
    }

    get getName(){
        return this.name;
    }
}

let nombre="Alan"; //string
let edad = 10 //number

//CREAR UN OBJETO EN BASE A LA CLASE --> INSTANCIAR UNA CLASE 
//QUE ES LO MISMO QUE DECIR QUE CREO UNA NUEVA INSTANCIA DE UNA CLASE

const alan = new Persona("Alan","Chibilisco",35);

console.log(alan);

alan.mostrarInformacion();

const valentin = new Persona("Valentin", "Quiroga", 27)

valentin.mostrarInformacion();

alan.cambiarDatos("Pedro","Gomez",36)
//alan.mostrarInformacion()

console.log(alan.obtenerEdad());

const edadTutor=valentin.obtenerEdad()

if (edadTutor<40) {
    console.log("Es menor de 40 años");
}else{
    console.log("Es mayor de 40 años");
}

//Principio de encapsulamiento Las clases deben estar protegidas hacia el exterior 

alan.name = "jose"//No se debe hacer (se hace con geter y seters)
console.log(alan);

alan.SetName = "Alan"
console.log(alan.GetDatos);
console.log(alan.getEdad);

//HERENCIA
// class Alumno{
//     constructor(nombre, apellido, edad, curso){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.curso = curso;
//     }

//     mostrarInformacion(){
//         return `Nombre: ${this.nombre}, Apellido &{this.apellido}, Edad: ${this.edad}, Curso: ${this.curso}`
//     }
// }
//HAREMOS QUE HEREDE DE LA CLASE PERSONA 
class Alumno extends Persona{//PASAMOS A TENER DISPONIBLE TODOS LOS ATRIBUTOS Y METODOS DE LA CLASE PERSONA
    constructor(nombre, apellido, edad, rol, curso){
        super(nombre, apellido, edad);
        this.rol = rol;
        this.curso = curso;
    };

    // mostrarInformacionAlumno(){
    //     console.log(`Hola mi nombre es ${this.name}, mi apellido es ${this.surName}, mi edad es ${this.age}Mi rol es ${this.rol} y mi curso es: ${this.curso}`);
    // };
    mostrarInformacion(){
        console.log(`Hola mi nombre es ${this.name}, mi apellido es ${this.surName}, mi edad es ${this.age} Mi rol es ${this.rol} y mi curso es: ${this.curso}`);
    }
}

const alumno = new Alumno("Leandro", "Bader", 33, "alumno", "Full Stack");
alumno.saludar();
alumno.mostrarInformacion()

class Mentor extends Persona{
    constructor(nombre, apellido, edad,materia){
        super(nombre, apellido, edad);
        this.rol = "Mentor"; //Le paso el valor fijo ya que todos seran mentores
        this.materia = materia;
    }
        mostrarInformacion(){
            console.log(`Hola mi nombre es ${this.name}, mi apellido es ${this.surName}, mi edad es ${this.age} Mi rol es ${this.rol} y dicto el curso de ${this.materia}`);
        }
    
}

const mentor = new Mentor("Hipolito", "Martinez",43,"JAVA");
mentor.mostrarInformacion();


