基于CMS区块库模板

## 准备工作

``` bash
# 安装基本依赖
npm install

# 生成组件基本文件
cd src/components
pcms create # 这里指的是create component

# 进行组件开发
...
```

## 如何开发组件

在组件目录或者项目根目录使用`pcms dev [组件相对路径]`启动dev调试服务， props可通过url进行传入。

根据shell中给出的url在浏览器中调试。

或者在项目根目录使用`pcms server`命令启动本地server服务，然后使用[CMS Tool](http://192.168.10.25:2000/#/pkg-management/local-pkg)工具

选择左侧“项目自身区块”，然后点击“预览”按钮进行调试，props可在预览上方文本区域中填入(json字符串)。

### 关于README.md和config.json

README.md是存放每个组件文档的地方，请按照固定的顺序和格式书写文档。

config.json是存放每个组件默认props的json，目的在于使用CMS Tool工具进行调试时，config.json配置信息可以自动填充至textArea中，类似于echarts官网的展示页面，用户只需要对props进行修改即可，而不是从头自己写。


## 如何提交组件

提交组件之前，你需要先在项目的src/index.js文件中将该组件的注册信息暴露给用户。

需要添加的内容如下：

``` js
// 先添加引用
import YourComponent from './components/your-component'

// 添加install信息
Vue.component('your-component', YourComponent)

// 暴露按需加载出口
export { ..., YourComponent }
```

然后，你需要在package.json中添加该组件的路径映射。
key为export的组件名称，value为src/components下组件文件夹名称。


``` json
{
    "cms": {
        "components": {
          "YourComponent": "your-component"
        }
    }
}
```

然后，push 代码。
