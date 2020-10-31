import { default as Character } from './character/character.js';

var Model = {};
Model.Character = Character;

/** for test **/
Model.test = function() {
  console.log('hoge');
  (new Model.Character.Human()).showStatus();
};

export default Model;

