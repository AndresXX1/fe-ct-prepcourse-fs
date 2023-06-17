/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre = []
   for (var  prop in objeto){
      var arrayHijo= [];
      arrayHijo.push(prop);
      arrayHijo.push(objeto[prop]);
      arrayPadre.push(arrayHijo);
   }
   return arrayPadre
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
  var obj = {};
  for( let i = 0; i < string.length; i++){
   var letra = string[i];

      if(obj[letra]) {
         obj[letra] = obj[letra] +1
      } else {obj[letra] = 1}
  }
  return obj;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringMain = "";
   var stringMin = "";

   for(let i = 0; i < string.length; i++){
      if (string[i]===string[i].toUpperCase()){
         stringMain += string[i]
      }
      else {stringMin += string[i];
      }
   }return stringMain + stringMin;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" ")

   for(let i = 0 ; i < palabras.length; i++) {
      var palabraInvertida = palabras[i].split("").reverse().join("");

      palabras[i] = palabraInvertida;
   }
   return palabras.join (" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numerosEnLetras = numero.toString();

   var numInvertido = numerosEnLetras.split("").reverse().join("");

   if(numerosEnLetras === numInvertido) {
      return "Es capicua"
   }
   else {return "No es capicua"}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = "";
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         newString = newString + string[i];
      }
   }
   return newString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let arrayOrdenado = [];

   for(let i = 0;i < arrayOfStrings.length; i++) {
      let min = Infinity
      let aux = 0;
   for(let j = 0; j < arrayOfStrings.length; j++){
      if (arrayOfStrings[j].length < min && !arrayOrdenado.includes(arrayOfStrings[j])) {
         min = arrayOfStrings[j].length;
         aux = j;
      }
      
   }
   arrayOrdenado.push(arrayOfStrings[aux])

}
return arrayOrdenado;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arr = [];

   array2.forEach( elem => {
      if (array1.includes(elem)) {
         arr.push(elem);
      }
      
})
return arr
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
