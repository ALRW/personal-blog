<template>
  <div class="content">
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  }
}
</script>
