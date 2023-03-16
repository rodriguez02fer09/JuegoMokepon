const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");

const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const sectionMensajes = document.getElementById("mensajes");
const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];

let opcionDeMokepones;
let inputHipodogue;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let ataquesMokepon;
let ataquesMoquepoEnemigo
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}
let hipodogue = new Mokepon(
  "Hipodogue",
  "./assets/mokepons_mokepon_hipodoge_attack.png",
  5
);
let capipepo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.png",
  5
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_Ratigueya_attack.png",
  5
);

mokepones.push(hipodogue, capipepo, ratigueya);

hipodogue.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" }
);

capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
     <input type="radio" name="mascota" id=${mokepon.nombre} />
     <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
         <p>${mokepon.nombre}</p>
         <img src=${mokepon.foto} alt=${mokepon.nombre}>
     </label>
     `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodogue = document.getElementById("Hipodogue");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });
  sectionReiniciar.style.display = "none";
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

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
    mascotaJugador = inputCapipepo.id;
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "block";
    seleccionarMascotaEnemigo();
  } else if (inputRatigueya.checked) {
    alert("Seleccionaste a Ratigueya");
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
    sectionSeleccionarMascota.style.display = "none";
    sectionSeleccionarAtaque.style.display = "block";
  } else {
    alert("Selecciona una mascota");
  }
  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}
function mostrarAtaques(ataques) {
  //  function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
    <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
    `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botones = document.querySelectorAll(".BAtaque");

  //  botonFuego.addEventListener('click', ataqueFuego)

  // botonAgua.addEventListener('click', ataqueAgua)

  // botonTierra.addEventListener('click', ataqueTierra)
}

function secuenciaAtaque(){botones.forEach((boton)=>{boton.addEventListener('click',(e)=>{
  if(e.target.textContent==='🔥'){
  ataqueJugador.push('FUEGO')
console.log(ataqueJugador)
boton.style.background='#112f58'
boton.disabled = true;
}else if(e.target.textContent==='💧'){
  ataqueJugador.push('AGUA')
console.log(ataqueJugador)
boton.style.background='#112f58'
boton.disabled = true;
}else{ataqueJugador.push('TIERRA')
console.log(ataqueJugador)
boton.style.background='#112f58'
boton.disabled = true;
}

ataqueAleatorioEnemigo()
})
})
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
  secuenciaAtaque();


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

// function ataqueFuego() {
//   ataqueJugador = "FUEGO";
//   ataqueAleatorioEnemigo();
// }

// function ataqueAgua() {
//   ataqueJugador = "AGUA";

//   ataqueAleatorioEnemigo();
// }

// function ataqueTierra() {
//   ataqueJugador = "TIERRA";
//   ataqueAleatorioEnemigo();
// }

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
      ataqueEnemigo.push('FUEGO');
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
      ataqueEnemigo.push('AGUA');
  } else {
      ataqueEnemigo.push('TIERRA');
  }
  console.log(ataqueEnemigo);
 iniciarPelea()

}

function iniciarPelea (){
if(ataqueJugador.length === 5 ){
  combate()
}

}
function indexAmbosOponentes(jugador, enemigo){
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]


}

function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if(ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index);
        crearMensaje("EMPATE");
        victoriasJugador++;
      
        spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA') {
      indexAmbosOponentes(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] ==='AGUA' && ataqueEnemigo[index] === 'FUEGO') {
      indexAmbosOponentes(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
    } else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
      indexAmbosOponentes(index, index);
        crearMensaje("GANASTE");
        victoriasJugador++;
        spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
        crearMensaje("PERDISTE");
        victoriasJugador++;
       spanMascotaEnemigo.innerHTML = victoriasEnemigo
    }
    
}
revisarVidas();
}
function revisarVidas() {
  if (victoriasJugador === victoriasEnemigo) {
      crearMensajeFinal("Esto fue un empate!!!");
  } else if (victoriasJugador > victoriasEnemigo) {
      crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else {
      crearMensajeFinal('Lo siento, perdiste :(');
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
