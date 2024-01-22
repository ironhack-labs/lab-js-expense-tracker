/*  */


describe("getTotal", () => {
    it("should be defined", () => {
        const total = new Budget();
        expect(total.getTotal).toBeDefined();
    });
    it("should take 1 argument (a string with the type of entry)", () => {
        const total = new Budget();
        expect(total.getTotal.length).toEqual(1);
    });
    it("should return the total amount (number) of all entries with the given type", () => {
        let total = new Budget();
        total.addEntry({ type: 'expense', amount: 50 });
        total.addEntry({ type: 'income', amount: 200 });
        expect(total.getTotal('expense')).toEqual(50);
        expect(total.getTotal('income')).toEqual(200);
    });
    it("should use the forEach() method to iterate over the entries array", ()=>{
        const budget = new Budget();
        spyOn(budget.entries, "forEach").and.callThrough();
        budget.getTotalIncome();
        expect(budget.entries.forEach).toHaveBeenCalled();
        expect(budget.entries.forEach).toHaveBeenCalledWith(
            jasmine.any(Function)
      );
    })
});
