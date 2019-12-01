<template>
  <div class="is-flex social-icons">
    <a class="link-pop" href="https://github.com/ALRW" target="_blank">
      <font-awesome-icon
        class="has-text-dark"
        :icon="['fab', 'github-square']"
        size="5x"
      />
    </a>
    <a
      class="link-pop"
      href="https://www.linkedin.com/in/wernerandrew"
      target="_blank"
    >
      <font-awesome-icon
        class="has-text-dark"
        :icon="['fab', 'linkedin']"
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
