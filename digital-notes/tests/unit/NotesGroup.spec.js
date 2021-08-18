import { mount } from '@vue/test-utils'
import NotesGroups from '@/components/NotesGroups.vue'
import { MOCK_NOTE_GROUPS } from './testHelpers/testHelperConstants.js'

describe('NotesGroups.vue', () => {
  let wrapper
  beforeAll(() => {
      wrapper = mount(NotesGroups, {
        props: { noteGroups: MOCK_NOTE_GROUPS }
    })
  })
  afterAll(() => {
    wrapper.destroy()
  })
    
  it('Renders a list of note groups', () => {
    expect(wrapper.findAll('li')).toHaveLength(4)
  })
  it('Renders a checkbox in each list item', () => {
    expect(wrapper.findAll('li > input')).toHaveLength(4)
  })
})

describe('NotesGroup checkbox functionality', () => {
  let wrapper
  beforeAll(() => {
      wrapper = mount(NotesGroups, {
        props: { noteGroups: MOCK_NOTE_GROUPS }
    })
  })
  afterAll(() => {
    wrapper.destroy()
  })
  it('Selecting a checkbox emits the selected function', async () => {
    await wrapper.find('input[type=checkbox]').setValue()

    expect(wrapper.emitted()).toHaveProperty('updateSelectedNoteGroups')
  })
})
