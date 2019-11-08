<template>
  <div>
    <section class="section is-flex profile">
      <profile :title="post.attributes.title" :image="post.attributes.image" />
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-8 is-offset-2 about">
          <markdown :html="post.html" />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <subscribe />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import Subscribe from '@/components/Subscribe'
import Markdown from '@/components/Markdown'
export default {
  components: {
    Profile,
    Markdown,
    Subscribe
  },
  async asyncData({ params }) {
    const post = await import(`@/markdown/pages/about.md`)
    return {
      post
    }
  }
}
</script>

<style>
.profile {
  justify-content: center;
}
.about {
  border-top: 2px solid whitesmoke;
  padding-top: 5em;
}
</style>
