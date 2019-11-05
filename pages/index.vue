<template>
  <div class="container">
    <BlogRoll :posts="posts" />
  </div>
</template>

<script>
import Posts from '~/articles/articles'
import BlogRoll from '~/components/BlogRoll'
export default {
  components: {
    BlogRoll
  },
  asyncData() {
    async function asyncImport(fileName) {
      const doc = await import(`~/articles/${fileName}.md`)
      return { ...doc.attributes, path: fileName }
    }
    return Promise.all(Posts.map((post) => asyncImport(post))).then((res) => ({
      posts: res
    }))
  }
}
</script>
