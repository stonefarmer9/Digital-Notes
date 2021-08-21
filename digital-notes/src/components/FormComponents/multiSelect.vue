<template>
<VueMultiselect
    v-model="selected"
    :options="options"
></VueMultiselect>
</template>

<script>

import VueMultiselect from 'vue-multiselect'
export default {
  name: 'MultiSelect',

  components: { VueMultiselect },

  data () {
    return {
      selected: null,
      options: ['Option 1', 'Option 2']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css">
</style>
