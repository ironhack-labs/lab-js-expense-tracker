// Budget
class Budget {

    constructor() {
        this.entries = [];
    }
    
    addEntry(entry) {
        this.entries.push(entry);
    }

    getCurrentBalance() {
        let currentBalance = 0;
      
        for (const entry of this.entries) {
            switch (entry.type) {
                case "income":
                    currentBalance += entry.amount;
                    break;
                case "expense":
                    currentBalance -= entry.amount;
                    break;
            }
        }
        return currentBalance;
    }

    getFormattedEntries() {
        const formattedEntry = [];

        for (const entry of this.entries) {
            formattedEntry.push(`${entry.date} | ${entry.description} | ${entry.getFormattedAmount()}`);
        }
        return formattedEntry;
    }
}