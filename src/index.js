
   /*------Human analogy:--------
    Imagine you’re at the post office filling out a form:
        •	Name: ______
        •	You write “Patrizia”
    
    To save it, someone behind the desk has to say:
    “Okay, I’ll store this name under this.name = "Patrizia".”
    That’s exactly what you’re doing in JavaScript. You’re telling the object:
    📥 “Please keep this value under this label.”*/

// Think of this.date as a drawer in a box. 
//You’re putting the date value into that drawer.


// Entry
class Entry {
    constructor(date, amount, description) {
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
  
    getFormattedAmount() {
      return `${this.amount} €`; // So it’s saying: “Look at this specific entry, grab the amount, and return it with a euro sign.”
    }
  }
  
  // Income
  class Income extends Entry {
    constructor(date, amount, description) {
      super(date, amount, description); //hands off values to Entry ------ we’re saying: “Hey parent class, you handle these values, you know what to do with them.”
      this.type = "income";
    }
  }
  
  // Expense
  class Expense extends Entry {
    constructor(date, amount, description, paid) {
      super(date, amount, description);
      this.paid = paid;
      this.type = "expense";
    }
  
    getFormattedAmount() {
      return `-${this.amount} €`;
    }
  }
  
  // Budget
  class Budget {
    constructor() {
      this.entries = []; // empty
    }
  
    addEntry(entry) {
      this.entries.push(entry); //❓ “Am I adding something to a list?” ---If yes → use .push()---If no → just assign it like this.something = value
    }
  
    getCurrentBalance() {
      if (this.entries.length === 0) return 0;
  
      let total = 0;

        this.entries.forEach(function(entry) {
        if (entry.type === "income") {
        total = total + entry.amount;
        } else if (entry.type === "expense") {
        total = total - entry.amount;
  }
});
         return total;
    }}