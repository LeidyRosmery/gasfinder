'use strict';
const SearchItem = (data, update) => {
    const item = $('<div class="row"></div>');
    const col1 = $('<div class="col s9"></div>');
    const spanNombre = $('<p><strong>' + (data.name).toUpperCase() + '</strong></p>');
    const span = $('<p>' + data.district + '</p>');
    const spanDireccion = $('<p>' + data.address + '</p>');
    const col2 = $('<div class="col s3 div-map"></div>');
    const iconMap = $('<i class="fa fa-map-marker mapIcon" aria-hidden="true"></i>');

    col1.append(spanNombre);
    col1.append(span);
    col1.append(spanDireccion);
    item.append(col1);

    col2.append(iconMap);
    item.append(col2);
    iconMap.on('click', (e) => {
        e.preventDefault();
        state.selectedStation = data;
        update();
    });
    return item;
}

const Search = (update) => {
    const content = $('<div></div>');
    const row1 = $('<div class="row buscador"></div>');
    const col1 = $('<div class="col s1 icon-buscar"></div>');
    const icon = $('<i class=" fa fa-search" aria-hidden="true"> </i>');
    const col2 = $('<div class="col s11 input-buscar"></div>');
    const buscar = $("<input type='text' placeholder='ingresa tu busqueda'></input>");
    const row3 = $('<div class="row"></div>');
    const listSearch = $('<div class="col s12 list"></div>');

    col1.append(icon);
    col2.append(buscar);
    row1.append(col1);
    row1.append(col2);
    content.append(row1);
    row3.append(listSearch);
    content.append(row3);
    buscar.on('keyup', (e) => {
        listSearch.empty();
        const resultado = filterByDistrict(state.stations, buscar.val());
        resultado.forEach((e) => {
            listSearch.append(SearchItem(e, update));
        });
    });
    return content;
}
