<template>
  <div class="subscribe">
    <form @submit.prevent="handleSubmit">
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input
            class="input"
            type="email"
            name="email"
            placeholder="my.name@something.com"
            @input="handleInput($event.target.value)"
          />
        </div>
        <div class="control">
          <button class="button is-dark">Subscribe</button>
        </div>
      </div>
      <div v-if="success">Success</div>
      <div v-if="error">Failure</div>
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
      success: false,
      error: false,
      loading: false,
      url: 'https://reasontree.us5.list-manage.com/subscribe/post-json',
      userId: '9b1673411a4fb84fdd7d90f79',
      listId: 'ee5a235ced'
    }
  },
  computed: {
    data() {
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
    handleSubmit() {
      if (this.email.length === 0 || this.loading) return
      this.success = false
      this.error = false
      this.loading = true
      const url = `${this.url}?${this.data}`
      jsonp(url, { param: 'c' }, this.handleResponse)
    },
    handleResponse(err, data) {
      console.log(err)
      console.log(data)
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
</style>
