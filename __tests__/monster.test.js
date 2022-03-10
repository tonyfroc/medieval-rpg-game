import { TestScheduler } from "jest";
import Monster from "../src/js/monster.js";

describe("New Monster", () => {
  test("Should correctly create a Monster object", () => {
    const monster = new Monster();
    expect(monster.type).toEqual(['Dragon', 'Kraken', 'Undead']);
    expect(monster.health).toEqual(1000);
    expect(monster.baseDmg).toEqual(250);
  });
  test("Should assign a random monster and ensure the length of the returned monster is 6", () => {
    const monster = new Monster();
    monster.assignType();
    expect(monster.type.length).toEqual(6);
  });

});