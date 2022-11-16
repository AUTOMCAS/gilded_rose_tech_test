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
        const items = [new Item("+5 Dexterity Vest", 10, 20)];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].name).toBe("+5 Dexterity Vest");
      });

      test("Item quality is reduced by 1 for standard item", () => {
        const items = [new Item("+5 Dexterity Vest", 10, 20)];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].quality).toBe(19);
      });

      test("Item sell by is reduced by 1 for standard item", () => {
        const items = [new Item("+5 Dexterity Vest", 10, 20)];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].sellIn).toBe(9);
      });

      test("After sell by has past, item quality by is reduced by 2 for standard item", () => {
        const items = [new Item("+5 Dexterity Vest", 0, 20)];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].quality).toBe(18);
      });

      test("Item quality by is never negative for standard item", () => {
        const items = [new Item("+5 Dexterity Vest", 0, 1)];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].quality).toBe(0);
      });

      test("Item quality by is never negative for any item", () => {
        const items= [
          new Item("+5 Dexterity Vest", 10, 0),
          new Item("Aged Brie", 2, 0),
          new Item("Sulfuras, Hand of Ragnaros", 0, 0),
          new Item("Backstage passes to a TAFKAL80ETC concert", 15, 0),
        ];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        result = returnedItems.forEach( (item) => {
          expect(item.quality).toBeGreaterThanOrEqual(0)
        })
      });

      test("'Aged Brie' increases in quality over time", () => {
        const items = [new Item("Aged Brie", 2, 0),];
        const gildedRose = new Shop(items);
        const returnedItems = gildedRose.updateQuality();

        expect(returnedItems[0].quality).toBe(1);
      });
    });
  });
});
