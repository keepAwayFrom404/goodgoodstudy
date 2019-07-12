let a = '1,2'
let temp = a.split(',')


console.log(temp.map(item => {
  return item + 1
}))