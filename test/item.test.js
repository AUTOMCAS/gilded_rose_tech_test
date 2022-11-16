const Item = require("../src/item");

describe("Item", () => {
  test("item has correct properties", () => {
    const item = new Item("+5 Dexterity Vest", 10, 20);

    expect(item.name).toBe("+5 Dexterity Vest");
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(20);
  });
});
