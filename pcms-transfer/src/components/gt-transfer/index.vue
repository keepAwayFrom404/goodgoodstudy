<template>
  <div class="gt-transfer">
    <div class="left-panel-header">
      <el-checkbox
        v-model="allChecked"
        :disabled="exceedsMaxLength"
        @change="handleAllChange"
        >全选</el-checkbox
      >
    </div>
    <el-transfer
      ref="transfer"
      v-model="choosedValue"
      filterable
      :left-default-checked="[]"
      :right-default-checked="[]"
      :render-content="renderFunc"
      :filter-method="filterMethod"
      :titles="['全选', '取消全选']"
      :button-texts="['', '']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @left-check-change="handleLeftCheckChange"
      @right-check-change="handleRightCheckChange"
      @change="handleChange"
      :data="baseData"
    >
      <template #left-footer>
        <span class="transfer-footer left-footer">
          <span>
            <span
              v-if="!(filterByCategory || filterBySubCategory)"
              class="app-category-title"
              >{{ leftPanelTitle }}</span
            >
            <a
              v-if="
                !showCategoryPane && (filterByCategory || filterBySubCategory)
              "
              class="category app-category"
              @click="showCategoryPane = true"
              >{{ panelTitle.leftPanel.categoryText }}</a
            >
            <span
              v-if="
                !showCategoryPane && (filterByCategory || filterBySubCategory)
              "
            >
              <i class="icon icon-arrow-right"></i>
              <span
                class="category first-category"
                @click="clickCategory(category)"
                >{{ category }}</span
              >
            </span>
            <span v-if="!showCategoryPane && filterBySubCategory">
              <i class="icon icon-arrow-right"></i>
              <span class="category second-category">{{ subCategory }}</span>
            </span>
            <span v-if="!showCategoryPane">（{{ leftTotal }}）</span>
          </span>
          <span class="show-category-group" v-if="categoryBtnShow"
            ><a
              v-if="
                !showCategoryPane && !(filterByCategory || filterBySubCategory)
              "
              @click="showCategoryPane = true"
              >分类筛选</a
            >

            <a v-else @click="resetQuery">重置</a>
          </span>
        </span>
      </template>
      <template #right-footer>
        <span class="transfer-footer right-footer">
          <span>
            <span class="app-category-title">已选</span>
            <span>（{{ choosedValue.length }}） </span>
            <span v-if="maxLength !== Infinity">最多选择{{ maxLength }}个</span>
            <span v-if="checkedTipText">{{ checkedTipText }}</span>
          </span>
        </span>
      </template>
    </el-transfer>
    <div class="gt-transfer-wrapper" v-if="showCategoryPane">
      <div
        class="category-group"
        v-for="(category, index) in categoryList"
        :key="index"
      >
        <div class="left">
          <span class="category-level1">{{ category.label }}</span>
          <span
            class="icon icon-arrow-down"
            v-show="!category.toggleDown"
            @click="category.toggleDown = true"
          ></span>
          <span
            class="icon icon-arrow-right"
            v-show="category.toggleDown"
            @click="category.toggleDown = false"
          ></span>
        </div>
        <div class="right" v-show="category.toggleDown">
          <span class="category-level2" @click="clickCategory(category.label)"
            >全部</span
          >
          <span
            class="category-level2"
            v-for="(subCategory, subIndex) in category.sub"
            :key="subIndex"
            :title="subCategory.label"
            @click="clickSubCategory(category.label, subCategory.label)"
            >{{ subCategory.label }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Topn数据显示
    hotTop: {
      type: Number,
      default: Infinity
    },
    // 最大选择长度
    maxLength: {
      type: Number,
      default: Infinity
    },
    // 已选边上的提示文本
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
  data() {
    return {
      queryCache: '', // 缓存查询字符串
      category: '', // 一级分类选择的类型
      subCategory: '', // 二级分类类型
      allChecked: false,
      showCategoryPane: false,
      filterByCategory: false,
      filterBySubCategory: false,
      choosedValue: [],
      categoryList: [],
      hotCategories: [],
      dataList: [],
      renderFunc(h, option) {
        return (
          <span class="transfer-item">
            <span class="transfer-item-left">
              <span class="icon-add">+</span>
              <span class="icon-remove">-</span>{' '}
              <span class="transfer-item-text" title={option.label}>
                {option.label}
              </span>
            </span>
            <span class="transfer-item-right">{option.category}</span>
          </span>
        );
      },
      filterMethod: (query, item) => {
        this.queryCache = this.$refs.transfer
          ? this.$refs.transfer.$children[0].query
          : '';
        const queryByCategory = this.queryCache.includes('#'); // 根据分类筛选
        if (queryByCategory) {
          if (this.filterByCategory) {
            // 通过分类面板搜索，根据一级分类筛选 this.queryCache 等于一级分类
            return (
              item.category.includes(this.queryCache.replace(/#/g, '')) ||
              this.choosedValue.includes(item.key)
            ); // 排除筛选对已选列表的影响
          }
          if (this.filterBySubCategory) {
            if (this.category) {
              return (
                (item.combineCategory.includes(this.category) &&
                  item.combineCategory.includes(
                    this.queryCache.replace(/#/g, '')
                  )) ||
                this.choosedValue.includes(item.key)
              );
            }
            // 不存在一级分类的情况下，根据二级分类筛选
            return (
              item.subCategory.includes(this.queryCache.replace(/#/g, '')) ||
              this.choosedValue.includes(item.key)
            );
          }
          if (this.queryCache.replace(/#/g, '')) {
            return (
              item.combineCategory.includes(
                this.queryCache.replace(/#/g, '')
              ) || this.choosedValue.includes(item.key)
            );
          }
          if (this.queryCache === '#') {
            return this.choosedValue.includes(item.key);
          }
        } else {
          this.filterByCategory = false;
          this.filterBySubCategory = false;
          return query
            ? item.label.includes(query)
            : item.index < this.hotTop || this.choosedValue.includes(item.key);
        }
      }
    };
  },
  computed: {
    baseData() {
      if (this.choosedValue.length >= this.maxLength) {
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
    leftPanelTitle() {
      return this.showCategoryPane
        ? this.panelTitle.leftPanel.categoryText
        : this.queryCache
        ? this.panelTitle.leftPanel.searchText
        : this.panelTitle.leftPanel.defaultText;
    },
    leftTotal() {
      if (this.filterByCategory) {
        return (this.baseData || []).filter(
          item =>
            !this.choosedValue.includes(item.key) &&
            item.category.includes(this.queryCache.replace(/#/g, ''))
        ).length;
      }
      if (this.filterBySubCategory) {
        if (this.category) {
          return (this.baseData || []).filter(
            item =>
              !this.choosedValue.includes(item.key) &&
              item.combineCategory.includes(this.category) &&
              item.combineCategory.includes(this.queryCache.replace(/#/g, ''))
          ).length;
        }
        return (this.baseData || []).filter(
          item =>
            !this.choosedValue.includes(item.key) &&
            item.subCategory.includes(this.queryCache.replace(/#/g, ''))
        ).length;
      }
      if (this.queryCache.includes('#') && this.queryCache !== '#') {
        return (this.baseData || []).filter(
          item =>
            !this.choosedValue.includes(item.key) &&
            item.combineCategory.includes(this.queryCache.replace(/#/g, ''))
        ).length;
      } else if (this.queryCache === '#') {
        return 0;
      }

      return this.queryCache
        ? (this.baseData || []).filter(
            item =>
              !this.choosedValue.includes(item.key) &&
              item.label.includes(this.queryCache.replace(/#/g, ''))
          ).length
        : (this.hotCategories || []).filter(
            item => !this.choosedValue.includes(item.key)
          ).length;
    },
    exceedsMaxLength() {
      return this.leftTotal + this.choosedValue.length > this.maxLength;
    }
  },
  watch: {
    choosedValue: {
      handler(newValue) {
        this.$emit('value-change', newValue);
      }
    }
  },
  created() {
    this.$addDS('mock', require('./ds/mock.js'));
    this.$DS.getInfo().then(({ data }) => {
      const { dataList, categoryList } = data;
      this.categoryList = categoryList;
      this.dataList = dataList;
      this.hotCategories = dataList.filter(
        (item, index) => index < this.hotTop
      );
    });
  },
  mounted() {
    this.$refs.transfer.$children[0].$children[1].$el.children[0].onfocus = () => {
      this.showCategoryPane = false;
    };
    this.$refs.transfer.$children[0].$children[1].$el.children[0].onkeyup = () => {
      this.filterByCategory = false;
      this.filterBySubCategory = false;
    };
    // this.$refs.transfer.$children[0].$children[0].$el.children[0].children[1].click = e => {
    //   e.preventDefault();
    //   return false;
    // };
  },
  methods: {
    handleChange() {},
    handleLeftCheckChange(selected) {
      if (this.beforeLeftCheckChangeValidate) {
        this.$emit('before-left-check-change', selected);
      } else {
        this.choosedValue.push(...selected);
      }
    },
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
    handleAllChange() {
      const selected = this.$refs.transfer.$children[0].checkableData.map(
        item => item.key
      );
      if (selected.length) {
        if (this.beforeLeftCheckChangeValidate) {
          this.$emit('before-left-check-change', selected);
        } else {
          this.choosedValue.push(...selected);
        }
      }
      this.allChecked = false;
    },
    clickCategory(category) {
      this.filterByCategory = true;
      this.filterBySubCategory = false;
      this.category = category;
      this.subCategory = '';
      this.$refs.transfer.$children[0].query = `#${category}#`;
      this.showCategoryPane = false;
    },
    clickSubCategory(category, subCategory) {
      this.filterByCategory = false;
      this.filterBySubCategory = true;
      this.category = category;
      this.subCategory = subCategory;
      this.$refs.transfer.$children[0].query = `#${subCategory}#`;
      this.showCategoryPane = false;
    },
    resetQuery() {
      this.$refs.transfer.$children[0].query = '';
      this.showCategoryPane = false;
      this.filterByCategory = false;
      this.filterBySubCategory = false;
    }
  }
};
</script>

<style lang="scss">
.gt-transfer {
  position: relative;
  margin: 20px;
  .left-panel-header {
    /* 左侧 pannel 头，覆盖原有的 pannel 头*/
    position: absolute;
    left: 0;
    z-index: 10;
    width: 399px;
    height: 40px;
    box-sizing: border-box;
    padding-left: 15px;
    text-align: left;
    display: flex;
    align-items: center;
    border-top: 1px solid #ebeef5;
    border-left: 1px solid #ebeef5;
    border-radius: 4px;
    background: #f5f7fa;

    .el-checkbox {
      width: 100%;
    }

    .el-checkbox__label {
      /* 覆盖原有的 checkbox label 样式*/
      font-size: 12px;
    }
  }
  .el-transfer-panel {
    width: 400px;

    &:first-child {
      margin-right: 50px;
      .icon-remove {
        display: none;
      }
    }

    &:last-child {
      .icon-add {
        display: none;
      }
    }

    .el-transfer-panel__header {
      .el-checkbox__label {
        font-size: 12px;
        span {
          display: none;
        }
      }
    }

    .el-transfer-panel__body {
      /* 复写原有 pannel body 样式*/
      height: 406px;
      &.is-with-footer {
        padding-bottom: 0;
      }

      .el-transfer-panel__filter {
        margin-bottom: 35px;

        .el-input__inner[disabled] {
          background: #f7f6f6;
        }
      }

      .el-transfer-panel__list {
        position: relative;
        z-index: 10;
        &.is-filterable {
          padding-bottom: 0;
          height: 326px;
        }
      }

      .el-transfer-panel__item {
        width: 100%;
        padding-left: 0;
        margin-right: 0;
        .el-checkbox__input {
          display: none;
        }
        .el-checkbox__label {
          padding: 0 14px 0 16px;
        }
        .transfer-item-left {
          float: left;
          font-size: 12px;
        }
        .transfer-item-right {
          float: right;
          color: #b5b5b5;
          font-size: 12px;
        }
      }
    }

    .el-transfer-panel__footer {
      height: 30px;
      line-height: 2;
      top: 92px;
      border-bottom: 1px solid rgb(232, 232, 232);
      border-top: none;

      .transfer-footer {
        font-size: 12px;
        padding: 0 16px;
      }

      .left-footer {
        display: flex;
        justify-content: space-between;
      }

      .show-category-group {
        color: rgb(14, 158, 208);
        cursor: pointer;
        &:hover {
          color: #01acf3;
        }
      }

      .category {
        color: #0e9ed0;
        cursor: pointer;
        &:hover {
          color: #077ca5;
        }
      }
    }
  }
  .gt-transfer-wrapper {
    position: absolute;
    left: 1px;
    top: 124px;
    z-index: 10;
    width: 398px;
    height: 338px;
    box-sizing: border-box;
    font-size: 12px;
    color: rgb(109, 109, 109);
    padding: 0 16px 10px;
    border-radius: 4px;
    overflow: auto;
    background: #fff;

    .category-group {
      display: flex;
      padding-top: 10px;
      .left {
        min-width: 85px;
        .category-level1 {
          display: inline-block;
          min-width: 58px;
          max-width: 66px;
        }
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        .category-level2 {
          width: 66px;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 10px;
          cursor: pointer;
          &:hover {
            color: #0e9ed0;
          }
        }
      }
    }
  }

  .icon {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 4px;
    cursor: pointer;
  }
  .icon-arrow-down::before {
    position: absolute;
    top: 2px;
    left: 0;
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
    left: 0;
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border: solid #a29d9d;
    border-width: 0 0 2px 2px;
    transform: rotate(-135deg);
  }

  .el-transfer__buttons {
    display: none;
  }
}
</style>