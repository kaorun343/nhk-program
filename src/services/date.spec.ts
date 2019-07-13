import { formatTime, formatDate, formatDateTime, formatTimeRange } from './date'

describe(formatTime, () => {
  it('2桁の数字を整形する', () => {
    expect(formatTime('2019-01-22T11:54:00+09:00')).toBe('11:54')
  })

  it('1桁の数字を整形する', () => {
    expect(formatTime('2019-01-22T08:00:00+09:00')).toBe('08:00')
  })
})

describe(formatDate, () => {
  it('日時を整形する', () => {
    const date = new Date('2019-01-22T08:00:00+09:00')
    expect(formatDate(date)).toBe('2019-01-22')
  })
})

describe(formatDateTime, () => {
  it('日時を整形する', () => {
    const date = new Date('2019-01-22T08:00:00+09:00')
    expect(formatDateTime(date)).toBe('2019-01-22T08:00:00+09:00')
  })
})

describe(formatTimeRange, () => {
  it('should format range', () => {
    const start = '2019-01-22T08:00:00+09:00'
    const end = '2019-01-22T11:54:00+09:00'
    expect(formatTimeRange(start, end)).toBe('08:00 ~ 11:54')
  })
})
