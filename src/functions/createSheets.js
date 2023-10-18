const path = require("path");
const fs = require("fs");

const sortingMethods = {
  bubbleSort: "Método da bolha",
  selectionSort: "Método de ordenação por seleção",
  insertionSort: "Método de ordenação por inserção",
  mergeSort: "Método de ordenação por intercalação",
  quickSort: "Método de ordenação rápida",
  heapSort: "Método de ordenação por pilha",
};

const createSheets = () => {
  let filePath = path.join(__dirname, "..", "data", "result.txt");
  const runTimes = fs.readFileSync(filePath, "utf-8").split("\n");

  const header = [ "Método de ordenação",...["primeira", "segunda", "terceira", "quarta", "quinta"].map((value) => `Tempo da ${value} execução (ms)`),"Média aritmética",].map((value) => `"${value}"`).join(",") + "\n";
  const map = new Map();
  runTimes.forEach((runtime) => {
    const runtimeArray = runtime.split(" ");
    const sortingMethod = runtimeArray[0].slice(0, -1);
    const entry = Number(runtimeArray[3].slice(0, -1));
    const loop = Number(runtimeArray[6].slice(0, -1));
    const label = { sortingMethod, entry, loop };
    let value = 0;
    if (runtimeArray.length === 9) {
      const [milliseconds, seconds, minutes, hours] = runtimeArray[7]
        .split(/[:\.]/)
        .reverse()
        .map((value) => Number(value));
      if (hours !== undefined) value += hours * 60 * 60 * 1000;
      value += minutes * 60 * 1000;
      value += seconds * 1000;
      value += milliseconds;
    } else {
      value = Number(runtimeArray[7].slice(0, -2));
    }
    map.set(JSON.stringify(label), value);
  });
  const sheets = Array(4).fill(header);
  for (let i = 0; i < 4; ++i) {
    for (const rawSortingMethod of Object.keys(sortingMethods)) {
      const sortingMethod = sortingMethods[rawSortingMethod];
      let average = 0;
      sheets[i] += `"${sortingMethod}",`;
      for (let j = 1; j <= 5; ++j) {
        const label = {
          sortingMethod: rawSortingMethod,
          entry: i + 1,
          loop: j,
        };
        const value = map.get(JSON.stringify(label));
        sheets[i] += `"${value.toLocaleString()}",`;
        average += value;
      }
      average /= 5;
      sheets[i] += `"${Number(average.toFixed(3)).toLocaleString()}"\n`;
    }
    filePath = path.join(
      __dirname,
      "..",
      "sheets",
      `results-over-entry-${i + 1}.csv`
    );
    fs.writeFileSync(filePath, sheets[i]);
  }
};

createSheets();
