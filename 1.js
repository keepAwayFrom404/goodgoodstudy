var obj = {
  a: 'li',
  b: 'jiahua'
}
Object.defineProperty(obj, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    var o = this
    var idx = 0
    var kys = Object.keys(obj)
    return {
      next: function () {
        return {
          value: o[kys[idx++]],
          done: (idx > kys.length)
        }
      }
    }
  }
})
var it = obj[Symbol.iterator]()
it.next()
it.next()
console.log(it.next())