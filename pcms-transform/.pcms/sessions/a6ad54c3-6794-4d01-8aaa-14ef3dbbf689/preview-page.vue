<script>
const pkgInfo = (window.name || '&!&!&{}').split('&!&!&')

const obj = eval(`new Object(${pkgInfo[1] || '{}'})`)

export default {
  ...obj,
  template: pkgInfo[0] || '<p>html不能为空</p>'
}
</script>

