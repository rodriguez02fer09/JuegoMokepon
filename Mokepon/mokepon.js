const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonTierra = document.getElementById("boton-tierra");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
;
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const sectionMensajes = document.getElementById("mensajes");
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')


let mokepones = []
let ataqueJugador;
let ataqueEnemigo;

let opcionDeMokepones
let inputHipodogue 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon{
  constructor (nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}
let hipodogue = new Mokepon('Hipodogue', "./assets/mokepons_mokepon_hipodoge_attack.png" , 5)
let capipepo = new Mokepon('Capipepo', "./assets/mokepons_mokepon_capipepo_attack.png" , 5)
let ratigueya= new Mokepon('Ratigueya', "./assets/mokepons_mokepon_Ratigueya_attack.png" , 5)

mokepones.push(hipodogue,capipepo,ratigueya)

hipodogue.ataques.push(
  {nombre:'💧' , id:'boton-agua'},
  {nombre:'💧' , id:'boton-agua'},
  {nombre:'💧' , id:'boton-agua'},
  {nombre:'🌱' , id:'boton-tierra'},
  {nombre:'🔥' , id:'boton-fuego'}
)

capipepo.ataques.push(
  {nombre:'🌱' , id:'boton-tierra'},
  {nombre:'🌱' , id:'boton-tierra'},
  {nombre:'🌱' , id:'boton-tierra'},
  {nombre:'💧' , id:'boton-agua'},
  {nombre:'🔥' , id:'boton-fuego'}
)

ratigueya.ataques.push(
  {nombre:'🔥' , id:'boton-fuego'},
  {nombre:'🔥' , id:'boton-fuego'},
  {nombre:'🔥' , id:'boton-fuego'},
  {nombre:'💧' , id:'boton-agua'},
  {nombre:'🌱' , id:'boton-tierra'},
)

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";

  mokepones.forEach((mokepon) => {
     opcionDeMokepones = `
     <input type="radio" name="mascota" id=${mokepon.nombre} />
     <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
         <p>${mokepon.nombre}</p>
         <img src=${mokepon.foto} alt=${mokepon.nombre}>
     </label>
     `
contenedorTarjetas.innerHTML += opcionDeMokepones

 inputHipodogue =document.getElementById('Hipodogue')
 inputCapipepo  =document.getElementById('Capipepo')
 inputRatigueya =document.getElementById('Ratigueya')

})
  sectionReiniciar.style.display = "none";
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
 
  if (inputHipodogue.checked) {
    alert("Seleccionaste a Hipodogue");
    spanMascotaJugador.innerHTML = inputHipodogue.id;
    mascotaJugador = inputHipodogue.id;
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "block";
    seleccionarMascotaEnemigo();
  } else if (inputCapipepo.checked) {
    alert("Seleccionaste a Capipepo");
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador=inputCapipepo.id
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "block";
    seleccionarMascotaEnemigo();
  } else if (inputRatigueya.checked) {
    alert("Seleccionaste a Ratigueya");
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador=inputRatigueya.id;
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "block";
  } else {
    alert("Selecciona una mascota");
  }
  extraerAtaques( mascotaJugador)
}

function extraerAtaques(mascotaJugador) {
  let ataques
  for (let i = 0;i< mokepones.length; i ++){
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques
    }

  }
  mostrarAtaques(ataques)
 
}


function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0,mokepones.length -1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
  
  // if (ataqueAleatorioEnemigo == 1) {
  //   //Hipodogue
  //   spanMascotaEnemigo.innerHTML = "Hipodogue";
  // } else if (mascotaAleatorio == 2) {
  //   //capipepo
  //   spanMascotaEnemigo.innerHTML = "Capipepo";
  // } else {
  //   //Ratigueya
  //   spanMascotaEnemigo.innerHTML = "Ratigueya";
  // }
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";

  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function combate() {
  

  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    //ganamos
    crearMensajeFinal("FELICITACIONES ! Ganaste");
  } else if (vidasJugador == 0) {
    //perdimos
    crearMensajeFinal("Lo siento , perdiste 😩");
  }
}

function crearMensaje(resultado) {
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    ", las mascota del enemigo atacó con " +
    ataqueEnemigo +
    "- " +
    resultado;
  sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;

  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
