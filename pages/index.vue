<template>
  <div class="container">
    <BlogRoll :posts="posts" />
  </div>
</template>

<script>
import BlogRoll from '@/components/BlogRoll'
export default {
  components: {
    BlogRoll
  },
  asyncData() {
    const fileNames = require
      .context('@/markdown/articles/', true, /\.md$/)
      .keys()
      .map((f) => f.slice(2, f.length - 3))
    async function asyncImport(fileName) {
      const doc = await import(`@/markdown/articles/${fileName}.md`)
      return { ...doc.attributes, path: fileName }
    }
    return Promise.all(fileNames.map((post) => asyncImport(post))).then(
      (res) => ({ posts: res.reverse() })
    )
  }
}
</script>
