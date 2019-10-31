<template>
  <div v-html="$md.render(content)"></div>
</template>

<script>
import fm from 'front-matter'

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`)
    const page = fm(fileContent.default)
    return {
      frontmatter: page.attributes,
      content: page.body
    }
  }
}
</script>
