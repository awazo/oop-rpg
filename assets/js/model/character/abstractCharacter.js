function AbstractCharacter() {}

AbstractCharacter.prototype = {

  status: 'none',

  showStatus: function() {
    console.log(this.status);
  }

};

export default AbstractCharacter;

