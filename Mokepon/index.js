const express = require('express') //importamos la libreria

const cors =  require("cors")

const app = express();// intaciamos el servidor

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador{
    constructor(id)
    {this.id=id
    
    }
asignarMokepon(mokepon ){
    this.mokepon = mokepon
}
actualizarPosicion(x,y){
    this.x = x
    this.y=y
}
}
class Mokepon {
constructor(nombre){
    this.nombre = nombre
}
}

app.get("/unirse", (req, res) => {
const id =`${Math.random()}`
const jugador = new Jugador(id)

jugadores.push (jugador)

res.setHeader("Access-Control-Allow-Origin", "*")


res.send(id)
})// dar un recurso 

app.post("/mokepon/:jugadorId" , (req,res) =>{
const jugadorId = req.params.jugadorId || ""
const nombre = req.body.mokepon || ""
const mokepon = new Mokepon (nombre)

const jugadorIndex= jugadores.findIndex((jugador) => jugadorId === jugador.id)

if(jugadorIndex => 0){

    jugadores[jugadorIndex].asignarMokepon(mokepon)
}
    console.log(jugadores)
    console.log(jugadorId)

    res.end()
})
app.post("/mokepon/:jugadorId/posicion",(req,res)=>{const jugadorId=req.params.jugadorId||""
const x=req.body.x||0
const y=req.body.y||0
const jugadorIndex=jugadores.findIndex((jugador)=>jugadorId===jugador.id)
if(jugadorIndex>=0){jugadores[jugadorIndex].actualizarPosicion(x,y)


}

const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)


res.send({
    enemigos
})



})

app.listen(8080, () => {
    console.log("servidor funcionando")
})





// ¿Qué es una URI?
// URI son las siglas en español de Identificador de Recursos Uniforme y es ese identificador único de una página web
// . El mismo está compuesto por dos partes, una URL (localizacion unica del recurso-Localizador de Recursos Uniforme) y una URN (Nombre de Recurso Uniforme).

// Composición de una URI
// Dentro de una URI, podemos identificas varias partes que componen a la misma:
// URI:
// Esquema: Protocolo que la URI utiliza, pudiendo ser HTTP o HTTPS.
// Dominio: Nombre del dominio de la página.
// Puerto: Puerto por el que el servidor se encuentra “escuchando” para responder con la información de la página.
// Ruta: Nombre de la página concreta que queremos solicitar dentro del dominio.
// Cadena de búsqueda: Parámetros opcionales o variables para dar más información a la ruta.

// URN:
// Nombre: Hace referencia a una sección particular dentro de una página. También denominado “fragmento”.
//Puertos son ese canal por el que se intercambia información entre un cliente y un servidor o entre subsistemas.