import InfoCard from '@/components/InfoCard.vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

const setup = () => mount(InfoCard, {
  global: {
    stubs: {
      'font-awesome-icon': true,
      'a-card': true,
    }
  }
})

describe('InfoCard', () => {
  it('should render 4 cards', async () => {
    const wrapper = setup()
    const container = wrapper.findAll('.c-info-card--container')
    expect(container.length).toEqual(4)
  })
})