const ItemPropertyModifier = require("../src/itemPropertyModifier");
const Item = require("../src/item");

describe("ItemPropertyModifier", () => {
  describe("reduceQuality()", () => {
    test("reduces quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      const itemPropertyModifier = new ItemPropertyModifier()

      const modifiedItem = itemPropertyModifier.reduceQuality(item);

      expect(modifiedItem.quality).toBe(19);
    });
  });

  describe("increaseQuality()", () => {
    test("increases quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      const itemPropertyModifier = new ItemPropertyModifier()

      const modifiedItem = itemPropertyModifier.increaseQuality(item);

      expect(modifiedItem.quality).toBe(21);
    });

    test("quality cannot be increased past 50", () => {
      const item = new Item("+5 Dexterity Vest", 10, 50);
      const itemPropertyModifier = new ItemPropertyModifier()

      const modifiedItem = itemPropertyModifier.increaseQuality(item);

      expect(modifiedItem.quality).toBe(50);
    });

    describe("decreaseSellIn()", () => {
      test("decrease sellIn by 1", () => {
        const item = new Item("+5 Dexterity Vest", 10, 20);
        const itemPropertyModifier = new ItemPropertyModifier()

        const modifiedItem = itemPropertyModifier.decreaseSellIn(item);

        expect(modifiedItem.sellIn).toBe(9);
      });
    });
  });
});
