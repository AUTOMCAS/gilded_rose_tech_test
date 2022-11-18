const Shop = require("../src/updateQuality");
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
        new Item("Sulfuras, Hand of Ragnaros", 0, 0)
      ];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();

      const [standardItem, agedBrie, backstagePass, sulfuras] = returnedItems;
      expect(standardItem.quality).toBeGreaterThanOrEqual(0);
      expect(agedBrie.quality).toBeGreaterThanOrEqual(0);
      expect(backstagePass.quality).toBeGreaterThanOrEqual(0);
      expect(sulfuras.quality).toBeGreaterThanOrEqual(0);
    });

    test("sellIn is reduced by 1 each day for all items apart from Sulfuras", () => {
      const items = [
        new Item("+5 Dexterity Vest", 2, 20),
        new Item("Aged Brie", 2, 0),
        new Item("Backstage passes to a TAFKAL80ETC concert", 2, 20),
      ];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();
      const [standardItem, agedBrie, backstagePass] = returnedItems;
      expect(standardItem.sellIn).toBe(1);
      expect(agedBrie.sellIn).toBe(1);
      expect(backstagePass.sellIn).toBe(1);
    });

    test("reduces Aged Brie sellIn by 1 when quality is more than or equal to 50", () => {
      const items = [new Item("Aged Brie", 2, 50)];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();
      expect(returnedItems[0].sellIn).toBe(1);
    });

    test("sellIn is not reduced for Sulfuras", () => {
      const items = [
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();

      expect(returnedItems[0].sellIn).toBe(0);
      expect(returnedItems[1].sellIn).toBe(-1);
    });
  });

  describe("reduceQuality()", () => {
    test("reduces quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      const gildedRose = new Shop(item);

      gildedRose.reduceQuality(item);

      expect(item.quality).toBe(19);
    });
  });

  describe("increaseQuality()", () => {
    test("increases quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      const gildedRose = new Shop(item);

      gildedRose.increaseQuality(item);

      expect(item.quality).toBe(21);
    });

    test("quality cannot be increased past 50", () => {
      const item = new Item("+5 Dexterity Vest", 10, 50);
      const gildedRose = new Shop(item);

      gildedRose.increaseQuality(item);

      expect(item.quality).toBe(50);
    });
  });

  describe("updateSulfuras()", () => {
    test("increases quality by 1 if quality is under 50", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 49);
      const gildedRose = new Shop(item);

      gildedRose.updateSulfuras(item);

      expect(item.quality).toBe(50);
    });
  });

  describe("updateAgedBrie()", () => {
    test("increases Aged Brie quality by 1", () => {
      const item = new Item("Aged Brie", 2, 0);
      const gildedRose = new Shop(item);

      gildedRose.updateAgedBrie(item);

      expect(item.quality).toBe(1);
    });
  });

  describe("decreaseSellIn()", () => {
    test("decrease sellIn by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      const gildedRose = new Shop(item);

      gildedRose.decreaseSellIn(item);

      expect(item.sellIn).toBe(9);
    });
  });

  describe("updateBackstagePass()", () => {
    test("quality increases by 1 when sellIn is more than 10", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 12, 6);
      const gildedRose = new Shop(item);

      gildedRose.updateBackstagePass(item);

      expect(item.quality).toBe(7);
    });

    test("quality increases by 2 when sellIn is less than or equal to 10", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 6);
      const gildedRose = new Shop(item);

      gildedRose.updateBackstagePass(item);

      expect(item.quality).toBe(8);
    });

    test("quality increases by 3 when sellIn is less than or equal to 5", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6);
      const gildedRose = new Shop(item);

      gildedRose.updateBackstagePass(item);

      expect(item.quality).toBe(9);
    });

    test("quality reduces to 0 when sell in has passed ", () => {
      const items = [
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 6),
      ];
      const gildedRose = new Shop(items);

      const returnedItems = gildedRose.updateQuality();

      expect(returnedItems[0].quality).toBe(0);
    });
  });

  describe("updateStandardItem()", () => {
    test("reduces standard item quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      const gildedRose = new Shop(item);

      gildedRose.updateStandardItem(item);

      expect(item.quality).toBe(19);
    });

    test("Quality cannot become negative", () => {
      const item = new Item("+5 Dexterity Vest", 10, 0);
      const gildedRose = new Shop(item);

      gildedRose.updateStandardItem(item);

      expect(item.quality).toBe(0);
    });

    test("Quality degrades twice as fast when sellIn is less than 0", () => {
      const item = new Item("+5 Dexterity Vest", -1, 10);
      const gildedRose = new Shop(item);

      gildedRose.updateStandardItem(item);

      expect(item.quality).toBe(8);
    });
  });
});
