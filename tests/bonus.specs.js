describe("getTotal", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotalIncome).toBeDefined();
    });
    it("should take one argument", () => {
      const budget = new Budget();
      expect(budget.getTotal.length).toEqual(1);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotal()).toEqual(0);
    });

    it('should return the total amount of specified entry type', () => {
      const budget = new Budget();
      const income1 = new Income("2024-06-17", 100, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);

      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense);

      expect(budget.getTotal(`income`)).toEqual(300);
      expect(budget.getTotal(`expense`)).toEqual(100);
      
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, "forEach").and.callThrough();
      budget.getTotal('income');
      budget.getTotal('expense');
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });
  });

  describe("getFormattedEntries", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries).toBeDefined();
    });
    it("should take no arguments", () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries.length).toEqual(0);
    });

    it("should return an empty array if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries()).toEqual([]);
    });

    it('should return an array of formatted entries', () => {
      const budget = new Budget();
      const income1 = new Income("2024-06-17", 100, "food");
      const income2 = new Income("2024-06-17", 200, "food");
      const expense = new Expense("2024-06-17", 100, "food", true);

      budget.addEntry(income1);
      budget.addEntry(income2);
      budget.addEntry(expense);

      expect(budget.getFormattedEntries()).toEqual([
        `2024-06-17 | food | 100 €`,
        `2024-06-17 | food | 200 €`,
        `2024-06-17 | food | -100 €`
    ]);
      
    });
    
  });