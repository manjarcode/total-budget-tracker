import { DateRangeType } from "../../types"

export default class DateRange {
  start: Date
  end: Date
  canonical: Date

  constructor(dateRangeType: DateRangeType) {
    this.start = dateRangeType.start
    this.end = dateRangeType.end
    this.canonical = this.#canonicalDate()
  }
  
  id() {
    const monthNumber = this.canonical.getMonth() + 1
    const monthPadded = monthNumber.toString().padStart(2, '0')
    return `${this.canonical.getFullYear()}-${monthPadded}`    
  }

  name() {
    const monthNameByLocale = this.canonical.toLocaleString('default', { month: 'long' })
    const monthNameCapitalized = monthNameByLocale.charAt(0).toUpperCase() + monthNameByLocale.slice(1)
    return `${this.canonical.getFullYear()} - ${monthNameCapitalized}`
  }

  #canonicalDate() {
    return new Date((this.start.getTime() + this.end.getTime()) / 2)
  }
}