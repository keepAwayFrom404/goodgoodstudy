(function() {
  const privateVariable = 10

  function privateFunction() {
    return false
  }
  Myobject = function() {}
  Myobject.prototype.publicMethod = function() {
    privateVariable++
    return privateFunction()
  }
})()