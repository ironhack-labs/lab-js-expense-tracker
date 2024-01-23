describe("getTotal", () => {
it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getTotal).toBeDefined();
});

it("should take one argument", () => {
    const budget = new Budget();
    expect(budget.getTotal.length).toEqual(1);
});

it("should return the total amount (number) of all entries of the given type", () => {
    const budget1 = new Budget();
    const budget2 = new Budget();
    const income1 = new Income("2024-06-17", 200, "food");
    const income2 = new Income("2024-06-17", 200, "food");
    const expense1 = new Expense("2024-06-17", 100, "food", true);
    const expense2 = new Expense("2024-06-17", 500, "food", false);

    budget1.addEntry(income1);
    budget1.addEntry(income2);
    budget1.addEntry(expense1);
    budget1.addEntry(expense2);
    expect(budget1.getTotal("income")).toEqual(400);

    budget2.addEntry(income1);
    budget2.addEntry(expense1);
    budget2.addEntry(expense2);
    expect(budget2.getTotal("expense")).toEqual(600);
  }); 
});
describe("getFormattedEntries", () => {
    it("should be defined", () => {
        const budget = new Budget();
        expect(budget.getFormattedEntries).toBeDefined();
    });
    
    it("should take one argument", () => {
        const budget = new Budget();
        expect(budget.getFormattedEntries.length).toEqual(0);
    });
    
    it("should return an array of formatted entries", () => {
        const budget1 = new Budget();
        const budget2 = new Budget();
        const income1 = new Income("2024-06-17", 200, "food");
        const income2 = new Income("2024-06-17", 200, "food");
        const expense1 = new Expense("2024-06-17", 100, "food", true);
        const expense2 = new Expense("2024-06-17", 500, "food", false);
    
        budget1.addEntry(income1);
        budget1.addEntry(income2);
        budget1.addEntry(expense1);
        budget1.addEntry(expense2);

        expect(budget1.getFormattedEntries()).toEqual(['2024-06-17 | food | +200 €', '2024-06-17 | food | +200 €', '2024-06-17 | food | -100 €', '2024-06-17 | food | -500 €']);
    
        budget2.addEntry(income1);
        budget2.addEntry(expense1);
        budget2.addEntry(expense2);
        expect(budget2.getFormattedEntries()).toEqual(['2024-06-17 | food | +200 €', '2024-06-17 | food | -100 €', '2024-06-17 | food | -500 €']);
      }); 
    });