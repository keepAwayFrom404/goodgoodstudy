function EventTarget() {
  this.handlers = {};
}
EventTarget.prototype = {
  constructor: EventTarget,
  addHandler: function(type, handler) {
    if (typeof this.handlers[type] == 'undefined') {
      this.handlers[type] = [];
    }
    this.handlers[type].push(handler);
  },
  fire: function(event) {
    if (!event.target) {
      event.target = this;
    }
    if (this.handlers[event.type] instanceof Array) {
      const handlers = this.handlers[event.type];
      for (let index = 0; index < handlers.length; index++) {
        handlers[index](event);
      }
    }
  },
  removeHandler: function(type, handler) {
    if (this.handlers[type] instanceof Array) {
      const handlers = this.handlers[type];
      for (var index = 0; index < handlers.length; index++) {
        if (handlers[index] === handler) {
          break;
        }
      }
      handlers.splice(index, 1);
    }
  }
};
