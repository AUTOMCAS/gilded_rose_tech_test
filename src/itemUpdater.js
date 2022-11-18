const ItemModifier = require("./itemModifier");
const itemModifier = new ItemModifier()

class itemUpdater{
  sulfuras(item) {
    itemModifier.increaseQuality(item);
  }

  agedBrie(item) {
    itemModifier.increaseQuality(item);
  }

  backstagePass(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    itemModifier.increaseQuality(item);

    if (item.sellIn < 11) {
      itemModifier.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      itemModifier.increaseQuality(item);
    }
  }

  conjuredItem(item) {
    itemModifier.reduceQuality(item, 2)
  }

  standardItem(item) {
    if (item.quality > 0) {
      itemModifier.reduceQuality(item, 1);
    }

    if (item.sellIn < 0) {
      itemModifier.reduceQuality(item, 1);
    }
  }
}

module.exports = itemUpdater