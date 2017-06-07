const Gmap = (update) => {

    const wrapper = $('<div class="" ></div>');
    const row = $('<div class="row" ></div>');
    const col = $('<div class="col s12" id="map"></div>');
    row.append(col);
    wrapper.append(row);

    $(_ => {
        const map = new GMaps({
            div: '#map',
            zoom: 16,
            lat: state.selectedStation.lat,
            lng: state.selectedStation.long
        });

        map.addMarker({
            lat: state.selectedStation.lat,
            lng: state.selectedStation.long,
            title: "Grifo :" + state.selectedStation.name
        });

      /*  GMaps.geolocate({
            success: function(position) {
              map.setCenter(position.coords.latitude, position.coords.longitude);
            },
            error: function(error) {
              alert('Geolocation failed: '+error.message);
            },
            not_supported: function() {
              alert("Your browser does not support geolocation");
            },
            always: function() {
              alert("Done!");
            }
      });*/
/*
      mapa . drawRoute ({
        origen : [- 12,044012922866312 , - 77,02470665341184 ],
        destino : [- 12,090814532191756 , - 77,02271108990476 ],
        travelMode : 'conducción' ,
        strokeColor : '# 131540' ,
        strokeOpacity : 0,6 ,
        strokeWeight : 6
      });
*/

    });
    return wrapper;
}
