export default {
  getInfo() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          result: 0,
          data: ['hello', 'world']
        })
      }, 1000);
    })
  }
}