const ItemPropertyModifier = require("./itemPropertyModifier");
const ItemUpdater = require("./itemUpdater");

const itemUpdater = new ItemUpdater();
const itemPropertyModifier = new ItemPropertyModifier();

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name == "Sulfuras, Hand of Ragnaros") {
        itemUpdater.sulfuras(item);
        return;
      } else if (item.name == "Aged Brie") {
        itemUpdater.agedBrie(item);
      } else if (item.name.includes("Backstage pass")) {
        itemUpdater.backstagePass(item);
      } else if (item.name.includes("Conjured")) {
        itemUpdater.conjuredItem(item);
      } else {
        itemUpdater.standardItem(item);
      }

      itemPropertyModifier.decreaseSellIn(item);
    });

    return this.items;
  }
}

module.exports = Shop;
