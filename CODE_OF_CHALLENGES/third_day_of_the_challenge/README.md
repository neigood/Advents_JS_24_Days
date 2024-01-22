En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía


# LA RESOLUCIÓN DEL PROBLEMA Y EXPLICANDOLO UN POCO MAS A DETALLE.

Obtención de la longitud de las cadenas originales y modificadas:

javascript
Copy code
const lenOriginal: number = original.length;
const lenModified: number = modified.length;
Se obtiene la longitud de las dos cadenas de entrada y se almacenan en las variables lenOriginal y lenModified.

Determinación de la longitud más corta entre las dos secuencias:

javascript
Copy code
const minLength: number = Math.min(lenOriginal, lenModified);
Se utiliza la función Math.min para encontrar la longitud más corta entre lenOriginal y lenModified. Esta longitud se almacena en la variable minLength.

Bucle para encontrar la diferencia en cada paso:

javascript
Copy code
for (let i = 0; i < minLength; i++) {
  if (original[i] !== modified[i]) {
    // ¿Cuál es el paso travieso? El más largo o el más corto
    return lenOriginal < lenModified ? modified[i] : original[i];
  }
}
Se utiliza un bucle for para iterar sobre los primeros minLength caracteres de ambas cadenas. Si se encuentra un carácter diferente en la misma posición, la función determina cuál de las dos cadenas es más larga y devuelve el carácter correspondiente de esa cadena como "el paso travieso".

Manejo de la longitud adicional de una cadena:

javascript
Copy code
if (lenOriginal < lenModified) {
  return modified.slice(minLength)[0];
} else if (lenOriginal > lenModified) {
  return original.slice(minLength)[0];
}
Si una cadena es más larga que la otra, la función devuelve el primer carácter de la parte adicional de esa cadena como "el paso extra o faltante".

Manejo de cadenas iguales:

javascript
Copy code
return '';
Si las cadenas son idénticas en longitud y contenido, la función devuelve una cadena vacía, indicando que no hay "pasos traviesos" y que ambas secuencias son iguales.

En resumen, la función compara dos cadenas y devuelve la diferencia entre ellas, ya sea en términos de un carácter diferente en la misma posición, un carácter adicional o faltante, o ninguna diferencia si las cadenas son idénticas.
