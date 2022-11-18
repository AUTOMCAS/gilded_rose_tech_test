const ItemPropertyModifier = require("./itemPropertyModifier");
const ItemUpdater = require("./itemUpdater");

const itemUpdater = new ItemUpdater
const itemPropertyModifier = new ItemPropertyModifier()

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          itemUpdater.sulfuras(item);
          break;
        case "Aged Brie":
          itemUpdater.agedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          itemUpdater.backstagePass(item);
          break;
        default:
          itemUpdater.standardItem(item);
      }
      if (item.name == "Sulfuras, Hand of Ragnaros") return;
      itemPropertyModifier.decreaseSellIn(item);
    });

    return this.items;
  }

}

module.exports = Shop;
