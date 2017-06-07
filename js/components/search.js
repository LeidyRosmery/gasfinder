'use strict';
const TodoItem=(data)=>{
  const todo=$('<div class="todo"></div>');
  const spanNombre=$('<p>'+data.name+'</p>');
  const span=$('<p>'+data.district+'</p>');
  const spanDireccion=$('<p>'+data.address+'</p>');
  const iconMap = $('<i class="fa fa-map-marker" aria-hidden="true"></i>');
  todo.append(span);
  todo.append(spanDireccion);
  todo.append(spanNombre);
    todo.append(iconMap);
  return todo;
}

// const reRender=(lista)=>{
//   console.log(busqueda);
//   lista.empty();
//   busqueda.all.length=0;
// }


const Search = () => {
    const content = $('<div class="container"></div>');
    const icon = $('<i class="fa fa-search" aria-hidden="true"> </i>');
    const buscar = $("<input type='text' placeholder='ingresa tu busqueda'></input>");
    const hr=$('<hr>');
    const resultSearch=$('<p>Resultado de busquedas:</p>');
    const listSearch=$('<div class="list"></div>');

    content.append(icon);
    content.append(buscar);
    content.append(listSearch);

    buscar.on('keyup', (e) => {
    listSearch.empty();
    const resultado=filterByDistrict(state.stations, buscar.val());
    resultado.forEach(function(e){
      listSearch.append(TodoItem(e));
    });
    console.log(resultado);
    });
    return content;
}
