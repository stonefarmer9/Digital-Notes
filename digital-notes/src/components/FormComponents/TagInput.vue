<template>
    <input type='text' v-bind:style="style">
</template>

<script>

export default {
  name: 'TagInput',
  props: {
    width: String
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
