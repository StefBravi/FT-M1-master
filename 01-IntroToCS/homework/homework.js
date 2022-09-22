'use strict'

function BinarioADecimal(num) {//Este parametro es un string
  //num -> string
  //string -> numero decimal
  // sumatoria -> 2^posicion * valor_en_dicha_posición
  // numero binario: 1010
  // posiciones:     3210
 //posiciones array: 0123
  // 2^3*1 + 2^2*0 + 2^1*1 + 2^0*0
  //   8   +   0   +   2   +   0 = 10
  var array = num.split('') //Este metodo genera un array que guarda los numeros o letras por separado
  var sum  = 0
  //num -> string
  for(var i = 0; i < array.length; i++){
  //  sum =  0  +  fx Exp. (2   ^      (4   - 1 - 0)) *    '1' (3)   =  8  //suma fx = 8
  //  sum =  8  +          (2   ^      (4   - 1 - 1)) *    '0' (2)   =  8  //suma fx = 0  
  //  sum =  8  +          (2   ^      (4   - 1 - 2)) *    '1' (1)   =  10 //suma fx = 2
  //  sum =  10 +          (2   ^      (4   - 1 - 3)) *    '0' (0)   =  10 //suma fx = 0
      sum = sum + Math.pow (2, array.length - 1 - i)  * array[i] //Este array es un string, pero java lo trasforma en numero y lo deja multiplicar como tal
  }
  return sum
  
   /* ----------------------------------------------------------------- */

    //OTHER WAY *INVESTED*

    // var posicion = 0

    // for (var j = array.length - 1; j >= 0; j--){ //var j = 3
    //   sum = sum + Math.pow(2, array.length-1-j) * array[j]

    // }
}

function DecimalABinario(num) {

// num = 10
// 10/2 = 5 [0]
// 5/2 = 2  [1]
// 2/2 = 1  [0]
// 1/1 = 0  [0] 

if(num <= 0) return 'No es una condición'; //Cuando tengo una unica linea NO SON NECESARIAS LAS LLAVES { }

var array = []

while(num > 0){
    array.unshift (num % 2)
    num = Math.floor(num/2) //
 }

 return array.join(' ')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}