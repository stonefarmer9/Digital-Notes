import { mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import NoteDisplay from '@/components/NoteDisplay.vue'
import { MOCK_NOTE_GROUPS, MOCK_TABLE_DATA, MOCK_NOTE } from './testHelpers/testHelperConstants.js'


describe('Home.vue', () => {
    let wrapper;

    beforeEach(() => {
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
    afterEach(() => {
        wrapper = null;
    })
    afterAll(() => {
        wrapper.destroy()
    })

    it('Passes the selected note in NoteTable to the noteDisplay component', async () => {
        const row = wrapper.find('tbody > tr')
        await row.trigger('click')

        expect(wrapper.vm.selectedNote).toStrictEqual(MOCK_TABLE_DATA[0])
    })
    it('changes the note when clicked again', async () => {
        const row = wrapper.find('tbody > tr')
        await row.trigger('click')

        expect(wrapper.vm.selectedNote).toStrictEqual(MOCK_TABLE_DATA[0])

        const secondRow = wrapper.findAll('tbody > tr')[1]
        await secondRow.trigger('click')

        expect(wrapper.vm.selectedNote).toStrictEqual(MOCK_TABLE_DATA[1])
    })
    it('Passes the selected Row to NoteDisplay', async () => {
        const row = wrapper.findAll('tbody > tr')[2]
        await row.trigger('click')
        const definitionList = wrapper.findAll('dl')
        const firstDefinition = definitionList[0]
        const secondDefinition = definitionList[1]
        const thirdDefinition = definitionList[2]
        const fourthDefinition = definitionList[3]  
        expect(firstDefinition.text()).toContain('Note Title Three')
        expect(secondDefinition.text()).toContain('locations')
        expect(thirdDefinition.text()).toContain('18/08/2021')
        expect(fourthDefinition.text()).toContain('This is a note about three things or another')

    })
})

