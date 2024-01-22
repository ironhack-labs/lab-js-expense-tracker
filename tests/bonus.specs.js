describe("getTotal", () => {
    it("should be defined", () => {
      const budget = new Budget();
      expect(budget.getTotal).toBeDefined();
    });
    it("should take 1 argument (type)", () => {
        const budget = new Budget();
        expect(budget.getTotal.length).toEqual(1);
    });

    it("should return 0 if there are no entries", () => {
      const budget = new Budget();
      expect(budget.getTotal()).toEqual(0);
    });

    it('should return the total amount (number) of all entries with the given type', () => {
      const budget = new Budget();
      const expense1 = new Expense("2024-06-17", 100, "food", true);
      const expense2 = new Expense("2024-06-17", 200, "food", false);
      const income = new Income("2024-06-17", 100, "food");
      budget.addEntry(expense1);
      budget.addEntry(expense2);
      budget.addEntry(income);
      const total = budget.getTotal('income');
      expect(total).toEqual(100);
      const total2= budget.getTotal('expense');
      expect(total2).toEqual(300);
    });

    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, "forEach").and.callThrough();
      budget.getTotal();
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(
        jasmine.any(Function)
      );
    });
  });


  describe('getFormattedEntries() method', () => {
    it('should be defined', () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries).toBeDefined();
    });
  
    it('should take 0 arguments', () => {
      const budget = new Budget();
      expect(budget.getFormattedEntries.length).toEqual(0);
    });
  
    it('should return an array of strings with the formatted entries', () => {
      const budget = new Budget();
      const expense = new Expense('2024-06-17', 100, 'food', true);
      const income = new Income('2024-06-17', 200, 'salary');
      budget.addEntry(expense);
      budget.addEntry(income);
      const formattedEntries = budget.getFormattedEntries();
      expect(Array.isArray(formattedEntries)).toBe(true);
      expect(formattedEntries.length).toEqual(2);
      expect(formattedEntries[0]).toEqual('2024-06-17 | food | -100 €');
      expect(formattedEntries[1]).toEqual('2024-06-17 | salary | +200 €');
    });
  
    it("should use the 'forEach()' method to iterate over the entries array", () => {
      const budget = new Budget();
      spyOn(budget.entries, 'forEach').and.callThrough();
      budget.getFormattedEntries();
      expect(budget.entries.forEach).toHaveBeenCalled();
      expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
    });
  });
  