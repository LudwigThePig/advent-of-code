const foo = Bun.file("2023/2/input.txt");
const lines = (await foo.text()).split("\n");

let acc = 0;

for (const line of lines) {
  let [gameId, gameContent] = line.split(":");
  const gameIdInt = parseInt(gameId!.match(/\d+/)![0], 10);
  let localMax: Record<string, number> = {
    red: 1,
    green: 1,
    blue: 1,
  };
  for (const set of gameContent.split(";")) {
    for (const cube of set.trim().split(",")) {
      const [count, color] = cube.trim().split(" ");
      const countInt = parseInt(count, 10);
      localMax[color]! = Math.max(countInt, localMax[color]);
    }
  }

  acc += localMax.red * localMax.green * localMax.blue;
}

console.table(acc);
