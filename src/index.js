// Entry
class Entry {

    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    }

    getFormattedAmount() {

        return `${this.amount} €`

    }



}

class Income extends Entry {

    constructor(date, amount, description) {
        super(date, amount, description)
        this.type = "income"

    }

}




// class Player extends User {

//     constructor(firstName, lastName, email, nickValue) {
//         super(firstName, lastName, email)
//         this.nick = nickValue
//         this.tokens = 100
//     }



// Income


// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.paid = paid
        this.type = "expense"

    }
    getFormattedAmount() {

        return `-${this.amount} €`

    }



}

// Budget
class Budget {
    constructor() {

        this.entries = []
    }


    addEntry(entry) {

        this.entries.push(entry)


    }
    getTotalIncome() {
        if (this.entries.length === 0) {
            return 0
        }

        let totalIncome = 0


        this.entries.forEach(entry => {
            if (entry.type === "income") {

                totalIncome += entry.amount

            }



        })

        return totalIncome


    }

    getTotalExpense() {


        if (this.entries.length === 0) {
            return 0
        }

        let totalExpense = 0
        this.entries.forEach(entry => {
            if (entry.type === "expense") {
                totalExpense += entry.amount

            }

        })

        return totalExpense

    }
    ///cuidado con la sintaxis... "expense, no expenses"


    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0
        }

        const totalIncome = this.getTotalIncome()
        const totalExpense = this.getTotalExpense()
        const currentBalance = totalIncome - totalExpense

        return currentBalance




    }

}



//existe un error en el test "La razón es que entries es un array, pero no es un mock, por lo que el spy no se puede aplicar directamente a entries.forEach."
























