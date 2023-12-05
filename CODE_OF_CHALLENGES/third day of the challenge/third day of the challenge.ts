function findNaughtyStep(original: string, modified: string): string {
  const lenOriginal: number = original.length;
  const lenModified: number = modified.length;

  // Encuentra la longitud más corta entre las dos secuencias
  const minLength: number = Math.min(lenOriginal, lenModified);

  // Vamos a jugar a encontrar la diferencia en cada paso
  for (let i = 0; i < minLength; i++) {
    // Si un paso es diferente en las dos secuencias, encontramos el paso travieso
    if (original[i] !== modified[i]) {
      // ¿Cuál es el paso travieso? El más largo o el más corto
      return lenOriginal < lenModified ? modified[i] : original[i];
    }
  }

  // Si una secuencia es más larga que la otra, encontramos el paso extra o faltante
  if (lenOriginal < lenModified) {
    return modified.slice(minLength)[0];
  } else if (lenOriginal > lenModified) {
    return original.slice(minLength)[0];
  }

  // ¡Si llegamos aquí, no hay pasos traviesos y ambas secuencias son iguales!
  return '';
}