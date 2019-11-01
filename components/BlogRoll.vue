<template>
  <section class="section">
    <h1 class="title">{{ posts[0].title }}</h1>
    <h1 class="subtitle">{{ posts[0].subtitle }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
