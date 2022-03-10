export default class Monster {
  constructor() {
    this.type = ["Dragon", "Kraken", "Undead"];
    this.health = 1000;
    this.baseDmg = 250;
  }
  assignType() {
    this.type = this.type[(Math.random() * this.type.length) | 0];
  }
  // attack(character) {

  // }
}
