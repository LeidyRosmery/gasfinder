'use strict';
const busqueda={
   all:[]
};

const filterByDistrict = (stations,query) => {
stations.forEach(elemento=>{
  if(elemento.district.indexOf(query)!=-1){
      busqueda.all.push(elemento.district);
      return busqueda.all;
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
