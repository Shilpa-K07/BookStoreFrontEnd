import { shallowMount, createLocalVue } from '@vue/test-utils';
import confirmOrder from '../../pages/confirmOrder.vue';
import AppBar from '../../components/AppBar.vue';

import Vuetify from 'vuetify';
let wrapper: any

describe('confirmOrder', () => {
    beforeEach(() => {
        const localVue = createLocalVue()
        localVue.use(Vuetify)
        wrapper = shallowMount(confirmOrder, {
            localVue,
            data() {
                return {
                    title: 'BookStore',
                }
            }
        })
    })
    
    it('check if child AppBar exists', () => {
        expect(wrapper.contains(AppBar)).toBe(true);
    });
})


