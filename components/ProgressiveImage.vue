<template>
  <figure :class="`image ${aspectRatio}`">
    <div v-lazy-container="{ selector: 'img' }">
      <img
        :class="isRounded && 'is-rounded'"
        :data-src="require(`@/assets/images${imagePath}`)"
        :data-loading="require(`@/assets/images${imagePath}?lqip`)"
      />
    </div>
  </figure>
</template>

<script>
export default {
  props: {
    aspectRatio: {
      type: String,
      default: 'is-2by1'
    },
    imagePath: {
      type: String,
      default: '/personal-profile.jpg'
    },
    isRounded: {
      type: Boolean,
      default: false
    }
  }
}
</script>
