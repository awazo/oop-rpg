import { default as abstractCharacter } from './../abstractCharacter.js';

function human() {

  this.characterName = null;
  this.gender = 0;
  this.length = 0;
  this.weight = 0;
  this.vitality = 0;
  this.magic = 0;

  this.talk = function(about) {
    return about;
  };

  this.eatFood = function(food) {
    var foodType = 0;
    if (food == 'やくそう') {
      foodType = 1;
    } else if (food == 'まほうのみず') {
      foodType = 2;
    } else {
      foodType = 3;
    }
    this.digestFood(foodType);
  };

  this.digestFood = function(foodType) {
    if (foodType == 1) {
      vitality += 10;
    } else if (foodType == 2) {
      magic += 10;
    } else {
      vitality += 1;
    }
  };

}

human.prototype = Object.create(abstractCharacter);
human.prototype.constructor = human;

export default human;

