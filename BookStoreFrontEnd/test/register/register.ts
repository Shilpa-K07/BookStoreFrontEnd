import { mount, createLocalVue} from '@vue/test-utils';
import Register from '../../pages/register.vue';
import SignUp from '../../pages/signUp.vue';
import Login from '../../pages/login.vue';

import Vuetify from 'vuetify';
  let wrapper: any

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    wrapper = mount(Register, {
      localVue,
    })
  })

  it('check if child SignUp exists', () => {
    //expect(wrapper.find(SignUp)).toBe(true)
    expect(wrapper.contains(SignUp)).toBe(true)
  })

  it('check if child Login exists', () => {
    //expect(wrapper.find(Login)).toBe(true)
    expect(wrapper.contains(Login)).toBe(true)
  })

 
