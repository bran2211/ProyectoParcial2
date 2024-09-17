// MRU: Velocidad
function calcularVelocidad() {
    let distancia = document.getElementById('distancia1').value;
    let tiempo = document.getElementById('tiempo1').value;
    let resultado = distancia / tiempo;
    document.getElementById('resultado1').innerText = "Velocidad: " + resultado + " m/s";
}

// MRU: Distancia
function calcularDistancia() {
    let velocidad = document.getElementById('velocidad2').value;
    let tiempo = document.getElementById('tiempo2').value;
    let resultado = velocidad * tiempo;
    document.getElementById('resultado2').innerText = "Distancia: " + resultado + " metros";
}

// MRU: Tiempo
function calcularTiempo() {
    let distancia = document.getElementById('distancia3').value;
    let velocidad = document.getElementById('velocidad3').value;
    let resultado = distancia / velocidad;
    document.getElementById('resultado3').innerText = "Tiempo: " + resultado + " segundos";
}
