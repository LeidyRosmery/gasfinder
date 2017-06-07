'use strict';

const render = (root) => {
  root.empty();

  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header(_ => render(root)));
 if (state.selectedStation == null) {
    wrapper.append(Search( _ => {
      render(root);
    }));
  } else {
    wrapper.append(Gmap( _ => {
      render(root);
    }));
    wrapper.append(StationDetail( _ => {
      render(root);
    }));
    //  var gmap=Gmap();
    //  gmap.init();
  }
  root.append(wrapper);

}

const state = {
  stations: null,
  selectedStation: null
};
// inicializndo ready

$( _ => {
  getJSON('stations.json', (err, json) => {
    if (err) { return alert(err.message);}
    state.stations = json;
    //cb open send*/
    const root = $('.root');
    render(root);
  });
});
