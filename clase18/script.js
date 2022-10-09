
const btnAdd = document.getElementById('btnAdd');

//el scope del array debe estar por encima de la funcion add
const claves = [];

function add() {
    //capturo el elemento (input) por su ID (clave) y el valor q contiene (.value)
    const clave = getKey();

    //valido que no sea vacio
    const isValid = validateKey(clave);
    if(!isValid) {
        alert('Debe completar la clave');
        return;
    }

    //si pasa la validacion ejecuta la logica (agrego a la lista de claves)
    addToList(clave);

    //renderKeys();
    renderKeyByDOM();
}

function renderKeyByDOM() {
    const list = findKeys();
    //crear un <ul>
    const ul = document.createElement('ul');
    ul.id = 'clavesUl';
    ul.className = 'classUl';

    //agregar al div el hijo: ul
    list.appendChild(ul);

    //crear los <li> en base al array 'claves' y los agrego al <ul>
    for(let clave of claves) {
        const li = document.createElement('li'); //creo un li desde JS
        li.innerHTML = clave; //le agrego un valor a ese li
        li.id = Math.random(); //0 - 0,99999

        //al li le agrego un evento
        li.addEventListener('click', () => alert('soy un li'));

        ul.appendChild(li); //lo agrego al <ul>
        };
}

function renderKeys () {
    const list = findKeys();
    list.innerHTML = '';
    claves.forEach(clave => {
        list.innerHTML+=`<li>${clave}</li>`;
        });
}

//validacion'
function validateKey(key) {
    return key !==''; //true or false
}

function addToList (clave) {
    claves.push(clave);
}

function getKey() {
    return document.getElementById('clave').value;
}

function findKeys () {
    return document.getElementById('claves');
}

btnAdd.addEventListener('click', add);