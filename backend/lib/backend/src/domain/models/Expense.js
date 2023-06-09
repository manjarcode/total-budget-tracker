export default class Expense {
    description;
    amount;
    date;
    constructor(description, amount, date) {
        this.description = description;
        this.amount = amount;
        this.date = date;
    }
}
