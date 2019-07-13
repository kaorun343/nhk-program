import { uniquePrograms } from './Program'

describe(uniquePrograms, () => {
  it('should return unique programs', () => {
    const programs = [{ id: '001' }, { id: '001' }, { id: '002' }]
    const actual = uniquePrograms(programs)
    expect(actual).toHaveLength(2)
    expect(actual[0]).toBe(programs[0])
    expect(actual[1]).toBe(programs[2])
  })
})
