import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

  this.status = 'dead';

}

Human.prototype = Object.create(AbstractCharacter, {
  showStatus: {
    value: function() {
      console.log('status is: ');
      AbstractCharacter.showStatus.apply(this, arguments);
    }
  }
});
Human.prototype.constructor = Human;

export default Human;

