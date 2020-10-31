import { default as AbstractCharacter } from './../abstractCharacter.js';

function Human() {

  this.status = 'dead';

}

Human.prototype = Object.create(AbstractCharacter, {
  showStatus: {
    value: function() {
      console.log('status is: ');
      AbstractCharacter.showStatus();
    }
  }
});

export default Human;

