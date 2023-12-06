En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.


---------------------------------------------------*************RESOLUCUION****************-----------------------------------------------------

Veamos el código paso a paso y luego veras un resumen de cómo llege a esa solución:

```typescript
function decode(message: string): string {
  // Definir una función para revertir una cadena
  function reverseString(str: string): string {
    return str.split('').reverse().join('');
  }

  // Inicializar una pila para manejar los paréntesis
  const stack: string[] = [];
  // Inicializar la cadena de resultado
  let result = '';

  // Iterar sobre cada carácter en el mensaje
  for (const char of message) {
    if (char === '(') {
      // Si el carácter es '(', empujar el resultado actual a la pila y reiniciar el resultado
      stack.push(result);
      result = '';
    } else if (char === ')') {
      // Si el carácter es ')', revertir el resultado actual y combinarlo con el último resultado almacenado en la pila
      result = reverseString(result);
      result = stack.pop() + result;
    } else {
      // Si el carácter no es un paréntesis, simplemente agregarlo al resultado actual
      result += char;
    }
  }

  // Devolver el resultado final
  return result;
}


Resumen de la solución:

1. La función `decode` toma un mensaje codificado como entrada.
2. Se define una función interna `reverseString` para revertir una cadena.
3. Se inicializa una pila (`stack`) para manejar los paréntesis y una cadena de resultado (`result`).
4. Se itera sobre cada carácter en el mensaje.
5. Si el carácter es '(', se empuja el resultado actual a la pila y se reinicia el resultado.
6. Si el carácter es ')', se revierte el resultado actual y se combina con el último resultado almacenado en la pila.
7. Si el carácter no es un paréntesis, se agrega al resultado actual.
8. Al final, se devuelve el resultado final.

En resumen, la función decodifica un mensaje que ha sido codificado de una manera específica. Se utiliza una pila para realizar un seguimiento de los resultados parciales mientras se encuentran paréntesis, y se revierten las secciones de texto cuando se encuentran paréntesis de cierre.
