// import $ from 'jquery';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Character from "./js/character.js";
import Monster from "../src/js/monster";


const knight = new Character("Knight", 0, "sword");
// knight.calcStats()
// knight.assignItem()
// console.log(knight.monster);

const monster = new Monster();
// console.log(monster, monster.type.length);
// const mage = new Character("Mage", 0, "staff");
// console.log(mage);
// mage.calcStats();
// console.log(mage);

knight.calcStats(),
knight.assignItem();
knight.attack();

// const dragon = new Character("Monster", 0, "fire")
// console.log(dragon);
// dragon.calcStats();
// console.log(dragon);



// type, lvl, weapon