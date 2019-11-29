<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <h1 class="title is-size-1">{{ attributes.title }}</h1>
        </div>
        <ProgressiveImage :image-path="attributes.image" />
        <div class="content">
          <h3 class="subtitle">{{ attributes.subtitle }}</h3>
        </div>
        <Markdown :html="html" />
        <Subscribe />
        <Comments :identifier="attributes.id" :title="attributes.title" />
      </div>
    </div>
  </section>
</template>

<script>
import Comments from '@/components/Comments'
import Markdown from '@/components/Markdown'
import ProgressiveImage from '@/components/ProgressiveImage'
import Subscribe from '@/components/Subscribe'
export default {
  components: {
    Comments,
    Markdown,
    ProgressiveImage,
    Subscribe
  },
  head() {
    return {
      title: this.attributes.title,
      meta: [
        { name: 'author', content: this.attributes.author },
        {
          name: 'description',
          property: 'og:description',
          content: this.attributes.description,
          hid: 'description'
        },
        { property: 'og:title', content: this.attributes.pageTitle }
      ]
    }
  },
  async asyncData({ params }) {
    const post = await import(`@/markdown/articles/${params.post}.md`)
    return { ...post }
  }
}
</script>
