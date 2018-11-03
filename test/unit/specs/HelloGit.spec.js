import Vue from 'vue'
import HelloGit from '@/components/HelloGit'

describe('HelloGit.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloGit)
		const vm = new Constructor().$mount()
		expect(vm.$el.querySelector('.hello h1').textContent).toEqual('Hello GitHub message')
	})
})
