/* 1 --------------------------------------******************
Incluir un botón con el ID ‘btnNucleo’
manipulando el DOM.
Luego, escuchar el evento click sobre el botón generado,
asegurando que la función manejadora dispare
una salida a elección en el HTML, cuando se presione el elemento. */



// //CREANDO EL BOTÓN DESDE JS
// const btnNucleo = document.createElement("button");

// //ASIGNAR ID AL BOTÓN
// btnNucleo.id = 'btnNucleo';

// //ASIGNAR EL INTERIOR DEL BOTÓN
// btnNucleo.innerHTML = 'BOTON DEL NUCLEO';

// //ESCUCHAR EL EVENTO CLICK
// btnNucleo.addEventListener('click', function () {
//   const h3 = document.createElement('h3');
//   h3.innerHTML = 'HOLA CODER';
//   document.body.appendChild(h3);
// })

// //AGREGAR EL BOTON AL DOM
// document.body.appendChild(btnNucleo);







/* 2-----------------------------------------------*************************
Declarar un array con nombres de asignatura, y
generar un select, donde los values de las etiquetas
option sean la posición de la asignatura en la
colección.
Luego, escuchar el evento change sobre el select,
asegurando que la función manejadora dispare una
salida en el HTML, especificando el elemento escogido
por el usuario.
 */


// let array_asignaturas = ['matematicas', 'lengua', 'ingles']; //bien , creo el array

// const select = document.createElement('select'); //bien , genero el elemento

// for (const asignatura of array_asignaturas) {    //bien , recorro el arreglo

//   select.innerHTML += `<option value="${asignatura}"> ${array_asignaturas[asignatura]} </option>`;     //inyecto html en el elemento select

// }

// select.addEventListener('change', function (e) {                //cargo evento change
//   const h3 = document.createElement('h3');
//   h3.innerHTML = materias[e.target.value];                  //no entiendo bien que hace aca
//   document.body.appendChild(h3);
// })

// document.body.appendChild(select);                   //vinculo el elemento select al body



/* 
//resolucion ejercicio 2
const materias = ['MATEMATICA', 'LENGUA', 'PROGRAMACION', 'HISTORIA'];
let select = document.createElement("select");
for (let index = 0; index < materias.length; index++) {
select.innerHTML += `<option value='${index}'>${materias[index]}</option>`;
}
//ESCUCHAR EL EVENTO CHANGE
select.addEventListener('change', function (e) {
const h3 = document.createElement('h3');
h3.innerHTML = materias[e.target.value];
document.body.appendChild(h3);
})
document.body.appendChild(select); */








/* 3 --------------------------------------------------******************************************************
**  Crear un formulario que permita ingresar la información
de un estudiante.
**  Luego, escuchar el evento submit sobre el form,
capturando las entradas, e invocar un objeto
**  Estudiante usando los valores ingresados, y asociar la
instancia a un array de estudiantes.
**  Disparar una salida en el HTML.
 

// Se reconoce como ‘alta’ al proceso de registro de información en
// un sistema. Recordemos que en el evento submit empleamos
// preventDefault, para evitar el reinicio de la página.
*/

const estudiantes = []
class Estudiante {                      //creo la clase
  constructor(literal) {
    this.id = estudiantes.length;
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.curso = literal.curso;
  }
}

const formulario = document.createElement("form");       //genero un formulario en el html
formulario.innerHTML = `<input type="text">
<input type="number">
<input type="text">
<input type="submit">`;

formulario.onsubmit = (e) => {                          //escucho el evento submit
  e.preventDefault();
  const inputs = e.target.children;
  estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
  document.body.append(' ALUMNO REGISTRADO ');
}



/* 4--------------------------------------------------******************************************************
// Usando el array de estudiantes creado en la
// actividad 3, iterar la colección creando una
// etiqueta div, cuya estructura interna detalle la
// información del estudiante, y contenga un botón
// ‘Seleccionar’, agregando cada estructura al body.
// Luego, detectar el click sobre el botón,
// especificando al usuario los datos del alumno
// seleccionado.
*/

formulario.onsubmit = (e) => {
  e.preventDefault();
  const inputs = e.target.children;
  estudiantes.push
    (new
      Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
  mostrarEstudiantes(estudiantes);
  const btnEstudiantes = document.getElementsByClassName('btnEstudiante');
  for (const boton of btnEstudiantes) {
    boton.onclick = (e) => {
      const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
      let notificacion = document.createElement("h6");
      notificacion.innerHTML = `Nombre ${seleccionado.nombre} -
  Edad ${seleccionado.edad}`;
      salida.prepend(notificacion);
      salida.prepend(notificacion);
    }
  }
  console.log(inputs);
}


function mostrarEstudiantes(estudiantes) {
  salida.innerHTML = '';
  for (const estudiante of estudiantes) {
  let divEstudiante = document.createElement("div");
  divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
  <p>${estudiante.edad} / ${estudiante.curso} </p>
  <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>`
  salida.appendChild(divEstudiante);
  }
  }
  const salida = document.createElement("div");
  document.body.appendChild(formulario);
  document.body.appendChild(salida);


