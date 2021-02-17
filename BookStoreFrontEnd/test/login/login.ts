import { shallowMount, createLocalVue} from '@vue/test-utils';
import Login from '../../pages/login.vue';
import Vuetify from 'vuetify';
//import Vuelidate from 'vuelidate';
import testData from './user-test-sample.json';
//const testData = require('./user-test-sample.json')
  let wrapper: any

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    //localVue.use(Vuelidate)
    wrapper = shallowMount(Login, {
      localVue,
    })
  })

  it('emailId should evaluate to true when correct pattern is passed', () => {
    console.log('testData: '+testData);
    wrapper.vm.emailId = 'shilpa07udupi@gmail.com';
    expect((wrapper.vm as any).emailId).toBe('shilpa07udupi@gmail.com')
  })

  it('password should evaluate to true when correct pattern is passed', () => {
    wrapper.vm.password = 'abcd@1234'
    expect((wrapper.vm as any).password).toBe(false)
  })

  it('Check emitted "handleLogin" event', ()=>{
    wrapper.vm.$emit('handleLogin')
    expect(wrapper.emitted().handleLogin).toBeTruthy()
  })

