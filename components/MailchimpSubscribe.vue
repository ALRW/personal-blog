<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" @input="handleInput($event.target.value)" />
    <button></button>
    <div v-if="success">Success</div>
    <div v-if="failure">Failure</div>
  </form>
</template>

<script>
import jsonp from 'jsonp'
import queryString from 'query-string'
import config from '@/nuxt.config'
export default {
  data() {
    return {
      email: '',
      success: false,
      error: false,
      loading: false
    }
  },
  computed: {
    data() {
      return queryString.stringify({
        u: config.mailchimp.userId,
        id: config.mailchimp.listId,
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
      const url = `${config.mailchimp.url}?${this.data}`
      jsonp(url, { param: 'c' }, this.handleResponse)
    },
    handleResponse(error, data) {
      this.loading = false
      if (error || (data && data.result === 'error')) {
        this.error = true
      } else {
        this.success = true
        this.email = ''
      }
    }
  }
}
</script>
