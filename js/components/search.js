'use strict';
const SearchItem=(data,update)=>{
  const item=$('<div class="todo"></div>');
  const spanNombre=$('<p>'+data.name+'</p>');
  const span=$('<p>'+data.district+'</p>');
  const spanDireccion=$('<p>'+data.address+'</p>');
  const iconMap = $('<i class="fa fa-map-marker" aria-hidden="true"></i>');
  item.append(span);
  item.append(spanDireccion);
  item.append(spanNombre);
  item.append(iconMap);

  iconMap.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = data;
    update();
  });
  return item;
}

// const reRender=(lista)=>{
//   console.log(busqueda);
//   lista.empty();
//   busqueda.all.length=0;
// }


const Search = (update) => {
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
   resultado.forEach((e)=>{
     listSearch.append(SearchItem(e,update));
 });
    console.log(resultado);
    });
    return content;
}
