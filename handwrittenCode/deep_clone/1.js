let deepClone = function(oldObj, hash = new WeakMap()) {
  let newObj
  let Constructor = oldObj.constructor
  switch(Constructor) {
    case RegExp:
    newObj = new Constructor(oldObj)
    break
    case Date:
    newObj = new Constructor(oldObj.getTime())
    break
    case Function:
    newObj = eval(oldObj.toString())
    default:
    if(hash.has(oldObj)) return hash.get(oldObj)
    newObj = new Constructor()
    hash.set(oldObj, newObj)
  }
  for(let key in oldObj) {
    if(oldObj.hasOwnProperty(key)) {
      newObj[key] = (typeof oldObj[key] === ('object' || 'function')) && oldObj[key] !== null ? deepClone(oldObj[key]) : oldObj[key]
    }
  }
  return newObj
}
let obj = { 
  a: 'a',
  b: { 
    c: 'c',
    d: 'd',
  },
}
 
obj.c = obj.b;
// obj.e = obj.a;
// obj.b.c = obj.c;
// obj.b.d = obj.b;
// obj.b.e = obj.b.c;

let obj2 = deepClone(obj)
console.log(obj2)
