<template>
  <div :class="blogClass">
    <nuxt-link :to="`articles/${post.path}`">
      <ProgressiveImage :alt-text="post.title" :image-path="post.image" />
      <h1 class="title">{{ post.title }}</h1>
      <h1 class="subtitle">{{ post.subtitle }}</h1>
    </nuxt-link>
  </div>
</template>

<script>
import ProgressiveImage from '@/components/ProgressiveImage'
export default {
  components: {
    ProgressiveImage
  },
  props: {
    post: {
      type: Object,
      default() {
        return {
          title: '',
          subtitle: '',
          id: '',
          path: '',
          image: ''
        }
      }
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    blogClass() {
      const size = this.index === 0 || this.index % 3 === 0 ? '12' : '6'
      return `column is-${size} blog-card link-pop`
    }
  }
}
</script>

<style>
.blog-card {
  padding: 1em;
}
</style>
