//BOM -> Browser object model = Nos permite manipular el navegador: su historial, su barra de direcciones, la informacion del navegador, la camara, la pantalla entre otras cosas

//* FUNCIONES DE TIEMPO

//setInterval ---> ejecuta una tarea cada determinado tiempo

//SetTimeout ---> ejecuta una tarea una sola vez, pasado determinado tiempo

//setTimeout(()=>console.log("Hola mundo"), 3000); //1000 = 1 seg (son milisegundos)
//const idInterval = setInterval(()=>console.log("Hola Alan"), 4000); //En este caso se ejecuta indefinidamente cada 1 segundo

//para detener un set interval necesitamos su id, para eso lo guardamos en una variable y luego usamos el clear

//clearInterval();

//Detenemos el intervalo

// setTimeout(()=>{
//     console.log("detenemos el intervalo");
//     clearInterval(idInterval);
// }, 10000)


//! Cuenta regresiva 
let contador = 10
const idCuentaRegresiva = setInterval(()=>{
    console.log("despegue en ",contador);
    contador --;
}, 1000);

setTimeout(()=>{
    console.log("Despegando");
    clearInterval(idCuentaRegresiva);
},11000)

