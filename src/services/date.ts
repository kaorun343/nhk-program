function zeroPadding(number: number) {
  return `${number}`.padStart(2, '0')
}

/**
 * 時刻を整形する
 * @param text 整形前の日時
 */
export function formatTime(text: string | Date) {
  const obj = new Date(text)
  const hours = obj.getHours()
  const minutes = obj.getMinutes()

  return `${zeroPadding(hours)}:${zeroPadding(minutes)}`
}

/**
 * 日時を整形する
 * @param text 整形前の日時
 */
export function formatDate(text: string | Date) {
  const obj = new Date(text)
  const year = obj.getFullYear()
  const month = obj.getMonth() + 1
  const date = obj.getDate()

  return `${year}-${zeroPadding(month)}-${zeroPadding(date)}`
}

/**
 * 日時と時刻に整形する
 * @param text 整形前の日時
 */
export function formatDateTime(text: string | Date) {
  return `${formatDate(text)}T${formatTime(text)}:00+09:00`
}

/**
 * 時間を整形する
 * @param start 開始時刻
 * @param end 終了時刻
 */
export function formatTimeRange(start: string | Date, end: string | Date) {
  return `${formatTime(start)} ~ ${formatTime(end)}`
}
