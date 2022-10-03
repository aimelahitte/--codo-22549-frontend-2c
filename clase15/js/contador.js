
//funcion paridad
function paridad (valor) {
    //SCOPE es donde la variable es visible
    const labelParidad = document.getElementById('paridad');

    let esNumeroPar = esPar(valor);
    if(esNumeroPar) {
        labelParidad.innerHTML = 'PAR';
    } else {   
        labelParidad.innerHTML = 'IMPAR';

    }
}

// retorna un boolean
function esPar (valor) {
    //determino si el valor es par o impar
    //let resto = valor % 2; // 0 o 1
    //return resto === 0;
    //lo que es igual a decir
    //if(resto ===0)
    //      return true;
    //else
    //      return false;
    return valor % 2 === 0;
} 

function decrementar () {
    const label = document.getElementById('contador');
    let valor= label.innerHTML;
    valor = parseInt(valor) - 1;

    //update del valor
    label.innerHTML = valor;

    paridad(valor);
}

function incrementar() {
    const label = document.getElementById('contador');
    let valor = parseInt(label.innerHTML);

    //incremento el valor del valor
    //valor = valor + 1;
    valor++;  //post incremento
    //++valor;  //pre incremento
    label.innerHTML = valor;

    //cuando un numero es par?
    // (numero % 2) > 
    //esto nos da el resto en una division 

    paridad(valor);
}   

