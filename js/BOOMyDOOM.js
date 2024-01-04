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
// let contador = 10
// const idCuentaRegresiva = setInterval(()=>{
//     console.log("despegue en ",contador);
//     contador --;
// }, 1000);

// setTimeout(()=>{
//     console.log("Despegando");
//     clearInterval(idCuentaRegresiva);
// },11000)


//DOM document objecto model, hace que los elementos del html los convierta en nodos (Nos crea un arbolito)

let body = document.body; //de esta manera capturamos el body
console.log(body);

body.innerHTML+='<h1 class="text-danger">Hola Mundo<h1/>' 
body.innerHTML+="<p class='bg-dark text-light'>Lorem*50</p>"

//pasandole el nombre de la etiqueta html
// let h2=document.querySelector('h2');
// console.log(h2);

//pasandole el id

// let h2TCH=document.querySelector("#h2ToChange");
// console.log(h2TCH);

let h2 = document.getElementById("h2ToChange")
console.log(h2);

h2.textContent="H2 modificado";
h2.classList.add("bg-secondary","text-primary","fw-bolder")
console.log(h2.classList);

h2.classList.remove("bg-secondary")
h2.classList.replace("text-primary","text-danger")

let divPadre = document.getElementById("divPadre")
console.log(divPadre);
console.log(divPadre.childNodes)//lista todos los hijos de ese div

//divPadre.textContent+="Agregado texto"



function insertarCard(){
    divPadre.innerHTML += ` <div class="card my-5" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
}




