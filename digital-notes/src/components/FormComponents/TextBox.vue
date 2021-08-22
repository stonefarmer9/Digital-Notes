<template>
    <input
      type="text"
      v-bind:style="style"
      aria-label="note title"
      v-model="input"
      v-on:blur="$emit('update', input)"
      >
</template>

<script>

export default {
  name: 'TextBox',

  data () {
    return {
      input: ''
    }
  },
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
