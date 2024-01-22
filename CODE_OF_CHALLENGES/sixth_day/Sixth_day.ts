
function maxDistance(movements: string): number {
  let distance = 0;
  let wildCard = 0;

  for (const signo of movements) {
    if (signo === '>') distance++;
    else if (signo === '<') distance--;
    else if (signo === '*') wildCard++;
  }

  return Math.abs(distance) + wildCard;
}
