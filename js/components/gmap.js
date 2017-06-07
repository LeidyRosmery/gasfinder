


const Gmap = (update) => {
  const wrapper = $('<div id="map"></div>');

$( _ => {
  const map = new GMaps({
    div: '#map',
    zoom:16,
    lat: -12.043333,
    lng: -77.028333
  });

  map.addMarker({
    lat: -12.043333,
    lng: -77.03,
    title: 'Lima'
  });
});

  return wrapper;
}
