<template>
  <section class="section">
    <figure class="image is-16by9">
      <iframe
        :src="video.video"
        class="has-ratio"
        width="560"
        height="315"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </figure>
    <h1 class="title">{{ video.title }}</h1>
    <Markdown :html="video.html" />
  </section>
</template>

<script>
import Markdown from '@/components/Markdown'

export default {
  components: {
    Markdown
  },
  props: {
    video: {
      type: Object,
      default() {
        return {
          title: '',
          video: '',
          html: ''
        }
      }
    }
  }
}
</script>
