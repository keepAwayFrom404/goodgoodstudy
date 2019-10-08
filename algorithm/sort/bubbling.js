function exchangePosition(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}
const arr = [11, 7, 5, 6, 87, 65];
function bubblingSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = arr.length - 1 - i; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        exchangePosition(arr, j, j + 1);
      }
    }
  }
  return arr;
}
