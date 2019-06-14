// 软绑定的实现
if(!Function.prototype.softBind) {
    Function.prototype.softBind = function(obj) {
        var fn = this
        var args = Array.prototype.slice.call(arguments, 1)
        var bound = function() {
            return fn.apply(
                (!this || this === (window || global)) ? obj : this,
                args.concat.apply(args, arguments)
            )
        }
        bound.prototype = Object.create(fn.prototype)
        return bound
    }
}

// 例子
function foo() {
    console.log("name: " + this.name);
}
var obj1={name:"obj1"},
    obj2={name:"obj2"},
    obj3={name:"obj3"};
var fooOBJ=foo.softBind(obj1);
fooOBJ();                                               // "name: obj1" 在这里软绑定生效了，成功修改了this的指向，将this绑定到了obj1上

obj2.foo=foo.softBind(obj1);
obj2.foo();                                             // "name: obj2" 在这里软绑定的this指向成功被隐式绑定修改了，绑定到了obj2上

fooOBJ.call(obj3);                                      // "name: obj3" 在这里软绑定的this指向成功被硬绑定修改了，绑定到了obj3上

setTimeout(obj2.foo,1000);                              // "name: obj1"
                                                        // 回调函数相当于一个隐式的传参，如果没有软绑定的话，这里将会应用默认绑定将this绑定到全局环境上，但有软绑定，这里this还是指向obj1