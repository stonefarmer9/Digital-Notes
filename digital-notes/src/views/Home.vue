<template>
  <div class="home">
    <H1>LETS NOTE</H1>
    <NoteTable
      :notes="notesData"
    />
  </div>
</template>

<script>
import NoteTable from '@/components/NotesTable.vue'
import { MOCK_TABLE_DATA } from '../../tests/unit/testHelpers/testHelperConstants.js'

export default {
  name: 'Home',
  components: {
    NoteTable
  },
  data () {
    return {
      notesEmpty: [],
      notesData: MOCK_TABLE_DATA
    }
  }
}
</script>
