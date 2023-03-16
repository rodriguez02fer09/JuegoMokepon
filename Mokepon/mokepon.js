let sectionSeleccionarAtaque =  document.getElementById('seleccionar-ataque')
let sectionReiniciar = document.getElementById('reiniciar')
let botonMascotaJugador=document.getElementById('boton-mascota')
let botonFuego=document.getElementById('boton-fuego')
let botonAgua=document.getElementById('boton-agua')
let botonTierra=document.getElementById('boton-tierra')
let botonReiniciar=document.getElementById('boton-reiniciar')

let inputHipodogue = document.getElementById("hipodogue");
let inputCapipepo = document.getElementById("capipepo");
let inputRatigueya = document.getElementById("ratigueya");
let spanMascotaJugador = document.getElementById("mascota-jugador");

let sectionSeleccionarMascota =  document.getElementById('seleccionar-mascota')

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
 sectionSeleccionarAtaque.style.display = 'none'
 sectionReiniciar.style.display = 'none'
 botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
botonFuego.addEventListener('click',ataqueFuego)
botonAgua.addEventListener('click',ataqueAgua)
botonTierra.addEventListener('click',ataqueTierra)
botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador() {

  if (inputHipodogue.checked) {
  alert("Seleccionaste a Hipodogue");
  spanMascotaJugador.innerHTML = "Hipodogue";
  sectionSeleccionarMascota.style.display = 'none'
  sectionSeleccionarAtaque.style.display = 'block'
  seleccionarMascotaEnemigo();

} else if (inputCapipepo.checked) {
  alert("Seleccionaste a Capipepo");
  spanMascotaJugador.innerHTML = "Capipepo";  
  sectionSeleccionarMascota.style.display = 'none'
  sectionSeleccionarAtaque.style.display = 'block'
  seleccionarMascotaEnemigo();

} else if (inputRatigueya.checked) {
  alert("Seleccionaste a Ratigueya");
  spanMascotaJugador.innerHTML = "Ratigueya";
  sectionSeleccionarMascota.style.display = 'none'
  sectionSeleccionarAtaque.style.display = 'block'
} else {
   alert("Selecciona una mascota");
}

}


function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (ataqueAleatorioEnemigo == 1) {
    //Hipodogue
    spanMascotaEnemigo.innerHTML = "Hipodogue";
  } else if (mascotaAleatorio == 2) {
    //capipepo
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    //Ratigueya
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO';
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador ='AGUA'

  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {


  let spanVidasJugador = document.getElementById('vidas-jugador')
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')
  
  if(ataqueEnemigo == ataqueJugador) {
      crearMensaje("EMPATE")
  } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
      crearMensaje("GANASTE")
      vidasEnemigo--
      spanVidasEnemigo.innerHTML = vidasEnemigo
  } else {
      crearMensaje("PERDISTE")
      vidasJugador--
      spanVidasJugador.innerHTML = vidasJugador
  }
revisarVidas()

}
function revisarVidas (){
if (vidasEnemigo == 0 ){
  //ganamos 
  crearMensajeFinal("FELICITACIONES ! Ganaste")
}else if(vidasJugador == 0){
  //perdimos
  crearMensajeFinal("Lo siento , perdiste 😩")
}

}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", las mascota del enemigo atacó con " + ataqueEnemigo + "- " +
    resultado;
  sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal
    
  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true
  
  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);