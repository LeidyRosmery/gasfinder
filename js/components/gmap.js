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

        GMaps.geolocate({
            success: function(position) {
                map.drawRoute({
                    origin: [position.coords.latitude, position.coords.longitude],
                    destination: [state.selectedStation.lat, state.selectedStation.long],
                    travelMode: 'driving',
                    strokeColor: '#131540',
                    strokeOpacity: 0.6,
                    strokeWeight: 4
                });
                map.addMarker({
                    lat: state.selectedStation.lat,
                    lng: state.selectedStation.long,
                    title: 'Estación:' + state.selectedStation.name,
                });

            },
            error: function(error) {
                alert('Geolocalización fallada: ' + error.message);
            },
            not_supported: function() {
                alert("Tu navegador no soporta la API geolocation");
            }
        });
    });
    return wrapper;
}
