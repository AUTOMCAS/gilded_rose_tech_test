class ItemPropertyModifier {

  reduceQuality(item) {
    item.quality = item.quality - 1;
    return item
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    return item
  }

  decreaseSellIn(item) {
    item.sellIn = item.sellIn - 1;
    return item
  }
}


module.exports = ItemPropertyModifier;