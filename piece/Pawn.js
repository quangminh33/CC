function Pawn(x, y, player) {
    Piece.call(this, "P", x, y, player);
    var PLAYER1 = 0;
    var PLAYER2 = 1;

    var ki = [];
    ki[PLAYER1] = [1, 0, 0];
    ki[PLAYER2] = [-1, 0, 0];
    var kj = [0, -1, 1];

    this.getMoves = function(a) {
        var result = [];
        var x = this.getX();
        var y = this.getY();
        var n = a[x][y].getPlayer() != this.getPlayer() ? 3 : 1;
        for (var i=0; i<n; i++) {
            x = this.getX() + ki[this.getPlayer()][i];
            y = this.getY() + kj[i];
            if (a[x] && a[x][y]) {
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
