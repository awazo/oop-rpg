function AbstractCharacter() {

  this.status = 'none';

  this.showStatus = function() {
    console.log(this.status);
  };

}

export default as AbstractCharacter;

