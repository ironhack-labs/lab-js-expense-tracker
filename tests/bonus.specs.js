describe("getTotal", () => {
  it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getTotal).toBeDefined();
  });
  it("should take 1 argument", () => {
    const budget = new Budget();
    expect(budget.getTotal.length).toEqual(1);
  });

  it("should return 0 if there are no entries", () => {
    const budget = new Budget();
    expect(budget.getTotal()).toEqual(0);
  });

  it("should return the total amount of all entries with the given type", () => {
    const budget = new Budget();
    const expense1 = new Expense("2024-06-17", 100, "food", true);
    const expense2 = new Expense("2024-06-17", 200, "food", false);
    const income = new Income("2024-06-17", 100, "food");
    budget.addEntry(expense1);
    budget.addEntry(expense2);
    budget.addEntry(income);
    expect(budget.getTotal("expense")).toEqual(300);
  });

  it("should use the 'forEach()' method to iterate over the entries array", () => {
    const budget = new Budget();
    spyOn(budget.entries, "forEach").and.callThrough();
    budget.getTotal();
    expect(budget.entries.forEach).toHaveBeenCalled();
    expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
  });
});

// describe("getFormattedEntries", () => {
//   it("should be defined", () => {
//     const budget = new Budget();
//     expect(budget.getFormattedEntries).toBeDefined();
//   });
//   it("should take no arguments", () => {
//     const budget = new Budget();
//     expect(budget.getFormattedEntries.length).toEqual(0);
//   });

//   it("should return an array of strings with the formatted entries", () => {
//     const budget = new Budget();
//     const expense1 = new Expense("2024-06-17", 100, "food", true);
//     const expense2 = new Expense("2024-06-17", 200, "food", false);
//     const income = new Income("2024-06-17", 100, "food");
//     budget.addEntry(expense1);
//     budget.addEntry(expense2);
//     budget.addEntry(income);
//     expect(budget.getFormattedEntries()).toEqual([
//       "2024-06-17 | FOOD | -100 €",
//       "2024-06-17 | FOOD | -200 €",
//       "2024-06-17 | FOOD | +100 €",
//     ]);
//   });

//   it("should use the 'forEach()' method to iterate over the entries array", () => {
//     const budget = new Budget();
//     spyOn(budget.entries, "forEach").and.callThrough();
//     budget.getFormattedEntries();
//     expect(budget.entries.forEach).toHaveBeenCalled();
//     expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
//   });
// });
