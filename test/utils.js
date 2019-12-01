import { createLocalVue, shallowMount } from '@vue/test-utils'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-regular-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import VueLazyload from 'vue-lazyload'

config.autoAddCss = false

library.add(faCheckCircle, faTimesCircle, faGithubSquare, faLinkedin)

const localVue = createLocalVue()

localVue.component('font-awesome-icon', FontAwesomeIcon)

localVue.use(VueLazyload, { lazyComponent: true })

export const subjectUnderTest = (component, options = {}) => {
  const testOptions = { localVue, ...options }
  return shallowMount(component, testOptions)
}
