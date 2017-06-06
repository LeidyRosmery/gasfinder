'use strict';
const TodoItem=(data,update)=>{
  const todo=$('<div class="todo"></div>');
  const span=$('<span>'+data+'</span>');
  todo.append(span);
  return todo;
}

const reRender=(lista)=>{
  console.log(busqueda);
  lista.empty();
  busqueda.all.length=0;
}


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
        reRender(listSearch);
        
        filterByDistrict(state.stations, buscar.val());
        busqueda.all.forEach(elemento=>{
        listSearch.append(TodoItem(elemento));
        });

        if (buscar.val() =="") {
          reRender(listSearch);
        }

    });
    return content;
}
