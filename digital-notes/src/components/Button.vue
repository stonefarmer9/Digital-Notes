<template>
    <button>{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    label: String
  }
}
</script>

<style scoped lang="scss">

button {
    @include button-submit;
}
</style>
