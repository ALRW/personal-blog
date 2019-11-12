import { RouterLinkStub } from '@vue/test-utils'
import { subjectUnderTest } from '@/test/utils'
import BlogCard from '@/components/BlogCard'
import BlogRoll from '@/components/BlogRoll'
import Comments from '@/components/Comments'
import Footer from '@/components/Footer'
import Markdown from '@/components/Markdown'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import Subscribe from '@/components/Subscribe'

const mockPost = {
  title: 'title',
  subtitle: 'subtitle',
  id: 'id',
  path: '/path',
  image: '/path/to/image.jpg'
}

const components = [
  {
    name: 'BlogCard',
    component: BlogCard,
    options: {
      propsData: { post: mockPost, index: 0 },
      stubs: { NuxtLink: RouterLinkStub }
    }
  },
  {
    name: 'BlogRoll',
    component: BlogRoll,
    options: {
      propsData: { posts: [mockPost] }
    }
  },
  {
    name: 'Comments',
    component: Comments,
    options: {
      propsData: { identifier: 'identifier', title: 'title' },
      mocks: { $route: { query: { page: 'about' } } }
    }
  },
  {
    name: 'Footer',
    component: Footer,
    options: {}
  },
  {
    name: 'Markdown',
    component: Markdown,
    options: { propsData: { html: '<h1>Hello</h1>' } }
  },
  {
    name: 'Navbar',
    component: Navbar,
    options: { stubs: { NuxtLink: RouterLinkStub } }
  },
  {
    name: 'Profile',
    component: Profile,
    options: { propsData: { title: 'title', image: '/something.jpg' } }
  },
  {
    name: 'Subscribe',
    component: Subscribe,
    options: {}
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
