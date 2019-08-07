export default {
  getInfo() {
    return Promise.resolve({
      data: {
        // 详细数据
        dataList: [{
          label: '泰康在线', // 名称（用于每一项名称显示）
          key: '021100_0', // 相当于ID（每项的唯一标志）
          disabled: false, // 是否允许选择
          index: 0, // 排序索引
          category: '金融理财', // 一级分类
          subCategory: '保险', // 二级分类
          combineCategory: '金融理财-保险', // 一级和二级混合
        }, {
          label: '招商银行',
          key: '021100_1',
          disabled: false,
          index: 1,
          category: '金融理财',
          subCategory: '银行',
          combineCategory: '金融理财-银行',
        }, {
          label: '蛇蛇大作战',
          key: '021100_2',
          disabled: false,
          index: 1,
          category: '休闲益智',
          subCategory: '休闲',
          combineCategory: '休闲益智-休闲',
        }],
        // 分类数据
        categoryList: [{
          label: '金融理财',
          toggleDown: true, // 是否默认展开
          sub: [{
            label: '保险',
          }, {
            label: '借贷',
          }, {
            label: '彩票',
          }, {
            label: '投资',
          }, {
            label: '支付',
          }, {
            label: '炒股',
          }, {
            label: '理财记账',
          }],
        }, ],
      },
    });
  },
};