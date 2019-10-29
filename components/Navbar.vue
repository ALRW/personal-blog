<template>
  <div class="columns">
    <div class="column is-10 is-offset-1">
      <nav class="navbar has-shadow">
        <div class="navbar-brand">
          <a class="navbar-item is-title" href="/">{{ title }}</a>
          <a
            :class="{ 'is-active': isHamburgerActive }"
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="isHamburgerActive = !isHamburgerActive"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div :class="{ 'is-active': isHamburgerActive }" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="/">{{ articles }}</a>
            <a class="navbar-item" href="/about">{{ about }}</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Andrew | Werner`,
      articles: `Articles`,
      about: `About Me`,
      isHamburgerActive: false
    }
  }
}
</script>
