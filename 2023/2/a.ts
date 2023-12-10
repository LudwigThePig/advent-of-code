const foo = Bun.file("2023/2/input.txt");
const lines = (await foo.text()).split("\n");

let acc = 0;

const MAX: Record<string, number> = { red: 12, green: 13, blue: 14 };

for (const line of lines) {
  let [gameId, gameContent] = line.split(":");
  const gameIdInt = parseInt(gameId!.match(/\d+/)![0], 10);
  const sets = gameContent.split(";").map((set) => {
    return set
      .trim()
      .split(",")
      .map((a) => {
        const [count, color] = a.trim().split(" ");
        return parseInt(count, 10) <= MAX[color]!;
      })
      .every((isValid) => isValid);
  });

  if (sets.every((set) => set)) {
    acc += gameIdInt;
  }
}

console.table(acc);
