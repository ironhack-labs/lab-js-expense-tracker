describe("Bonus: Iteration 5 | Get total by type", () => {
    describe("Budget - getTotal()", () => {
        it("should be a defined", () => {
            const budget = new Budget();
            expect(budget.getTotal).toBeDefined();
        });

        it("should take 1 argument (entryType)", () => {
            const budget = new Budget();
            expect(budget.getTotal.length).toEqual(1);
        });

        

        });
});