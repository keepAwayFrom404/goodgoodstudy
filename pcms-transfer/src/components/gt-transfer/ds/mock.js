export default {
  getInfo() {
    return Promise.resolve({
      data: {
        // 详细数据
        dataList: [
          {
            label: '泰康在线', // 名称（用于每一项名称显示）
            key: '021100_0', // 相当于ID（每项的唯一标志）
            disabled: false, // 是否允许选择
            index: 0, // 排序索引
            category: '金融理财', // 一级分类
            subCategory: '保险', // 二级分类
            combineCategory: '金融理财-保险' // 一级和二级混合
          },
          {
            label: '招商银行',
            key: '021100_1',
            disabled: false,
            index: 1,
            category: '金融理财',
            subCategory: '银行',
            combineCategory: '金融理财-银行'
          },
          {
            label: '蛇蛇大作战',
            key: '021100_2',
            disabled: false,
            index: 2,
            category: '休闲益智',
            subCategory: '休闲',
            combineCategory: '休闲益智-休闲'
          },
          {
            label: '和平精英',
            key: '021100_3',
            disabled: false,
            index: 3,
            category: '休闲益智',
            subCategory: '射击',
            combineCategory: '休闲益智-射击'
          },
          {
            label: '街头篮球',
            key: '021100_4',
            disabled: false,
            index: 4,
            category: '体育竞技',
            subCategory: '篮球',
            combineCategory: '体育竞技-篮球'
          },
          {
            label: '最强NBA',
            key: '021100_5',
            disabled: false,
            index: 5,
            category: '体育竞技',
            subCategory: '篮球',
            combineCategory: '体育竞技-篮球'
          },
          {
            label: '蜜趣-找对象很简单',
            key: '021100_7',
            disabled: false,
            index: 7,
            category: '通讯社交',
            subCategory: '聊天',
            combineCategory: '通讯社交-聊天'
          },
          {
            label: '探探',
            key: '021100_8',
            disabled: false,
            index: 8,
            category: '通讯社交',
            subCategory: '聊天',
            combineCategory: '通讯社交-聊天'
          },
          {
            label: '微信',
            key: '021100_9',
            disabled: false,
            index: 9,
            category: '通讯社交',
            subCategory: '聊天',
            combineCategory: '通讯社交-聊天'
          },
          {
            label: 'QQ',
            key: '021100_10',
            disabled: false,
            index: 10,
            category: '通讯社交',
            subCategory: '聊天',
            combineCategory: '通讯社交-聊天'
          }
        ],
        // 分类数据
        categoryList: [
          {
            label: '金融理财',
            toggleDown: true, // 是否默认展开
            sub: [
              {
                label: '保险'
              },
              {
                label: '银行'
              },
              {
                label: '彩票'
              },
              {
                label: '投资'
              },
              {
                label: '支付'
              },
              {
                label: '炒股'
              },
              {
                label: '理财记账'
              }
            ]
          },
          {
            label: '休闲益智',
            toggleDown: true,
            sub: [
              {
                label: '休闲'
              }
            ]
          },
          {
            label: '体育竞技',
            toggleDown: true,
            sub: [
              {
                label: '篮球'
              },
              { label: '足球' },
              { label: '桌球' },
              { label: '极限' },
              { label: '其他球类' }
            ]
          },
          {
            label: '通讯社交',
            toggleDown: true,
            sub: [
              { label: '聊天' },
              { label: '交友' },
              { label: '婚恋' },
              { label: '社区' },
              { label: '私密' }
            ]
          }
        ]
      }
    });
  }
};
