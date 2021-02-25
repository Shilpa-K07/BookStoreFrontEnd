import { shallowMount, createLocalVue} from '@vue/test-utils';
import DashBoard from '../../pages/dashboard.vue';

import Vuetify from 'vuetify';
  let wrapper: any

  beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    wrapper = shallowMount(DashBoard, {
      localVue,
    })
  })

  it('check if title name renders', () => {
    wrapper.vm.title = 'BookStore'
    expect((wrapper.vm as any).title).toBe('BookStore')
  })
  
  it('Check emitted "changeStyle" event', ()=>{
    wrapper.vm.$emit('changeStyle')
    expect(wrapper.emitted().changeStyle).toBeTruthy()
  })

