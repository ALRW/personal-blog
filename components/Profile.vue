<template>
  <div>
    <figure class="image personal-profile">
      <img class="is-rounded" :srcset="profileImage" alt="profile picture" />
    </figure>
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
      default() {
        return ''
      }
    },
    image: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    profileImage() {
      return require(`@/assets/images${this.image}`).srcSet
    }
  }
}
</script>

<style>
.personal-profile {
  max-width: 300px;
  max-height: 300px;
}
.has-text-centered {
  margin-top: 5%;
}
</style>
