<template>
  <section class="section">
    <div class="columns is-multiline">
      <BlogCard
        v-for="(post, index) in posts"
        :key="index"
        :post="post"
        :index="index"
      />
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/BlogCard'
export default {
  components: {
    BlogCard
  },
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
