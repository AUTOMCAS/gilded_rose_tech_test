const ItemPropertyModifier = require("../src/itemPropertyModifier");
const Item = require("../src/item");

const itemPropertyModifier = new ItemPropertyModifier()

describe("ItemPropertyModifier", () => {
  describe("reduceQuality()", () => {
    test("reduces quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);

      const modifiedItem = itemPropertyModifier.reduceQuality(item, 1);

      expect(modifiedItem.quality).toBe(19);
    });
    
    test("reduces quality by 2", () => {
      const item = new Item("Conjured Mana Cake", 3, 6);

      const modifiedItem = itemPropertyModifier.reduceQuality(item, 2);

      expect(modifiedItem.quality).toBe(4);
    });
  });

  describe("increaseQuality()", () => {
    test("increases quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);

      const modifiedItem = itemPropertyModifier.increaseQuality(item);

      expect(modifiedItem.quality).toBe(21);
    });

    test("quality cannot be increased past 50", () => {
      const item = new Item("+5 Dexterity Vest", 10, 50);

      const modifiedItem = itemPropertyModifier.increaseQuality(item);

      expect(modifiedItem.quality).toBe(50);
    });

    describe("decreaseSellIn()", () => {
      test("decrease sellIn by 1", () => {
        const item = new Item("+5 Dexterity Vest", 10, 20);

        const modifiedItem = itemPropertyModifier.decreaseSellIn(item);

        expect(modifiedItem.sellIn).toBe(9);
      });
    });
  });
});
