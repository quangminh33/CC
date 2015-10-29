function Pawn(x, y, player) {
    Piece.call(this, "P", x, y, player);

    var ki = [-1, 0, 1, 0];
    var kj = [0, 1, 0, -1];

    this.getMoves = function(a) {
        var result = [];
        for (var i=0; i<4; i++) {
            var x = this.getX() + ki[i];
            var y = this.getY() + kj[i];
            if (a[x] && a[x][y] && a[x][y].isCastle()) {
                var s = a[x][y];
                if (s.getPiece() === null ||
                    s.getPiece().getPlayer() !== this.getPlayer()) {
                    result.push(s);
                }
            }
        }

        return result;
    };

    this.getName = function() {
        return "P";
    };
}

Pawn.prototype = Object.create(Piece.prototype);
