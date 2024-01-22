describe("Budget", () => {
  describe("getFormattedEntries", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotalExpense).toBeDefined();
    });

    it("should take no arguments", () => {
      const budget = new Budget();
      expect(budget.getTotalExpense.length).toEqual(0);
    });

    it("should return an array of strings with the formatted entries", () => {
      const budget = new Budget();
      const income = new Income("2024-06-17", 100, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);
      budget.addEntry(income);
      budget.addEntry(expense);
      expect(budget.getFormattedEntries()).toEqual([
        "2024-06-17 | food | +100 €",
        "2024-06-17 | food | -100 €",
      ]);
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, "forEach").and.callThrough();
      budget.getTotalExpense();
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });
  });
});
