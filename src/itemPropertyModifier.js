class ItemPropertyModifier {

  reduceQuality(item, quantity) {
    item.quality = item.quality - quantity;
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