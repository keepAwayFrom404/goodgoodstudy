let text = 'hello1 hello2 hello3',
pattern = /hello\d\s?/
result = pattern.exec(text),
globalPattern = /hello\d\s?/g,
globalResult = globalPattern.exec(text),
stickyPattern = /hello\d\s?/y,
stickyResult = stickyPattern.exec(text)
let reg1 = /ab/i,
reg2 = new RegExp(reg1, 'gi')
// let name = 'nicholas',
// message = `hello, ${`my name is ${ name }`}`
function passthru(literals, ...substitutions) {
  let result = ''
  for(let i = 0;i < substitutions.length;i ++) {
    result += literals[i]
    result += substitutions[i]
  }
  result += literals[literals.length - 1]
  return result
}
let count = 10,
price = 0.25,
message = passthru`${count} items cost $${(count * price).toFixed(2)}`
console.log(message)