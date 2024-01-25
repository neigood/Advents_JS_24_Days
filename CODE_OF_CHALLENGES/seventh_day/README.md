Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

# LA RESOLUCIÓN DEL PROBLEMA Y EXPLICANDOLO UN POCO MAS A DETALLE.

function drawGift(size: number, symbol: string) {
    if (size === 1) return '#\n';

    const rows: string[] = [];

    rows[0] = '#'.repeat(size).padStart(size * 2 - 1);
    rows[size * 2 - 2] = '#'.repeat(size);
    rows[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`;

    for (let row = 1; row < size - 1; row++) {
        let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(row - 1)}#`;

        rows[row] = draft.padStart(size * 2 - 1, ' ');
        rows[size * 2 - 2 - row] = draft;
    }

    return rows.join('\n').concat('\n');
}

Este código define una función llamada `drawGift` que toma dos parámetros: `size` (un número) y `symbol` (una cadena de texto). La función genera y devuelve un patrón visual que se asemeja a un regalo envuelto, utilizando caracteres "#" y el símbolo proporcionado.

Aquí está la explicación detallada del código:

1. **Manejo del caso base (`size === 1`):**
   ```typescript
   if (size === 1) return '#\n';
   ```
   Si el tamaño (`size`) es igual a 1, la función devuelve simplemente un carácter "#" seguido por un salto de línea.

2. **Inicialización de un arreglo para almacenar las filas (`rows`):**
   ```typescript
   const rows: string[] = [];
   ```
   Se crea un arreglo vacío para almacenar las filas del regalo.

3. **Generación de las primeras y últimas filas:**
   ```typescript
   rows[0] = '#'.repeat(size).padStart(size * 2 - 1);
   rows[size * 2 - 2] = '#'.repeat(size);
   rows[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`;
   ```
   - La primera fila está formada por una cadena de "#" repetida `size` veces, y luego se usa `padStart` para ajustarla a una longitud total de `size * 2 - 1`.
   - La última fila está compuesta por `size` caracteres "#" seguidos por `size - 2` repeticiones del símbolo (`symbol`).
   - La fila central es una combinación de "#" y el símbolo proporcionado, con el símbolo repetido `size - 2` veces.

4. **Generación de las filas intermedias con bucle for:**
   ```typescript
   for (let row = 1; row < size - 1; row++) {
       let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(row - 1)}#`;
       rows[row] = draft.padStart(size * 2 - 1, ' ');
       rows[size * 2 - 2 - row] = draft;
   }
   ```
   Se utiliza un bucle para generar las filas intermedias. En cada iteración, se construye una cadena llamada `draft` que contiene "#" y el símbolo repetido según la posición en el bucle. Luego, esta cadena se inserta en el arreglo `rows` en la posición adecuada, ajustando el espaciado con `padStart`.

5. **Concatenación y retorno del resultado final:**
   ```typescript
   return rows.join('\n').concat('\n');
   ```
   Finalmente, todas las filas se unen con saltos de línea y se agrega un último salto de línea al final, y el resultado se devuelve como una cadena.

En resumen, la función `drawGift` crea un patrón visual de regalo envuelto basado en los parámetros proporcionados. La forma exacta dependerá del tamaño y del símbolo proporcionado.

