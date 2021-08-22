<template>
<div class="form-container">
    <span>
        <label>Title</label>
        <TextBox
          :width="formWidth"
          @update="updateTitle"
        />
    </span>
    <span>
        <label>Note</label>
        <TextArea
        :width="formWidth"
        @update="updateDetail"
        />
    </span>
    <span>
        <label>Groups/Categories</label>
        <MultiSelect
        :width="formWidth"
        @update="updateGroups"
        />
    </span>
    <span>
        <label>Tags</label>
        <TagInput
        :width="formWidth"
        @update="updateTags"
        />
    </span>
    <span class="button">
        <Button
         :label="'Add Note'"
        />
    </span>
    </div>
</template>

<script>
import { TextBox, TextArea, MultiSelect, TagInput, Button } from '../components'
export default {
  components: { TextBox, TextArea, MultiSelect, TagInput, Button },
  name: 'NoteForm',

  data () {
    return {
      formWidth: 100,
      note: {
        title: '',
        detail: '',
        groups: []
      }
    }
  },

  methods: {
    'updateTitle' (string) {
      this.note.title = string
    },
    'updateDetail' (string) {
      this.note.detail = string
    },
    'updateGroups' (array) {
      this.note.groups = array
    },
    'updateTags' (array) {
      this.note.tags = array
    }
  }
}
</script>

<style lang="scss" scoped>

.form-container {
    @include form-layout;
    @include card(70%);
}

span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 90%;
    padding: 2%;
}
label {
    width: 15%;
    text-align: right;
    margin-right: 5%;
}
.button {
    display: flex;
    justify-content: flex-end;

}

</style>
