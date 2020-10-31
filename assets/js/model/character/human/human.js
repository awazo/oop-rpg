import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

  AbstractCharacter.call(this);

}

Human.prototype = AbstractCharacter.prototype;

export default Human;

