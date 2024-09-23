// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description){
    super(date, amount, description);
    this.type = 'income';
  }
}

// Expense
class Expense extends Entry{
  constructor(date, amount, description, paid){
    super(date, amount, description);
    this.paid = paid;
    this.type = 'expense';
  }
  getFormattedAmount(){
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
  }

  addEntry(entry) {
    this.entries.push(entry)
  }
  getCurrentBalance() {
    if (this.entries.length === 0)
      return 0;
      const totalIncom = this.entries.filter(e => e.type ==='income').reduce((acc, incomes)=> acc +incomes.amount, 0);
      const totalexpense = this.entries.filter(e => e.type ==='expense').reduce((acc, expense) => acc + expense.amount, 0);
    return totalIncom-totalexpense;
  }
  getFormattedEntries(){
    const formattedEntries = [];
    
    this.entries.forEach(entry => {
      const formattedAmount = entry.getFormattedAmount();
      formattedEntries.push(`${entry.date} | ${entry.description} | ${formattedAmount}`);
    });

  return formattedEntries;
  }
}

console.log(Entry.amount());
