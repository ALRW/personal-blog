<template>
  <div>
    <ProgressiveImage
      :aspect-ratio="'is-square'"
      :alt-text="title"
      :image-path="image"
      :is-rounded="true"
    />
    <div class="has-text-centered">
      <h1 class="is-size-4">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
import ProgressiveImage from '@/components/ProgressiveImage'
export default {
  components: {
    ProgressiveImage
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>
