<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8 is-offset-2">
        <div class="content">
          <div v-html="post.html"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`@/articles/${params.post}.md`)
    return {
      post
    }
  }
}
</script>
