export const showStrLength = {
  computed: {
    showStrLength() {
      return this.msg + ' ' + `(${this.msg.length})`;
    }
  }
};
