const foo = Bun.file("2023/1/input.txt");
const lines = (await foo.text()).split("\n");
let acc = 0;

const DICT: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

// for (let line of lines.slice(15, 16)) {
for (let line of lines) {
  let firstNumber: string | null = null;
  let lastNumber: string | null = null;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    let n: string | null = null;
    if (parseInt(ch, 10) && !Number.isNaN(parseInt(ch, 10))) {
      n = ch;
    } else {
      for (let j = 1; j <= 6; j++) {
        const slice = DICT[line.slice(i, i + j + 1)];
        if (slice) {
          n = slice.toString();
          break;
        }
      }
    }
    if (n !== null) {
      firstNumber ??= n;
      lastNumber = n;
    }
  }
  acc += parseInt(`${firstNumber}${lastNumber}`, 10);
}

console.log(acc);
