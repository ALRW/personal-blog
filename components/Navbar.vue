<template>
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item is-size-4" to="/">{{ title }}</nuxt-link>
      <a
        @click="isHamburgerActive = !isHamburgerActive"
        :class="{ 'is-active': isHamburgerActive }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      @click="isHamburgerActive = false"
      :class="{ 'is-active': isHamburgerActive }"
      class="navbar-menu"
    >
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">{{ articles }}</nuxt-link>
        <nuxt-link class="navbar-item" to="/about">{{ about }}</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'Andrew | Werner',
      articles: 'Articles',
      about: 'About Me',
      isHamburgerActive: false
    }
  }
}
</script>
