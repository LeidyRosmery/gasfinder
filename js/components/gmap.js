var map;

var init =function() {
  map = new GMaps({
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

}

var Gmap = () => {
  var wrapper = $('<div id="map"></div>');
  wrapper.init = init.bind(null,wrapper.get(0));
  return wrapper;
}
