const bubbleSort = (array) => {
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - 1; ++j) {
      if (array[j] > array[j + 1]) {
        const aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }

  return array;
};

module.exports = bubbleSort;
