<template>
  <div>
    <profile />
    <hr />
    <about />
  </div>
</template>

<script>
import Profile from '../components/Profile'
import About from '../components/About'
export default {
  components: {
    Profile,
    About
  }
}
</script>
