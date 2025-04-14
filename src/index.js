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
  
  const entry1 = new Entry('2024-05-13', 50, 'Groceries');
  console.log(entry1.getFormattedAmount()); 
  

// Income
class Income extends Entry {
    constructor(date, amount, description) {
      super(date, amount, description);
      this.type = "income"; 
    }
  }

    


    class Expense extends Entry {
        constructor(date, amount, description, paid) {
            super(date, amount, description);
            this.type = "expense"; 
            this.paid = paid;
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
  
    addEntry(newEntry) {
      this.entries.push(newEntry);
    }
  
    getCurrentBalance() {
      let totalIncome = 0;
      let totalExpenses = 0;
  
      this.entries.forEach(entry => {
        if (entry instanceof Income) {
          totalIncome += entry.amount;
        } else if (entry instanceof Expense) {
          totalExpenses += entry.amount;
        }
      });
  
      return totalIncome - totalExpenses;
    }

    getFormattedEntries() {
        const formattedEntries = [];
    
        this.entries.forEach(entry => {
          let formattedEntry = `${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`;
          formattedEntries.push(formattedEntry);
        });
    
        return formattedEntries;
      }
  }
  

  const budget = new Budget();

  const income1 = new Income('2024-05-01', 1000, 'Salary');
  const income2 = new Income('2024-05-15', 500, 'Freelance work');
  const expense1 = new Expense('2024-05-10', 200, 'Groceries', true);
  const expense2 = new Expense('2024-05-20', 50, 'Dinner', false);
  
  budget.addEntry(income1);
  budget.addEntry(income2);
  budget.addEntry(expense1);
  budget.addEntry(expense2);
  
  console.log(budget.getFormattedEntries());

