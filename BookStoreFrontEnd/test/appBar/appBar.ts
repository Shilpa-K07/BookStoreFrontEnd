import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppBar from '../../components/AppBar.vue';

import Vuetify from 'vuetify';
let wrapper: any

beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    wrapper = shallowMount(AppBar, {
        localVue,
        data() {
            return {
                title: 'BookStore',
            }
        }
    })
})

describe('AppBar', () => {
    it('check if title name renders', () => {
        expect(wrapper.text()).toContain('BookStore')
    })
    it('Check emitted "filterBooks" event', () => {
        wrapper.vm.$emit('filterBooks')
        expect(wrapper.emitted().filterBooks).toBeTruthy()
    })
    it('check if book icon renders', () => {
        expect(wrapper.text()).toContain('mdi-book-open-variant')
    })
    it('check if account icon renders', () => {
        expect(wrapper.text()).toContain('mdi-account-outline')
    })
    it('check if heart icon renders', () => {
        expect(wrapper.text()).toContain('mdi-heart')
    })
    it('check if cart icon renders', () => {
        expect(wrapper.text()).toContain('mdi-cart-outline')
    })
    it('check if view list icon renders', () => {
        expect(wrapper.text()).toContain('mdi-view-list')
    })
    it.only('check if onSearch event emits', () => {
        wrapper.vm.$emit('onSearch')
        expect(wrapper.emitted().onSearch).toBeTruthy()
    })
})


