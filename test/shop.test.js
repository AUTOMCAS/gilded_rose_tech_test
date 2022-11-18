const Shop = require("../src/shop");
const Item = require("../src/item");

describe("Shop", () => {
  describe("updateQuality()", () => {
    test("returns an item", () => {
      const items = [new Item("+5 Dexterity Vest", 10, 20)];
      const gildedRose = new Shop(items);
      const returnedItems = gildedRose.updateQuality();

      expect(returnedItems[0].name).toBe("+5 Dexterity Vest");
    });

    test("Item quality by is never negative for any item type", () => {
      const items = [
        new Item("+5 Dexterity Vest", 10, 0),
        new Item("Aged Brie", 2, 0),
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 0),
        new Item("Sulfuras, Hand of Ragnaros", 0, 0),
      ];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();

      const [returnedStandardItem, returnedAgedBrie, returnedBackstagePass, returnedSulfuras] = returnedItems;
      expect(returnedStandardItem.quality).toBeGreaterThanOrEqual(0);
      expect(returnedAgedBrie.quality).toBeGreaterThanOrEqual(0);
      expect(returnedBackstagePass.quality).toBeGreaterThanOrEqual(0);
      expect(returnedSulfuras.quality).toBeGreaterThanOrEqual(0);
    });

    test("sellIn is reduced by 1 each day for all items apart from Sulfuras", () => {
      const items = [
        new Item("+5 Dexterity Vest", 2, 20),
        new Item("Aged Brie", 2, 0),
        new Item("Backstage passes to a TAFKAL80ETC concert", 2, 20),
      ];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();
      const [returnedStandardItem, returnedAgedBrie, returnedBackstagePass] = returnedItems;
      expect(returnedStandardItem.sellIn).toBe(1);
      expect(returnedAgedBrie.sellIn).toBe(1);
      expect(returnedBackstagePass.sellIn).toBe(1);
    });

    test("sellIn is not reduced for Sulfuras", () => {
      const items = [
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ];
      const gildedRose = new Shop(items);

      const returnedSulfuras1 = gildedRose.updateQuality()[0];
      const returnedSulfuras2 = gildedRose.updateQuality()[1];

      expect(returnedSulfuras1.sellIn).toBe(0);
      expect(returnedSulfuras2.sellIn).toBe(-1);
    });

    test("Updates Sulfuras when quality is below 50", () => {
      const items = [new Item("Sulfuras, Hand of Ragnaros", 0, 49)];

      const gildedRose = new Shop(items);
      const returnedSulfuras = gildedRose.updateQuality()[0];

      expect(returnedSulfuras.quality).toBe(50);
    });

    test("updates Aged Brie", () => {
      const items = [new Item("Aged Brie", 2, 0)];
      const gildedRose = new Shop(items);

      const agedBrie = gildedRose.updateQuality()[0];
      expect(agedBrie.sellIn).toBe(1);
      expect(agedBrie.quality).toBe(1);
    });

    test("updates Aged Brie when quality is more than or equal to 50", () => {
      const items = [new Item("Aged Brie", 2, 50)];
      const gildedRose = new Shop(items);

      const returnedAgedBrie = gildedRose.updateQuality()[0];
      expect(returnedAgedBrie.sellIn).toBe(1);
    });

    test("Updates backstage pass when sell by is more than 10", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 12, 6),
      ];
      const gildedRose = new Shop(items);

      const returnedBackstagePass = gildedRose.updateQuality()[0];

      expect(returnedBackstagePass.quality).toBe(7);
    });

    test("Updates backstage pass when sell by is less than or equal to 10", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 6),
      ];
      const gildedRose = new Shop(items);

      const returnedBackstagePass = gildedRose.updateQuality()[0];

      expect(returnedBackstagePass.quality).toBe(8);
    });

    test("Updates backstage pass when sell by is less than or equal to  5", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6),
      ];
      const gildedRose = new Shop(items);

      const returnedBackstagePass = gildedRose.updateQuality()[0];

      expect(returnedBackstagePass.quality).toBe(9);
    });

    test("Updates backstage pass when when sell by has passed ", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 6),
      ];
      const gildedRose = new Shop(items);

      const returnedBackstagePass = gildedRose.updateQuality()[0];

      expect(returnedBackstagePass.quality).toBe(0);
    });

    test("Updates backstage pass of a different type when sell by is more than 10", () => {
      const items = [new Item("Backstage passes to a Nyhm concert", 12, 6)];
      const gildedRose = new Shop(items);

      const returnedBackstagePass = gildedRose.updateQuality()[0];

      expect(returnedBackstagePass.quality).toBe(7);
    });

    test("Updates a standard item", () => {
      const items = [new Item("+5 Dexterity Vest", 10, 20)];
      const gildedRose = new Shop(items);

      const returnedStandardItem = gildedRose.updateQuality()[0];

      expect(returnedStandardItem.quality).toBe(19);
      expect(returnedStandardItem.sellIn).toBe(9);
    });

  });
});

