const foo = Bun.file("2023/1/input.txt");
const lines = (await foo.text()).split("\n");
let acc = 0;
for (const line of lines) {
  let firstNumber: string | null = null;
  let lastNumber: string | null = null;
  for (const ch of line) {
    const n = parseInt(ch, 10);
    if (n && !Number.isNaN(n)) {
      firstNumber ??= ch;
      lastNumber = ch;
    }
  }
  acc += parseInt(`${firstNumber}${lastNumber}`, 10);
}

console.log(acc);
