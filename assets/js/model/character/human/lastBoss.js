import { default as human } from './human.js';

function lastBoss() {

  this.name = 'らすぼす';
  this.gender = 1;
  this.length = 210;
  this.weight = 120;
  this.vitality = 500;
  this.magic = 40;

  this.specialEvilAttack = function(target) {
    var output = '';
    output += this.name + ' の こうげき' + '\n';
    output += this.name + ' の じゃあくな ひっさつわざが さくれつした！' + '\n';

    target.vitality -= 30;
    output += target.name + ' は 30 のダメージを うけた' + '\n';

    this.vitality -= 10;
    output += this.name + ' の たいりょくは ' + this.vitality + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

lastBoss.prototype = Object.create(human.prototype);
lastBoss.prototype.constructor = lastBoss;

export default lastBoss;

