import { getParentCategory, allTVs, allRadios } from './Service'

describe(getParentCategory, () => {
  it('should return the corresponded service name', () => {
    const tvs = allTVs.map(getParentCategory)
    expect(tvs.every(tv => tv === 'tv')).toBe(true)

    const radios = allRadios.map(getParentCategory)
    expect(radios.every(radio => radio === 'radio')).toBe(true)
  })
})
