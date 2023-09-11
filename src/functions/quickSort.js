const partition = (array, left, right) => {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (array[i] < pivot) {
      ++i;
    }

    while (array[j] > pivot) {
      --j;
    }

    if (i <= j) {
      const aux = array[i];
      array[i] = array[j];
      array[j] = aux;
      ++i;
      --j;
    }
  }

  return i;
};

const quickSort = (
  array,
  left = 0,
  right = array.length - 1
) => {
  if (array.length > 1) {
    const index = partition(array, left, right);

    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      quickSort(array, index, right);
    }
  }

  return array;
};

module.exports = quickSort;
