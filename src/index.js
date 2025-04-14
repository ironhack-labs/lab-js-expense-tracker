// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description);
        this.type = "expense";
        this.paid = paid;
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }

    addEntry(entry) {
        this.entries.push(entry);
    }

    getTotalIncome() {
        let totalIncome = 0;
        this.entries.forEach(function(element) {
            if (element.type === "income") {
                totalIncome += element.amount;
            }
        })
        return totalIncome
    }

    getTotalExpense() {
        let totalExpense = 0;
        this.entries.forEach(function(element) {
            if (element.type === "expense") {
                totalExpense += element.amount;
            }
        })
        return totalExpense
    }

    getTotal(entryType) {
        if (this.entries.length === 0) {
            return 0
        } else {
            let totalIncome = 0;
            let totalExpense = 0;
            this.entries.forEach(function(element) {
                if (element.type === entryType) {
                    totalIncome += element.amount;
                } else if (element.type === entryType) {
                    totalExpense += element.amount;
                }
            })
            if (totalIncome) {
                return totalIncome
            } else {
                return totalExpense
            }
        }
    }

    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        } else {
            return this.getTotalIncome() - this.getTotalExpense()
        }
    }

    getFormattedEntries() {
        result = [];
        this.entries.forEach(function(element) {
            if (element.type === "income") {
                result.push(`${element.date} | ${element.description} | +${element.amount} €`)
            } else if (element.type === "expense") {
                result.push(`${element.date} | ${element.description} | -${element.amount} €`)
            }
        })
        return result
    }
}


// getTotalIncome() {
//     if (this.entries.length === 0) {
//         return 0
//     } else {
//         let totalIncome = 0;
//         this.entries.forEach(function(element) {
//             if (element.type === "income") {
//                 totalIncome += element.amount;
//             }
//         })
//         return totalIncome
//     }
// }