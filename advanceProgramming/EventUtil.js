var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },

  getEvent: function (event) {
    return event ? event : window.event;
  },

  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },

  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },

  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ?
        -event.wheelDelta : event.wheelDelta);
    } else {
      return -event.detail * 40;
    }
  },

  getWheelDelta: function (event) {
    if (event.wheelDelta) {
      return (client.engine.opera && client.engine.opera < 9.5 ?
        -event.wheelDelta : event.wheelDelta);
    } else {
      return -event.detail * 40;
    }
  },

  getClipboardText: function (event) {
    const clipboardData = (event.clipboardData || window.clipboardData)
    return clipboardData.getData('text')
  },

  setClipboardText: function (event, value) {
    if (event.clipboardData) {
      return event.clipboardData.setData('text/plain', value)
    } else if (window.clipboardData) {
      return window.clipboardData.setData('text', value)
    }
  },

  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  }
};