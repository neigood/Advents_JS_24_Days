//Esta es una mejor version del codigo anterior//

// Esta función encuentra el primer regalo repetido en una lista de regalos.
function findFirstRepeated(gifts: number[]): number {
  // Crear un mapa para almacenar los índices de los regalos que se han encontrado
  const giftIndices = new Map<number, number>();

  // Inicializar el índice actual
  let index = 0;

  // Iterar a través de la lista de regalos
  for (const currentGift of gifts) {
    // Verificar si el regalo actual ya ha sido encontrado antes
    if (giftIndices.has(currentGift)) {
      // Si sí, devolver el regalo repetido
      return currentGift;
    } else {
      // Si no, almacenar el índice del regalo actual en el mapa
      giftIndices.set(currentGift, index);
    }

    // Incrementar el índice para el siguiente regalo
    index++;
  }

  // Si no se encuentra ningún regalo repetido, devolver -1
  return -1;
}

// -----------------------------------********------------------------------------------------------------- //

// La función findFirstRepeated encuentra el primer regalo repetido en un array de regalos.
function findFirstRepeated(gifts: number[]): number {
  // Mapa para almacenar el índice de cada regalo.
  const giftIndices = new Map<number, number>();

  // Iterar sobre el array de regalos.
  for (let currentIndex = 0; currentIndex < gifts.length; currentIndex++) {
    const currentGift = gifts[currentIndex];

    // Verificar si el regalo ya ha sido encontrado.
    if (giftIndices.has(currentGift)) {
      // Devolver el valor del primer regalo repetido.
      return currentGift;
    } else {
      // Almacenar el índice del regalo actual en el mapa.
      giftIndices.set(currentGift, currentIndex);
    }
  }

  // Devolver -1 si no se encuentra ningún regalo repetido.
  return -1;
}

// Ejemplo de uso:
const gifts = [2, 1, 3, 5, 3, 2];
const result = findFirstRepeated(gifts);

// Mostrar el resultado en la consola (puedes ajustar esta parte según tus necesidades).
console.log(result);  



