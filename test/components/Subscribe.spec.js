import jsonp from 'jsonp'
import Vue from 'vue'
import { subjectUnderTest } from '@/test/utils'
import Subscribe from '@/components/Subscribe'

jest.mock('jsonp')

describe('Subscribe', () => {
  it('if success it shows a success icon', async () => {
    const wrapper = subjectUnderTest(Subscribe)
    wrapper.setData({ success: true })
    await Vue.nextTick()
    const node = wrapper.find('[icon="far,check-circle"]')
    expect(node.isVisible()).toBe(true)
  })
  it('if error is shows an error icon', async () => {
    const wrapper = subjectUnderTest(Subscribe)
    wrapper.setData({ error: true })
    await Vue.nextTick()
    const node = wrapper.find('[icon="far,times-circle"]')
    expect(node.isVisible()).toBe(true)
  })
  it('successfully submits an email', async () => {
    const wrapper = subjectUnderTest(Subscribe)
    jsonp.mockImplementation((url, params, callback) =>
      wrapper.vm.handleResponse(null, { response: 200 })
    )
    wrapper.vm.handleInput('example@example.com')
    wrapper.vm.handleSubmit()
    await Vue.nextTick()
    const node = wrapper.find('[icon="far,check-circle"]')
    expect(node.isVisible()).toBe(true)
  })
  it('does nothing if anything is entered into the honeypot', () => {
    const wrapper = subjectUnderTest(Subscribe)
    wrapper.vm.handleHoney('mailicious entry')
    wrapper.vm.handleSubmit()
    expect(wrapper.vm.loading).toBe(false)
  })
})
