<template>
   <TextBox/>
   <TextArea/>
   <MultiSelect/>
   <TagInput/>
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
