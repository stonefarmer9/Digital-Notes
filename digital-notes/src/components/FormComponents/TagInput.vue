<template>
    <input
      type='text'
      v-bind:style="style"
      >
</template>

<script>

export default {

  name: 'TagInput',

  data () {
    return {
      tags: []
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
  },
  watch: {
    'tags' () {
      this.$emit('update', this.tags)
    }
  }
}
</script>
