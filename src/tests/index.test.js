import Datepicker from '..'
import Calendar from '../components/Calendar'

describe('Datepicker', () => {
  it('is truthy', () => {
    expect(Datepicker).toBeTruthy()
  })

  it('shows calendar container', () => {
    expect(Calendar).toBeTruthy()
  })
})
