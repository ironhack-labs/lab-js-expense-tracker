/*
describe("getTotal", function() {
    it("should be defined", function() {
        const total = new getTotal();
        expect(total.getTotal).toBeDefined();
    });
    
    it("should take 1 argument(a string with the type of entry", function() {
        const total = new getTotal();
        expect(total.getTotal.length).toEqual(1);   
    });

    it("should return the total amount of all entries with the given type", function() {
        const total = new getTotal();
        const income1 = new Income(1000);
        const income2 = new Income(1000);
        const expense1 = new Expense(500);
        const expense2 = new Expense(500);
        expect(total.getTotal()).toEqual(3000);
    });

    it("should use the 'forEach()' method to iterate over the entries array", function() {
        const total = new getTotal();
        spyOn(total.entries, "forEach").and.callThrough();
        total.getTotal();
        expect(total.entries.forEach).toHaveBeenCalled();
        expect(total.entries.forEach).toHaveBeenCalledWith(
          jasmine.any(Function)
        );
      });
   
    
});
*/