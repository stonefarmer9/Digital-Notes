<template>
<div>
<label>Title</label>
   <TextBox/>
   <label>Note</label>
   <TextArea/>
   <label>Groups/Categories</label>
   <MultiSelect/>
   <label>Tags</label>
   <TagInput/>
</div>
</template>

<script>
import { TextBox, TextArea, MultiSelect, TagInput } from '../components/FormComponents'
export default {
  components: { TextBox, TextArea, MultiSelect, TagInput },
  name: 'NoteForm'
}
</script>

<style scoped lang="scss">

</style>
