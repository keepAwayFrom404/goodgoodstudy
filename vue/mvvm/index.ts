function defineReactive(data, key, val) {
  if (Object.prototype.toString.call(val) === '[object Object]') {
    walk(val);
  }
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      dep.depend();
      return val;
    },
    set: function(newVal) {
      if (val === newVal) {
        return;
      }
      dep.notify();
      val = newVal;
    }
  });
}

class Dep {
  static target?: Watcher;
  subs: Array<Watcher>;
  constructor() {
    this.subs = [];
  }
  addSub(sub: Watcher) {
    this.subs.push(sub);
  }
  removeSub(sub: Watcher) {
    this.removeSub(sub);
  }
  depend() {
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }
  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

class Watcher {
  constructor(expOrFn, cb) {
    this.getter = parsePath(expOrFn);
    this.cb = cb;
    this.value = this.get();
  }
  get() {
    Dep.target = this;
    value = this.getter.call(vm, vm);
    Dep.target = undefined;
  }
  update() {
    const oldValue = this.value;
    this.value = this.get();
    this.cb.call(this.vm, this.value, oldValue);
  }
}

function walk(obj: Object) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
}
