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
      this.decreaseSellIn(item);
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

    if (item.sellIn < 0) {
      this.reduceQuality(item);
    }
  }

  updateAgedBrie(item) {
    this.increaseQuality(item);
  }

  updateBackstagePass(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
      return;
    }

    this.increaseQuality(item);

    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }

    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
  }
}

module.exports = Shop;
