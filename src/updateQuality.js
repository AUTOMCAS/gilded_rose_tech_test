const ItemPropertyModifier = require("./itemPropertyModifier");
const itemPropertyModifier = new ItemPropertyModifier()

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          this.updateSulfuras(item);
          break;
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePass(item);
          break;
        default:
          this.updateStandardItem(item);
      }
      if (item.name == "Sulfuras, Hand of Ragnaros") return;
      itemPropertyModifier.decreaseSellIn(item);
    });

    return this.items;
  }

  updateSulfuras(item) {
    itemPropertyModifier.increaseQuality(item);
  }

  updateStandardItem(item) {
    if (item.quality > 0) {
      itemPropertyModifier.reduceQuality(item);
    }

    if (item.sellIn < 0) {
      itemPropertyModifier.reduceQuality(item);
    }
  }

  updateAgedBrie(item) {
    itemPropertyModifier.increaseQuality(item);
  }

  updateBackstagePass(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    itemPropertyModifier.increaseQuality(item);

    if (item.sellIn < 11) {
      itemPropertyModifier.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      itemPropertyModifier.increaseQuality(item);
    }
  }
}

module.exports = Shop;
