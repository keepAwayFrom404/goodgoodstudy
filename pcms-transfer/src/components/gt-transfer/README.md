# gt-transfer

> 基于饿了么穿梭框的自定义穿梭框，简化穿梭流程，贴合业务场景。

## Usage

```html
<gt-transfer
  :ds="transferDS"
  :hot-top="transferProps.hotTop"
  :max-value-len="transferProps.maxValueLen"
  @value-change="onValueChange"
/>
```

## DataSource

1. getInfo：返回三种数据

- categoryList（分类筛选）
- hotList（热门选项，总数据的前 n 项，可通过 filter 方法获取）
- dataList（搜索选项）

```js
// categoryList 格式
[
  {
    label: '一级分类',
    toggleDown: true,
    sub: [
      {
        label: '二级分类'
      }
    ]
  }
];
```

```js
// dataList 和 topList 格式
[
  {
    category: '金融理财', // 一级分类
    combineCategory: '金融理财-股票交易', // 一级和二级混合
    disabled: false, // 是否允许选择
    index: 0, // 排序索引
    key: '021100_0', // 相当于ID
    label: '股票交易_0', // 名称
    subCategory: '股票交易' // 二级分类
  }
];
```

```js
{
  data () {
    return {
      transferDS: {
        getInfo: this.getTransferInfo
      },
      transferProps: {
        hotTop: 20, // 热门选项的数量
        maxValueLen: 10 // 最多可选的数量
      }
    }
  },
  methods: {
    getTransferInfo () {
      return Promise.resolve({
        categoryList: transferData.categoryList,
        hotList: transferData.dataList.filter((item, index) => index < this.transferProps.hotTop),
        dataList: transferData.dataList
      })
    },
    onValueChange (value) {
      // 获取选中数据
    }
  }
}
```

## Props

```js
{
  props: {
    // 显示热门 n 项
    hotTop: {
      type: Number,
      default: Infinity
    },
    // 最多可以选择多少个
    maxLength: {
      type: Number,
      default: Infinity
    },
    // 右侧已选处提示文字
    checkedTipText: {
      type: String,
      default: ''
    },
    // 是否展示分类筛选按钮
    categoryBtnShow: {
      type: Boolean,
      default: true
    },
    // 穿梭框title
    panelTitle: {
      type: Object,
      default() {
        return {
          leftPanel: {
            defaultText: '热门APP',
            searchText: '搜索结果',
            categoryText: 'APP分类'
          }
        };
      }
    },
    // 穿梭前验证
    beforeLeftCheckChangeValidate: {
      type: Boolean,
      default: false
    }
  },
}
```

## Events

- before-left-check-change： 从左侧添加数据到右侧的验证函数
- value-change：选择的数据改变时触发，可用于获取选中的数据

## Slot

无
