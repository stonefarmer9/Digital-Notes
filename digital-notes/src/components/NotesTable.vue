<template>
<div>
    <table>
        <tr>
            <th>Notes Group</th>
            <th>Title</th>
            <th>Date Created</th>
        </tr>
        <tbody v-if="notes.length > 0">
            <tr v-for="note in notes" :key="note.id" class="table-row" @click="$emit('selectNote', note)">
                <td>{{ note.noteGroup }}</td>
                <td>{{ note.title }}</td>
                <td>{{ note.dateCreated }}</td>
            </tr>
        </tbody>
        <span v-if="notes.length === 0">No data for table</span>

    </table>
</div>
</template>

<script>
export default {
  name: 'NotesTable',
  props: {
    notes: Array
  }
}
</script>

<style scoped>

</style>
