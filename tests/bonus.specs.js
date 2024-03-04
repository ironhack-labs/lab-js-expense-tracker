describe("getTotal", () => {
  it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getTotal).toBeDefined();
  });
  it("should take 1 argument (a string with the type of entry)", () => {
    const budget = new Budget();
    expect(budget.getTotal.length).toEqual(1);
    // how to expect only a string?
  });
  it("should return 0 if there are no entries", () => {
    const budget = new Budget();
    const income1 = new Income("2024-06-17", 100, "food");
    const income2 = new Income("2024-06-17", 200, "food");
    const expense = new Expense("2024-06-17", 100, "food", true);

    expect(budget.getTotal("income").toEqual(0));
  });
  it("should return the total amount of all entries with the given type", () => {
    const budget = new Budget();
    const income1 = new Income("2024-06-17", 100, "food");
    const income2 = new Income("2024-06-17", 200, "food");
    const expense = new Expense("2024-06-17", 100, "food", true);
    budget.addEntry(income1);
    budget.addEntry(income2);
    budget.addEntry(expense);

    expect(budget.getTotal("income").toEqual(300));
  });
});
