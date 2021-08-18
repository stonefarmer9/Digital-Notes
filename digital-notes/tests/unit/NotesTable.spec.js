import { mount } from '@vue/test-utils'
import { MOCK_TABLE_DATA } from './testHelperContants'
import NotesTable from '@/components/NotesTable.vue'

describe('NotesTable.vue', () => {
  let wrapper;
  let table;
  let rows;
  beforeAll(() => {
    wrapper = mount(NotesTable, {
      props: { notes: MOCK_TABLE_DATA }
    });
    table = wrapper.find("table");
    rows = wrapper.findAll("tbody > tr")
    
  })

  afterAll(() => {
    wrapper.destroy()
  })
  it('renders a table', () => {
    expect(table.exists()).toBe(true)

  
  })
  it("renders the notes passed as table rows", () => {
    expect(rows).toHaveLength(3)
  })
})
