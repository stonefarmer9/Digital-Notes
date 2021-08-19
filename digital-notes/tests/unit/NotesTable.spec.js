import { mount } from '@vue/test-utils'
import { MOCK_TABLE_DATA } from './testHelpers/testHelperConstants'
import NotesTable from '@/components/NotesTable.vue'

let wrapper
let table
let tableBodyRows
let tableHead
let tableBody
let waterMark

describe('NotesTable.vue with props', () => {
  beforeAll(() => {
    wrapper = mount(NotesTable, {
      props: { notes: MOCK_TABLE_DATA }
    })
    table = wrapper.find('table')
    tableBodyRows = wrapper.findAll('tbody > tr')
  })

  afterAll(() => {
    wrapper.destroy()
  })
  it('renders a table', () => {
    expect(table.exists()).toBe(true)
  })

  it('renders the notes passed as table tableBodyRows', () => {
    expect(tableBodyRows).toHaveLength(3)
  })
})

describe('NotesTable.vue without props', () => {
  beforeEach(() => {
    wrapper = mount(NotesTable, {
      props: { notes: [] }
    })
    tableHead = wrapper.find('th')
    tableBody = wrapper.find('tbody')
    waterMark = wrapper.find('span')
  })
  it('renders the table header', () => {
    expect(tableHead.exists()).toBe(true)
  })
  it('does not render the table body', () => {
    expect(tableBody.exists()).toBe(false)
  })
  it("renders a span with the message 'No data for table'", () => {
    expect(waterMark.exists()).toBe(true)
    expect(waterMark.html()).toBe('<span>No data for table</span>')
  })
})
