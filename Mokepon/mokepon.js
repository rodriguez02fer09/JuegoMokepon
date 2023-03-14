let ataqueJugador;
let ataqueEnemigo;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  let inputHipodogue = document.getElementById("hipodogue");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodogue.checked) {
    alert("Seleccionaste a Hipodogue");
    spanMascotaJugador.innerHTML = "Hipodogue";
  } else if (inputCapipepo.checked) {
    alert("Seleccionaste a Capipepo");
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    alert("Seleccionaste a Ratigueya");
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (ataqueAleatorioEnemigo == 1) {
    //Hipodogue
    spanMascotaEnemigo.innerHTML = "Hipodogue";
  } else if (mascotaAleatorio  == 2) {
    //capipepo
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    //Ratigueya
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
    ataqueJugador = "fuego";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "Agua";

  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "tierra";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Agua";
  } else {
    ataqueEnemigo = "Tierra";
  }
  combate()
}
function combate(){
  if(ataqueEnemigo == ataqueJugador){
    crearMensaje("EMPATE")
  }else if(ataqueJugador =='FUEGO' && ataqueEnemigo =='TIERRA'){
    crearMensaje("GANASTE")
  }else if(ataqueJugador =='AGUA'&& ataqueEnemigo =='FUEGO'){
      crearMensaje("GANASTE")
    }else if(ataqueJugador =='TIERRA'&& ataqueEnemigo =='AGUA'){
        crearMensaje("GANASTE")
      }else{crearMensaje("PERDISTE")
    }}



function crearMensaje (resultado){

let sectionMensajes = document.getElementById('mensajes')
let parrafo =  document.createElement('p')
parrafo.innerHTML='Tu mascota atacó con '+ataqueJugador+', las mascota del enemigo atacó con '+ataqueEnemigo+'- '+resultado
sectionMensajes.appendChild(parrafo)
} 

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);