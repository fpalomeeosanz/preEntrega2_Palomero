console.log("Reproductor Interacativo de Cuentos La Tia Botas")

let edadJugador = parseInt(prompt("Bienvenido al lugar donde tu eijes las como sonaran las historias. Para comenzar escribe tu edad"));
if(edadJugador >= 99) {
    alert("Felicidades! Puedes jugar, pero antes responde una pequeña trivia :)");
        let colorJugador = prompt("Ahora bien, dinos: ¿Qué color tiene un tren que llega a su estación con retraso?");
        if (colorJugador == "morado") { 
            alert("Felicitaciones!!! Hay una algoritmo crado solo para decirte que el tren  llega de morado :O");
        }else{
            alert("Mmmm.... Acaso crees que " +colorJugador+ " es la respuesta corecta? pues no :( Te damos una pista puede ser azul o lila o morado");
        }    
     const respuestaCuento = prompt("Te sugerimos escuchar: Aventuras + Dinosauro + Castillo + Varita. Si está bien para ti escribe Si o No");
     if(respuestaCuento == "Si"){
        alert ("Estas a punto de escuchar las aventuras del dinosaurio que custodia el castillo donde está la última varita mágica del mundo")
     } 
     if (respuestaCuento == "No") {
     alert("Ok, solo refresca y juega otra vez")
    }     
} 
else{       
 alert("Lo sentimos, debes ser mayor de 100 para jugar o quizá solo escribirlo ;) Refresca la página y trata otra vez");
}




    






