function doAdd(num1, num2) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
  console.log(num2)
}
doAdd(1)
console.log(doAdd.name)