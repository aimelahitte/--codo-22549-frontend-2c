// Vector vacio de alumnos

const alumnos = [
    {
        edad: 35,
        nombre: 'CARLOS',
        carrera:'ING'
    },
    {
        edad: 35,
        nombre: 'RODRIGO',
        carrera:'LIC'
    },
    {
        edad: 35,
        nombre: 'REINALDO',
        carrera:'MATEMATICAS'
    },
    {
        edad: 35,
        nombre: 'JOSE',
        carrera:'LENGUA'
    },

];

//SUMAR TODAS LAS EDADES

let sumaEdades = 0; //acumulador

for(let i=0; i < alumnos.length;i++) {
    //sumaEdades = sumaEdades + alumnos[i].edad;
    sumaEdades +=alumnos[i].edad;
}
console.log ('primera forma:', sumaEdades);


sumaEdades = 0; // para que reinicie desde cero

for(let alumno of alumnos) {    //foreach lambda
    sumaEdades+= alumno.edad;
}
console.log('segunda forma:', sumaEdades);

//array.foreach()
sumaEdades = 0;

alumnos.forEach((alumno) => sumaEdades+= alumno.edad);
//me centro en que quiero hacer, no tanto en el como

console.log('tercer forma:', sumaEdades);

//-------------------------------------------
// Lista de alumnos menores de 40

const menoresDe40 = []; //inicio el vector vacio

for(let alumno of alumnos) {
    if (alumno.edad < 40) {
        menoresDe40.push(alumno);
    }
}
console.log('menores de 40:', menoresDe40);

//filter: funcion lambda que nos retorna una lista de lo que filtramos dentro de la exåresion lambda
const alumnosMenoresDe40 = alumnos.filter(alumno => alumno.edad < 40);
console.log('Alumnos menores de 40:', alumnosMenoresDe40);

//existe algun alumno de 25 años??
let existe = false;
for(let i=0; i<alumnos.length && !existe; i++) {
    existe = alumnos[i].edad === 25; //true or false
}
console.log('hay alguien con 25 años??', existe);

//.some() devuelve un boolean (true/false)

const existeAlumno25 = alumnos.some(alumno => alumno.edad === 25); //que quiero saber?
console.log(existeAlumno25);


// QUIERO SABER SI TODOS LOS ALUMNOS TIENEN 35 AÑOS

//const noExisteAlumno = alumno.some(alumno => alumno !== 35);
let todos = true;
for(let i=0; i<alumnos.length && todos; i++) {
    todos = alumnos[i].edad === 35;  //true or false
}
console.log('todos:', todos);

//every: lambda => boolean

const todos2 = alumnos.every(alumno => alumno.edad === 20);
console.log('todos2:', todos2);

// quiero solo los nombres de los alumnos
const nombres = [];
for(let alumno of alumnos) {
    nombres.push(alumno.nombre);
}
console.log('nombres:', nombres);
//map: f(algo) => otroAlgo

const nombresMap = alumnos.map(alumno => alumno.nombre);
console.log('nombresMap:', nombresMap);

//reduce: va reduciendo lo que tengo en el vector
const sumaReduced = alumnos.reduce((acum,actual) => acum + actual.edad, 0); //=>que quiero? 
console.log('sumaReducida', sumaReduced);
