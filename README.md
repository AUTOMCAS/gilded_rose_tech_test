# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

- Start with 2 classes in a single file with no tests.
- These classes function but have poor code quality.
- Write passing tests to check each part of the shops functionality.
- Refactor using further TDD and make the code as clean as possible.
- End result should make it easy to add functionality for further items.


[Original brief](https://github.com/makersacademy/course/blob/main/individual_challenges/gilded_rose.md)


## Setup

This guidance assumes you have npm and nvm installed and are confident in pulling this repository.

Install node using nvm if you do not have it:

```
$ nvm install node
$ nvm use node
```

Install dependencies:

```bash
# From within the project directory:
npm install
```

## Testing

```bash
# Run tests
npm test

# To run all tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Running the code

From within the project directory, copy and paste the below into the terminal:

```bash
node test/texttest_fixture.js
```

Example of what should be displayed:

```bash
Welcome to the Gilded rose!

-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest, 10, 20
Aged Brie, 2, 0
Elixir of the Mongoose, 5, 7
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 15, 20
Backstage passes to a TAFKAL80ETC concert, 10, 49
Backstage passes to a TAFKAL80ETC concert, 5, 49
Conjured Mana Cake, 3, 6

-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest, 9, 19
Aged Brie, 1, 1
Elixir of the Mongoose, 4, 6
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 14, 21
Backstage passes to a TAFKAL80ETC concert, 9, 50
Backstage passes to a TAFKAL80ETC concert, 4, 50
Conjured Mana Cake, 2, 4
```

For a more interactive approach:
From the main directory start node REPL:
```bash
node
```
Copy and paste the below code to setup shop. Feel free to change the item properties.
Item formate is: `name, sellIn, quality`
```bash
const Shop = require("./src/shop");
const Item = require("./src/item");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Conjured Mana Cake", 3, 6),
];

const gildedRose = new Shop(items);
items.forEach((item) =>
  console.log(item) 
);
```
To simulate a day passing and the items updating paste:

```bash
gildedRose.updateQuality();
```
