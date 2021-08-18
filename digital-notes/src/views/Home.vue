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

export default {
  name: 'Home',
  components: {
    NoteTable
  },
  data () {
    return {
      notesEmpty: [],
      notesData: [
        {
          id: 1,
          title: 'Note Title One',
          noteGroup: 'quests',
          dateCreated: '18/08/2021',
          note: 'This is a note about one thing or another'
        },
        {
          id: 2,
          title: 'Note Title Two',
          noteGroup: 'npcs',
          dateCreated: '18/08/2021',
          note: 'This is a note about two things or another'
        },
        {
          id: 3,
          title: 'Note Title Three',
          noteGroup: 'locations',
          dateCreated: '18/08/2021',
          note: 'This is a note about three things or another'
        }

      ]
    }
  }
}
</script>
