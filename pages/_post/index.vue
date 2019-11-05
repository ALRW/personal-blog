<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <div v-html="post.html"></div>
        </div>
        <Comments :identifier="post.id" :title="post.title" />
      </div>
    </div>
  </section>
</template>

<script>
import Comments from '~/components/Comments'
export default {
  components: {
    Comments
  },
  async asyncData({ params }) {
    const post = await import(`@/articles/${params.post}.md`)
    return {
      post
    }
  }
}
</script>
