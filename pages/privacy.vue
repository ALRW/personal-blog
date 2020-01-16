<template>
  <div>
    <section class="section">
      <div class="content has-text-centered">
        <h1 class="title">{{ privacyNotice.attributes.title }}</h1>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-8 is-offset-2 about">
          <markdown :html="privacyNotice.html" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
export default {
  components: {
    Markdown
  },
  async asyncData({ params }) {
    const privacyNotice = await import('@/markdown/pages/privacy.md')
    return {
      privacyNotice
    }
  }
}
</script>
