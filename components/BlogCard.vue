<template>
  <div :class="blogClass">
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
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    postImage() {
      return require(`@/assets/images${this.post.image}`).srcSet
    },
    blogClass() {
      const size = this.index === 0 || this.index % 4 === 0 ? '12' : '4'
      return `column is-${size} blog-card`
    }
  }
}
</script>

<style>
.blog-roll-image {
  max-width: 100%;
}
.blog-card {
  padding: 1em 0 1em 0;
}
.blog-card:hover {
  -webkit-transform: scale(1.01);
  -moz-transform: scale(1.01);
  -ms-transform: scale(1.01);
  transform: scale(1.01);
}
</style>
