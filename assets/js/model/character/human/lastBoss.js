import { default as human } from './human.js';

function lastBoss() {

  this.characterName = 'らすぼす';
  this.gender = 1;
  this.length = 210;
  this.weight = 120;
  this.vitality = 500;
  this.magic = 40;

  this.specialEvilAttack = function(target) {
    var output = '';
    output += this.characterName + ' の こうげき' + '\n';
    output += this.characterName + ' の じゃあくな ひっさつわざが さくれつした！' + '\n';

    target.vitality -= 30;
    output += target.characterName + ' は 30 のダメージを うけた' + '\n';

    this.vitality -= 10;
    output += this.characterName + ' の たいりょくは ' + this.vitality + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

lastBoss.prototype = Object.create(human.prototype);
lastBoss.prototype.constructor = lastBoss;

export default lastBoss;

