import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

  AbstractCharacter.call(this);

  this.showStatus = function() {
    console.log('status is: ' + this.status);
  };

}

Human.prototype = AbstractCharacter.prototype;

export default Human;

