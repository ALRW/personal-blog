<template>
  <div>
    <div v-for="(talk, index) in talks">
      <EmbeddedVideo :key="index" :video="talk" />
    </div>
  </div>
</template>

<script>
import EmbeddedVideo from '@/components/EmbeddedVideo'

export default {
  components: {
    EmbeddedVideo
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
