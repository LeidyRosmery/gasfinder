const Gmap = (update) => {
    const wrapper = $('<div id="map"></div>');

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
    });
    return wrapper;
}
