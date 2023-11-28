import { render } from '@testing-library/vue'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('fails due to testing-library', () => {
    const msg = 'Hello Vitest'
    const wrapper = render(HelloWorld, { props: { msg } })
    wrapper.getByText(msg)
  })
  it('works fine', () => {
    const msg = 'Hello Vitest'
    const wrapper = mount(HelloWorld, { props: { msg } })
    expect(wrapper.text()).toMatch(msg)
  })
})
