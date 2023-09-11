/**
 * @author <https://stackabuse.com/selection-sort-in-javascript>
 */
const selectionSort = (array) => {
  for (let i = 0; i < array.length; ++i) {
    let min = i;

    for (let j = i + 1; j < array.length; ++j) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      const aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }

  return array;
};

module.exports = selectionSort;
