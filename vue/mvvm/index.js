function SelfVue(options) {
  this.vm = this;
  this.data = options.data;
  Object.keys(this.data).forEach(key => {
    this.proxyKeys(key);
  });
  observe(this.data);

  new Compile(options.el, this.vm);
  return this;
}

SelfVue.prototype = {
  proxyKeys: function(key) {
    const that = this;
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get: function proxyGetter() {
        return that.data[key];
      },
      set: function proxySetter(newVal) {
        that.data[key] = newVal;
      }
    });
  }
};
