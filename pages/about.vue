<template>
  <div>
    <section class="section is-flex">
      <profile />
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-8 is-offset-2 about">
          <about />
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <subscribe />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import About from '@/components/About'
import Subscribe from '@/components/Subscribe'
export default {
  components: {
    Profile,
    About,
    Subscribe
  }
}
</script>

<style>
.about {
  border-top: 2px solid whitesmoke;
  padding-top: 5em;
}
</style>
