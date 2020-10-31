import { default as Character } from './character/character.js';

var Model = {};
Model.Character = Character;

/** for test **/
Model.test = function() {
  console.log('hoge');
  var human = new Model.Character.Human();
  human.showStatus();
};

export default Model;

