function resumen () { 
    //DATOS
    let cantidad = document.getElementById('inputCantidad').value;
    let categoria = document.getElementById('inputCategoria').value;


    // VALIDAR
    const valid = esValido(cantidad);

    // RESUMEN
    parseInt(cantidad);
    precio = cantidad * 200;
    if (categoria == 'Estudiante') {
        precio = precio * 0.2;
    }else{
        if (categoria == 'Trainee') {
            precio = precio * 0.5;
        }else{
        if (categoria == 'Junior')
            precio = precio * 0.85;
        }
    }
    document.getElementById('span').innerHTML = precio;
    return false;
}

// VALIDAR
function esValido(cant){
    if(cant == '') {
        alert('Por favor ingrese una cantidad valida');
    };
};


// BORRAR
function borrar() {
    let vacio = '';
    document.getElementById('span').innerHTML = vacio;
    document.getElementById('inputCorreo').value = vacio;
    document.getElementById('inputApellido').value = vacio;
    document.getElementById('inputNombre').value = vacio;
    document.getElementById('inputCantidad').value = vacio;
    document.getElementById('inputCategoria').value = vacio;
    return true;
}