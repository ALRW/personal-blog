<template>
  <div>
    <figure class="image personal-profile">
      <img
        class="is-rounded"
        src="~assets/images/personal-profile.jpg"
        alt="personal profile"
      />
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
    }
  }
}
</script>

<style>
.personal-profile {
  max-width: 300px;
  max-height: 300px;
}
.is-flex {
  justify-content: center;
}
.has-text-centered {
  margin-top: 5%;
}
</style>
