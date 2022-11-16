const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  describe("Item", () => {
    test("item has correct properties", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);

      expect(item.name).toBe("+5 Dexterity Vest");
      expect(item.sellIn).toBe(10);
      expect(item.quality).toBe(20);
    });
  });

  describe("Shop", () => {
    describe("updateQuality()", () => {
      test("returns an item", () => {
        const items = [new Item("+5 Dexterity Vest", 10, 20)]
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].name).toBe("+5 Dexterity Vest")
      });
    });
  });
});
