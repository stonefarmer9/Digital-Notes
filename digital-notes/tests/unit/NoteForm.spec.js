import { mount } from '@vue/test-utils'
import { NoteForm } from '@/views'
import { TextBox, TextArea, MultiSelect, TagInput } from '@/components/FormComponents'

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

describe('NoteFrom.vue renders labels for each input', () => {
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
  it('It renders a label for Title,  Note Details Note Group, Note Tags, in that order', () => {
    const Labels = wrapper.findAll('label')
    const TitleLabel = Labels[0]
    const NoteDetailsLabel = Labels[1]
    const NoteGroupsLabel = Labels[2]
    const NoteTagsLabel = Labels[3]

    expect(TitleLabel.text()).toContain('Title')
    expect(NoteDetailsLabel.text()).toContain('Note')
    expect(NoteGroupsLabel.text()).toContain('Groups/Categories')
    expect(NoteTagsLabel.text()).toContain('Tags')
  })
})
