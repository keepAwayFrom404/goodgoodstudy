function exchangePosition(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
const arr = [12, 21, 3, 2, 4, 5, 1];

function bubblingSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0, len = arr.length - i - 1; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        exchangePosition(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log(bubblingSort(arr))