import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

}

Human.prototype = new AbstractCharacter();

export default Human;

