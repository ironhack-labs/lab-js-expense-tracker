describe("getTotal", () => {
  it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getTotal).toBeDefined();
  });
  it("should take one argument", () => {
    const budget = new Budget();
    expect(budget.getTotal.length).toEqual(1);
  });

  it('should return the total income of all "income" entries', () => {
    const budget = new Budget();
    const income1 = new Income("2024-06-17", 100, "food");
    const income2 = new Income("2024-06-17", 200, "food");
    const expense = new Expense("2024-06-17", 100, "food", true);

    budget.addEntry(income1);
    budget.addEntry(income2);
    budget.addEntry(expense);

    expect(budget.getTotalIncome()).toEqual(300);
  });

  it("should use the 'forEach()' method to iterate over the entries array", () => {
    const budget = new Budget();
    spyOn(budget.entries, "forEach").and.callThrough();
    budget.getTotalIncome();
    expect(budget.entries.forEach).toHaveBeenCalled();
    expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
  });
});
