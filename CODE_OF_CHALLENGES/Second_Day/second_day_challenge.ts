function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter(canManufactureGift);

  function canManufactureGift(gift: string): boolean {
    return gift.split('').every(char => materials.includes(char));
  }
}