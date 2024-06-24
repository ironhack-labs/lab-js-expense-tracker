// Entry
class Entry {
    constructor(date,amount,description) {
        this.date = date;
        this.amount = amount;
        this.description = description;
    };

    getFormattedAmount() {
        const formattedAmount = `${this.amount} €`;
        return formattedAmount; 
    }
}

// Income
class Income extends Entry {
        constructor (date,amount,description) {
          // `super` refers to the constructor of the parent (Animal)
          // with super Income gets all the attributes and methods of the Entry class
          super(date, amount, description);
          this.type = "income"; // <== a new attribute, just for Income
        }
      }


// Expense
class Expense extends Income {
    constructor (date,amount,description,paid) {
      // `super` refers to the constructor of the parent (Animal)
      // with super Income gets all the attributes and methods of the Entry class
      super(date, amount, description);
      this.paid = paid
      this.type = "expense"; // <== a new attribute, just for Income
    }
    getFormattedAmount() {
        const formattedAmount = `-${this.amount} €`;
        return formattedAmount; 
    }  
}



// Budget
class Budget {

    constructor() {
        this.entries = []
    }

    addEntry(newEntry) {
    this.entries.push(newEntry);
    }
    
    getCurrentBalance() {
        this.totalBalance = 0;
        
        if (!this.entries.length) {return 0};
    

        for (let i = 0; i<this.entries.length; i++) {
            if (this.entries[i].type === "expense") {
                this.totalBalance -= this.entries[i].amount;
            } else {this.totalBalance += this.entries[i].amount}
        }
/*        for (amount in Expense) {
            totalExpense += this.amount
        }

        for (amount in Income) {
            totalIncome += this.amount
        }
*/
        return this.totalBalance;
    }

getFormattedEntries() {
    const formattedEntries = ""
}


getFormattedAmount() {
    const formattedArr = [];
    
    for (let i = 0; i<this.entries.length; i++) {
        if (this.entries[i].type === "income") {
            formattedArr.push(
              `${number.date} | ${number.description} | ${number.amount} €`
            );
          } else {
            formattedArr.push(
              `${number.date} | ${number.description} | -${number.amount} €`
            );
          }
        }

    return formattedArr; 
}  

// Bonus
getFormattedEntries() {
    const formattedArr = [];
    this.entries.forEach((number) => {
      if (number.type === "income") {
        formattedArr.push(
          `${number.date} | ${number.description} | ${number.amount} €`
        );
      } else {
        formattedArr.push(
          `${number.date} | ${number.description} | -${number.amount} €`
        );
      }
    });
    return formattedArr;
  }
}



// BONUS



