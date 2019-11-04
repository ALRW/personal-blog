<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-12 blog-card">
        <nuxt-link to="/">
          <figure class="image blog-roll-image">
            <img alt="" :srcset="postImage" />
          </figure>
          <h1 class="title">{{ posts[0].title }}</h1>
          <h1 class="subtitle">{{ posts[0].subtitle }}</h1>
        </nuxt-link>
      </div>
    </div>
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
  },
  computed: {
    postImage() {
      return require(`../assets/images${this.posts[0].image}`).srcSet
    }
  }
}
</script>

<style>
.blog-roll-image {
  max-width: 100%;
}
</style>
