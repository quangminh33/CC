function Elephant(x, y, player, isBlank) {
    var name = "E";
    Piece.call(this, name, x, y, player, isBlank);

    var kiX = [-1, -1, 1, 1];
    var kjX = [-1, 1, -1, 1];
    var ki = [-2, -2, 2, 2];
    var kj = [-2, 2, -2, 2];

    this.getMoves = function(a) {
        var result = [];
        for (var i = 0; i < 4; i++) {
            var x = this.getX() + kiX[i];
            var y = this.getY() + kjX[i];
            if (a[x] && a[x][y] && a[x][y].getPiece() === null) {
                x = this.getX() + ki[i];
                y = this.getY() + kj[i];
                if (a[x] && a[x][y]) {
                    var s = a[x][y];
                    if (s.getPiece() === null ||
                        s.getPiece().getPlayer() !== this.getPlayer()) {
                        result.push(s);
                    }
                }
            }
        }
        return result;
    };

}

Elephant.prototype = Object.create(Piece.prototype);
