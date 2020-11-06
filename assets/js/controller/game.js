function game() {

  this.start = function(model) {
    var human = model.character.human;
    var yuusya = new human.yuusya();
    var wizard = new human.wizard();
    var cleric = new human.cleric();
    var lastBoss = new human.lastBoss();

    var output = '';
    output += lastBoss.name + ' が あらわれた！' + '\n';

    output += yuusya.specialAttack(lastBoss) + '\n';
    output += wizard.magicAttack(lastBoss) + '\n';
    output += lastBoss.specialEvilAttack(yuusya) + '\n';
    output += cleric.healingMagic(yuusya) + '\n';

    output += yuusya.name + ' は やくそう をつかった' + '\n';
    yuusya.eatFood('やくそう');
    output += wizard.name + ' は まほうのみず をつかった' + '\n';
    wizard.eatFood('まほうのみず');
    output += '\n';

    output += this.showStatus(yuusya) + '\n';
    output += this.showStatus(wizard) + '\n';
    output += this.showStatus(cleric) + '\n';
    output += this.showStatus(lastBoss) + '\n';

    console.log(output);
  };

  this.showStatus = function(target) {
    var output = '';
    output += '- ' + target.name + ' の ステータス ---' + '\n';
    if (target.gender == 1) {
      output += 'せいべつ : 男' + '\n';
    } else {
      output += 'せいべつ : 女' + '\n';
    }
    output += 'しんちょう : ' + target.length + '\n';
    output += 'たいじゅう : ' + target.weight + '\n';
    output += 'たいりょく : ' + target.vitality + '\n';
    output += 'まりょく : ' + target.magic + '\n';
    output += '\n';
    return output;
  };

}

export default game;

