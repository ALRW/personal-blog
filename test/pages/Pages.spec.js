import { mount } from '@vue/test-utils'
import Index from '@/pages/index'

const IndexPage = mount(Index, {
  propsData: {
    data: {
      posts: [
        {
          title: 'Title',
          subtitle: 'Subtitle',
          id: 'id',
          path: '/',
          image: 'something.jpg'
        }
      ]
    }
  }
})

describe('Index Page', () => {
  it('is a vue component', () => {
    expect(IndexPage.isVueInstance()).toBeTruthy()
  })
  it('renders correctly', () => {
    expect(IndexPage.html()).toMatchSnapshot()
  })
})
