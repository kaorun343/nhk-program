import { formatTime, formatDate } from './date'

describe('date', () => {
  describe('formatTime', () => {
    it('2桁の数字を整形する', () => {
      expect(formatTime('2019-01-22T11:54:00+09:00')).toBe('11:54')
    })

    it('1桁の数字を整形する', () => {
      expect(formatTime('2019-01-22T08:00:00+09:00')).toBe('08:00')
    })
  })

  describe('formatDate', () => {
    it('日時を整形する', () => {
      const date = new Date('2019-01-22T08:00:00+09:00')
      expect(formatDate(date)).toBe('2019-01-22')
    })
  })
})
