import { TestScheduler } from "jest";
import Character from "../src/js/character.js";
import Monster from "../src/js/monster.js";


describe("New Character", () => {
  test("Should correctly create a Knight object with exp, lvl, str, int and weapon", () => {
    const knight = new Character("Knight", 1, "sword");
    expect(knight.type).toEqual("Knight");
    expect(knight.lvl).toEqual(1);
    expect(knight.weapon).toEqual("sword");
  });
  test("If the type of character is a Knight, calcStats() adds str + 10, int + 5, dmg + 150, def + 100", () => {
    const knight = new Character("Knight", 0, "sword");
    knight.calcStats();
    expect(knight.str).toEqual(10);
    expect(knight.int).toEqual(5);
    expect(knight.baseDmg).toEqual(150);
    expect(knight.def).toEqual(100);
  });
  test("If the type of character is a Mage, calcStats()str + 5, int + 10, baseDmg + 100, def + 50", () => {
    const mage = new Character("Mage", 0, "mystic staff");
    mage.calcStats();
    expect(mage.str).toEqual(5);
    expect(mage.int).toEqual(10);
    expect(mage.baseDmg).toEqual(100);
    expect(mage.def).toEqual(50);
  });
  test("If the type of character is a rogue, calcStats() str + 5, int + 5, baseDmg + 125, def + 75" , () => {
    const rogue = new Character("Rogue", 0, "fire");
    rogue.calcStats();
    expect(rogue.str).toEqual(5);
    expect(rogue.int).toEqual(5);
    expect(rogue.baseDmg).toEqual(125);
    expect(rogue.def).toEqual(75);
  });
  test("Should add a random item from the items property to the randomItem property when calling assignItem" , () => {
    const rogue = new Character("Rogue", 0, "fire");
    const items = ['Book of Intelligence', 'Book of Strength', 'Book of Balance', 'Book of Power', 'Book of Defense']
    rogue.assignItem();
    expect(rogue.randomItem).toBeDefined;
  });
  test("Should correctly update stats of the Knight class depending on what item is randomly assigned" , () => {
    const knight = new Character("Knight", 0, "sword");
    knight.calcStats();
    if (knight.randomItem === "Book of Power") { 
      expect(knight.baseDmg).toEqual(250)
    } else if (knight.randomItem === "Book of Intelligence") { 
      expect(knight.int).toEqual(15)
    } else if (knight.randomItem === "Book of Strength") {
      expect(knight.str).toEqual(20)
    } else if (knight.randomItem === "Book of Defense") {
      expect(knight.def).toEqual(150)
    } else if (knight.randomItem === "Book of Balance") {
      expect(knight.int).toEqual(10);
      expect(knight.str).toEqual(15);
    }
  });
  test("Should correctly update stats of the Mage class depending on what item is randomly assigned" , () => {
    const mage = new Character("Mage", 0, "staff");
    mage.calcStats();
    if (mage.randomItem === "Book of Power") { 
      expect(mage.baseDmg).toEqual(200)
    } else if (mage.randomItem === "Book of Intelligence") { 
      expect(mage.int).toEqual(20)
    } else if (mage.randomItem === "Book of Strength") {
      expect(mage.str).toEqual(15)
    } else if (mage.randomItem === "Book of Defense") {
      expect(mage.def).toEqual(100)
    } else if (mage.randomItem === "Book of Balance") {
      expect(mage.int).toEqual(15);
      expect(mage.str).toEqual(10);
    }
  });
  test("Should correctly update stats of the Rogue class depending on what item is randomly assigned" , () => {
    const rogue = new Character("Rogue", 0, "staff");
    rogue.calcStats();
    if (rogue.randomItem === "Book of Power") { 
      expect(rogue.baseDmg).toEqual(200)
    } else if (rogue.randomItem === "Book of Intelligence") { 
      expect(rogue.int).toEqual(15)
    } else if (rogue.randomItem === "Book of Strength") {
      expect(rogue.str).toEqual(15)
    } else if (rogue.randomItem === "Book of Defense") {
      expect(rogue.def).toEqual(125)
    } else if (rogue.randomItem === "Book of Balance") {
      expect(rogue.int).toEqual(10);
      expect(rogue.str).toEqual(10);
    }
  });
  test("Should change the value of health when calling the attack() method", () => {
    const knight = new Character("Knight", 1, "sword");
    const monster = new Monster();
    knight.calcStats(),
    knight.assignItem();
    knight.attack('string');
    expect(knight.health).toEqual(501)
    expect(monster.health).toEqual(999)
  });
});


// monster = 1000
// character = 99