<template>
  <div class="gt-transfer">
    <div class="left-pane-header">
      <el-checkbox
        v-model="allChecked"
        :disable="exceedsMaxLength"
        @change="handleAllChange"
      >
        <span>全选</span>
      </el-checkbox>
    </div>
    <el-transfer
      ref="transfer"
      filterable
      v-model="choosedValue"
      :filter-method="filterMethod"
      :left-default-checked="[]"
      :right-default-checked="[]"
      :render-content="renderFunc"
      :titles="transferTitle"
      :button-texts="['', '']"
      :format="format"
      @change="handleChange"
      @left-check-change="handleLeftCheckChange"
      @right-check-change="handleRightCheckChange"
      :data="generateData"
    >
      <!-- 左边筛选信息 -->
      <span class="transfer-footer left-footer" slot="left-footer">
        <span>
          <!-- 分类筛选框出现且未选择分类时或者不是分类筛选 -->
          <span
            class="app-category-title"
            v-if="
              showCategoryGroup || !(filterByCategory || filterBySubCategory)
            "
            >{{ categoryTitle }}</span
          >
          <!-- 点击了一级或者二级分类 -->
          <a
            class="category app-category"
            v-if="
              !showCategoryGroup && (filterByCategory || filterBySubCategory)
            "
            @click="showCategoryGroup = true"
            >APP分类</a
          >
          <span
            v-if="
              !showCategoryGroup && (filterByCategory || filterBySubCategory)
            "
          >
            <i class="icon icon-arrow-right"></i>
            <a
              class="category first-category"
              @click="checkCategory(category)"
              >{{ category }}</a
            >
          </span>
          <span v-if="!showCategoryGroup && filterBySubCategory">
            <i class="icon icon-arrow-right"></i>
            <a class="category second-category">{{ subCategory }}</a>
          </span>
          <span v-if="!showCategoryGroup">（{{ leftTotal }}）</span>
        </span>
        <span class="show-category-group" v-if="categoryBtnShow">
          <a
            v-if="
              !showCategoryGroup && !(filterByCategory || filterBySubCategory)
            "
            @click="showCategoryGroup = true"
            >分类筛选</a
          >
          <a
            v-if="
              showCategoryGroup || (filterByCategory || filterBySubCategory)
            "
            @click="resetQuery"
            >重置</a
          >
        </span>
      </span>
      <!-- 右边筛选信息 -->
      <span class="transfer-footer" slot="right-footer">
        <span class="app-category-title">已选</span>
        <span
          >（{{ choosedValue.length }}）
          <span v-if="maxValueLen !== Infinity"
            >（最多选择{{ maxValueLen }}个）</span
          >
          <span v-if="checkedTipText">（{{ checkedTipText }}）</span>
        </span>
      </span>
    </el-transfer>
    <!-- 覆盖原穿梭框展示分类筛选 -->
    <div class="category-group-wrapper" v-show="showCategoryGroup">
      <div
        class="category-group"
        v-for="(category, index) in allCategories"
        :key="index"
      >
        <div class="left">
          <span class="category-level1">{{ category.label }}</span>
          <span
            class="icon icon-arrow-down"
            v-show="!category.toggleDown"
            @click="toggleDownCategory(category)"
          ></span>
          <span
            class="icon icon-arrow-right"
            v-show="category.toggleDown"
            @click="toggleUpCategory(category)"
          ></span>
        </div>
        <div class="right" v-show="category.toggleDown">
          <span class="category-level2" @click="checkCategory(category.label)"
            >全部</span
          >
          <span
            class="category-level2"
            :title="sub.label"
            v-for="(sub, subIndex) in category.sub"
            :key="subIndex"
            @click="checkSubCategory(category.label, sub.label)"
            >{{ sub.label }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'ax';
export default {
  props: {
    // 默认显示数据
    hotTop: {
      type: Number,
      default: 1
    },
    // 最多选择多少
    maxValueLen: {
      type: Number,
      default: Infinity
    },
    // 从左侧向右侧添加数据前是否需要验证
    beforeLeftCheckChangeValidate: {
      type: Boolean,
      default: false
    },
    // 已选处提示文本（最少选择4个等）
    checkedTipText: {
      type: String,
      default: ''
    },
    // 穿梭框的 title
    panelTitle: {
      type: Object,
      default() {
        return {
          leftPanel: {
            defaultText: '全部APP',
            searchText: '搜索结果',
            categoryText: 'APP分类'
          },
          rightPanel: {}
        };
      }
    },
    // 分类筛选按钮是否显示
    categoryBtnShow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      allChecked: false,
      showCategoryGroup: false,
      filterByCategory: false,
      filterBySubCategory: false,
      category: '',
      subCategory: '',
      queryCache: '',
      choosedValue: [],
      allCategories: [],
      dataList: [],
      format: {
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      },
      renderFunc(h, option) {
        return (
          <span class="transfer-label">
            <span class="label-left">
              <span class="icon-plus">+</span> <span class="icon-minus">-</span>{' '}
              <span class="label-text" title={option.label}>
                {option.label}
              </span>
            </span>
            <span class="label-right">{option.category}</span>
          </span>
        );
      },
      filterMethod: (query, item) => {
        // 这个方法有点乱 修改一下
        this.queryCache = this.$refs.transfer
          ? this.$refs.transfer.$children[0].query
          : '';
        const queryByCategory = this.queryCache.includes('#') ? true : false; // 根据分类筛选
        if (queryByCategory) {
          if (this.filterByCategory && this.queryCache.replace(/#/g, '')) {
            // 通过分类面板搜索，根据一级分类筛选 this.queryCache 等于一级分类
            return (
              item.category.includes(this.queryCache.replace(/#/g, '')) ||
              this.choosedValue.includes(item.key) // 为什么筛选的结果可以是已经选择了的
            );
          }
          if (this.filterBySubCategory && this.queryCache.replace(/#/g, '')) {
            // 通过分类面板搜索
            if (this.category) {
              // 存在一级分类的情况下。this.category等于一级分类， this.queryCache等于二级分类
              // 根据一二级分类混合筛选
              // 混合分类是 一级-二级1-二级2-二级3 等等
              // 满足 (包含该 一级 && 包含 该二级)条件，返回
              return (
                (item.combineCategory.includes(this.category) &&
                  item.combineCategory.includes(
                    this.queryCache.replace(/#/g, '')
                  )) ||
                this.choosedValue.includes(item.key)
              );
            }
            // 不存在一级分类的情况下，根据二级分类筛选，this.queryCache等于二级分类
            return (
              item.subCategory.includes(this.queryCache.replace(/#/g, '')) ||
              this.choosedValue.includes(item.key)
            );
          }
          // 不存在一级分类的情况下，根据二级分类筛选，this.queryCache等于二级分类
          return (
            item.subCategory.includes(this.queryCache.replace(/#/g, '')) ||
            this.choosedValue.includes(item.key)
          );
          if (this.queryCache.replace(/#/g, '')) {
            // 手动输入搜索，根据一二级分类混合筛选
            return (
              item.combineCategory.includes(
                this.queryCache.replace(/#/g, '')
              ) || this.choosedValue.includes(item.key)
            );
          }
        } else {
          this.filterByCategory = false;
          this.filterBySubCategory = false;
          return query
            ? item.label.includes(query)
            : item.label || this.choosedValue.includes(item.key); // hotTop是指没有搜索内容时，默认展示前hotTop个热门的app
        }
      }
    };
  },
  computed: {
    leftTotal() {
      if (this.filterByCategory) {
        return (this.generateData || []).filter(
          item =>
            !this.choosedValue.includes(item.key) &&
            item.category.includes(this.queryCache.replace(/#/g, ''))
        ).length;
      }
      if (this.filterBySubCategory) {
        if (this.category) {
          return (this.generateData || []).filter(
            item =>
              !this.choosedValue.includes(item.key) &&
              (item.combineCategory.includes(this.category) &&
                item.combineCategory.includes(
                  this.queryCache.replace(/#/g, '')
                ))
          ).length;
        }
        return (this.generateData || []).filter(
          item =>
            !this.choosedValue.includes(item.key) &&
            item.subCategory.includes(this.queryCache.replace(/#/g, ''))
        ).length;
      }
      if (this.queryCache.includes('#') && this.queryCache.replace(/#/g, '')) {
        return (this.generateData || []).filter(
          item =>
            !this.choosedValue.includes(item.key) &&
            item.combineCategory.includes(this.queryCache.replace(/#/g, ''))
        ).length;
      }
      return this.queryCache
        ? (this.generateData || []).filter(
            item =>
              !this.choosedValue.includes(item.key) &&
              item.label.includes(this.queryCache)
          ).length
        : (this.generateData || []).filter(
            item => !this.choosedValue.includes(item.key)
          ).length;
    },
    // 左边title
    categoryTitle() {
      return this.showCategoryGroup
        ? this.panelTitle.leftPanel.categoryText
        : this.queryCache
        ? this.panelTitle.leftPanel.searchText
        : this.panelTitle.leftPanel.defaultText;
    },
    // 展示的数据
    generateData() {
      if (this.choosedValue.length >= this.maxValueLen) {
        (this.dataList || []).forEach(item => {
          if (!this.choosedValue.includes(item.key)) {
            item.disabled = true;
          }
        });
      } else {
        (this.dataList || []).forEach(item => {
          item.disabled = false;
        });
      }
      return this.dataList;
    },
    exceedsMaxLength() {
      return this.leftTotal + this.choosedValue.length > this.maxValueLen;
    },
    transferTitle() {
      const transferTitle = ['全选', '取消全选'];
      return transferTitle;
    }
  },
  created() {
    this.$addDS('mock', require('./ds/mock.js'));

    this.$DS.getInfo().then(data => {
      const { categoryList, dataList } = data.data;
      this.allCategories = categoryList;
      this.dataList = dataList;
    });
  },
  mounted() {
    // 左侧搜索框聚焦
    this.$refs.transfer.$children[0].$children[1].$el.children[0].onfocus = () => {
      this.showCategoryGroup = false;
    };
    // 筛选框keyup，显示搜索结果
    this.$refs.transfer.$children[0].$children[1].$el.children[0].onkeyup = () => {
      this.filterByCategory = false;
      this.filterBySubCategory = false;
    };
    // console.log(
    //   (this.$refs.transfer.$children[0].$children[0].$el.children[0].children[0].click = event => {
    //     console.log('click done');
    //   })
    // );
    this.$refs.transfer.$children[0].$children[0].$el.children[0].children[0].click = e => {
      console.log('我被阻止了');
      e.preventDefault();

      return false;
    };
  },
  methods: {
    handleChange(value, direction, movedKeys) {},
    // 左侧框向右侧框添加数据操作
    handleLeftCheckChange(selected) {
      if (this.choosedValue.length === this.maxValueLen) {
        return;
      }
      if (this.beforeLeftCheckChangeValidate) {
        // 从左侧向右侧添加数据前是否需要验证
        this.$emit('before-left-check-change', selected);
      } else {
        this.addLeftCheck(selected);
      }
      console.log(this.choosedValue);
    },
    // 右侧框向左侧框添加数据操作
    handleRightCheckChange(selected) {
      let selectedArr;
      if (selected.length === 1) {
        selectedArr = selected;
      } else {
        selectedArr = this.$refs.transfer.$children[3].data.map(
          item => item.key
        );
      }
      selectedArr.forEach(item => {
        const index = this.choosedValue.findIndex(v => v === item);
        if (index > -1) {
          this.choosedValue.splice(index, 1);
        }
      });
      this.$emit('handle-right-check-change', selectedArr);
    },
    // 左侧框的全选操作
    handleAllChange() {
      console.log(this.$refs.transfer.$children[0].checkableData);
      const selected = this.$refs.transfer.$children[0].checkableData.map(
        item => item.key
      );
      if (selected.length) {
        if (this.beforeLeftCheckChangeValidate) {
          // 从左侧向右侧添加数据前是否需要验证
          this.$emit('before-left-all-check-change', selected);
        } else {
          this.addLeftCheck(selected);
        }
        this.allChecked = false;
      }
      // console.log(this.choosedValue);
    },
    // 将当前左侧框中选中的数据加入到 value 中
    addLeftCheck(selected) {
      this.choosedValue.push(...selected);
    },
    // 清空当前左侧框中高亮的数据
    // clearChecked() {
    //   this.$refs.transfer.$children[0].checked = [];
    // },
    // 清空选中的数据
    clearData() {
      this.choosedValue = [];
    },
    resetQuery() {
      this.$refs.transfer.$children[0].query = '';
      this.filterByCategory = false;
      this.filterBySubCategory = false;
      this.showCategoryGroup = false;
    },
    toggleDownCategory(category) {
      this.$set(category, 'toggleDown', true);
    },
    toggleUpCategory(category) {
      this.$set(category, 'toggleDown', false);
    },
    checkCategory(category) {
      this.filterBySubCategory = false;
      // 选出所有该分类下的数据
      this.filterByCategory = true;
      this.category = category;
      this.$refs.transfer.$children[0].query = `#${category}#`;
      this.showCategoryGroup = false;
    },
    checkSubCategory(category, subCategory) {
      this.filterByCategory = false;
      this.category = category;
      // 选出所有该2级分类下的数据
      this.filterBySubCategory = true;
      this.subCategory = subCategory;
      this.$refs.transfer.$children[0].query = `#${subCategory}#`;
      this.showCategoryGroup = false;
    }
  }
  // watch: {
  //   choosedValue(newValue) {
  //     this.$emit('value-change', newVal);
  //   }
  // }
};
</script>
<style lang='scss'>
.gt-transfer {
  position: relative;
  margin: 20px;

  .left-pane-header {
    /* 左侧 pannel 头，覆盖原有的 pannel 头,原头全选需要多次点击才生效*/
    position: absolute;
    left: 1px;
    top: 1px;
    z-index: 10;
    width: 398px;
    height: 38px;
    box-sizing: border-box;
    padding-left: 15px;
    display: flex;
    align-items: center;
    background: #f5f7fa;
    border-radius: 4px;

    .el-checkbox {
      width: 100%;
    }

    .el-checkbox__label {
      /* 覆盖原有的 checkbox label 样式*/
      font-size: 12px;
    }
  }
  .category-group-wrapper {
    /* 分类筛选面板 */
    position: absolute;
    left: 2px;
    top: 126px;
    z-index: 10;
    width: 396px;
    height: 338px;
    box-sizing: border-box;
    padding: 0 16px 10px;
    font-size: 12px;
    color: #6d6d6d;
    overflow: auto;
    background: #fff;

    .category-group {
      display: flex;
      margin-top: 10px;
      .left {
        min-width: 85px;
      }
      .right {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .category-level1 {
      display: inline-block;
      min-width: 65px;
      max-width: 70px;
    }
    .category-level2 {
      width: 66px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: #0e9ed0;
      }
    }
  }
  .icon {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    cursor: pointer;
  }
  .icon-arrow-down::before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border: solid #a29d9d;
    border-width: 0 0 2px 2px;
    transform: rotate(-45deg);
  }
  .icon-arrow-right::before {
    position: absolute;
    top: 2px;
    right: 0;
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border: solid #a29d9d;
    border-width: 0 0 2px 2px;
    transform: rotate(-135deg);
  }
  .el-transfer-panel {
    /* 复写原有穿梭框样式 */
    width: 400px;

    &:first-child {
      margin-right: 50px;
      .label-left .icon-minus {
        display: none;
      }
    }

    &:last-child {
      .label-left .icon-plus {
        display: none;
      }
    }

    .el-transfer-panel__header .el-checkbox .el-checkbox__label {
      /* 复写原有pannel头部样式*/
      font-size: 12px;
      span {
        display: none;
      }
    }
    .el-transfer-panel__body {
      /* 复写原有 pannel body 样式*/
      height: 406px;
      .el-transfer-panel__filter {
        margin-bottom: 35px;
        .el-input__inner[disabled] {
          background: #f7f6f6;
        }
      }

      .el-transfer-panel__list.is-filterable {
        height: 326px;
        // padding-bottom: 0;
      }
    }

    .el-input > input.el-input__inner {
      padding-left: 36px;
    }

    .transfer-label {
      /* 通过暴露的接口加入的内容的样式，每一项的样式 */
      display: block;
      width: 100%;
      .label-left {
        display: block;
        font-size: 12px;
        min-width: 200px;
        overflow: hidden;
        float: left;
        text-overflow: ellipsis;
        .label-text {
          vertical-align: middle;
        }
      }
      .label-right {
        font-size: 12px;
        float: right;
        color: #b5b5b5;
      }
    }

    .el-checkbox-group {
      .el-transfer-panel__item {
        width: 100%;
      }
      .el-checkbox__input {
        visibility: hidden;
      }
      .el-checkbox {
        padding-left: 0;
        color: #6d6d6d;
        margin-right: 0;
        &:hover {
          color: #0e9ed0;
        }
        .el-checkbox__label {
          padding-right: 10px;
          padding-left: 16px;
        }
      }
    }

    .show-category-group {
      color: #0e9ed0;
      cursor: pointer;
    }

    .el-transfer-panel__empty {
      font-size: 12px;
    }

    .el-transfer-panel__footer {
      /* 复写原有 pannel footer 样式*/
      height: 28px;
      top: 95px;
      border-bottom: 1px solid #e8e8e8;
      border-top: none;

      &:after {
        display: none;
      }

      .left-footer {
        /* 通过 slot 加入的内容的样式 */
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        .icon-arrow-right {
          margin-left: 6px;
          margin-right: 8px;
        }
        .category {
          color: #0e9ed0;
          cursor: pointer;
          &:hover {
            color: #077ca5;
          }
        }
      }

      .transfer-footer {
        padding: 0 16px;
        font-size: 12px;
      }
    }
  }

  .el-transfer__buttons {
    display: none;
  }
}
</style>
