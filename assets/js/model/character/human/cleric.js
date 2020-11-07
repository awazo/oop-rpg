import { default as human } from './human.js';

function cleric() {

  this.characterName = 'そうりょ';
  this.gender = 2;
  this.height = 160;
  this.weight = 50;
  this.vitality = 20;
  this.magic = 70;

  this.healingMagic = function(target) {
    var output = '';
    output += this.characterName + ' は かいふくじゅもん を となえた！' + '\n';

    target.vitality += 20;
    output += target.characterName + ' の たいりょくは ' + target.vitality + ' になった' + '\n';

    this.magic -= 10;
    output += this.characterName + ' の まりょくは ' + this.magic + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

cleric.prototype = Object.create(human.prototype);
cleric.prototype.constructor = cleric;

export default cleric;

