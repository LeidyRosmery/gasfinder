'use strict';
const StationDetail = (update) => {
    const container = $('<div class="stationDetail"></div>');
    const nameStation = $('<h1>' + state.selectedStation.name + '</h1>');
    const divisor = $('<hr>');
    const directionStation = $('<h1>' + state.selectedStation.address + '</h1>');
    //container.append(map);
    container.append(nameStation);
    container.append(divisor);
    container.append(directionStation);
    state.selectedStation.products.forEach((elemento, indice) => {
        const producto = $('<button>' + elemento + '</button>');
        container.append(producto);
    });
    //const button = $('<button>Regresar</button>')

    //container.append(button);

    return container;
}
