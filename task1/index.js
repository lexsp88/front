const sortedArray = [8,9,10,1,2,3,4,5,6,7];

function findshifted(){
    const Arr = [];

    for (i = 0; i<sortedArray.length; i++){
        Arr[i] = sortedArray[i]
    }

    const a = Arr.sort();
    const b = a[0];
    const n = sortedArray.indexOf(b);

    console.log(n)
    
}

findshifted(sortedArray);

//considerando que el array inicia en 0, por la validacion de ambos ejemplos,
//solo nos hace falta investivar en que numero de index quedo el numero que estamos buscando

