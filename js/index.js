'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  //HEader (){ render(root)}
  //header(function(){render(root)});
  wrapper.append(Header(_ => render(root)));
  wrapper.append(Search());
  root.append(wrapper);
}

const state = {
  stations: null,
  selectedStation: null
};
// inicializndo ready
/* function(err,json){

}
*/
$( _ => {
  getJSON('stations.json', (err, json) => {
    if (err) { return alert(err.message);}
    state.stations = json;
    //cb open send
    const root = $('.root');
    render(root);

  });
});
