import { mount } from '@vue/test-utils'
import { NoteForm } from '@/views'
import { textBox } from '@/components/FormComponents'


describe("NoteForm.vue", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(NoteForm)
    })
    afterEach(() => {
        wrapper = null
    })
    afterAll(() => {
        wrapper.destroy()
    })
    it("Renders a text input component", () => {
        expect(wrapper.findComponent(textBox).exists()).toBe(true)
    })
})