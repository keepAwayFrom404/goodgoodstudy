function getQueryStringArgs() {
  const qs = location.search.length ? location.search.substr(1) : ''
  const args = {}
  let item = null,
    name = null,
    value = null;
  const items = qs.length ? qs.split('&') : []
  for (let i = 0; i < items.length; i++) {
    item = items[i].split("=")
    name = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    if (name.length) {
      args[name] = value
    }
  }
  return args
}