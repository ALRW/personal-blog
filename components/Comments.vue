<template>
  <div class="comments">
    <button
      class="button is-fullwidth comment-button has-text-weight-semibold"
      @click="show = !show"
    >
      {{ show ? 'Hide Comments' : 'Show Comments' }}
    </button>
    <disqus
      v-if="show"
      :shortname="shortname"
      :identifier="identifier"
      :url="url"
      :title="title"
    ></disqus>
  </div>
</template>

<script>
import Disqus from 'vue-disqus/src/vue-disqus.vue'
export default {
  components: {
    Disqus
  },
  props: {
    identifier: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
      shortname: 'andrew-werner',
      url: this.$route.query.page
    }
  }
}
</script>

<style>
.comments {
  border-bottom: 2px solid whitesmoke;
  padding: 2em 2em 2em 2em;
}
</style>
