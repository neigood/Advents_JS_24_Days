function cyberReindeer(road: string, time: number): string[] {
  const snapshots: string[] = [road];
  let lastChar: string = '.';

  for (let iteration: number = 1; iteration < time; iteration++) {
    if (iteration === 5) {
      road = road.replace(/\|/g, '*');
    }

    const matches: RegExpMatchArray | null = road.match(/S[\*\.]/g);

    if (matches) {
      road = road.replace(matches[0], lastChar + 'S');
      lastChar = matches[0][1];
    }

    snapshots.push(road);
  }

  return snapshots;
}
