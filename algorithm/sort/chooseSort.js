const arr = [3, 2, 4, 5, 1];
function chooseSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 0;
    let len = arr.length - 1 - i;
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    console.log(arr[maxIndex], arr[len], i, arr);
    [arr[maxIndex], arr[len]] = [arr[len], arr[maxIndex]];
  }
  return arr;
}
console.log(chooseSort(arr));
