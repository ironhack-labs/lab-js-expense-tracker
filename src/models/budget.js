// Budget
class Budget {

    constructor () {
        this.entries = [];
    }
    
    addEntry (entry) {
        this.entries.push(entry);

    }

    getCurrentBalance () {
        if (this.entries.length === 0) {
            return 0;
        }
        console.log(this.entries.type)
        
        let currentBalance = 0;
        for (const entry of entries) {
            console.log(entry.type)
            if (entry.type === "income") {
                currentBalance += entry.amount;
            }
            if (entry.type === "expense") {
                currentBalance -= entry.amount;
            }
            
            currentBalance += entry
        }
    }

}