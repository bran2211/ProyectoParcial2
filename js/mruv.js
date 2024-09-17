// MRUV: Calcular Velocidad Final
function calcularVelocidadFinal() {
    let vi = document.getElementById('vi1').value;
    let aceleracion = document.getElementById('aceleracion1').value;
    let tiempo = document.getElementById('tiempo1').value;
    let resultado = parseFloat(vi) + (parseFloat(aceleracion) * parseFloat(tiempo));
    document.getElementById('resultado1').innerText = "Velocidad Final: " + resultado + " m/s";
}

// MRUV: Calcular Distancia
function calcularDistancia() {
    let vi = document.getElementById('vi2').value;
    let tiempo = document.getElementById('tiempo2').value;
    let aceleracion = document.getElementById('aceleracion2').value;
    let resultado = (parseFloat(vi) * parseFloat(tiempo)) + (0.5 * parseFloat(aceleracion) * Math.pow(tiempo, 2));
    document.getElementById('resultado2').innerText = "Distancia: " + resultado + " metros";
}

// MRUV: Calcular Aceleración
function calcularAceleracion() {
    let vf = document.getElementById('vf3').value;
    let vi = document.getElementById('vi3').value;
    let tiempo = document.getElementById('tiempo3').value;
    let resultado = (parseFloat(vf) - parseFloat(vi)) / parseFloat(tiempo);
    document.getElementById('resultado3').innerText = "Aceleración: " + resultado + " m/s²";
}
