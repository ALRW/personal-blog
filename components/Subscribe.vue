<template>
  <div class="subscribe">
    <form @submit.prevent="handleSubmit">
      <div class="honeypot" aria-hidden="true">
        <input
          @input="handleHoney($event.target.value)"
          type="text"
          name="honey"
        />
      </div>
      <div v-if="success" class="has-text-centered subscribe-notification">
        <font-awesome-icon :icon="['far', 'check-circle']" size="6x" />
      </div>
      <div v-if="error" class="has-text-centered subscribe-notification">
        <font-awesome-icon :icon="['far', 'times-circle']" size="6x" />
      </div>
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input
            @input="handleInput($event.target.value)"
            class="input"
            type="email"
            name="email"
            placeholder="my.name@something.com"
          />
        </div>
        <div class="control">
          <button class="button is-dark">Subscribe</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import jsonp from 'jsonp'
import queryString from 'query-string'
export default {
  data() {
    return {
      email: '',
      honeypot: false,
      success: false,
      error: false,
      loading: false,
      url: 'https://reasontree.us5.list-manage.com/subscribe/post-json',
      userId: '9b1673411a4fb84fdd7d90f79',
      listId: 'ee5a235ced'
    }
  },
  computed: {
    params() {
      return queryString.stringify({
        u: this.userId,
        id: this.listId,
        EMAIL: this.email
      })
    }
  },
  methods: {
    handleInput(value) {
      this.email = value.trim()
    },
    handleHoney(value) {
      this.honeypot = Boolean(value)
    },
    handleSubmit() {
      if (this.email.length === 0 || this.loading || this.honeypot) return
      this.success = false
      this.error = false
      this.loading = true
      const url = `${this.url}?${this.params}`
      jsonp(url, { param: 'c' }, this.handleResponse)
    },
    handleResponse(err, data) {
      this.loading = false
      if (err) {
        this.error = true
      } else {
        this.success = true
        this.email = ''
      }
    }
  }
}
</script>

<style>
.subscribe {
  border-top: 2px solid whitesmoke;
  border-bottom: 2px solid whitesmoke;
  padding: 2em 2em 2em 2em;
}
.subscribe-notification {
  margin-bottom: 2em;
}
.honeypot {
  position: absolute;
  left: -5000px;
}
</style>
