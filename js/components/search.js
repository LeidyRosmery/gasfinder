'use strict';
const Search = () => {
    const content = $('<div class="container"></div>');
    const icon = $('<i class="fa fa-search" aria-hidden="true"> </i>');
    const buscar = $("<input type='text' placeholder='ingresa tu busqueda'></input>");
    content.append(icon);
    content.append(buscar);
    buscar.on('keyup', (e) => {
        filterByDistrict(state.stations, buscar.val());
    });
    return content;
}
