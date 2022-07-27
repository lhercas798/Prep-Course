// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //toUpperCase()
  
  return nombre.charAt().toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //var sumaTotal = numeros.reduce(function(acc, curr) {
   // return acc + curr;
  //},0);
  // Segunda opcion
  // var numeros = [1,2,3,4,5]
  // var suma = 0;
  // for(var i = 0; i < numeros.length; i++) {
  //   suma = suma + numeros[i];
  // }
  // cb(suma);
  var suma= numeros.reduce((pv,cv) =>  pv+cv,0);
  cb(suma); 
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código: 1º forma;
  //for(var i = 0; i < array.length; i++) {
  //  cb(array[i]);
  //}
  array.forEach(function (item) {
   cb(item);
  });
  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // var array = [1,2,3,4,5]
  // function cb (e) {console.log(e)}
  // nuevoarray = []
  // var nuevoArray = [];
  // for(var i = 0; i < array.length; i++) {
  //   nuevoArray.push(cb(array[i]));
  //   nuevoArray[i] = cb(array[i]);
  // }
  Nuevoarray= array.map(function (elemento){
    return cb(elemento);
  });
  return Nuevoarray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //var nuevoArray = [];
  //for(let i = 0; i<array.length; i++) {
   // if(array[i][0] === "a") {
    //  nuevoArray.push(array[i])
  //  }
  //}
  //return nuevoArray;
  Nuevoarray=array.filter(elemento => elemento[0]==="a");
  return Nuevoarray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
