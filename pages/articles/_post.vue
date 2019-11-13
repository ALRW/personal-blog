<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <h1 class="title is-size-1">{{ attributes.title }}</h1>
        </div>
        <div v-lazy-container="{ selector: 'img' }">
          <img
            :data-src="require(`@/assets/images${attributes.image}`)"
            :data-loading="require(`@/assets/images${attributes.image}?lqip`)"
          />
        </div>
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
import Subscribe from '@/components/Subscribe'
import Markdown from '@/components/Markdown'
export default {
  components: {
    Comments,
    Subscribe,
    Markdown
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
