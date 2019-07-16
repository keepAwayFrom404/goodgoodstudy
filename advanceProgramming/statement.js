let num = 0
start: 
for(let i = 1;i < 10;i ++) {
  for(let j = 1;j < 5;j ++) {
    if(i === j) {
      break start
    }
  }
  }
// with
const obj = {
  a: '111',
  b: {
    c: '222'
  },
  d: '333'
}
with(obj) {
  console.log(a,b.c,d)
}