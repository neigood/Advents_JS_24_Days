Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.

El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b.

Los elfos tienen un sistema especial para organizar los regalos:

Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.

Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)

# LA RESOLUCIÓN DEL PROBLEMA Y EXPLICANDOLO UN POCO MAS A DETALLE.

```typescript
function organizeGifts(gifts: string): string {
    // La función recibe una cadena de regalos y utiliza una expresión regular para encontrar
    // coincidencias que sigan el formato de un número seguido de una letra (ej. "5A", "20B").
    const matches = gifts.match(/(\d*\w)/g);

    // Si no se encuentran coincidencias, la función devuelve la cadena de regalos original.
    if (!matches) return gifts;

    // Itera sobre cada coincidencia encontrada en la cadena de regalos.
    for (let match of matches) {
        // Extrae la cantidad y el tipo de regalo de la coincidencia.
        let count = Number(match.slice(0, -1));
        let gift = match.charAt(-1)!;
        let draft = '';

        // Calcula el número de palets, cajas y unidades individuales.
        const palets = Math.floor(count / 50);
        count -= palets * 50;
        const boxes = Math.floor(count / 10);
        count -= boxes * 10;

        // Construye la cadena de regalos organizada según la cantidad de palets, cajas y unidades.
        if (palets) draft += `[${gift}]`.repeat(palets);
        if (boxes) draft += `{${gift}}`.repeat(boxes);
        if (count) draft += `(${gift.repeat(count)})`;

        // Reemplaza la coincidencia original con la cadena organizada en la cadena de regalos.
        gifts = gifts.replace(match, draft);
    }

    // Devuelve la cadena de regalos organizada.
    return gifts;
}

Resumen del código:
La función organizeGifts toma una cadena de regalos en formato específico (número seguido de una letra) y organiza los regalos agrupándolos en palets,
cajas y unidades individuales, utilizando corchetes [ ], llaves { }, y paréntesis ( ) respectivamente. La función devuelve la cadena de regalos organizada.

