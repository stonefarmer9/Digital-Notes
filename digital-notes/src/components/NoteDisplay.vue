<template>
    <div>
    <dl v-for="(value, key) in noteObject" :key="key">
        <dt v-if="key != 'id'"> {{ key }}</dt>
        <dd v-if="key != 'id'">{{ value }}</dd>
    </dl>
    </div>
</template>

<script>

export default {
  name: 'NoteDisplay',

  props: {
    selectedNote: Object
  },
  computed: {
    noteObject () {
      const note = { ...this.selectedNote }
      delete note.id

      return note
    }
  }
}
</script>

<style scoped lang="scss">

div {
}

dl {
  @include definition-list
}

dt {
  font-weight: $bold-text-weight;
  text-align: right;
  width: 20%;
}

dd {
  width: 80%;
  text-align: left;
}

</style>
