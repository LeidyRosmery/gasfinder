'use strict';
//const getJSON=function(url,cb){}
const getJSON = (url, cb) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', () => {
  // devuelve el estado como un numero ejem. 200 para OK
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }
    cb(null, xhr.response);
  });
  /*
  open(metodo,URL)
  especifica el metodo
  Metodo = GET : los parametros de la  peticion de codifican
  en la url
  URL= puede ser una URL relativa o completa
   */
  xhr.open('GET', url);
  xhr.responseType = 'json';
  // envia la peticion
  xhr.send();
};
