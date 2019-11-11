import { RouterLinkStub } from '@vue/test-utils'
import { subjectUnderTest } from '@/test/utils'
import Markdown from '@/components/Markdown'
import Navbar from '@/components/Navbar'

const components = [
  {
    name: 'Markdown',
    component: Markdown,
    options: { propsData: { html: '<h1>Hello</h1>' } }
  },
  {
    name: 'Navbar',
    component: Navbar,
    options: { stubs: { NuxtLink: RouterLinkStub } }
  }
]

components.forEach(({ name, component, options }) => {
  describe(name, () => {
    it(`${name} is a vue component`, () => {
      expect(subjectUnderTest(component, options).isVueInstance()).toBeTruthy()
    })

    it(`${name} renders correctly`, () => {
      expect(subjectUnderTest(component, options).html()).toMatchSnapshot()
    })
  })
})
