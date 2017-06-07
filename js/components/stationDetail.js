'use strict';

const StationDetail = (update) => {
  const container = $('<div class="stationDetail"></div>');
  const title = $('<h1>'+state.selectedStation.name+'</h1>');
  const button = $('<button>Regresar</button>')
  container.append(title);
  container.append(button);

  button.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })
  return container;
}
