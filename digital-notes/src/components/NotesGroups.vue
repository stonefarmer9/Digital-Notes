<template>
    <ul>
        <li v-for="noteGroup in noteGroups" :key="noteGroup.id">
            <input type="checkbox" :id="noteGroup.id" :value="noteGroup.name" v-model="selectedNoteGroups" v-on:change="updateSelectedGroups"/>
            {{ noteGroup.name }}
        </li>

    </ul>

</template>

<script>
export default {
  name: 'NotesGroups',

  data () {
    return {
      selectedNoteGroups: []
    }
  },
  props: {
    noteGroups: Array
  },
  methods: {
    'updateSelectedGroups' () {
      this.$emit('updateSelectedNoteGroups', this.selectedNoteGroups)
    }
  }
}
</script>

<style scoped>

</style>
