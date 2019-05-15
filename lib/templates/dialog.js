const getDialogTemplateStr = (prefixCompOrg) => {
  const isYiwisePrefix = prefixCompOrg === 'yiwise'
  const importYiwiseDialogStr = isYiwisePrefix ? "\nimport { YiwiseDialog } from 'yiwise-components'\n" : ''
  const componentsStr = isYiwisePrefix ? `
  components: {
    YiwiseDialog
  },` : ''

  return (
`<template>
  <${prefixCompOrg}-dialog
    :title='dialogTitle'
    :visible.sync='innerVisible'
    @confirm='onConfirm'
    @close='onClose'
    @open='onOpen'
  >
  <!--  TODO: write your code -->
  </${prefixCompOrg}-dialog>
</template>

<script>${importYiwiseDialogStr}
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },${componentsStr}
  computed: {
    innerVisible: {
      get() {
        return this.visible
      },
      set(newVal) {
        this.$emit('update:visible', newVal)
      }
    },
    dialogTitle() {
      // TODO: write your code
      return '弹框标题'
    }
  },
  methods: {
    onConfirm() {
      // TODO: write your code
    },
    onClose() {
      // TODO: write your code
    },
    onOpen() {
      // TODO: write your code
    }
  }
}
</script>`
  )
}

module.exports = getDialogTemplateStr