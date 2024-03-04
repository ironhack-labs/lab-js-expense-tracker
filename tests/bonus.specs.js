describe("getTotal", () => {
  it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getTotal).toBeDefined();
  });
  it("should take one arguments", () => {
    const budget = new Budget();
    expect(budget.getTotal.length).toEqual(1);
  });

  it("should use the 'forEach()' method to iterate over the entries array", () => {
    const budget = new Budget();
    spyOn(budget.entries, "forEach").and.callThrough();
    budget.getTotal();
    expect(budget.entries.forEach).toHaveBeenCalled();
    expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
  });
});

describe("getFormattedEntries", () => {
  it("should be defined", () => {
    const budget = new Budget();
    expect(budget.getFormattedEntries).toBeDefined();
  });
  it("should take one arguments", () => {
    const budget = new Budget();
    expect(budget.getFormattedEntries.length).toEqual(0);
  });

  it("should use the 'forEach()' method to iterate over the entries array", () => {
    const budget = new Budget();
    spyOn(budget.entries, "forEach").and.callThrough();
    budget.getFormattedEntries();
    expect(budget.entries.forEach).toHaveBeenCalled();
    expect(budget.entries.forEach).toHaveBeenCalledWith(jasmine.any(Function));
  });
});
