<template>
  <div class="column is-12 blog-card">
    <nuxt-link :to="post.path">
      <figure class="image blog-roll-image">
        <img :alt="post.title" :srcset="postImage" />
      </figure>
      <h1 class="title">{{ post.title }}</h1>
      <h1 class="subtitle">{{ post.subtitle }}</h1>
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
    }
  },
  computed: {
    postImage() {
      return require(`@/assets/images${this.post.image}`).srcSet
    }
  }
}
</script>

<style>
.blog-roll-image {
  max-width: 100%;
}
</style>
