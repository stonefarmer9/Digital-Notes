import { mount } from '@vue/test-utils'
import NoteDisplay from '@/components/NoteDisplay.vue'
import { MOCK_NOTE } from './testHelpers/testHelperConstants.js'

describe('NoteDisplay.vue', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(NoteDisplay, {
      props: { selectedNote: MOCK_NOTE }
    })
  })
  afterAll(() => {
    wrapper.destroy()
  })

  it('Only renders 4 Definition lists', () => {
    expect(wrapper.findAll('dt')).toHaveLength(4)
  })

  it('renders the prop note in a definition list', () => {
    const definitionList = wrapper.findAll('dl')
    const firstDefinition = definitionList[0]
    const secondDefinition = definitionList[1]
    const thirdDefinition = definitionList[2]
    const fourthDefinition = definitionList[3]
    expect(firstDefinition.text()).toContain('title')
    expect(firstDefinition.text()).toContain('Mock Note Display')
    expect(secondDefinition.text()).toContain('noteGroup')
    expect(secondDefinition.text()).toContain('quests')
    expect(thirdDefinition.text()).toContain('dateCreated')
    expect(thirdDefinition.text()).toContain('10/08/2021')
    expect(fourthDefinition.text()).toContain('note')
    expect(fourthDefinition.text()).toContain('The quest for mock data')
  })
})
