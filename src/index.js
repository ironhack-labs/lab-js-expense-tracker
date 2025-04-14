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

// Incomes
class Income extends Entry {
    constructor(date,amount,description) {
    super(date,amount,description);
    this.type = "income"
    }

}

// Expense
class Expense extends Entry {
    constructor(date,amount,description,paid){
    super(date,amount,description,paid)
    this.paid = paid;
    this.type = "expense"
    }

    getFormattedAmount() {
        return `-${this.amount} €`
    }
}

// Budget
class Budget {
    constructor(){
        this.entries = []
    }
    addEntry(entry) {
       this.entries.push(entry)

    }
    getCurrentBalance() {
        let totalIncome = 0;
        let totalExpense = 0;
    
        for (let entry of this.entries) {
          if (entry.type === 'income') {
            totalIncome += entry.amount;
          } else if (entry.type === 'expense') {
            totalExpense += entry.amount;
          }
        }
    
        return totalIncome - totalExpense;
      }
    }

    const budget = new Budget();
budget.addEntry(new Income('2023-07-01', 1000, 'Salary'));
budget.addEntry(new Expense('2023-07-02', 200, 'Groceries', true));
budget.addEntry(new Expense('2023-07-03', 300, 'Rent', true));
budget.addEntry(new Income('2023-07-04', 500, 'Freelance'));


    console.log(budget.getCurrentBalance())

/* const myArray = []

const number = 1; 

number.push = myArray
 */