// Expense
class Expense extends Entry {
    
    constructor (date, amount, description, paid) {
        super(date, amount, description,);
        this.paid = paid;
        this.type = "expense";      
    }

    getFormattedAmount () {
        
        return `-${super.getFormattedAmount()}`
    }
}