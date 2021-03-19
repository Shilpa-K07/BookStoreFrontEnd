import { shallowMount, createLocalVue } from '@vue/test-utils';
import addToBag from '../../pages/addToBag.vue';
import AppBar from '../../components/AppBar.vue';
import Snackbar from '../../components/Snackbar.vue';
import myCart from '../../pages/myCart.vue';

import Vuetify from 'vuetify';
let wrapper: any

beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
 /*    const beforeMount = jest.fn();
    const mounted = jest.fn(); */
    const beforeMount = () => {
        console.log('mock beforeMount');
      };
    const mounted = () => {
        console.log('mock mounted');
      };
    wrapper = shallowMount(addToBag, {methods:{beforeMount, mounted},
        localVue,
    })
})

describe('addToBag', () => {
    it('check if goToHome event emits', () => {
        wrapper.vm.$emit('goToHome')
        expect(wrapper.emitted().goToHome).toBeTruthy()
    })

    it('check if addToCart event emits', () => {
        wrapper.vm.$emit('addToCart')
        expect(wrapper.emitted().addToCart).toBeTruthy()
    })

    it('check if addToWishlist event emits', () => {
        wrapper.vm.$emit('addToWishlist')
        expect(wrapper.emitted().addToWishlist).toBeTruthy()
    })

    it('check if text Home renders', () => {
        expect(wrapper.text()).toContain('Home')
    })

    it('check if text Add to bag renders', () => {
        expect(wrapper.text()).toContain('Add to bag')
    })

    it('check if text mdi-heart renders', () => {
        expect(wrapper.text()).toContain('mdi-heart')
    })

    it('check if text wishlist renders', () => {
        expect(wrapper.text()).toContain('wishlist')
    })

    it('check if text Book Detail renders', () => {
        expect(wrapper.text()).toContain('wishlist')
    })

    it('check if text Customer Feedback renders', () => {
        expect(wrapper.text()).toContain('wishlist')
    })

    it('check if text Overall rating renders', () => {
        expect(wrapper.text()).toContain('Overall rating')
    })

    it('check if child AppBar exists', () => {
        expect(wrapper.contains(AppBar)).toBe(true);
    });

    it('check if child Snackbar exists', () => {
        expect(wrapper.contains(Snackbar)).toBe(true);
    });

    it('check if child myCart exists', () => {
        expect(wrapper.contains(myCart)).toBe(true);
    });
})


