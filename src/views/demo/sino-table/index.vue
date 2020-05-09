<template>
  <div class="page">
    <h3>SinoTable 基本用法</h3>
    <sino-table :data="data" :loading="listLoading" :columns="columns" @query-change="getList"></sino-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/user-manage' // Mock
import SinoTable from '@/components/SinoTable'

export default {
  components: { SinoTable },
  data() {
    return {
      columns: [
        {
          label: '序号',
          field: 'id',
          width: 90
        },
        {
          label: '账号',
          field: 'account',
          width: 160
        },
        {
          label: '公司名称',
          field: 'companyName'
        },
        {
          label: 'accessKey',
          field: 'accessKey',
          width: 180
        }
      ],
      data: null,
      listLoading: false,
      listQuery: {}
    }
  },
  created() {},
  methods: {
    getList(evt) {
      if (evt) {
        Object.assign(this.listQuery, evt)
      }
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.data = response
        setTimeout(() => {
          this.listLoading = false
        }, 800)
      })
    }
  }
}
</script>
<style scoped>
.page {
  padding: 20px;
}
</style>
