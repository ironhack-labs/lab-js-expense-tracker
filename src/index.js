// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    };

    getFormattedAmount () {
        return `${this.amount.toString()} €`
    }
}


// Income
class Income extends Entry {
    constructor(date, amount, description){
        super (date, amount, description);
        this.type = "income"
    }
}

// Expense
class Expense extends Income {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.type = "expense";
    this.paid = paid;
  }

  getFormattedAmount() {
    return `-${this.amount.toString()} €`;
  }
}

// Budget
class Budget {
    constructor () {
        this.entries = [];
    };

    addEntry (newEntry) {
        this.entries.push(newEntry);
    };

    getCurrentBalance () {
        let currentBalance = 0;
        if (this.entries.length === 0) {
            return 0;
        }
        
        this.entries.forEach((entry) => {
            if (entry.type === "income") {
                currentBalance += entry.amount
            } else if (entry.type === "expense") {
                currentBalance -= entry.amount
            }
        });

        console.log(currentBalance);
        return currentBalance
    };

    getFormattedEntries () {

        let formattedEntry = [];

        this.entries.forEach((entry) => {
          if (entry.type === "income") {
            formattedEntry.push(`${entry.date} | ${entry.description} | ${entry.amount} €`);
          } else if (entry.type === "expense") {
            formattedEntry.push(`${entry.date} | ${entry.description} | -${entry.amount} €`);
          }
        });

        return formattedEntry;
    }
}