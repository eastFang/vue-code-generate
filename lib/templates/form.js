const getFormTemplateStr = () => {
  return (
`
<template>
  <el-form
    ref="form"
    class="form"
    :model="formModel"
    :rules="formRules"
    :label-width="labelWidth"
  >
    <el-form-item
      prop="label1"
      label="表单项1"
    >
      <el-input
        v-model="formModel.label1"
        placeholder="请输入"
      >
      </el-input>
    </el-form-item>
    <el-button
      type="primary"
      @click="onSubmit"
    >
    </el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      labelWidth: "100px"
      formModel: {
        // TODO: write your code
        label1: undefined
      },
      formRules: {
        // TODO: write your code
        label1: [
          { required: true, message: '不可为空' }
        ]
      }
    }
  },
  components: {
    // TODO: write your code
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (!valid) return
        // TODO: write your code
      })
    }
  },
  computed: {
    // TODO: write your code
  }
}
</script>
`
  )
}

module.exports = getFormTemplateStr