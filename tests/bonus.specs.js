
describe ("getTotal", () => {
    it ("should be defined", ()=> {
        const budget = new Budget();
        expect (budget.getTotal).toBeDefined();
    });
    it ("should take one argument", () =>{
        const budget = new Budget();
        expect (budget.getTotal.length).toEqual(1);
    });
    it ("should use the 'forEach()' method to iterate over the entries array", () => {
        const budget = new Budget();
        spyOn(budget.entries, "forEach").and.callThrough();
        budget.getTotal();
        expect(budget.entries.forEach).toHaveBeenCalled();
        expect(budget.entries.forEach).toHaveBeenCalledWith(
          jasmine.any(Function)
        );
      });
    it ("should return the total amount of incomes if the type of entry is income", ()=> {
        const budget = new Budget();
      const income1 = new Income("2024-06-17", 100, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);

      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense);

      expect(budget.getTotalIncome()).toEqual(300);
    });
    it ('should return the total expense of all "expense" entries', () => {
        const budget = new Budget();
        const expense1 = new Expense("2024-06-17", 100, "food", true);
        const expense2 = new Expense("2024-06-17", 200, "food", false);
        const income = new Income("2024-06-17", 100, "food");
        budget.addEntry(expense1);
        budget.addEntry(expense2);
        budget.addEntry(income);
        expect(budget.getTotalExpense()).toEqual(300);
      });
      it("should return 0 if there are no entries", () => {
        const budget = new Budget();
        expect(budget.getTotalExpense()).toEqual(0);
      });
})

describe("getFormattedEntries", () =>{
    it ("should be defined", ()=>{
        const budget = new Budget();
        expect (budget.getFormattedEntries).toBeDefined();
    });
    it("should take no arguments",()=>{
        const budget = new Budget();
        expect (budget.getFormattedEntries.length).toEqual(0);
    });
    it("should return an array of strings with the formatted entries", () => {
        // Create an instance of Budget
        const budget = new Budget();
  
        // Create few income and expense entries for the budget
        const income1 = new Income("2024-06-17", 10, "other");
        const income2 = new Income("2024-06-17", 3456, "salary");
        const expense1 = new Expense("2024-06-17", 100, "food", true);
        const expense2 = new Expense("2024-06-17", 99, "food", true);
  
        // Add the entries to the budget
        budget.addEntry(income1);
        budget.addEntry(income2);
        budget.addEntry(expense1);
        budget.addEntry(expense2);
  
        // Call the getFormattedEntries method
        const formattedEntries = budget.getFormattedEntries();
  
        // Check if the method returns an array of properly formatted strings
        expect(formattedEntries).toEqual([
          "2024-06-17 | other | 10 €",
          "2024-06-17 | salary | 3456 €",
          "2024-06-17 | food | -100 €",
          "2024-06-17 | food | -99 €",
        ]);
    });
    it ("should use the 'forEach()' method to iterate over the entries array", () => {
        const budget = new Budget();
        spyOn(budget.entries, "forEach").and.callThrough();
        budget.getFormattedEntries();
        expect(budget.entries.forEach).toHaveBeenCalled();
        expect(budget.entries.forEach).toHaveBeenCalledWith(
          jasmine.any(Function)
        );
      });
})