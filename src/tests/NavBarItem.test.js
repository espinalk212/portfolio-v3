import NavBarItem from '@/components/NavBarItem.vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "@/router/index.js"

const setup = (router) => mount(NavBarItem, {
  global: {
    stubs: {
      'font-awesome-icon': true,
      'a-switch': true,
    },
    plugins: [router]
  },
  props: {
    screenWidth: 640,
    systemSetTheme: false,
  }
})

describe('NavBar', () => {
  let router;
  beforeEach(async () => {
    router = createRouter({
      history: createWebHistory(),
      routes: routes,
    })
    router.push('/')
    await router.isReady()
  })
  it('should render 5 nav items', async () => {
    const wrapper = setup(router)
    expect(wrapper.vm.navBarSections.length).toEqual(5)
  })

  it('sets the theme correctly on load', async () => {
    const wrapper = setup(router)
    expect(wrapper.vm.darkMode).toBe(false)
  })
  it.skip('sets the theme correctly when toggled by user', async () => {
    const wrapper = setup(router)
    const antSwitch = wrapper.find('[data-test="ant-switch"')
    await antSwitch.trigger('click')

    expect(wrapper.emitted('click')[0][0]).toEqual(true)
  })

})