<template>
  <div class="is-flex social-icons">
    <a class="link-pop" href="https://github.com/ALRW" target="_blank">
      <font-awesome-icon
        :icon="['fab', 'github-square']"
        class="has-text-dark"
        size="5x"
      />
    </a>
    <a
      class="link-pop"
      href="https://www.linkedin.com/in/wernerandrew"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', 'linkedin']"
        class="has-text-dark"
        size="5x"
      />
    </a>
  </div>
</template>

<style>
.social-icons {
  justify-content: space-evenly;
}
</style>
