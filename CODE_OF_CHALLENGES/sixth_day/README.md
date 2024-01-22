Los elfos están catalogando los renos de Santa según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder

Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // ->


# LA RESOLUCIÓN DEL PROBLEMA Y EXPLICANDOLO UN POCO MAS A DETALLE.

La función `maxDistance` toma una cadena de movimientos (`movements`) como entrada y devuelve un número. Esta cadena de movimientos representa una serie de instrucciones, donde cada carácter puede ser `'>'`, `'<'`, o `'*'`.

- `let distance = 0;` y `let wildCard = 0;`: Se inicializan dos variables, `distance` para rastrear la distancia y `wildCard` para contar el número de comodines (`*`).

- `for (const signo of movements) {`: Inicia un bucle que recorre cada carácter de la cadena `movements`.

  - `if (signo === '>') distance++;`: Si el carácter es `'>'`, incrementa la variable `distance`.
  - `else if (signo === '<') distance--;`: Si el carácter es `'<'`, decrementa la variable `distance`.
  - `else if (signo === '*') wildCard++;`: Si el carácter es `'*'`, incrementa la variable `wildCard`.

- `return Math.abs(distance) + wildCard;`: Finalmente, se calcula la distancia total sumando el valor absoluto de `distance` (para ignorar la dirección) y el número de comodines `wildCard`. Este valor se devuelve como resultado de la función.

En resumen, la función recorre la cadena de movimientos, actualiza la distancia basándose en los caracteres `'>'` y `'<'`, cuenta el número de comodines (`'*'`), y devuelve la distancia total considerando tanto los movimientos como los comodines. La función está diseñada para ser clara y concisa, y su propósito es calcular la distancia final a partir de una secuencia de movimientos y comodines.