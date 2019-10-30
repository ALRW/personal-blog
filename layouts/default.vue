<template>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      <navbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
