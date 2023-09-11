const readArray = require('./src/functions/readArray');
const bubbleSort = require('./src/functions/bubbleSort');
const selectionSort = require('./src/functions/selectionSort');
const insertionSort = require('./src/functions/insertionSort');
const mergeSort = require('./src/functions/mergeSort');
const quickSort = require('./src/functions/quickSort');
const heapSort = require('./src/functions/heapSort');

const sortingMethods = [
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort
];

let entry = undefined;
let loop = undefined;

for (const sortingMethod of sortingMethods) {
  for (let i = entry || 1; i <= 4; ++i) {
    const fileName = `entrada${i}.txt`;

    for (let j = loop || 1; j <= 5; ++j) {
      const label = `${sortingMethod.name}, entry No. ${i}, loop No. ${j}`;
      const array = readArray(fileName);

      console.time(label);
      sortingMethod(array);
      console.timeEnd(label);
      console.log(new Date().toLocaleTimeString());
      console.log('-'.repeat(label.length));
    }

    loop = undefined;
  }

  entry = undefined;
}
