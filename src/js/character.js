export default class Character {
  constructor(type, lvl, weapon) {
    this.type = type; // three different types - Knight, Mage, Rogue
    this.lvl = lvl;
    this.weapon = weapon; // staff, scepter, trident // sword, greatsword, two-handed sword // fire, ice, lightning
    this.health = 500;
    this.str = 0;
    this.int = 0;
    this.baseDmg = 0;
    this.def = 0;
    // this.monster = {
    //   type: "Dragon",
    //   health: 1000,
    //   baseDmg: 250
    // }
    this.items = [
      "Book of Intelligence",
      "Book of Strength",
      "Book of Balance",
      "Book of Power",
      "Book of Defense",
    ];
  }

  calcStats() {
    if (this.type === "Knight") {
      this.str = 10;
      this.int = 5;
      this.baseDmg = 150;
      this.def = 100;
    } else if (this.type === "Mage") {
      this.str = 5;
      this.int = 10;
      this.baseDmg = 100;
      this.def = 50;
    } else if (this.type === "Rogue") {
      this.str = 5;
      this.int = 5;
      this.baseDmg = 125;
      this.def = 75;
    }
  }
  assignItem() {
    this.randomItem = this.items[(Math.random() * this.items.length) | 0];
    if (this.randomItem === "Book of Intelligence") {
      this.int = this.int + 10;
    } else if (this.randomItem === "Book of Strength") {
      this.str = this.int + 10;
    } else if (this.randomItem === "Book of Balance") {
      this.str = this.str + 5;
      this.int = this.int + 5;
    } else if (this.randomItem === "Book of Power") {
      this.baseDmg = this.baseDmg + 100;
    } else {
      this.def = this.def + 50;
    }
  }
  attack(monster) {
    this.health += 1; 
    monster.health -= 1;
  }
}

// const monster = {
//   "type": ["Three Headed Dragon", "Diabolical Demon", "Ghoulish Goblin", "Zombie Bear"],
//   "health": 1000,
//   "baseDmg": 200,
// }
//Attack Object Constructor
// function Attack(name, damage){
//   this.name = name;
//   this.dmg = damage;
//   //Attack function
//   this.attack = function(){
//     alert("Attack with " + this.name + "!");
//     var enemyHP =- this.dmg;
//     alert("The enemy still has " + enemyHP + " left!");
//   }
//   }

//   //The move to use
// var moveA = new Attack("Punch", 2);

// //The necessary variable
// var enemyHP = 23;

// //Attack with our attack!
// moveA.attack();