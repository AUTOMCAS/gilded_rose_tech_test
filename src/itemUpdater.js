const ItemPropertyModifier = require("./itemPropertyModifier");
const itemPropertyModifier = new ItemPropertyModifier()

class itemUpdater{
  sulfuras(item) {
    itemPropertyModifier.increaseQuality(item);
  }

  agedBrie(item) {
    itemPropertyModifier.increaseQuality(item);
  }

  backstagePass(item) {
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

  conjuredItem(item) {
    itemPropertyModifier.reduceQuality(item)
    itemPropertyModifier.reduceQuality(item)
  }

  standardItem(item) {
    if (item.quality > 0) {
      itemPropertyModifier.reduceQuality(item);
    }

    if (item.sellIn < 0) {
      itemPropertyModifier.reduceQuality(item);
    }
  }
}

module.exports = itemUpdater