console.log('Kiválogatás imminent:');

"use strict";

//var, let, const
const szamok = [2, 4, 6, 8, 10, -2, -4, -6, -8, -12];

function kivalogatas(arr, tulFn) {
    const result = [];
    for (var i = 0; i < arr.length; i++) {
        if (tulFn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function negativE(p){
    return p < 0;
}

console.log(kivalogatas(szamok, negativE));
console.log(szamok.filter(function (p) { return p < 0;}));
console.log(szamok.filter(p => p < 0));