En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // []

# LA RESOLUCIÓN DEL PROBLEMA Y EXPLICANDOLO UN POCO MAS A DETALLE.

```typescript
// Definición de la función manufacture que toma un array de regalos y un string de materiales como argumentos.
function manufacture(gifts: string[], materials: string): string[] {
  // Utiliza el método filter en el array de regalos para filtrar solo aquellos que pueden ser fabricados con los materiales disponibles.
  return gifts.filter(canManufactureGift);

  // Definición de la función interna canManufactureGift que toma un regalo como argumento y devuelve un booleano.
  function canManufactureGift(gift: string): boolean {
    // Utiliza el método split para convertir el regalo en un array de caracteres y luego el método every para verificar si todos los caracteres están presentes en el string de materiales.
    return gift.split('').every(char => materials.includes(char));
  }
}
```

los pasos que se tomo para llegar a la conclusion del codigo código:

1. **Objetivo de la función:**
   - La función `manufacture` toma dos parámetros: un array de regalos (`gifts`) y un string de materiales (`materials`).
   - El objetivo es filtrar los regalos que pueden ser fabricados con los materiales proporcionados.

2. **Función de filtrado:**
   - Se utiliza el método `filter` en el array de regalos.
   - Cada regalo se pasa a la función interna `canManufactureGift` como argumento.

3. **Función interna `canManufactureGift`:**
   - Toma un regalo como argumento.
   - Utiliza el método `split` para convertir el regalo en un array de caracteres.
   - Luego, utiliza el método `every` para verificar si todos los caracteres del regalo están presentes en el string de materiales.
   - Devuelve un booleano: `true` si todos los caracteres están presentes, `false` si al menos uno no lo está.

4. **Resultado final:**
   - La función `manufacture` devuelve un nuevo array que contiene solo los regalos que pueden ser fabricados según la lógica definida en `canManufactureGift`.

En resumen, este código filtra los regalos que pueden ser fabricados verificando si todos los caracteres del regalo están presentes en el string de materiales proporcionado.
