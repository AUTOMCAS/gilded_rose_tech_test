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

      if (
        item.name != "Aged Brie" &&
        item.name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            this.reduceQuality(item);
          }
        }
      } else {
        if (item.quality < 50) {
          this.increaseQuality(item);
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                this.increaseQuality(item);
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                this.increaseQuality(item);
              }
            }
          }
        }
      }

      item.sellIn = item.sellIn - 1;

      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
              this.reduceQuality(item);
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            this.increaseQuality(item);
          }
        }
      }
    });

    return this.items;
  }

  reduceQuality(item) {
    item.quality = item.quality - 1;
  }

  increaseQuality(item) {
    item.quality = item.quality + 1;
  }

  updateSulfuras(item) {
    if (item.quality < 50) {
      this.increaseQuality(item);
    }
  }

  updateAgedBrie(item) {
    this.increaseQuality(item);
    item.sellIn = item.sellIn - 1;
  }
}

module.exports = Shop;
