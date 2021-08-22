<template>
<div class="form-container">
    <span>
        <label>Title</label>
        <TextBox
          :width="formWidth"
        />
    </span>
    <span>
        <label>Note</label>
        <TextArea
        :width="formWidth"
        />
    </span>
    <span>
        <label>Groups/Categories</label>
        <MultiSelect
        :width="formWidth"
        />
    </span>
    <span>
        <label>Tags</label>
        <TagInput
        :width="formWidth"
        />
    </span>
    </div>
</template>

<script>
import { TextBox, TextArea, MultiSelect, TagInput } from '../components/FormComponents'
export default {
  components: { TextBox, TextArea, MultiSelect, TagInput },
  name: 'NoteForm',

  data () {
    return {
      formWidth: 100
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
    width: 70%;
    padding: 2%;
}
label {
    width: 15%;
    text-align: right;
    margin-right: 5%;
}
</style>
