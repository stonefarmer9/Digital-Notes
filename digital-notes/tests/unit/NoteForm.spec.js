import { mount, shallowMount } from '@vue/test-utils'
import { NoteForm } from '@/views'
import { TextBox, TextArea, MultiSelect, TagInput, Button } from '@/components'

describe('NoteForm.vue renders the correct input fields', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(NoteForm, {
      data () {
        return {
          formWidth: 100
        }
      }
    })
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
  it('Renders a submit button', () => {
    expect(wrapper.findComponent(Button).exists()).toBe(true)
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

describe("NoteForm receives data from children and holds it in state", () => {
    let wrapper

  beforeEach(() => {
    wrapper = mount(NoteForm, {
      data() {
        return {
          formWidth: 100
        }
      }
    })
  })
  afterEach(() => {
    wrapper = null
  })
  afterAll(() => {
    wrapper.destroy()
  })
  it("Saves receives the correct data from children", async () => {
    //before this test we need a test that tests input data is emitted correctly to NoteForm state
    //mock the saving function
    // fill out form
    // check save was called
    const NoteTitle = "Test Title"
    const NoteDetails = "This is a note, a note that details a test working"
    const NoteGroup = ["quests", "locations"]
    const NoteTags = ["Tag1", "Tag2", "Tag3"]


    wrapper.findComponent(TextBox).vm.$emit('update', NoteTitle)
    wrapper.findComponent(TextArea).vm.$emit('update', NoteDetails)
    wrapper.findComponent(MultiSelect).vm.$emit('update', NoteGroup)
    wrapper.findComponent(TagInput).vm.$emit('update', NoteTags)
    
    expect(wrapper.vm.$data.note.title).toStrictEqual(NoteTitle)
    expect(wrapper.vm.$data.note.detail).toStrictEqual(NoteDetails)
    expect(wrapper.vm.$data.note.groups).toStrictEqual(NoteGroup)
    expect(wrapper.vm.$data.note.tags).toStrictEqual(NoteTags)


  })
})