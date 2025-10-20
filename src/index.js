// Entry
class Entry {
    constructor (date, amount, description) {
        this.date = date;
        this.amount = amount;
        this.description = description
    }

    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor (date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
        getFormattedAmount() {
        return `${this.amount} €`
        }
}

// Expense
class Expense extends Entry {
    constructor (date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense"
}
getFormattedAmount(){
    return `-${this.amount} €`
}
}

// Budget
class Budget {
    constructor(){
        this.entries = [];
    }

    addEntry(newEntry){
        this.entries.push(newEntry)
    }

    getCurrentBalance(){
        if (this.entries.length === 0){
            return 0;
        }
        let total = 0;
        for (let i = 0; i < this.entries.length; i++) {
            const entry = this.entries[i];
            if (entry.type === "income") {
                total += entry.amount;
            } else {
                total -= entry.amount;
            }
        }
        return total;
    }

getFormattedEntries() {
  const result = [];

  this.entries.forEach(function(entry) {
    const formatted = entry.date + " | " + entry.description + " | " + entry.getFormattedAmount();
    result.push(formatted);
  });

  return result;
} }

