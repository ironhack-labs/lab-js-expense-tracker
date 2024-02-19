describe("Bonus", () => {
  const budget = new Budget();
  describe("getTotal", () => {
    it("should be defined", () => {
      expect(budget.getTotal).toBeDefined();
    });
    it("should take 1 argument (a string with the type of entry)", () => {
      expect(budget.getTotal.length).toBe(1);
    });
    it("should return the total amount (number) of all entries with the given type", () => {
      const income1 = new Income("2024-06-17", 100, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);

      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense);

      expect(budget.getTotal("expense")).toBe(100);
      expect(budget.getTotal("income")).toBe(300);
    });
  });
});
