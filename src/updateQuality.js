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

      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            this.reduceQuality(item);
          }
        }
      } else {
        if (item.quality < 50) {
          this.increaseQuality(item, 1);
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                this.increaseQuality(item, 1);
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                this.increaseQuality(item, 1);
              }
            }
          }
        }
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            this.reduceQuality(item);
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      }
    });

    return this.items;
  }

  reduceQuality(item) {
    item.quality = item.quality - 1;
  }

  increaseQuality(item, amount) {
    item.quality = item.quality + amount;
  }

  decreaseSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

  updateSulfuras(item) {
    if (item.quality < 50) {
      this.increaseQuality(item, 1);
    }
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      this.increaseQuality(item, 1);
      this.decreaseSellIn(item);
    }
  }

  updateBackstagePass(item) {
    if (item.sellIn < 11) {
      this.increaseQuality(item, 2);
    }

    this.decreaseSellIn(item);
  }
}

module.exports = Shop;
