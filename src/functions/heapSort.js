class MaxHeap {
  constructor() {
    this._heap = [];
  }

  get heap() {
    return this._heap;
  }

  set heap(value) {
    this._heap = value;
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index) {
    return 2 * index + 1;
  }

  rightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(a, b) {
    const aux = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = aux;
  }

  insert(item) {
    this.heap.push(item);

    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);

    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(parent, index);

      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    const item = this.heap.shift();

    this.heap.unshift(this.heap.pop());

    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);

    while (
      (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
      this.heap[rightChild] > this.heap[index]
    ) {
      let max = leftChild;

      if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
        max = rightChild;
      }

      this.swap(max, index);

      index = max;
      leftChild = this.leftChildIndex(max);
      rightChild = this.rightChildIndex(max);
    }

    return item;
  }
}

const heapSort = (unorderedArray) => {
  const sortedArray = [];
  const heap = new MaxHeap();

  for (let i = 0; i < unorderedArray.length; ++i) {
    heap.insert(unorderedArray[i]);
  }

  for (let i = 0; i < unorderedArray.length; ++i) {
    sortedArray.push(heap.delete());
  }

  return sortedArray;
};

module.exports = heapSort;
