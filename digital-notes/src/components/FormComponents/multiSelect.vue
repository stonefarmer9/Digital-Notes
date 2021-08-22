<template>
<div v-bind:style="style">
<VueMultiselect
    v-model="selected"
    :options="options"
></VueMultiselect>
</div>
</template>

<script>

import VueMultiselect from 'vue-multiselect'
export default {
  name: 'MultiSelect',

  components: { VueMultiselect },

  props: {
    width: String
  },

  data () {
    return {
      selected: null,
      options: ['Option 1', 'Option 2']
    }
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

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>
