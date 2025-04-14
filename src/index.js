

/* Entry
class Entry {
    constructor(date, amount, description) { }
}

// Income
class Income { }

// Expense
class Expense { }

// Budget
class Budget { }*/


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








/*class Witch extends Player {

    constructor(nameValue, lastNameValue, emailValue, nickValue, spellValue) {
        super(nameValue, lastNameValue, emailValue, nickValue)
        this.spell = spellValue
    }

    makeSpell() {
        console.warn('¡La bruja', this.nick, 'te atacó con', this.spell)
    }
}


//




 Expense


// Budget
class Budget { }
*/




class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }

}

class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description, paid);
        this.paid = paid;
        this.type = "expense"
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

/*getFormattedAmount() method
This method needs to be re - implemented for Expense, because the Expense version is supposed to have a different return.It should return the amount string with a minus(-) sign.The requireme

should be defined
should receive 0 arguments
should return the amount string with a minus sign, the amount, and the € symbol("-AMOUNT €")
*/

class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry) {
        this.entries.push(entry);
    }
    getCurrentBalance() {
        if (this.entries != Entry)
            return 0
    } else if {
        return balance
    }
}

const balance = Income - Expense;