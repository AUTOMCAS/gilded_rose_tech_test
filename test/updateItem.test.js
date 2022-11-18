const UpdateItem = require("../src/updateItem");
const Item = require("../src/item");

const updateItem = new UpdateItem

describe("updateItem", () => {
  describe("sulfuras()", () => {
    test("increases quality by 1 if quality is under 50", () => {
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 49);

      updateItem.sulfuras(item);

      expect(item.quality).toBe(50);
    });
  });

  describe("agedBrie()", () => {
    test("increases Aged Brie quality by 1", () => {
      const item = new Item("Aged Brie", 2, 0);

      updateItem.agedBrie(item);

      expect(item.quality).toBe(1);
    });
  });
  describe("backstagePass()", () => {
    test("quality increases by 1 when sellIn is more than 10", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 12, 6);
     
      updateItem.backstagePass(item);

      expect(item.quality).toBe(7);
    });

    test("quality increases by 2 when sellIn is less than or equal to 10", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 6);
     
      updateItem.backstagePass(item);

      expect(item.quality).toBe(8);
    });

    test("quality increases by 3 when sellIn is less than or equal to 5", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 6);
     
      updateItem.backstagePass(item);

      expect(item.quality).toBe(9);
    });

    test("quality reduces to 0 when sell in has passed ", () => {
      const item = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 6)

      updateItem.backstagePass(item);

      expect(item.quality).toBe(0);
    });
  });

  describe("standardItem()", () => {
    test("reduces standard item quality by 1", () => {
      const item = new Item("+5 Dexterity Vest", 10, 20);
      
      updateItem.standardItem(item);

      expect(item.quality).toBe(19);
    });

    test("Quality cannot become negative", () => {
      const item = new Item("+5 Dexterity Vest", 10, 0);
      
      updateItem.standardItem(item);

      expect(item.quality).toBe(0);
    });

    test("Quality degrades twice as fast when sellIn is less than 0", () => {
      const item = new Item("+5 Dexterity Vest", -1, 10);
      
      updateItem.standardItem(item);

      expect(item.quality).toBe(8);
    });
  });
});
