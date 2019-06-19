function pick(object) {
  let result = Object.create(null)
  for (let i = 1, len = arguments.length; i < len; i++) {
    result[arguments[i]] = object[arguments[i]]
  }
  return result
}
let book = {
  title: 'understangding ecmascript 6',
  author: 'nicjolas c.zakas',
  yaer: 2015
}
let bookData = pick(book, 'title')
let values = [24, 34, 56, 100]
let person = (name => {
  return {
    getName: function() {
      return name
    }
  }
})('lee')
