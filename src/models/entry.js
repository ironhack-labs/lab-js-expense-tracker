// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }
    
    getFormattedAmount() {
        return `${this.amount} €`;
    }
}