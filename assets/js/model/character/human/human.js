import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

  AbstractCharacter.call(this);

}

Human.prototype = AbstractCharacter.prototype;

Human.prototype.showStatus = function() {
  console.log('status is: ' + this.status);
};

export default Human;

