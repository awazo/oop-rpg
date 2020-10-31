import { default as Character } from './character/character.js';

var Model = {};
Model.Character = Character;

/** for test **/
Model.test = function() {
  console.log('hoge');
  var human = new Model.Character.Human();
  console.log(human);
  console.log(human.prototype);
  console.log(human.showStatus);
  console.log(human.prototype.showStatus);
  human.showStatus();
};

export default Model;

