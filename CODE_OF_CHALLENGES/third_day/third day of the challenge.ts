function findNaughtyStep(original: string, modified: string): string {
  const lenOriginal: number = original.length;
  const lenModified: number = modified.length;
  const minLength: number = Math.min(lenOriginal, lenModified);

  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {
      return lenOriginal < lenModified ? modified[i] : original[i];
    }
  }

  if (lenOriginal < lenModified) {
    return modified.slice(minLength)[0];
  } else if (lenOriginal > lenModified) {
    return original.slice(minLength)[0];
  }

  return '';
}
