import { default as human } from './human.js';

function wizard() {

  this.name = 'まほうつかい';
  this.gender = 1;
  this.length = 170;
  this.weight = 60;
  this.vitality = 20;
  this.magic = 50;

  this.magicAttack = function(target) {
    var output = '';
    output += this.name + ' の こうげき' + '\n';
    output += this.name + ' は こうげきじゅもん を となえた！' + '\n';

    target.vitality -= 20;
    output += target.name + ' に 20 のダメージを あたえた' + '\n';

    this.magic -= 10;
    output += this.name + ' の まりょくは ' + this.magic + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

wizard.prototype = Object.create(human.prototype);
wizard.prototype.constructor = wizard;

export default wizard;

