import { shallowMount } from '@vue/test-utils'
import { MOCK_TABLE_DATA } from './testHelperContants'
import NotesTable from '@/components/NotesTable.vue'

describe('NotesTable.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(NotesTable, {
      props: { MOCK_TABLE_DATA }
    })
    expect(wrapper.findAll('tr').length).toBe(3)
  })
})
