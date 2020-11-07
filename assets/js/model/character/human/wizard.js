import { default as human } from './human.js';

function wizard() {

  human.call(this);

  this.characterName = 'まほうつかい';
  this.gender = 1;
  this.height = 170;
  this.weight = 60;
  this.vitality = 20;
  this.magic = 50;

  this.magicAttack = function(target) {
    var output = '';
    output += this.characterName + ' の こうげき' + '\n';
    output += this.characterName + ' は こうげきじゅもん を となえた！' + '\n';

    target.vitality -= 20;
    output += target.characterName + ' に 20 のダメージを あたえた' + '\n';

    this.magic -= 10;
    output += this.characterName + ' の まりょくは ' + this.magic + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

wizard.prototype = Object.create(human.prototype);
wizard.prototype.constructor = wizard;

export default wizard;

