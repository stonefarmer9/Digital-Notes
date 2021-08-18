<template>
  <div class="home">
    <h1>LETS NOTE</h1>
    <NotesGroups
      :noteGroups="noteGroups"
      @updateSelectedNoteGroups="updateSelectedNoteGroups"
    />
    {{selectedNoteGroups}}
    <NoteTable
      :notes="notesData"
    />
  </div>
</template>

<script>
import NoteTable from '@/components/NotesTable.vue'
import NotesGroups from '@/components/NotesGroups.vue'
import { MOCK_NOTE_GROUPS, MOCK_TABLE_DATA } from '../../tests/unit/testHelpers/testHelperConstants.js'

export default {
  name: 'Home',
  components: {
    NoteTable,
    NotesGroups
  },
  data () {
    return {
      notesEmpty: [],
      notesData: MOCK_TABLE_DATA,
      noteGroups: MOCK_NOTE_GROUPS,
      selectedNoteGroups: []
    }
  },
  methods: {
    'updateSelectedNoteGroups' (selectedGroups) {
      this.selectedNoteGroups = selectedGroups
    }
  }
}
</script>
