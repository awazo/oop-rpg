import { default as Character } from './character/character.js';
import { default as AbstractCharacter } from './character/abstractCharacter.js';

var Model = {};
Model.Character = Character;

/** for test **/
Model.test = function() {
  var human = new Model.Character.Human();
  human.showStatus();
  (new AbstractCharacter()).showStatus();
};

export default Model;

