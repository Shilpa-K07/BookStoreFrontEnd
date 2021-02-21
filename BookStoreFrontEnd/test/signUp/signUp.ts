import { shallowMount, createLocalVue} from '@vue/test-utils';
import Login from '../../pages/login.vue';
import Vuetify from 'vuetify';
import testData from '../login/login-test-sample.json';
import registerTestData from './register-test-sample.json'
  let wrapper: any

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    wrapper = shallowMount(Login, {
      localVue,
    })
  })

  it('given name should evaluate to true when correct pattern is passed', () => {
    wrapper.vm.name = registerTestData.name;
    expect((wrapper.vm as any).name).toBe(registerTestData.name)
  })
  it('given name should evaluate to false when its improper', () => {
    wrapper.vm.name = registerTestData['invalid-name']
    expect((wrapper.vm as any).name).toBe(registerTestData['invalid-name'])
  })
  it('given empty name should evaluate to false', () => {
    wrapper.vm.name = registerTestData['empty-name']
    expect((wrapper.vm as any).name).toBe(registerTestData['empty-name'])
  })
  it('given mobile number should evaluate to true when correct pattern is passed', () => {
    wrapper.vm.mobileNumber = registerTestData['mobile-number'];
    expect((wrapper.vm as any).mobileNumber).toBe(registerTestData['mobile-number'])
  })
  it('given mobile number should evaluate to false when its improper', () => {
    wrapper.vm.mobileNumber = registerTestData['invalid-mobile-number'];
    expect((wrapper.vm as any).mobileNumber).toBe(registerTestData['invalid-mobile-number'])
  })
  it('given empty mobile number should evaluate to false ', () => {
    wrapper.vm.mobileNumber = registerTestData['empty-mobile-number'];
    expect((wrapper.vm as any).mobileNumber).toBe(registerTestData['empty-mobile-number'])
  })
  it('given emailId should evaluate to true when correct pattern is passed', () => {
    wrapper.vm.emailId = testData.login.emailId;
    expect((wrapper.vm as any).emailId).toBe(testData.login.emailId)
  })
  it('given emailId should evaluate to false when "@" is missed', () => {
    wrapper.vm.emailId = testData['invalid-email-without@'].emailId;
    expect((wrapper.vm as any).emailId).toBe(testData['invalid-email-without@'].emailId)
  })

  it('given emailId should evaluate to false when it is empty', () => {
    wrapper.vm.emailId = testData['empty-email'].emailId;
    expect((wrapper.vm as any).emailId).toBe(testData['empty-email'].emailId)
  })

  it('given password should evaluate to true when correct pattern is passed', () => {
    wrapper.vm.password = testData.login.password;
    expect((wrapper.vm as any).password).toBe(testData.login.password)
  })

  it('given password should evaluate to false when special character is missed', () => {
    wrapper.vm.password = testData['password-without-specialchar'].password;
    expect((wrapper.vm as any).password).toBe(testData['password-without-specialchar'].password)
  })

  it('given password should evaluate to false when digit is missed', () => {
    wrapper.vm.password = testData['password-without-digit'].password;
    expect((wrapper.vm as any).password).toBe(testData['password-without-digit'].password)
  })

  it('given password should evaluate to false when uppercase is missed', () => {
    wrapper.vm.password = testData['password-without-uppercase'].password;
    expect((wrapper.vm as any).password).toBe(testData['password-without-uppercase'].password)
  })

  it('given password should evaluate to false when it is empty', () => {
    wrapper.vm.password = testData['empty-password'].password;
    expect((wrapper.vm as any).password).toBe(testData['empty-password'].password)
  })

  it('Check emitted "handleRegister" event', ()=>{
    wrapper.vm.$emit('handleRegister')
    expect(wrapper.emitted().handleRegister).toBeTruthy()
  })