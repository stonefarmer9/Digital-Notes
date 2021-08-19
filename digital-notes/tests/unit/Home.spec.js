import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import { MOCK_NOTE_GROUPS, MOCK_TABLE_DATA, MOCK_NOTE } from './testHelpers/testHelperConstants.js'


describe('Home.vue', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = mount(Home, {
            data() {
                return {
                    notesData: MOCK_TABLE_DATA,
                    noteGroups: MOCK_NOTE_GROUPS,
                    selectedNoteGroups: [],
                    selectedNote: {}
                    
                }
            }
        })
    })
    afterAll(() => {
        wrapper.destroy()
    })

    it('Passes the selected note in NoteTable to the noteDisplay component', async () => {
        const row = wrapper.find('tbody > tr')
        await row.trigger('click')

        expect(wrapper.vm.selectedNote).toBe(MOCK_TABLE_DATA[0])
    })
})

