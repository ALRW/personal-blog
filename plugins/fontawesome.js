import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-regular-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faCheckCircle, faTimesCircle, faGithubSquare, faLinkedin)

Vue.component('font-awesome-icon', FontAwesomeIcon)
