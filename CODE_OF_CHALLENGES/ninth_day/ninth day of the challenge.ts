function adjustLights(lights: string[]) {
  function checkLights(lights: string[]) {
    let cambios = 0

    for (let indice = 1; indice < lights.length; indice++) {
      if (lights[indice] === lights[indice - 1]) {
        cambios++
        lights[indice] = lights[indice] === '🟢' ? '🔴' : '🟢'
      }
    }

    return cambios
  }

  return Math.min(checkLights([...lights]), checkLights([...lights].reverse()))
}