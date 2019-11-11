import { shallowMount } from '@vue/test-utils'

export const subjectUnderTest = (component, options = {}) =>
  shallowMount(component, options)
