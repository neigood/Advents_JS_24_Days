//Esta es una mejor version del codigo anterior//

function findFirstRepeated(gifts: number[]): number {
  const giftIndices = new Map<number, number>();

  let index = 0;

  for (const currentGift of gifts) {
    if (giftIndices.has(currentGift)) {
      return currentGift;
    } else {
      giftIndices.set(currentGift, index);
    }

    index++;
  }

  return -1;
}

// -----------------------------------********------------------------------------------------------------- //

function findFirstRepeated(gifts: number[]): number {
  const giftIndices = new Map<number, number>();

  for (let currentIndex = 0; currentIndex < gifts.length; currentIndex++) {
    const currentGift = gifts[currentIndex];

    if (giftIndices.has(currentGift)) {
      return currentGift;
    } else {
      giftIndices.set(currentGift, currentIndex);
    }
  }

  return -1;
}

const gifts = [2, 1, 3, 5, 3, 2];
const result = findFirstRepeated(gifts);

console.log(result);  



