import jsonp from 'jsonp'
import { subjectUnderTest } from '@/test/utils'
import Subscribe from '@/components/Subscribe'

jest.mock('jsonp')

describe('Subscribe', () => {
  it('if success it shows a success icon', () => {
    const wrapper = subjectUnderTest(Subscribe)
    wrapper.vm.success = true
    const node = wrapper.find('[icon="far,check-circle"]')
    expect(node.is('font-awesome-icon-stub')).toBe(true)
  })
  it('if error is shows an error icon', () => {
    const wrapper = subjectUnderTest(Subscribe)
    wrapper.vm.error = true
    const node = wrapper.find('[icon="far,times-circle"]')
    expect(node.is('font-awesome-icon-stub')).toBe(true)
  })
})
