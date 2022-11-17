class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (item.name == "Sulfuras, Hand of Ragnaros") {
        this.updateSulfuras(item);
        return;
      }

      if (item.name == "Aged Brie") {
        this.updateAgedBrie(item);
        return;
      }

      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePass(item);
        return;
      }
      this.updateStandardItem(item);
    });

    return this.items;
  }

  reduceQuality(item) {
    item.quality = item.quality - 1;
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }

  decreaseSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

  updateSulfuras(item) {
    this.increaseQuality(item);
  }

  updateStandardItem(item) {
    if (item.quality > 0) {
      this.reduceQuality(item);
    }

    this.decreaseSellIn(item);

    if (item.sellIn < 0) {
      this.reduceQuality(item);
    }
  }

  updateAgedBrie(item) {
    this.increaseQuality(item);

    this.decreaseSellIn(item);
  }

  updateBackstagePass(item) {
    this.increaseQuality(item);
    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }

    this.decreaseSellIn(item);

    if (item.sellIn < 0) {
      item.quality = 0;
    }
  }
}

module.exports = Shop;
