// Write your JS here
var hero = {
  name : 'The Dude',
  heroic : true,
  inventory : [],
  health : 10,
  weapon : {
        type : 'sword',
        damage : 2
    },
};

var returnHealth = document.getElementById("inn");
returnHealth.onclick = function() {
  rest(hero);
  return;
}
var pickUpDagger = document.getElementById("dagger")
pickUpDagger.onclick = function() {
  hero.inventory.push({ type : 'dagger', damage : 2})
  return;
}

var equip = document.getElementById("bag")
equip.onclick = function() {
  hero.inventory[0];
  return
}

function rest(hero) {
  hero.health = 10;
  return hero;
  };

function pickUpItem(hero, object) {
  this.hero.inventory.push(this.hero.weapon);
  return;
};
pickUpItem();
console.log(hero.inventory);


function equipWeapon() {
};
//hero.inventory.push(this.hero.weapon);
//console.log(hero.inventory);
