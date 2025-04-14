// Entry
class Entry {
  constructor(date, amount, description){
    this.date = date;
    this.amount = amount;
    this.description = description;
  }
  getFormattedAmount(){
    return `€${this.amount}`
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description){
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description,paid){
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount(){
    return `-€${this.amount}`
  }
}

// Budget
class Budget {
  constructor(){

    this.entries = []
    
  }

  addEntry(newEntry){
    this.entries.push(newEntry);
  }
  getCurrentBalance(){
    if (this.entries.length===0){
      return 0;
    }
    let total = 0;
    for (let i=0;i<this.entries.length;i++){
      if (this.entries[i]["type"] === "income"){
        total += this.entries[i]["amount"]
      }
      else if (this.entries[i]["type"] === "expense"){
        total -= this.entries[i]["amount"]
      }
    }
    return total
  }
  getFormattedEntries(){
    const arr = []
    for (let i=0;i<this.entries.length;i++){
      console.log(i,this.entries[i]["type"],this.entries[i]["amount"])
      if (this.entries[i]["type"] === "income"){
        arr.push(`${this.entries[i]["date"]} | ${this.entries[i]["description"]} | €${this.entries[i]["amount"]}`)
      }
      else if (this.entries[i]["type"] === "expense"){
        arr.push(`${this.entries[i]["date"]} | ${this.entries[i]["description"]} | -€${this.entries[i]["amount"]}`)
      }
      console.log(arr)
    }
    return arr
  }
}

const budget = new Budget();

      // Create few income and expense entries for the budget
      const income1 = new Income("2024-06-17", 10, "other");
      const income2 = new Income("2024-06-17", 3456, "salary");
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 99, "food", true);
console.log("entries",income1,income2,expense1,expense2)
      // Add the entries to the budget
      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense1);
      budget.addEntry(expense2);
console.log("budjet obj",budget)
      // Call the getFormattedEntries method
      const formattedEntries = budget.getFormattedEntries();