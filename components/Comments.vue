<template>
  <div class="comments">
    <disqus
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
      shortname: `andrew-werner`,
      url: this.$route.query.page
    }
  }
}
</script>
