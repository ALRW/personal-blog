<template>
  <div class="comments">
    <button
      class="button is-fullwidth comment-button has-text-weight-semibold"
      @click="show = !show"
    >
      {{ show ? `Hide Comments` : `Show Comments` }}
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
      default() {
        return ''
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      show: false,
      shortname: `andrew-werner`,
      url: this.$route.query.page
    }
  }
}
</script>

<style>
.comments {
  border-top: 2px solid whitesmoke;
  border-bottom: 2px solid whitesmoke;
  padding-top: 1em;
  padding-bottom: 1em;
}
.comment-button {
  margin: 1em 0 1em 0;
}
</style>
