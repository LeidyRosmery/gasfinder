'use strict';
const StationDetail = (update) => {
    const container = $('<div class="row"></div>');
    const col = $('<div class="col s8 offset-s1"></div>');
    const nameStation = $('<h4>' + state.selectedStation.name + '</h4>');
    const divisor = $('<hr>');
    const directionStation = $('<p><strong>' + state.selectedStation.address + '</stong></p>');
    const col1 = $('<div class="col s8 offset-s1 producto"></div>');
    //container.append(map);
    col.append(nameStation);
    col.append(divisor);
    col.append(directionStation);
    container.append(col);
    state.selectedStation.products.forEach((elemento, indice) => {
        const producto = $('<button class="producto-detail">' + elemento + '</button>');
        col1.append(producto);
    });
    container.append(col1);
    //const button = $('<button>Regresar</button>')

    //container.append(button);

    return container;
}
