const getTableTemplateStr = (prefixCompOrg) => {
  const isYiwisePrefix = prefixCompOrg === 'yiwise'
  
  if (isYiwisePrefix) {
    return (
`<template>
  <pagination-table
    ref="table"
    method="get"
    :url="tableUrl"
    :autoLoad="false"
  >
    <!--  TODO: write your code, add table columns -->
    <yiwise-table-column prop="" label=""></yiwise-table-column>

    <yiwise-table-column prop="" label="">
      <template slot-scope="{ row }"></template>
    </yiwise-table-column>
  </pagination-table>
</template>
<script>
import { PaginationTable, YiwiseTableColumn } from 'yiwise-components'

export default {
  components: {
    PaginationTable,
    YiwiseTableColumn
  },
  computed: {
    tableUrl() {
      // TODO: 表格调用的后端api
      return '/api/XXX'
    }
  },
  methods: {
    loadData(params = {}) {
      this.$refs.table.loadData(params)
    }
  },
  mounted() {
    this.loadData()
  }
}
</script>
`
    )
  }

  return (
`<template>
  <el-table
    :data="tableData"
    :border="true"
  >
  <!--  TODO: write your code, add table columns -->
    <el-table-column prop="" label=""></el-table-column>
    <el-table-column prop="" label="">
      <template slot-scope="{ row }"></template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: []
      }
    }
  }
</script>`
  )
}

module.exports = getTableTemplateStr