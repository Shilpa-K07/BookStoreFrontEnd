import { shallowMount, createLocalVue } from '@vue/test-utils';
import Book from '../../components/Book.vue';

import Vuetify from 'vuetify';
let wrapper: any

beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    wrapper = shallowMount(Book, {
        localVue
    })
})

describe('Book', () => {
    it('check if nextPage event emits', () => {
        wrapper.vm.$emit('nextPage')
        expect(wrapper.emitted().nextPage).toBeTruthy()
    })

    it('check if prevPage event emits', () => {
        wrapper.vm.$emit('prevPage')
       expect(wrapper.emitted().prevPage).toBeTruthy()
    })

    it('check if text Next Page >> renders', () => {
       expect(wrapper.text()).toContain('Next Page >>')
    })

    it('check if text >> Previous Page renders', () => {
       expect(wrapper.text()).toContain('>> Previous Page')
    })
})


