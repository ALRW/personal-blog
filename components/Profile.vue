<template>
  <div>
    <ProgressiveImage :aspect-ratio="'is-square'" :is-rounded="true" />
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

<style>
.personal-profile {
  max-width: 300px;
  max-height: 300px;
}
.is-rounded {
  border-radius: 100%;
}
.has-text-centered {
  margin-top: 5%;
}
</style>
