![ninth.jpg](/ninth.png)

# LA RESOLUCIÓN DEL PROBLEMA Y EXPLICANDOLO UN POCO MAS A DETALLE.

Veamos el código paso a paso::

```typescript
// Función para cambiar el estado de una luz entre '🟢' y '🔴'
function toggleLight(light: string): string {
  return light === '🟢' ? '🔴' : '🟢';
}

// Función para contar y cambiar las luces adyacentes con el mismo estado
function checkLights(lights: string[]): number {
  let cambios = 0;

  // Iterar a través de las luces, comenzando desde la segunda
  for (let indice = 1; indice < lights.length; indice++) {
    // Si la luz actual es igual a la luz anterior
    if (lights[indice] === lights[indice - 1]) {
      cambios++; // Incrementar el contador de cambios
      lights[indice] = toggleLight(lights[indice]); // Cambiar el estado de la luz actual
    }
  }

  return cambios; // Retornar la cantidad de cambios realizados
}

// Función principal que determina la cantidad mínima de cambios
function adjustLights(lights: string[]): number {
  // Obtener la cantidad de cambios en la versión original
  const originalChanges = checkLights(lights.slice());

  // Obtener la cantidad de cambios en la versión invertida
  const reversedChanges = checkLights([...lights].reverse());

  // Retornar la cantidad mínima de cambios entre ambas versiones
  return Math.min(originalChanges, reversedChanges);
}


Resumen de la solución:

**Explicación Paso a Paso:**

1. `toggleLight`: Esta función toma una luz como entrada y cambia su estado entre '🟢' y '🔴'.
2. `checkLights`: Itera a través de las luces, contando cuántas luces adyacentes tienen el mismo estado y cambiando su estado si es necesario.
3. `adjustLights`: Utiliza las funciones anteriores para determinar la cantidad mínima de cambios necesarios en las luces originales y en su versión invertida.

**Resumen:**
El código consta de tres funciones. `toggleLight` cambia el estado de una luz. `checkLights` cuenta y cambia las luces adyacentes con el mismo estado. `adjustLights` utiliza las funciones anteriores para encontrar la cantidad mínima de cambios necesarios en las luces originales y en su versión invertida. Estas mejoras se han realizado para hacer el código más limpio y legible.
