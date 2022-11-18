const ItemModifier = require("../src/itemModifier");
const Item = require("../src/item");

const itemModifier = new ItemModifier()

describe("ItemModifier", () => {
  describe("reduceQuality()", () => {
    test("reduces quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);

      itemModifier.reduceQuality(item, 1);

      expect(item.quality).toBe(19);
    });

    test("reduces quality by 2", () => {
      const item = new Item("Conjured Mana Cake", 3, 6);

      itemModifier.reduceQuality(item, 2);

      expect(item.quality).toBe(4);
    });
  });

  describe("increaseQuality()", () => {
    test("increases quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);

      itemModifier.increaseQuality(item);

      expect(item.quality).toBe(21);
    });

    test("quality cannot be increased past 50", () => {
      const item = new Item("+5 Dexterity Vest", 10, 50);

      itemModifier.increaseQuality(item);

      expect(item.quality).toBe(50);
    });

    describe("decreaseSellIn()", () => {
      test("decrease sellIn by 1", () => {
        const item = new Item("+5 Dexterity Vest", 10, 20);

        itemModifier.decreaseSellIn(item);

        expect(item.sellIn).toBe(9);
      });
    });
  });
});
