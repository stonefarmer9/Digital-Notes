import { mount } from '@vue/test-utils'
import { NoteForm } from '@/views'
import { TextBox, TextArea, MultiSelect, TagInput} from '@/components/FormComponents'

describe('NoteForm.vue renders the correct input fields', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NoteForm)
  })
  afterEach(() => {
    wrapper = null
  })
  afterAll(() => {
    wrapper.destroy()
  })
  it('Renders a text input component', () => {
    expect(wrapper.findComponent(TextBox).exists()).toBe(true)
  })
  it('Renders a text Area input component', () => {
    expect(wrapper.findComponent(TextArea).exists()).toBe(true)
  })
  it('Renders a Multi-select dropdown', () => {
    expect(wrapper.findComponent(MultiSelect).exists()).toBe(true)
  })
    it('Renders a tag input component', () => {
      expect(wrapper.findComponent(TagInput).exists()).toBe(true)
  })
})
