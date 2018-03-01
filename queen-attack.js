var Queens = function (input) {
  if (input == null)
//  this.black = [7, 3];
{
      this.black = [7, 3];
      this.white = [0, 3];
}
else
{
  if ((input.black[0] === input.white[0]) && (input.black[1] === input.white[1]))
  {
    throw ("Queens cannot share the same space");
  }
  else
  {
    
    this.black = input.black;
    this.white = input.white;  
  }
}
};
Queens.prototype.toString = function() {
  var board = '';
  
  for (var i = 0; i < 8; i++) {
    var row = '';
    
    for (var j = 0; j < 8; j++) {
      if (this.white[0] === i && this.white[1] === j) {
        row += 'W';
      } else if (this.black[0] === i && this.black[1] === j) {
        row += 'B';
      } else {
        row += '_';
      }

      if (j < 7) {
        row += ' ';
      } 
      else if (j === 7) {
        row += "\n";
      }
    }
      board += row;
  }
  return board;
};
Queens.prototype.canAttack = function() {
  return this.white[0] === this.black[0] ||
         this.white[1] === this.black[1] ||
         Math.abs(this.white[0] - this.black[0]) ===
         Math.abs(this.white[1] - this.black[1]);
};
    module.exports = Queens;