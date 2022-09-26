/*
calculadora

+
-
*
/

*/

function calcular() {
    let op1;
    let op2;
    let operacion;
    let resultado;

    //leer dato
    //promp('ingrese op1');
    // JS tiene una funcion que se llama 
    //document.getelementbyId{'id'}.value;
    op1 = document.getElementById('op1').value;
    operacion = document.getElementById('operacion').value;
    op2 = document.getElementById('op2').value;

    console.log('op1 vale:',op1);
    console.log('operacion vale:',operacion);
    console.log('op2 vale:',op2);

    //ahora el bloque if(casita) 
    if(operacion === '+') {
        resultado = parseInt(op1) + parseInt(op2);
    }

    if(operacion === '-') {
        resultado = parseInt(op1) - parseInt(op2);
    }

    if(operacion === '*') {
        resultado = parseInt(op1) * parseInt(op2);
    }

    if(operacion === '/'){
        if(parseInt(op2) !== 0){
            resultado = parseInt(op1) / parseInt(op2);
        } else {
        resultado = 'No se puede dividir por cero';
        }
    }

    console.log(resultado);
    //actualizar el label del html con el resultado de la operacion
    document.getElementById('resultado').innerHTML = resultado
    //resultado no es value ya que no es un imput sino un 
}

function borrar() {
    //borrar op1
    document.getElementById('op1').value='';    
    document.getElementById('op2').value='';
    document.getElementById('operacion').value='';
    document.getElementById('resultado').innerHTML='';
}