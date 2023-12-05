En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.



esta es la explicasion del primer codigo donde le hice unas mejoras:

La función `findFirstRepeated` toma un array de números llamado `gifts` como parámetro y devuelve el primer número que se repite en el array. Si no hay ningún número repetido, la función devuelve -1.

Ahora, desglosemos el código paso a paso:

1. `const giftIndices = new Map<number, number>();`: Se crea un nuevo objeto `Map` llamado `giftIndices`. Este mapa se utiliza para realizar un seguimiento de los índices en los que se ha visto cada regalo en el array.

2. `let index = 0;`: Se inicializa una variable `index` con 0. Esta variable se utilizará para llevar un seguimiento del índice actual mientras se recorre el array.

3. `for (const currentGift of gifts) {`: Se inicia un bucle `for...of` que recorre cada elemento del array `gifts`. En cada iteración, el elemento actual se almacena en la variable `currentGift`.

4. `if (giftIndices.has(currentGift)) { return currentGift; }`: Dentro del bucle, se verifica si el regalo actual (`currentGift`) ya está presente en el mapa `giftIndices`. Si es así, significa que este regalo se ha visto antes, y la función devuelve ese regalo, ya que es el primer regalo repetido encontrado.

5. `else { giftIndices.set(currentGift, index); }`: Si el regalo actual no está presente en el mapa, se añade al mapa con la clave como el regalo actual y el valor como el índice actual. Esto significa que se está registrando la primera vez que se ve este regalo y en qué posición del array se encuentra.

6. `index++;`: Se incrementa el índice para el siguiente elemento del array.

7. Después de completar el bucle, si no se ha encontrado ningún regalo repetido, la función devuelve -1.

En resumen, la función utiliza un mapa para llevar un seguimiento de los regalos vistos y sus índices en el array. Al encontrar un regalo que ya ha sido registrado en el mapa, la función devuelve ese regalo como el primero que se repite. Si no se encuentra ningún regalo repetido, devuelve -1.


----------------------------------------------------------************************************--------------------------------------------------


esta es la explicasion al segundo codigo:


para poder llegar a la conclusion de estee desafio lo dividi en pasos para ver el panorama completo emnpece con.

Comentario de función: Se proporciona un comentario que explica el propósito de la función findFirstRepeated.

Mapa de Índices: Se utiliza un Map llamado giftIndices para almacenar el índice de cada regalo que se encuentra durante la iteración.

Iteración sobre Regalos: Se utiliza un bucle for para iterar sobre cada regalo en el array.

Verificación de Regalo Repetido: En cada iteración, se verifica si el regalo actual ya ha sido encontrado antes utilizando el método has del mapa.

Devolver el Valor del Regalo Repetido: Si se encuentra un regalo repetido, la función devuelve el valor del regalo actual.

Almacenar Índice en el Mapa: Si el regalo no ha sido encontrado antes, se almacena el índice actual del regalo en el mapa.

Devolver -1 si no hay Regalos Repetidos: Si no se encuentra ningún regalo repetido, la función devuelve -1.

Ejemplo de Uso: Se proporciona un ejemplo de cómo usar la función con un array de regalos y se almacena el resultado en la variable result.

Mostrar Resultado en la Consola: Se imprime el resultado en la consola. Puedes adaptar esta parte según tus necesidades, por ejemplo, puedes utilizar el resultado de otra manera o mostrarlo de manera diferente en tu aplicación.

Este código proporciona una función simple para encontrar el primer regalo repetido en un array, y el ejemplo de uso muestra cómo aplicar la función a un caso específico. Puedes incorporar este código y su explicación en tu README de GitHub para que otros desarrolladores entiendan cómo usar la función findFirstRepeated.
