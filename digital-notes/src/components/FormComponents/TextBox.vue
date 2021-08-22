<template>
    <input type="text" v-bind:style="style">
</template>

<script>

export default {
  name: 'TextBox',
  props: {
    width: Number
  },
  computed: {
    style () {
      return {
        width: this.width + '%'
      }
    }
  }

}
</script>

<style scoped lang='scss'>

</style>
