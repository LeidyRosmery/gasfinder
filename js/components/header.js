'use strict';
const Header = (update) => {
  const header = $("<header></header>");
  const icon = $('<i class="fa fa-chevron-left" aria-hidden="true"></i>');

  if(state.selectedStation !== null){
    header.append(icon);
  }
  const title = $("<span>Gas Finder</span>");
  header.append(title);
  icon.on('click',(e) => {
    e.preventDefault();
    state.selectedStation = null;
    update();
  })
  
  return header;

}
