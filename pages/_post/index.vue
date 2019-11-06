<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <div v-html="post.html"></div>
        </div>
        <Subscribe />
        <Comments :identifier="post.id" :title="post.title" />
      </div>
    </div>
  </section>
</template>

<script>
import Comments from '@/components/Comments'
import Subscribe from '@/components/Subscribe'
export default {
  components: {
    Comments,
    Subscribe
  },
  async asyncData({ params }) {
    const post = await import(`@/articles/${params.post}.md`)
    return {
      post
    }
  }
}
</script>
