<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <div v-html="post.html"></div>
        </div>
        <hr />
        <div class="comments">
          <disqus shortname="andrew-werner"></disqus>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Disqus from 'vue-disqus/src/vue-disqus.vue'
export default {
  components: {
    Disqus
  },
  async asyncData({ params }) {
    const post = await import(`@/articles/${params.post}.md`)
    return {
      post
    }
  }
}
</script>
