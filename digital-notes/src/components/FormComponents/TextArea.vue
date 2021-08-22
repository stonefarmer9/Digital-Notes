<template>
<textarea
    id="note-body"
    name="note-body"
    v-bind:style="style"
    v-model="input"
    v-on:blur="$emit('update', input)"
    rows=10
></textarea>

</template>

<script>

export default {
  name: 'TextArea',

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

<style lang="scss" scoped>

textarea {
  font-family: $font-text;
}

</style>
