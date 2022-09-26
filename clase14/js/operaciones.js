/* codigo javascript */
// comentario en JS 
function saludar() { //creo una funcion
alert('hola mundo dentro de saludar');
}

// operaciones
/*
+
-
/
*
*/

// Variable
// Sumar dos valores y mostrar su resultado
let op1 = prompt ('ingrese el valor de op1');//me devuelve un string o cadena
//+'1'2 >'12';
let op2 = prompt ('ingrese el valor de op2');
let res; //declaro la variable
res = (+op1) + parseInt(op2);//asigno el valor
// muestro el resultado por consola
//console.log(res);
//por alerta
//alert(res);//muestro el alert en pantalla
alert('resultado = ' + res);