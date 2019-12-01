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
  it('successfully submits an email', () => {
    const wrapper = subjectUnderTest(Subscribe)
    jsonp.mockImplementation((url, params, callback) =>
      wrapper.vm.handleResponse(null, { response: 200 })
    )
    wrapper.vm.handleInput('example@example.com')
    wrapper.vm.handleSubmit()
    const node = wrapper.find('[icon="far,check-circle"]')
    expect(node.is('font-awesome-icon-stub')).toBe(true)
  })
  it('does nothing if anything is entered into the honeypot', () => {
    const wrapper = subjectUnderTest(Subscribe)
    wrapper.vm.handleHoney('mailicious entry')
    wrapper.vm.handleSubmit()
    expect(wrapper.vm.loading).toBe(false)
  })
})
