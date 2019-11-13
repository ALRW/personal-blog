<template>
  <div>
    <div v-lazy-container="{ selector: 'img' }" class="personal-profile">
      <img
        class="is-rounded"
        :data-src="require(`@/assets/images${image}`)"
        :data-loading="require(`@/assets/images${image}?lqip`)"
      />
    </div>
    <div class="has-text-centered">
      <h1 class="is-size-4">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
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
