<template>
  <div class="sino-table">
    <el-table
      :key="tableKey"
      v-loading="loading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <!-- columns -->
      <el-table-column
        v-for="col in columns"
        :key="col.field"
        :label="col.label"
        :width="col.width"
        :align="col.align || 'center'"
      >
        <template slot-scope="{row}">
          <span>{{ row[col.field] }}</span>
        </template>
      </el-table-column>
      <!-- other template -->
      <slot></slot>
      <slot name="operate"></slot>
    </el-table>

    <pagination
      v-show="pageInfo.totalSize>0"
      :total="pageInfo.totalSize"
      :page.sync="innerCurrentPage"
      :limit.sync="innerPageSize"
      @pagination="queryChange"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'

const tableKey = Math.random()
  .toString(16)
  .substr(2)

const defaultPageInfo = {
  first: true,
  last: false,
  number: 0,
  size: 10,
  totalPages: 1,
  totalSize: 0
}

export default {
  name: 'SinoTable',
  components: { Pagination },
  props: {
    loadingStr: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Object,
      default: () => {
        return {
          pageInfo: defaultPageInfo,
          data: []
        }
      }
    }
  },
  data() {
    return {
      tableKey,
      innerCurrentPage: 1,
      innerPageSize: 10
    }
  },
  computed: {
    tableData() {
      // console.log(this.data.data)
      if (this.data) {
        return this.data.data
      }
      return this.data
    },
    pageInfo() {
      if (this.data && this.data.pageInfo) {
        return this.data.pageInfo
      }
      return defaultPageInfo
    },
    queryInfo() {
      return {
        page: this.innerCurrentPage,
        size: this.innerPageSize
      }
    }
  },
  watch: {
    data: {
      handler(value) {
        // console.log(value)
        // this.tableLoading = false
      }
    }
  },
  created() {
    console.log(this.columns)
    this.queryChange({ type: 'init' })
    // fix https://github.com/njleonzhang/vue-data-tables/issues/172
    /*   const currentPage = this.pageInfo.number / this.pageInfo.size
    this.innerCurrentPage = Math.ceil(currentPage)
    this.innerTotal =
      totalPage >= this.currentPage
        ? this.pageInfo.totalSize
        : this.pageSize * this.currentPage */
  },
  methods: {
    queryChange(evt) {
      const info = {
        ...this.queryInfo,
        ...evt
      }
      // console.log(evt)
      this.$emit('query-change', info)
    }
  }
}
</script>

<style>
.sino-table {
  position: relative;
}
</style>
