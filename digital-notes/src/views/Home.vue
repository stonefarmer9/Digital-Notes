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
    <NoteDisplay
      :selectedNote="selectedNote"
      @selectNote="selectNote"
      />
  </div>
</template>

<script>
import NoteTable from '@/components/NotesTable.vue'
import NotesGroups from '@/components/NotesGroups.vue'
import NoteDisplay from '@/components/NoteDisplay.vue'
import { MOCK_NOTE_GROUPS, MOCK_TABLE_DATA, MOCK_NOTE } from '../../tests/unit/testHelpers/testHelperConstants.js'

export default {
  name: 'Home',
  components: {
    NoteTable,
    NotesGroups,
    NoteDisplay
  },
  data () {
    return {
      notesEmpty: [],
      notesData: MOCK_TABLE_DATA,
      noteGroups: MOCK_NOTE_GROUPS,
      selectedNoteGroups: [],
      selectedNote: MOCK_NOTE
    }
  },
  methods: {
    'updateSelectedNoteGroups' (selectedGroups) {
      this.selectedNoteGroups = selectedGroups
    },
    'selectNote' (note) {
      console.log('selecting')
      this.selectedNote = note
    }
  }
}
</script>
