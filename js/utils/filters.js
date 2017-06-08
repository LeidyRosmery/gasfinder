'use strict';
const filterByDistrict = (stations, query) => {
    const busqueda = stations.filter((elemento) => {
        return (elemento.district.indexOf(query) != -1);
    });
    return busqueda;

}
