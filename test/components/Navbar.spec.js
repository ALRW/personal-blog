import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

const stubs = {
  stubs: {
    NuxtLink: RouterLinkStub
  }
}

const subjectUnderTest = (component, options = { ...stubs }) =>
  shallowMount(component, options)

describe('Navbar', () => {
  it('is a vue component', () => {
    expect(subjectUnderTest(Navbar).isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(subjectUnderTest(Navbar).html()).toMatchSnapshot()
  })
})
