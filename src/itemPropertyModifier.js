class ItemPropertyModifier {

  reduceQuality(item, quantity) {
    item.quality = item.quality - quantity;
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  decreaseSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }
}


module.exports = ItemPropertyModifier;