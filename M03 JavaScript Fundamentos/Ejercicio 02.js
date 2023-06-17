/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   
   // Debe retornar un string.
   // Tu código:
   return string
} 
devolverString ("hola");


//  "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   return (x + y)
}
suma (5, 7);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return (x - y)
}
resta (10-5);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return (x / y)
}
divide (25, 5)


function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
return (x * y)
}
multiplica (5, 5)


function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return (x % y)

}
obtenerResto (28, 5)
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
