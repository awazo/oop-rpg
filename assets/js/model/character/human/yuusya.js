import { default as human } from './human.js';

function yuusya() {

  human.call(this);

  this.characterName = 'ゆうしゃ';
  this.gender = 1;
  this.height = 180;
  this.weight = 70;
  this.vitality = 100;
  this.magic = 5;

  this.specialAttack = function(target) {
    this.vitality -= 20;
    var output = '';
    output += this.characterName + ' の こうげき' + '\n';
    output += this.characterName + ' の ひっさつわざが さくれつした！' + '\n';

    target.vitality -= 50;
    output += target.characterName + ' に 50 のダメージを あたえた' + '\n';

    this.vitality -= 10;
    output += this.characterName + ' の たいりょくは ' + this.vitality + ' になった' + '\n';
    output += '\n';
    return output;
  };

}

yuusya.prototype = Object.create(human.prototype);
yuusya.prototype.constructor = yuusya;

export default yuusya;

