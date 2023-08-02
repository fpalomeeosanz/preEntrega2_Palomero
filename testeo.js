

let genero = prompt("Bienvenido al Reproductor Intercativo de la Tía Botas. Escribe tu género favorito: aventuras o risas o fantasias")

let personaje = prompt("Escribe tu personaje favorito: unicornio o astronauta o dinosaurio")

let lugar = prompt("Escribe tu lugar favorito: bosque o espacio o castillo")

let elemento = prompt("Por último elijamos el elemento para tus historias entre: varita o bicicleta o cohete")

if(genero == "aventuras" && personaje == "dinosaurio" && lugar == "castillo" && elemento == "varita"){
    alert("estas a punto de escuchar el cuento numero cero que se llama:  aventurasDinosaurioCastilloVarita")
}
if(genero == "aventuras" && personaje == "dinosaurio" && lugar == "castillo" && elemento == "bicicleta"){
    alert("estas a punto de escuchar el cuento numero cero que se llama:  aventurasDinosaurioCastilloBicicleta")
}
if(genero == "aventuras" && personaje == "dinosaurio" && lugar == "castillo" && elemento == "cohete"){
    alert("estas a punto de escuchar el cuento numero cero que se llama:  aventurasDinosaurioCastilloCohete")
}

else{
    alert("No está listo lo demás... pero puede elejir aventuras y dinosaurio y castillo y varita, para probar lo que si está listo")
}

function cuentos (genero, personaje, lugar, elemento) {
    this.genero = genero;
    this.perosnaje = personaje;
    this.lugar = lugar;
    this.elemento = elemento;
}

const aventurasDinosaurioCastilloVarita = {
    genero: "aventuras",
    personaje: "dinosaurio",
    lugar: "castillo",
    elemento: "varita",
}
const aventurasDinosaurioCastilloBicicleta = {
    genero: "aventuras",
    personaje: "dinosaurio",
    lugar: "castillo",
    elemento: "bicicleta",
}
const aventurasDinosaurioCastilloCohete = {
    genero: "aventuras",
    personaje: "dinosaurio",
    lugar: "castillo",
    elemento: "cohete",
}