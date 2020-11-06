import { default as human } from './human.js';

function cleric() {

  this.name = 'そうりょ';
  this.gender = 2;
  this.length = 160;
  this.weight = 50;
  this.vitality = 20;
  this.magic = 70;

  this.healingMagic = function(target) {
    var output = '';
    output += this.name + ' は かいふくじゅもん を となえた！' + '\n';

    target.vitality += 20;
    output += target.name + ' の たいりょくは ' + target.vitality + ' になった' + '\n';

    this.magic -= 10;
    output += this.name + ' の まりょくは ' + this.magic + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

cleric.prototype = Object.create(human.prototype);
cleric.prototype.constructor = cleric;

export default cleric;

