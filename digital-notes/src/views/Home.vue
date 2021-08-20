<template>
  <div class="home">
    <div class="card">
      <NotesGroups
        :noteGroups="noteGroups"
        @updateSelectedNoteGroups="updateSelectedNoteGroups"
      />
    </div>
    <div class="card">
      <NoteTable
        :notes="notesData"
        @selectNote="selectNote"
      />
    </div>
    <div class="card">
      <NoteDisplay
        :selectedNote="selectedNote"
        />
    </div>
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
      this.selectedNote = note
    }
  }
}
</script>

<style lang="scss">

.home {
  @include flex-main;
}

.card {
  @include card(40%);
}

.card:nth-child(1) {
  @include card(15%);
}
</style>
