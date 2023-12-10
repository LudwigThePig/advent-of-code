const foo = Bun.file("2023/3/input.txt");
const lines = (await foo.text()).split("\n");
const matrix = lines.map((l) => l.split(""));

const isInt = (ch: string | undefined) => !!ch && !!ch.match(/\d/);

const isTool = (ch: string | undefined) => !!ch && !isInt(ch) && ch !== ".";

let acc = 0;
// for (let i = 0; i < matrix.slice(0, 1).length; i++) {
for (let i = 0; i < matrix.length; i++) {
  const line = matrix[i];
  for (let j = 0; j < matrix[i].length; j++) {
    if (!isInt(line[j])) continue;
    let k = j + 1;

    while (isInt(line[k])) {
      k++;
    }
    const int = parseInt(line.slice(j, k + 1).join(""), 10);

    let isCurrentTool = false;
    for (let startRow = i - 1; startRow <= i + 1; startRow++) {
      for (let startCol = j - 1; startCol <= k; startCol++) {
        const ch = (matrix[startRow] ?? [])[startCol];
        isCurrentTool = isTool(ch);
      }
    }
    if (isCurrentTool) {
      acc += int;
    }
    j = k;
  }
}

console.log(acc);
