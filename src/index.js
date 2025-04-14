class Entry {
    constructor (date, amount, description) {
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
    constructor (date, amount, description) {
    super (date, amount, description);
    this.type = "income";
  }
  }
  
  // Expense
  class Expense extends Entry {
    constructor (date, amount, description, paid) {
        super (date, amount, description);
        this.paid = paid;
        this.type = "expense"
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
    return this.entries.push(entry);
  }
  
  getCurrentBalance (){
    let balance = 0;
    if (this.entries.length === 0) {return 0} else {
        
        this.entries.forEach((element) => {
            if (element.type === "expense") {
                balance -= element.amount} else if (element.type === "income") {
                    balance += element.amount}
            }
        )};
        return balance
    }
    
    getFormattedEntries() {
      let formattedEntries = [];
      this.entries.forEach((element) => {
          const sign = element.type === "income" ? "" : "-";
          formattedEntries.push(`${element.date} | ${element.description} | ${sign}${element.amount} €`);
      });
      return formattedEntries;}
  
  
    }