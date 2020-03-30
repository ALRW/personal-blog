<template>
  <div>
    <div v-for="(talk, index) in talks">
      <section :key="index" class="section">
        <figure class="image is-16by9">
          <iframe
            :src="talk.video"
            class="has-ratio"
            width="560"
            height="315"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </figure>
        <h1 class="title">{{ talk.title }}</h1>
        <Markdown :html="talk.html" />
      </section>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
export default {
  components: {
    Markdown
  },
  data() {
    return { talks: [] }
  },
  asyncData() {
    const fileNames = require
      .context('@/markdown/talks/', true, /\.md$/)
      .keys()
      .map((f) => f.slice(2, f.length - 3))
    async function asyncImport(fileName) {
      const talk = await import(`@/markdown/talks/${fileName}.md`)
      return {
        title: talk.attributes.title,
        video: talk.attributes.video,
        html: talk.html
      }
    }
    return Promise.all(
      fileNames.map((talk) => asyncImport(talk))
    ).then((res) => ({ talks: res.reverse() }))
  }
}
</script>
