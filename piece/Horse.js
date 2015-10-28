function Horse(x, y) {
    Piece.call(this, "assets/HB.png", x, y);

    var kiX = [-1, 0, 1, 0];
    var kjX = [0, 1, 0, -1];
    var ki = [-2, -2, -1, 1, 2, 2, -1, 1];
    var kj = [-1, 1, 2, 2, -1, 1, -2, -2];

    this.getMoves = function(a) {
         var result = [];
         for (var  i = 0; i < 4; i++) {
             var x = this.getX() + kiX[i];
             var y = this.getY() + kjX[i];
             if (a[x] && a[x][y] === null) {
                 for (var j = i * 2; j <= i * 2 + 1; j++) {
                     x = this.getX() + ki[j];
                     y = this.getY() + kj[j];
                     if (a[x] && a[x][y] === null) {
                         result.push({
                             x: x,
                             y: y
                         });
                     }
                 }
             }
         }
         return result;
    };

    this.getName = function() {
        return "H";
    };
}

Horse.prototype = Object.create(Piece.prototype);
Horse.prototype.constructor = Horse;