'use strict';

const filterByDistrict = (stations,query) => {
stations.forEach(elemento=>{
  if(elemento.name==query){
    console.log("coencide");
  }else {
    console.log("falso");
  }
});
/*
state.movies.forEach((movie) => {
  movieContainer.append(movieItem(movie,update));
});
console.log(stations[0].name);
console.log(query);
*/
}
