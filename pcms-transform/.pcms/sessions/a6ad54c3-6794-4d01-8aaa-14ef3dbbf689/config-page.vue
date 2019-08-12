<template>
  <div>
    <el-menu
      class="nav-menu-list"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff'"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1-1">区块预览</el-menu-item>
    </el-menu>
    <div class="pkg-preview-page">
      <div class="code-section" ref="codeSection">
        <div class="html-input-section" ref="htmlSection">
          <p class="section-title">
            html
            <el-button type="success" size="mini" class="run-code" @click="runCode">
              <i class="el-icon-refresh"></i> 运行
            </el-button>
          </p>
          <div id="html-input-container" class="html-input-container"></div>
        </div>
        <div class="split-line-horizontal" @mousedown="resizeLine('Y')"></div>
        <div class="js-input-section" ref="jsSection">
          <p class="section-title">script</p>
          <div id="js-input-container" class="js-input-container"></div>
        </div>
      </div>
      <div class="split-line" @mousedown="resizeLine('X')"></div>
      <div class="iframe-section">
        <p class="section-title preview-section-title" @click="runCode">Preview</p>
        <iframe class="iframe-preview" :src="'/#/preview'" frameborder="0" ref="iframeSection"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/theme/dracula.css'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'

export default {
  data () {
    const packageInfo = this.$route.params.pkgInfo ? JSON.parse(decodeURIComponent(atob(this.$route.params.pkgInfo))) : {}
    return {
      htmlInput: '',
      jsInput: '',
      packageInfo,
      componentConfig: packageInfo ? JSON.parse(localStorage[packageInfo] || '{}').config : {},
      message: '',
      isMoving: false
    }
  },

  methods: {
    // 更新代码
    runCode () {
      const contentWindow = this.$refs.iframeSection.contentWindow
      contentWindow.name = `${this.htmlInput.getValue()}&!&!&${this.jsInput.getValue()}`
      contentWindow.location.reload(true)
      this.saveCache()
    },

    saveCache () {
      const { pkg, component } = this.packageInfo
      localStorage[pkg + component] = `${this.htmlInput.getValue()}&!&!&${this.jsInput.getValue()}`
    },

    // 拖拽
    mousemove(e) {
      const name = JSON.parse(window.name || '{}')
      const size = e[`client${this.isMoving}`]
      const hundredPercent = document.body[this.isMoving === 'X' ? 'clientWidth' : 'clientHeight']
      if (this.isMoving && size >= 200) {
        if (this.isMoving === 'X') {
          this.$refs.codeSection.style.width = name.width = size / hundredPercent * 100 + '%'
        } else {
          this.$refs.htmlSection.style.height = name.height = (size - 60) / (hundredPercent - 60) * 100 + '%'
          this.$refs.jsSection.style.height = `${(hundredPercent - size - 2) / (hundredPercent - 60) * 100}%`
        }
        window.name = JSON.stringify(name)
      }
    },

    resizeLine (type) {
      this.isMoving = type
      this.$refs.iframeSection.style.pointerEvents = 'none'
      window.addEventListener('mousemove', this.mousemove)
    }
  },

  mounted () {
    const { pkg, component } = this.packageInfo

    if (!component) return false

    const cacheInfoArr = (localStorage[pkg + component] || '&!&!&').split('&!&!&')

    this.htmlInput = CodeMirror(document.getElementById('html-input-container'), {
      value:
        cacheInfoArr[0] ? cacheInfoArr[0] : `<div id="app" style="height: 100%;">
  <${component} v-bind="config"></${component}>
</div>`,
      mode: 'htmlmixed',
      theme: 'dracula',
      lineNumbers: true,
      gutters: ['CodeMirror-lint-markers'],
      lint: true
    })

    if (!this.componentConfig) {
      // node脚本替换config文件路径
      this.componentConfig = JSON.stringify(require('@/components/gt-transform/config.json'), null, 2).replace(/\n/g, '\n      ')
    }

    this.jsInput = CodeMirror(document.getElementById('js-input-container'), {
      value:
        cacheInfoArr[1] ? cacheInfoArr[1] : `{
  data() {
    return {
      config: ${this.componentConfig}
    }
  },
  mounted () { // 针对部分可视化区块不能渲染的问题
    window.dispatchEvent(new Event('resize'));
  }
}`,
      mode: 'javascript',
      theme: 'dracula',
      lineNumbers: true,
      gutters: ['CodeMirror-lint-markers'],
      lint: {
        esversion: 6
      }
    })

    this.runCode()

    // 监听键盘事件
    document.onkeydown = e => {
      const keyCode = e.keyCode || e.which || e.charCode
      const ctrlKey = e.ctrlKey || e.metaKey
      if (ctrlKey && keyCode === 83) {
        this.runCode()
        return false
      }
    }

    const name = JSON.parse(window.name || '{}')
    if (name.width) this.$refs.codeSection.style.width = name.width
    if (name.height) this.$refs.htmlSection.style.height = name.height
  },
  // todo: 添加外部资源加载入口，比如cdn组件入口
  created () {
    window.onbeforeunload = this.saveCache
    window.addEventListener('mouseup', () => {
      this.isMoving = false
      if (this.$refs.iframeSection) this.$refs.iframeSection.style.pointerEvents = 'all'
      window.removeEventListener('mousemove', this.mousemove)
    })
  },

  beforeDestroy () {
    this.saveCache()
    window.onbeforeunload = null
  }
}
</script>
<style lang="less" scoped>
.pkg-preview-page {
  height: calc(~'100vh - 61px');
  background-color: #1e1e1e;
  display: flex;
  color: #cfd0d2;
  overflow: hidden;

  .code-section {
    width: 50%;
  }

  .split-line {
    width: 2px;
    cursor: ew-resize;
    background: #fff;
    z-index: 1;
  }

  .iframe-section {
    flex: 1;
  }

  .run-code {
    float: right;
    margin-right: 7px;
  }

  .code-section {
    border-right: 1px solid #cfd0d2;
    display: flex;
    flex-direction: column;
  }

  .html-input-section {
    height: calc(~'50% - 2px');
  }

  .split-line-horizontal {
    height: 2px;
    cursor: ns-resize;
    background: #fff;
    z-index: 1;
  }

  .js-input-section {
    height: 50%;
  }

  .html-input-section {
    border-bottom: 1px solid #cfd0d2;
  }

  .section-title {
    text-indent: 20px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
  }

  .preview-section-title {
    color: #555;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }

  .html-input-container,
  .js-input-container,
  .iframe-preview {
    height: calc(~'100% - 30px');

    /deep/ .CodeMirror {
      height: 100%;
    }
  }

  .iframe-preview {
    width: 100%;
    background: #fff;
  }
}
</style>
