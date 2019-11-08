<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <h1 class="title is-size-1">{{ post.attributes.title }}</h1>
          <h3 class="subtitle">{{ post.attributes.subtitle }}</h3>
        </div>
        <Markdown :html="post.html" />
        <Subscribe />
        <Comments :identifier="post.id" :title="post.title" />
      </div>
    </div>
  </section>
</template>

<script>
import Comments from '@/components/Comments'
import Subscribe from '@/components/Subscribe'
import Markdown from '@/components/Markdown'
export default {
  components: {
    Comments,
    Subscribe,
    Markdown
  },
  async asyncData({ params }) {
    const post = await import(`@/markdown/articles/${params.post}.md`)
    return {
      post
    }
  }
}
</script>
