// Entry
class Entry {

    constructor(dateValue, amountValue, descriptionValue) {

        this.date = dateValue
        this.amount = amountValue
        this.description = descriptionValue
    }


    getFormattedAmount() {

        return `${this.amount} €`;
    }

}



// Income
//class Income {

class Income extends Entry {

    constructor(dateValue, amountValue, descriptionValue) {


        super(dateValue, amountValue, descriptionValue)
        this.type = "income"

    }

}



// Expense
//class Expense { 

class Expense extends Entry {

    constructor(dateValue, amountValue, descriptionValue, paidValue) {

        super(dateValue, amountValue, descriptionValue)
        this.type = "expense"
        this.paid = paidValue
    }

    changePaidValue(newValue) {
        this.paid = paidValue

    }


    getFormattedAmount() {

        return `-${this.amount} €`;
    }

}



// Budget
class Budget {

    constructor() {
        this.entries = [];
    }

    addEntry(newEntrie) {

        this.entries.push(newEntrie);
    }



    getCurrentBalance() {


        if (this.entries.length === 0) {
            return 0;
        }

        let sumIncome = 0;
        let sumExpense = 0;

        this.entries.forEach((newEntry) => {
            if (newEntry.type === "income") {
                sumIncome += newEntry.amount;

            } else if (newEntry.type === "expense") {
                sumExpense += newEntry.amount;
            }
        });

        let finalIncome = sumIncome - sumExpense;
        return finalIncome;
    }


}

