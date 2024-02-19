describe("getTotal", () => {
  it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getTotal).toBeDefined();
  });
  it("should take 1 arguments", () => {
    const budget = new Budget();
    expect(budget.getTotal.length).toEqual(1);
  });

  it("should return the total amount of all entries with the given type income", () => {
    const budget = new Budget();
    const income1 = new Income("2024-06-17", 100, "food");
    const income2 = new Income("2024-06-17", 200, "food");
    budget.addEntry(income1);
    budget.addEntry(income2);
    expect(budget.getTotal("income")).toEqual(300);
  });

  it("should return the total amount of all entries with the given type expense", () => {
    const budget = new Budget();
    const expense1 = new Expense("2024-06-17", 100, "food", true);
    const expense2 = new Expense("2024-06-17", 300, "food", false);
    budget.addEntry(expense1);
    budget.addEntry(expense2);
    expect(budget.getTotal("expense")).toEqual(400);
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
    budget.getTotal();
    expect(budget.entries.forEach).toHaveBeenCalled();
    expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
  });
});
