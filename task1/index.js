const inicio = [0,4,5,8,10,11,12,12,14,15];
const sortedArray = [11,12,12,14,15,0,4,5,8,10];

function findshifted(){
    let b = inicio[0];
    const n = sortedArray.indexOf(b);

    console.log(n);
}

findshifted(sortedArray);

//considerando que el array inicia en 0, por la validacion de ambos ejemplos,
//solo nos hace falta investivar en que numero de index quedo el numero que estamos buscando

