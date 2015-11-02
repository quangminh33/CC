function Horse(x, y, player, isBlank) {
    var name = "H";
    Piece.call(this, name, x, y, player, isBlank);

    var kiX = [-1, 0, 1, 0];
    var kjX = [0, 1, 0, -1];
    var ki = [-2, -2, -1, 1, 2, 2, -1, 1];
    var kj = [-1, 1, 2, 2, -1, 1, -2, -2];

    this.getMoves = function(a) {
         var result = [];
         for (var  i = 0; i < 4; i++) {
             var x = this.getX() + kiX[i];
             var y = this.getY() + kjX[i];
             if (a[x] && a[x][y] && a[x][y].getPiece() === null) {
                 for (var j = i * 2; j <= i * 2 + 1; j++) {
                     x = this.getX() + ki[j];
                     y = this.getY() + kj[j];
                     if (a[x] && a[x][y] ) {
                         var s = a[x][y];
                         if (s.getPiece() === null ||
                             s.getPiece().getPlayer() !== this.getPlayer()) {
                             result.push(s);
                         }
                     }
                 }
             }
         }
         return result;
    };

}

Horse.prototype = Object.create(Piece.prototype);
