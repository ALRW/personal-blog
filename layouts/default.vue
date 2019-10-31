<template>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      <Navbar />
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
