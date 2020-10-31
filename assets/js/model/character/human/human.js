import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

  this.prototype = new AbstractCharacter();

}

export default Human;

