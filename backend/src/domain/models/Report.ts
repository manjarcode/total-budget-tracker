export default class Report {
  private id: string
  private yearmonth: string

  constructor(id: string, yearmonth: string) {
    this.id = id
    this.yearmonth = yearmonth
  }

  toDto() {
    return {  
      id: this.id,
      yearmonth: this.yearmonth
    }
  }
}