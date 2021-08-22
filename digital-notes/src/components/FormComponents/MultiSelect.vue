<template>
<div v-bind:style="style">
<VueMultiselect
    v-model="selected"
    :options="options"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    :preserve-search="true"
    placeholder="Select Groups..."
></VueMultiselect>
</div>
</template>

<script>

import VueMultiselect from 'vue-multiselect'
export default {

  name: 'MultiSelect',

  components: { VueMultiselect },

  props: {
    width: Number
  },

  data () {
    return {
      selected: [],
      options: ['Option 1', 'Option 2']
    }
  },
  computed: {
    style () {
      return {
        width: this.width + '%'
      }
    }
  },
  watch: {
    'selected' () {
      this.$emit('update', this.selected)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>
